const MARKET_TIME_ZONE = "America/New_York";
const MARKET_OPEN_MINUTES = 9 * 60 + 30;
const MARKET_CLOSE_MINUTES = 16 * 60;

const marketTimeFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: MARKET_TIME_ZONE,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
});

/** Return true during regular US equity hours (weekdays, 09:30–16:00 ET). */
export function isMarketOpenAt(date) {
    if (!(date instanceof Date) || Number.isNaN(date.getTime())) return false;

    const parts = Object.fromEntries(
        marketTimeFormatter.formatToParts(date).map(({ type, value }) => [type, value]),
    );
    if (parts.weekday === "Sat" || parts.weekday === "Sun") return false;

    const minuteOfDay = Number(parts.hour) * 60 + Number(parts.minute);
    return minuteOfDay >= MARKET_OPEN_MINUTES && minuteOfDay < MARKET_CLOSE_MINUTES;
}
