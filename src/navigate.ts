import { CalendarDate } from "./types.js";

export function yesterday(timeZone?: Temporal.TimeZone | string) {
	return Temporal.Now.plainDateISO(timeZone).add({ days: -1 });
}

export function today(timeZone?: Temporal.TimeZone | string) {
	return Temporal.Now.plainDateISO(timeZone);
}

export function tomorrow(timeZone?: Temporal.TimeZone | string) {
	return Temporal.Now.plainDateISO(timeZone).add({ days: 1 });
}

export function lastOccuranceOfDayOfWeek(
	date: CalendarDate | string,
	dayOfWeek: number,
	includeDate: boolean = false,
) {
	const plainDate = Temporal.PlainDate.from(date);

	const includeAdjustment =
		!includeDate && plainDate.dayOfWeek === dayOfWeek ? 1 : 0;

	const days = -(
		((plainDate.dayOfWeek - dayOfWeek + plainDate.daysInWeek) %
			plainDate.daysInWeek) +
		includeAdjustment * plainDate.daysInWeek
	);

	return plainDate.add({ days });
}

export function nextOccuranceOfDayOfWeek(
	date: CalendarDate | string,
	dayOfWeek: number,
	includeDate: boolean = false,
) {
	const plainDate = Temporal.PlainDate.from(date);

	const includeAdjustment =
		!includeDate && plainDate.dayOfWeek === dayOfWeek ? 1 : 0;

	const days =
		((plainDate.dayOfWeek - dayOfWeek + plainDate.daysInWeek) %
			plainDate.daysInWeek) +
		includeAdjustment * plainDate.daysInWeek;

	return plainDate.add({ days });
}

export const lastMonday = (date: CalendarDate | string) =>
	lastOccuranceOfDayOfWeek(date, 1, false);
export const lastTuesday = (date: CalendarDate | string) =>
	lastOccuranceOfDayOfWeek(date, 2, false);
export const lastWednesday = (date: CalendarDate | string) =>
	lastOccuranceOfDayOfWeek(date, 3, false);
export const lastThursday = (date: CalendarDate | string) =>
	lastOccuranceOfDayOfWeek(date, 4, false);
export const lastFriday = (date: CalendarDate | string) =>
	lastOccuranceOfDayOfWeek(date, 5, false);
export const lastSaturday = (date: CalendarDate | string) =>
	lastOccuranceOfDayOfWeek(date, 6, false);
export const lastSunday = (date: CalendarDate | string) =>
	lastOccuranceOfDayOfWeek(date, 7, false);

export const lastOrSameMonday = (date: CalendarDate | string) =>
	lastOccuranceOfDayOfWeek(date, 1, true);
export const lastOrSameTuesday = (date: CalendarDate | string) =>
	lastOccuranceOfDayOfWeek(date, 2, true);
export const lastOrSameWednesday = (date: CalendarDate | string) =>
	lastOccuranceOfDayOfWeek(date, 3, true);
export const lastOrSameThursday = (date: CalendarDate | string) =>
	lastOccuranceOfDayOfWeek(date, 4, true);
export const lastOrSameFriday = (date: CalendarDate | string) =>
	lastOccuranceOfDayOfWeek(date, 5, true);
export const lastOrSameSaturday = (date: CalendarDate | string) =>
	lastOccuranceOfDayOfWeek(date, 6, true);
export const lastOrSameSunday = (date: CalendarDate | string) =>
	lastOccuranceOfDayOfWeek(date, 7, true);

export const nextMonday = (date: CalendarDate | string) =>
	nextOccuranceOfDayOfWeek(date, 1, false);
export const nextTuesday = (date: CalendarDate | string) =>
	nextOccuranceOfDayOfWeek(date, 2, false);
export const nextWednesday = (date: CalendarDate | string) =>
	nextOccuranceOfDayOfWeek(date, 3, false);
export const nextThursday = (date: CalendarDate | string) =>
	nextOccuranceOfDayOfWeek(date, 4, false);
export const nextFriday = (date: CalendarDate | string) =>
	nextOccuranceOfDayOfWeek(date, 5, false);
