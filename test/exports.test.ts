/*import { describe, expect, it } from "vitest";
import * as allExports from "../src/index.js";

const expectedExports = [
	"yesterday",
	"previousDay",
	"today",
	"tomorrow",
	"nextDay",

	"previousDayOfWeekISO",
	"previousOrSameDayOfWeekISO",
	"nextDayOfWeekISO",
	"nextOrSameDayOfWeekISO",
	"previousMonday",
	"previousTuesday",
	"previousWednesday",
	"previousThursday",
	"previousFriday",
	"previousSaturday",
	"previousSunday",
	"nextMonday",
	"nextTuesday",
	"nextWednesday",
	"nextThursday",
	"nextFriday",
	"nextSaturday",
	"nextSunday",

	"previousMonthISO",
	"previousJanuary",

	"isYesterday",
	"isToday",
	"isTomorrow",
	"isDayOfWeekISO",
	"isMonday",
	"isTuesday",
	"isWednesday",
	"isThursday",
	"isFriday",
	"isSaturday",
	"isSunday",
	"isWeekday",
	"isWeekend",
	"isFirstDayOfWeek",
	"isFirstDayOfMonth",
	"isFirstDayOfYear",
	"isLastDayOfWeek",
	"isLastDayOfMonth",
	"isLastDayOfYear",
	"isInFirstWeekOfMonth",
	"isInFirstFullWeekOfMonth",
];

describe("Library Exports", () => {
	it("should export all expected functions", () => {
		expectedExports.forEach((funcName) => {
			expect(
				typeof (allExports as never)[funcName],
				`${funcName} missing`,
			).toBe("function");
		});
	});

	it("should not export unexpected functions", () => {
		const exportedFunctions = Object.keys(allExports);
		exportedFunctions.forEach((funcName) => {
			expect(expectedExports).toContain(funcName);
		});
	});
});
*/
