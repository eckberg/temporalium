import { describe, expect, it } from "vitest";
import { max, min, unique } from "../src/index.js";

describe("min", () => {
	it("throw for mixed temporals", () => {
		const first = Temporal.Now.instant();
		const mid = Temporal.Now.plainDateISO().add({ hours: 12 });
		const last = Temporal.Now.instant().add({ hours: 24 });
		expect(() => min([mid, first, last])).toThrowError();
	});

	it("returns smallest Temporal.Instant", () => {
		const first = Temporal.Now.instant();
		const mid = Temporal.Now.instant().add({ hours: 12 });
		const last = Temporal.Now.instant().add({ hours: 24 });
		expect(min([mid, first, last])).toBe(first);
		expect(min([mid, first, last])).not.toBe(mid);
		expect(min([mid, first, last])).not.toBe(last);
	});

	it("returns smallest Temporal.ZonedDateTime", () => {
		const first = Temporal.Now.zonedDateTimeISO();
		const mid = Temporal.Now.zonedDateTimeISO().add({ hours: 12 });
		const last = Temporal.Now.zonedDateTimeISO().add({ hours: 24 });
		expect(min([mid, first, last])).toBe(first);
		expect(min([mid, first, last])).not.toBe(mid);
		expect(min([mid, first, last])).not.toBe(last);
	});

	it("returns smallest Temporal.PlainDate", () => {
		const first = Temporal.Now.plainDateISO();
		const mid = Temporal.Now.plainDateISO().add({ days: 12 });
		const last = Temporal.Now.plainDateISO().add({ days: 24 });
		expect(min([mid, first, last])).toBe(first);
		expect(min([mid, first, last])).not.toBe(mid);
		expect(min([mid, first, last])).not.toBe(last);
	});

	it("returns smallest Temporal.PlainTime", () => {
		const first = Temporal.Now.plainTimeISO().with({ hour: 2 });
		const mid = Temporal.Now.plainTimeISO().with({ hour: 12 });
		const last = Temporal.Now.plainTimeISO().with({ hour: 22 });
		expect(min([mid, first, last])).toBe(first);
		expect(min([mid, first, last])).not.toBe(mid);
		expect(min([mid, first, last])).not.toBe(last);
	});

	it("returns smallest Temporal.PlainYearMonth", () => {
		const first = Temporal.Now.plainDateISO().toPlainYearMonth();
		const mid = Temporal.Now.plainDateISO()
			.toPlainYearMonth()
			.add({ months: 2 });
		const last = Temporal.Now.plainDateISO()
			.toPlainYearMonth()
			.add({ months: 4 });
		expect(min([mid, first, last])).toBe(first);
		expect(min([mid, first, last])).not.toBe(mid);
		expect(min([mid, first, last])).not.toBe(last);
	});
});