export const nextSaturday = (date: CalendarDate | string) =>
	nextOccuranceOfDayOfWeek(date, 6, false);
export const nextSunday = (date: CalendarDate | string) =>
	nextOccuranceOfDayOfWeek(date, 7, false);

export const nextOrSameMonday = (date: CalendarDate | string) =>
	nextOccuranceOfDayOfWeek(date, 1, true);
export const nextOrSameTuesday = (date: CalendarDate | string) =>
	nextOccuranceOfDayOfWeek(date, 2, true);
export const nextOrSameWednesday = (date: CalendarDate | string) =>
	nextOccuranceOfDayOfWeek(date, 3, true);
export const nextOrSameThursday = (date: CalendarDate | string) =>
	nextOccuranceOfDayOfWeek(date, 4, true);
export const nextOrSameFriday = (date: CalendarDate | string) =>
	nextOccuranceOfDayOfWeek(date, 5, true);
export const nextOrSameSaturday = (date: CalendarDate | string) =>
	nextOccuranceOfDayOfWeek(date, 6, true);
export const nextOrSameSunday = (date: CalendarDate | string) =>
	nextOccuranceOfDayOfWeek(date, 7, true);

export function lastOccuranceOfMonth(
	date: CalendarDate | string,
	month: number,
	includeDate: boolean = false,
) {
	const plainDate = Temporal.PlainDate.from(date);

	const isSameMonth = month === plainDate.month;

	if (month > plainDate.month || (isSameMonth && !includeDate)) {
		return plainDate.add({ years: -1 }).with({ month });
	}

	if (isSameMonth && includeDate) {
		return plainDate;
	}

	return plainDate.with({ month });
}

export function nextOccuranceOfMonth(
	date: CalendarDate | string,
	month: number,
	includeDate: boolean = false,
) {
	const plainDate = Temporal.PlainDate.from(date);

	const isSameMonth = month === plainDate.month;

	if (month < plainDate.month || (isSameMonth && !includeDate)) {
		return plainDate.add({ years: 1 }).with({ month });
	}

	if (isSameMonth && includeDate) {
		return plainDate;
	}

	return plainDate.with({ month });
}

export const lastJanuary = (date: CalendarDate | string) =>
	lastOccuranceOfMonth(date, 1);
export const lastFebruary = (date: CalendarDate | string) =>
	lastOccuranceOfMonth(date, 2);
export const lastMarch = (date: CalendarDate | string) =>
	lastOccuranceOfMonth(date, 3);
export const lastApril = (date: CalendarDate | string) =>
	lastOccuranceOfMonth(date, 4);
export const lastMay = (date: CalendarDate | string) =>
	lastOccuranceOfMonth(date, 5);
export const lastJune = (date: CalendarDate | string) =>
	lastOccuranceOfMonth(date, 6);
export const lastJuly = (date: CalendarDate | string) =>
	lastOccuranceOfMonth(date, 7);
export const lastAugust = (date: CalendarDate | string) =>
	lastOccuranceOfMonth(date, 8);
export const lastSeptember = (date: CalendarDate | string) =>
	lastOccuranceOfMonth(date, 9);
export const lastOctober = (date: CalendarDate | string) =>
	lastOccuranceOfMonth(date, 10);
export const lastNovember = (date: CalendarDate | string) =>
	lastOccuranceOfMonth(date, 11);
export const lastDecember = (date: CalendarDate | string) =>
	lastOccuranceOfMonth(date, 12);

export const lastOrSameJanuary = (date: CalendarDate | string) =>
	lastOccuranceOfMonth(date, 1, true);
export const lastOrSameFebruary = (date: CalendarDate | string) =>
	lastOccuranceOfMonth(date, 2, true);
export const lastOrSameMarch = (date: CalendarDate | string) =>
	lastOccuranceOfMonth(date, 3, true);
export const lastOrSameApril = (date: CalendarDate | string) =>
	lastOccuranceOfMonth(date, 4, true);
export const lastOrSameMay = (date: CalendarDate | string) =>
	lastOccuranceOfMonth(date, 5, true);
export const lastOrSameJune = (date: CalendarDate | string) =>
	lastOccuranceOfMonth(date, 6, true);
