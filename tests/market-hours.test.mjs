import test from "node:test";
import assert from "node:assert/strict";
import { isMarketOpenAt } from "../frontend/market-hours.mjs";

const at = (iso) => new Date(iso);

test("opens at 09:30 Eastern on weekdays", () => {
    assert.equal(isMarketOpenAt(at("2026-11-23T14:30:00Z")), true);
});

test("rejects the minute before opening", () => {
    assert.equal(isMarketOpenAt(at("2026-11-23T14:29:00Z")), false);
});

test("includes 15:59 Eastern and closes at 16:00", () => {
    assert.equal(isMarketOpenAt(at("2026-11-23T20:59:00Z")), true);
    assert.equal(isMarketOpenAt(at("2026-11-23T21:00:00Z")), false);
});

test("closes on weekends regardless of local time", () => {
    assert.equal(isMarketOpenAt(at("2026-11-21T15:00:00Z")), false);
    assert.equal(isMarketOpenAt(at("2026-11-22T15:00:00Z")), false);
});

test("uses daylight-saving time for summer opening and closing", () => {
    assert.equal(isMarketOpenAt(at("2026-06-15T13:30:00Z")), true);
    assert.equal(isMarketOpenAt(at("2026-06-15T13:29:00Z")), false);
    assert.equal(isMarketOpenAt(at("2026-06-15T19:59:00Z")), true);
    assert.equal(isMarketOpenAt(at("2026-06-15T20:00:00Z")), false);
});

test("invalid date values are safely closed", () => {
    assert.equal(isMarketOpenAt(new Date("invalid")), false);
    assert.equal(isMarketOpenAt(null), false);
    assert.equal(isMarketOpenAt("2026-11-23T14:30:00Z"), false);
});