describe("max", () => {
	it("throw for mixed temporals", () => {
		const first = Temporal.Now.instant();
		const mid = Temporal.Now.plainDateISO().add({ hours: 12 });
		const last = Temporal.Now.instant().add({ hours: 24 });
		expect(() => max([mid, first, last])).toThrowError();
	});

	it("returns largest Temporal.Instant", () => {
		const first = Temporal.Now.instant();
		const mid = Temporal.Now.instant().add({ hours: 12 });
		const last = Temporal.Now.instant().add({ hours: 24 });
		expect(max([mid, first, last])).toBe(last);
		expect(max([mid, first, last])).not.toBe(mid);
		expect(max([mid, first, last])).not.toBe(first);
	});

	it("returns largest Temporal.ZonedDateTime", () => {
		const first = Temporal.Now.zonedDateTimeISO();
		const mid = Temporal.Now.zonedDateTimeISO().add({ hours: 12 });
		const last = Temporal.Now.zonedDateTimeISO().add({ hours: 24 });
		expect(max([mid, first, last])).toBe(last);
		expect(max([mid, first, last])).not.toBe(mid);
		expect(max([mid, first, last])).not.toBe(first);
	});

	it("returns largest Temporal.PlainDate", () => {
		const first = Temporal.Now.plainDateISO();
		const mid = Temporal.Now.plainDateISO().add({ days: 12 });
		const last = Temporal.Now.plainDateISO().add({ days: 24 });
		expect(max([mid, first, last])).toBe(last);
		expect(max([mid, first, last])).not.toBe(mid);
		expect(max([mid, first, last])).not.toBe(first);
	});

	it("returns largest Temporal.PlainTime", () => {
		const first = Temporal.Now.plainTimeISO().with({ hour: 2 });
		const mid = Temporal.Now.plainTimeISO().with({ hour: 12 });
		const last = Temporal.Now.plainTimeISO().with({ hour: 22 });
		expect(max([mid, first, last])).toBe(last);
		expect(max([mid, first, last])).not.toBe(mid);
		expect(max([mid, first, last])).not.toBe(first);
	});

	it("returns largest Temporal.PlainYearMonth", () => {
		const first = Temporal.Now.plainDateISO().toPlainYearMonth();
		const mid = Temporal.Now.plainDateISO()
			.toPlainYearMonth()
			.add({ months: 2 });
		const last = Temporal.Now.plainDateISO()
			.toPlainYearMonth()
			.add({ months: 4 });
		expect(max([mid, first, last])).toBe(last);
		expect(max([mid, first, last])).not.toBe(mid);
		expect(max([mid, first, last])).not.toBe(first);
	});
});

describe("unique", () => {
	it("throw for mixed temporals", () => {
		const a = Temporal.Now.instant();
		const b = Temporal.Now.plainDateISO().add({ hours: 12 });
		const c = Temporal.Now.instant().add({ hours: 24 });
		const d = Temporal.Now.instant();

		expect(() => unique([a, b, c, d])).toThrowError();
	});

	it("removes duplicates for Temporal.Instant", () => {
		const a = Temporal.Now.instant();
		const b = Temporal.Now.instant().add({ hours: 12 });
		const c = Temporal.Now.instant();

		expect(unique([a, b, c])).toEqual([a, b]);
		expect(unique([a, b, c])).not.toEqual([a, b, c]);
		expect(unique([a, b, c])).not.toEqual([b]);
	});

	it("removes duplicates for Temporal.ZonedDateTime", () => {
		const a = Temporal.Now.zonedDateTimeISO();
		const b = Temporal.Now.zonedDateTimeISO().add({ days: 12 });
		const c = Temporal.Now.zonedDateTimeISO();

		expect(unique([a, b, c])).toEqual([a, b]);
		expect(unique([a, b, c])).not.toEqual([a, b, c]);
		expect(unique([a, b, c])).not.toEqual([b]);
	});

	it("removes duplicates for Temporal.PlainDate", () => {
		const a = Temporal.Now.plainDateISO();
		const b = Temporal.Now.plainDateISO().add({ days: 12 });
		const c = Temporal.Now.plainDateISO();

		expect(unique([a, b, c])).toEqual([a, b]);
		expect(unique([a, b, c])).not.toEqual([a, b, c]);
		expect(unique([a, b, c])).not.toEqual([b]);
	});

	it("removes duplicates for Temporal.PlainTime", () => {
		const a = Temporal.Now.plainTimeISO();
		const b = Temporal.Now.plainTimeISO().add({ hours: 12 });
		const c = Temporal.Now.plainTimeISO();

		expect(unique([a, b, c])).toEqual([a, b]);
		expect(unique([a, b, c])).not.toEqual([a, b, c]);
		expect(unique([a, b, c])).not.toEqual([b]);
	});

	it("removes duplicates for Temporal.PlainYearMonth", () => {
		const a = Temporal.Now.plainDateISO().toPlainYearMonth();
		const b = Temporal.Now.plainDateISO().toPlainYearMonth().add({ months: 2 });
		const c = Temporal.Now.plainDateISO().toPlainYearMonth();

		expect(unique([a, b, c])).toEqual([a, b]);
		expect(unique([a, b, c])).not.toEqual([a, b, c]);
		expect(unique([a, b, c])).not.toEqual([b]);
	});
});
