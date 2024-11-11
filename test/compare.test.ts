import { describe, it, expect } from "vitest";
import {
	isFriday,
	isMonday,
	isSaturday,
	isSunday,
	isThursday,
	isToday,
	isTomorrow,
	isTuesday,
	isWednesday,
	isYesterday,
} from "../src/index.js";

describe("isYesterday", () => {
	it("returns true for yesterday's PlainDate", () => {
		const yesterday = Temporal.Now.plainDateISO().add({ hours: -24 });
		expect(isYesterday(yesterday)).toBeTruthy();
	});
});

describe("isToday", () => {
	it("should accept an ISO date string", () => {
		expect(() => isToday("2024-11-09")).not.toThrowError();
	});

	it("should accept an ISO date and time string", () => {
		expect(() =>
			isToday("2006-08-24T15:43:27+01:00[Europe/Brussels]"),
		).not.toThrowError();
	});

	it("should not accept a malformed ISO date string", () => {
		expect(() => isToday("2024/11-09")).toThrowError();
	});

	it("should accept a Temporal.PlainDate object", () => {
		const plainDate = Temporal.Now.plainDateISO();
		expect(() => isToday(plainDate)).not.toThrowError();
	});

	it("should accept a Temporal.ZonedDateTime object", () => {
		const zonedDateTime = Temporal.Now.zonedDateTimeISO();
		expect(() => isToday(zonedDateTime)).not.toThrowError();
	});

	it("should not accept a Temporal.PlainMonth object", () => {
		const plainMonth = Temporal.Now.plainDateISO().toPlainMonthDay();
		// @ts-expect-error: Test designed to catch wrong type input
		expect(() => isToday(plainMonth)).toThrowError();
	});

	it("returns true for today's PlainDate", () => {
		const today = Temporal.Now.plainDateISO();
		expect(isToday(today)).toBeTruthy();
	});

	it("returns true for same day from JS Date with unspecified timezone", () => {
		const nowDate = new Date().toISOString().substring(0, 19);
		expect(isToday(nowDate)).toBe(true);
	});
});

describe("isTomorrow", () => {
	it("returns true for tomorrow's PlainDate", () => {
		const tomorrow = Temporal.Now.plainDateISO().add({ hours: 24 });
		expect(isTomorrow(tomorrow)).toBeTruthy();
	});
});

describe("isMonday", () => {
	it("returns true for a Monday ISO date", () => {
		const mondayDate = Temporal.PlainDate.from("2024-11-04"); // This is a Monday
		expect(isMonday(mondayDate)).toBe(true);
	});

	it("returns false for a non-Monday date", () => {
		const sundayDate = Temporal.PlainDate.from("2024-11-03"); // This is a Sunday
		expect(isMonday(sundayDate)).toBe(false);
	});

	it("returns true for a Monday gregorian string date", () => {
		const mondayDate = Temporal.PlainDate.from("2024-11-04")
			.withCalendar("gregory")
			.toString(); // This is a Monday
		expect(isMonday(mondayDate)).toBe(true);
	});
});

describe("isTuesday", () => {
	it("returns true for a Tuesday date", () => {
		const tuesdayDate = Temporal.PlainDate.from("2024-11-19"); // This is a Tuesday
		expect(isTuesday(tuesdayDate)).toBe(true);
	});

	it("returns false for a non-Monday date", () => {
		const sundayDate = Temporal.PlainDate.from("2024-11-03"); // This is a Sunday
		expect(isTuesday(sundayDate)).toBe(false);
	});
});

describe("isWednesday", () => {
	it("returns true for a Wednesday date", () => {
		const wednesdayDate = Temporal.PlainDate.from("2024-11-06"); // This is a Wednesday
		expect(isWednesday(wednesdayDate)).toBe(true);
	});

	it("returns false for a non-Monday date", () => {
		const sundayDate = Temporal.PlainDate.from("2024-11-03"); // This is a Sunday
		expect(isWednesday(sundayDate)).toBe(false);
	});
});

describe("isThursday", () => {
	it("returns true for a Thursday date", () => {
		const thursdayDate = Temporal.PlainDate.from("2024-11-07"); // This is a Thursday
		expect(isThursday(thursdayDate)).toBe(true);
	});

	it("returns false for a non-Monday date", () => {
		const sundayDate = Temporal.PlainDate.from("2024-11-03"); // This is a Sunday
		expect(isThursday(sundayDate)).toBe(false);
	});
});

describe("isFriday", () => {
	it("returns true for a Friday date", () => {
		const fridayDate = Temporal.PlainDate.from("2024-11-08"); // This is a Friday
		expect(isFriday(fridayDate)).toBe(true);
	});

	it("returns false for a non-Monday date", () => {
		const sundayDate = Temporal.PlainDate.from("2024-11-03"); // This is a Sunday
		expect(isFriday(sundayDate)).toBe(false);
	});
});

describe("isSaturday", () => {
	it("returns true for a Saturday date", () => {
		const saturdayDate = Temporal.PlainDate.from("2024-11-09"); // This is a Saturday
		expect(isSaturday(saturdayDate)).toBe(true);
	});

	it("returns false for a non-Monday date", () => {
		const sundayDate = Temporal.PlainDate.from("2024-11-03"); // This is a Sunday
		expect(isSaturday(sundayDate)).toBe(false);
	});
});

describe("isSunday", () => {
	it("returns true for a Sunday date", () => {
		const sundayDate = Temporal.PlainDate.from("2024-11-03"); // This is a Sunday
		expect(isSunday(sundayDate)).toBe(true);
	});

	it("returns false for a non-Monday date", () => {
		const mondayDate = Temporal.PlainDate.from("2024-11-04"); // This is a Monday
		expect(isSunday(mondayDate)).toBe(false);
	});
});
