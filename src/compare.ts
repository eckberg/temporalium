import { ISO_GREGORIAN_CALENDARS } from "./constants.js";

/**
 * Compares a provided date with current system time.
 *
 * If a time zone is provided, it will compare the provided date with
 * today's date in that timezone. In other words, is my provided date
 * right now the preceeding day from the perspective of the specified
 * time zone?
 *
 * Accepts a Temporal object from which today's date can be derived,
 * meaning in practice that it must have a year, month and day value.
 * To facilitate additional usage, it is however also possible to
 * provide a string which could be parsed by Temporal.PlainDate.from(date).
 *
 * @param date
 * @param timeZone
 * @returns true if provided date is yesterday
 */
export function isYesterday(
	date:
		| Temporal.PlainDate
		| Temporal.PlainDateTime
		| Temporal.ZonedDateTime
		| string,
	timeZone?: Temporal.TimeZone | string,
) {
	const yesterdayIso = Temporal.Now.plainDateISO(timeZone).add({ days: -1 });
	return Temporal.PlainDate.compare(date, yesterdayIso) === 0;
}

export function isToday(
	date:
		| Temporal.PlainDate
		| Temporal.PlainDateTime
		| Temporal.ZonedDateTime
		| string,
	timeZone?: Temporal.TimeZone | string,
) {
	const todayIso = Temporal.Now.plainDateISO(timeZone);
	return Temporal.PlainDate.compare(date, todayIso) === 0;
}

export function isTomorrow(
	date:
		| Temporal.PlainDate
		| Temporal.PlainDateTime
		| Temporal.ZonedDateTime
		| string,
	timeZone?: Temporal.TimeZone | string,
) {
	const tomorrowIso = Temporal.Now.plainDateISO(timeZone).add({ days: 1 });
	return Temporal.PlainDate.compare(date, tomorrowIso) === 0;
}

export function isMonday(
	date:
		| Temporal.PlainDate
		| Temporal.PlainDateTime
		| Temporal.ZonedDateTime
		| string,
) {
	const plainDate = Temporal.PlainDate.from(date);
	return plainDate.dayOfWeek === 1;
}

export function isTuesday(
	date:
		| Temporal.PlainDate
		| Temporal.PlainDateTime
		| Temporal.ZonedDateTime
		| string,
) {
	const plainDate = Temporal.PlainDate.from(date);
	return plainDate.dayOfWeek === 2;
}

export function isWednesday(
	date:
		| Temporal.PlainDate
		| Temporal.PlainDateTime
		| Temporal.ZonedDateTime
		| string,
) {
	const plainDate = Temporal.PlainDate.from(date);
	return plainDate.dayOfWeek === 3;
}

export function isThursday(
	date:
		| Temporal.PlainDate
		| Temporal.PlainDateTime
		| Temporal.ZonedDateTime
		| string,
) {
	const plainDate = Temporal.PlainDate.from(date);
	return plainDate.dayOfWeek === 4;
}

export function isFriday(
	date:
		| Temporal.PlainDate
		| Temporal.PlainDateTime
		| Temporal.ZonedDateTime
		| string,
) {
	const plainDate = Temporal.PlainDate.from(date);
	return plainDate.dayOfWeek === 5;
}

export function isSaturday(
	date:
		| Temporal.PlainDate
		| Temporal.PlainDateTime
		| Temporal.ZonedDateTime
		| string,
) {
	const plainDate = Temporal.PlainDate.from(date);
	return plainDate.dayOfWeek === 6;
}

export function isSunday(
	date:
		| Temporal.PlainDate
		| Temporal.PlainDateTime
		| Temporal.ZonedDateTime
		| string,
) {
	const plainDate = Temporal.PlainDate.from(date);
	return plainDate.dayOfWeek === 7;
}

export function isWeekday(
	date:
		| Temporal.PlainDate
		| Temporal.PlainDateTime
		| Temporal.ZonedDateTime
		| string,
) {
	const plainDate = Temporal.PlainDate.from(date);

	if (!ISO_GREGORIAN_CALENDARS.has(plainDate.calendarId)) {
		throw new Error(
			`Unsupported calendar (${plainDate.calendarId}). The isWeekday function only supports dates in the ISO 8601 and Gregorian calendars.`,
		);
	}

	return plainDate.dayOfWeek < 6;
}

export function isWeekend(
	date:
		| Temporal.PlainDate
		| Temporal.PlainDateTime
		| Temporal.ZonedDateTime
		| string,
) {
	const plainDate = Temporal.PlainDate.from(date);

	if (!ISO_GREGORIAN_CALENDARS.has(plainDate.calendarId)) {
		throw new Error(
			`Unsupported calendar (${plainDate.calendarId}). The isWeekday function only supports dates in the ISO 8601 and Gregorian calendars.`,
		);
	}

	return plainDate.dayOfWeek === 6 || plainDate.dayOfWeek === 7;
}

/**
 * Checks if given date is first day of week. Note that for ISO
 * and Gregory calendars, Temporal always treats Mondays as the
 * first day of week.
 *
 * @param date
 * @returns true if is first day of week and false otherwise
 */
export function isFirstDayOfWeek(
	date:
		| Temporal.PlainDate
		| Temporal.PlainDateTime
		| Temporal.ZonedDateTime
		| string,
) {
	const plainDate = Temporal.PlainDate.from(date);
	return plainDate.dayOfWeek === 1;
}

export function isFirstDayOfMonth(
	date:
		| Temporal.PlainDate
		| Temporal.PlainDateTime
		| Temporal.ZonedDateTime
		| string,
) {
	const plainDate = Temporal.PlainDate.from(date);
	return plainDate.day === 1;
}

export function isFirstDayOfYear(
	date:
		| Temporal.PlainDate
		| Temporal.PlainDateTime
		| Temporal.ZonedDateTime
		| string,
) {
	const plainDate = Temporal.PlainDate.from(date);
	return plainDate.dayOfYear === 1;
}

export function isLastDayOfWeek(
	date:
		| Temporal.PlainDate
		| Temporal.PlainDateTime
		| Temporal.ZonedDateTime
		| string,
) {
	const plainDate = Temporal.PlainDate.from(date);
	return plainDate.dayOfWeek === plainDate.daysInWeek;
}

export function isLastDayOfMonth(
	date:
		| Temporal.PlainDate
		| Temporal.PlainDateTime
		| Temporal.ZonedDateTime
		| string,
) {
	const plainDate = Temporal.PlainDate.from(date);
	return plainDate.day === plainDate.daysInMonth;
}

export function isLastDayOfYear(
	date:
		| Temporal.PlainDate
		| Temporal.PlainDateTime
		| Temporal.ZonedDateTime
		| string,
) {
	const plainDate = Temporal.PlainDate.from(date);
	return plainDate.dayOfYear === plainDate.daysInYear;
}

export function isInFirstWeekOfMonth(
	date:
		| Temporal.PlainDate
		| Temporal.PlainDateTime
		| Temporal.ZonedDateTime
		| string,
) {
	const plainDate = Temporal.PlainDate.from(date);
	const firstDayOfMonth = plainDate.with({ day: 1 });
	return plainDate.weekOfYear === firstDayOfMonth.weekOfYear;
}

export function isInFirstFullWeekOfMonth(
	date:
		| Temporal.PlainDate
		| Temporal.PlainDateTime
		| Temporal.ZonedDateTime
		| string,
) {
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
