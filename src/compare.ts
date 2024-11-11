import { today, tomorrow, yesterday } from "./navigate.js";
import { CalendarDate } from "./types.js";

export function isYesterday(
	date: CalendarDate | string,
	timeZone?: Temporal.TimeZone | string,
) {
	return Temporal.PlainDate.compare(date, yesterday(timeZone)) === 0;
}

export function isToday(
	date: CalendarDate | string,
	timeZone?: Temporal.TimeZone | string,
) {
	return Temporal.PlainDate.compare(date, today(timeZone)) === 0;
}

export function isTomorrow(
	date: CalendarDate | string,
	timeZone?: Temporal.TimeZone | string,
) {
	return Temporal.PlainDate.compare(date, tomorrow(timeZone)) === 0;
}

/**
 * Get dayOfWeek for Gregorian based calendars for use by the
 * isMonday/isTuesday/... functions.
 *
 * @param date
 * @param dayOfWeek number indicating day of week (1–7)
 * @returns true if provided date's day of week matches the provided
 */
export function isDayOfWeekISO(date: CalendarDate | string, dayOfWeek: number) {
	const plainDate = Temporal.PlainDate.from(date).withCalendar("iso8601");
	return plainDate.dayOfWeek === dayOfWeek;
}

export const isMonday = (date: CalendarDate | string) =>
	isDayOfWeekISO(date, 1);
export const isTuesday = (date: CalendarDate | string) =>
	isDayOfWeekISO(date, 2);
export const isWednesday = (date: CalendarDate | string) =>
	isDayOfWeekISO(date, 3);
export const isThursday = (date: CalendarDate | string) =>
	isDayOfWeekISO(date, 4);
export const isFriday = (date: CalendarDate | string) =>
	isDayOfWeekISO(date, 5);
export const isSaturday = (date: CalendarDate | string) =>
	isDayOfWeekISO(date, 6);
export const isSunday = (date: CalendarDate | string) =>
	isDayOfWeekISO(date, 7);
export const isWeekday = (date: CalendarDate | string) =>
	isDayOfWeekISO(date, 1) ||
	isDayOfWeekISO(date, 2) ||
	isDayOfWeekISO(date, 3) ||
	isDayOfWeekISO(date, 4) ||
	isDayOfWeekISO(date, 5);
export const isWeekend = (date: CalendarDate | string) =>
	isDayOfWeekISO(date, 5) || isDayOfWeekISO(date, 6);

/**
 * Checks if given date is first day of week. Note that for ISO
 * and Gregory calendars, Temporal always treats Mondays as the
 * first day of week.
 *
 * @param date
 * @returns true if is first day of week and false otherwise
 */
export function isFirstDayOfWeek(date: CalendarDate | string) {
	const plainDate = Temporal.PlainDate.from(date);
	return plainDate.dayOfWeek === 1;
}

export function isFirstDayOfMonth(date: CalendarDate | string) {
	const plainDate = Temporal.PlainDate.from(date);
	return plainDate.day === 1;
}

export function isFirstDayOfYear(date: CalendarDate | string) {
	const plainDate = Temporal.PlainDate.from(date);
	return plainDate.dayOfYear === 1;
}

export function isLastDayOfWeek(date: CalendarDate | string) {
	const plainDate = Temporal.PlainDate.from(date);
	return plainDate.dayOfWeek === plainDate.daysInWeek;
}

export function isLastDayOfMonth(date: CalendarDate | string) {
	const plainDate = Temporal.PlainDate.from(date);
	return plainDate.day === plainDate.daysInMonth;
}

export function isLastDayOfYear(date: CalendarDate | string) {
	const plainDate = Temporal.PlainDate.from(date);
	return plainDate.dayOfYear === plainDate.daysInYear;
}

export function isInFirstWeekOfMonth(date: CalendarDate | string) {
	const plainDate = Temporal.PlainDate.from(date);
	const firstDayOfMonth = plainDate.with({ day: 1 });
	return plainDate.weekOfYear === firstDayOfMonth.weekOfYear;
}

export function isInFirstFullWeekOfMonth(date: CalendarDate | string) {
	const plainDate = Temporal.PlainDate.from(date);
	const firstDayOfMonth = plainDate.with({ day: 1 });
	const firstStartOfWeekInMonth = firstDayOfMonth.add({
		days:
			(1 - firstDayOfMonth.dayOfWeek + firstDayOfMonth.daysInWeek) %
			firstDayOfMonth.daysInWeek,
	});

	return plainDate.weekOfYear === firstStartOfWeekInMonth.weekOfYear;
}

// TODO: function isInFirstWeekOfYear()
// TODO: function isInFirstFullWeekOfYear()
// TODO: function isInLastWeekOfMonth()
// TODO: function isInLastFullWeekOfMonth()
// TODO: function isInLastWeekOfYear()
// TODO: function isInLastFullWeekOfYear()

// TODO: function isFirstWeekdayOfWeek()
// TODO: function isFirstWeekdayOfMonth()
// TODO: function isFirstWeekdayOfYear()
// TODO: function isLastWeekdayOfWeek()
// TODO: function isLastWeekdayOfMonth()
// TODO: function isLastWeekdayOfYear()

// TODO: function isInFirstWeekendOfMonth()
// TODO: function isInFirstFullWeekendOfMonth()
// TODO: function isInFirstWeekendOfYear()
// TODO: function isInFirstFullWeekendOfYear()
// TODO: function isInLastWeekendOfMonth()
// TODO: function isInLastFullWeekendOfMonth()
// TODO: function isInLastWeekendOfYear()
// TODO: function isInLastFullWeekendOfYear()

// TODO: isInFirstMonthOfYear()
// TODO: isInFirstFullMonthOfYear()
// TODO: isInLastMonthOfYear()
// TODO: isInLastFullMonthOfYear()

// TODO: is[-/In][First/Last][Day/WeekOfYear/Weekday/Weekend/Month/Year]Of[Quarter/Tertile/Decade/Century/Era]

// TODO: isSame[Microsecond/Millisecond/Second/Minute/Hour](time1, time2)
// TODO: isSameDay(date1, date2)
// TODO: isInSame[WeekOfYear/Weekend/Month/Quarter/Tertile/Year/Decade/Century/Era](date1, date2)
