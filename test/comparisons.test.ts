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
	it("returns true for evening Stockholm compared with Singapore time", () => {
		const stockholmTime = Temporal.Now.zonedDateTimeISO(
			"Europe/Stockholm",
		).with({ hour: 21 });

		expect(isYesterday(stockholmTime, "Asia/Singapore")).toBe(true);
	});
});

describe("isToday", () => {
	it("should accept an ISO date string", () => {
		expect(() => isToday("2024-11-09")).not.toThrowError();
	});

	it("should accept an ISO date and time string", () => {
		expect(() => isToday("2006-08-24T15:43:27+01:00[Europe/Brussels]")).not.toThrowError();
	});

	it("should not accept a malformed ISO date string", () => {
		expect(() => isToday("2024/11-09")).toThrowError();
	});

	it("should not accept a date without year", () => {
		const plainMonth = Temporal.Now.plainDateISO().toPlainMonthDay();
		expect(() => isToday(plainMonth)).toThrowError();
	});

	it("returns true for same day with unspecified timezone", () => {
		const nowDate = new Date().toISOString().substring(0, 19);
		expect(isToday(nowDate)).toBe(true);
	});

	it("returns false for evening Stockholm compared with Singapore time", () => {
		const stockholmTime = Temporal.Now.zonedDateTimeISO(
			"Europe/Stockholm",
		).with({ hour: 21 });

		expect(isToday(stockholmTime, "Asia/Singapore")).toBe(false);
	});
});

describe("isTomorrow", () => {
	it("returns true for morning Singapore time compared with evening Stockholm time", () => {
		const singaporeTime = Temporal.Now.zonedDateTimeISO("Asia/Singapore").with({
			hour: 3,
		});

		expect(isTomorrow(singaporeTime, "Europe/Stockholm")).toBe(true);
	});
});

describe("isMonday", () => {
	it("returns true for a Monday date", () => {
		const mondayDate = Temporal.PlainDate.from("2024-11-04"); // This is a Monday
		expect(isMonday(mondayDate)).toBe(true);
	});

	it("returns false for a non-Monday date", () => {
		const sundayDate = Temporal.PlainDate.from("2024-11-03"); // This is a Sunday
		expect(isMonday(sundayDate)).toBe(false);
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
