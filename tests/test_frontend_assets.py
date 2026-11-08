"""Regression checks for the static frontend's local asset references."""

from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import unittest

ROOT = Path(__file__).resolve().parents[1]
FRONTEND = ROOT / "frontend"
INDEX = FRONTEND / "index.html"


class AssetParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stylesheets = []
        self.scripts = []

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        if tag == "script" and attributes.get("src"):
            self.scripts.append(attributes["src"])
        elif (
            tag == "link"
            and "stylesheet" in attributes.get("rel", "").lower().split()
            and attributes.get("href")
        ):
            self.stylesheets.append(attributes["href"])


class FrontendAssetTests(unittest.TestCase):
    def test_frontend_entrypoint_exists(self):
        self.assertTrue(INDEX.is_file(), "frontend/index.html must exist")

    def test_local_stylesheets_and_scripts_resolve(self):
        parser = AssetParser()
        parser.feed(INDEX.read_text(encoding="utf-8"))

        self.assertTrue(parser.stylesheets, "index.html must reference a stylesheet")
        self.assertTrue(parser.scripts, "index.html must reference a script")

        for asset in parser.stylesheets + parser.scripts:
            with self.subTest(asset=asset):
                parsed = urlsplit(asset)
                if parsed.scheme or asset.startswith("//"):
                    continue
                self.assertTrue(parsed.path, f"Asset reference has no path: {asset}")
                self.assertFalse(
                    parsed.path.startswith("/"),
                    f"Use relative paths for GitHub project Pages: {asset}",
                )
                resolved = (FRONTEND / unquote(parsed.path)).resolve()
                self.assertTrue(
                    resolved.is_relative_to(FRONTEND.resolve()),
                    f"Asset path escapes frontend directory: {asset}",
                )
                self.assertTrue(resolved.is_file(), f"Missing referenced asset: {asset}")


if __name__ == "__main__":
    unittest.main()