export const lastOrSameJuly = (date: CalendarDate | string) =>
	lastOccuranceOfMonth(date, 7, true);
export const lastOrSameAugust = (date: CalendarDate | string) =>
	lastOccuranceOfMonth(date, 8, true);
export const lastOrSameSeptember = (date: CalendarDate | string) =>
	lastOccuranceOfMonth(date, 9, true);
export const lastOrSameOctober = (date: CalendarDate | string) =>
	lastOccuranceOfMonth(date, 10, true);
export const lastOrSameNovember = (date: CalendarDate | string) =>
	lastOccuranceOfMonth(date, 11, true);
export const lastOrSameDecember = (date: CalendarDate | string) =>
	lastOccuranceOfMonth(date, 12, true);

export const nextJanuary = (date: CalendarDate | string) =>
	nextOccuranceOfMonth(date, 1);
export const nextFebruary = (date: CalendarDate | string) =>
	nextOccuranceOfMonth(date, 2);
export const nextMarch = (date: CalendarDate | string) =>
	nextOccuranceOfMonth(date, 3);
export const nextApril = (date: CalendarDate | string) =>
	nextOccuranceOfMonth(date, 4);
export const nextMay = (date: CalendarDate | string) =>
	nextOccuranceOfMonth(date, 5);
export const nextJune = (date: CalendarDate | string) =>
	nextOccuranceOfMonth(date, 6);
export const nextJuly = (date: CalendarDate | string) =>
	nextOccuranceOfMonth(date, 7);
export const nextAugust = (date: CalendarDate | string) =>
	nextOccuranceOfMonth(date, 8);
export const nextSeptember = (date: CalendarDate | string) =>
	nextOccuranceOfMonth(date, 9);
export const nextOctober = (date: CalendarDate | string) =>
	nextOccuranceOfMonth(date, 10);
export const nextNovember = (date: CalendarDate | string) =>
	nextOccuranceOfMonth(date, 11);
export const nextDecember = (date: CalendarDate | string) =>
	nextOccuranceOfMonth(date, 12);

export const nextOrSameJanuary = (date: CalendarDate | string) =>
	nextOccuranceOfMonth(date, 1, true);
export const nextOrSameFebruary = (date: CalendarDate | string) =>
	nextOccuranceOfMonth(date, 2, true);
export const nextOrSameMarch = (date: CalendarDate | string) =>
	nextOccuranceOfMonth(date, 3, true);
export const nextOrSameApril = (date: CalendarDate | string) =>
	nextOccuranceOfMonth(date, 4, true);
export const nextOrSameMay = (date: CalendarDate | string) =>
	nextOccuranceOfMonth(date, 5, true);
export const nextOrSameJune = (date: CalendarDate | string) =>
	nextOccuranceOfMonth(date, 6, true);
export const nextOrSameJuly = (date: CalendarDate | string) =>
	nextOccuranceOfMonth(date, 7, true);
export const nextOrSameAugust = (date: CalendarDate | string) =>
	nextOccuranceOfMonth(date, 8, true);
export const nextOrSameSeptember = (date: CalendarDate | string) =>
	nextOccuranceOfMonth(date, 9, true);
export const nextOrSameOctober = (date: CalendarDate | string) =>
	nextOccuranceOfMonth(date, 10, true);
export const nextOrSameNovember = (date: CalendarDate | string) =>
	nextOccuranceOfMonth(date, 11, true);
export const nextOrSameDecember = (date: CalendarDate | string) =>
	nextOccuranceOfMonth(date, 12, true);

// TODO: [last/next][Microsecond/Millisecond/Second/Minute/Hour/Day/WeekOfYear/Weekday/Weekend/Month/Quarter/Tertile/Year/Decade/Century/Era]

// TODO: [end/start]Of[Microsecond/Millisecond/Second/Minute/Hour/Day/WeekOfYear/Month/Quarter/Tertile/Year/Decade/Century/Era]

// TODO (?): nth[Day/WeekOfYear/Weekday/Weekend/Month/Year]Of[Week/Quarter/Tertile/Year/Decade/Century/Era]
