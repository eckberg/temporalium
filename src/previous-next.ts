import { CalendarDate } from "./types.js";

export function previousOccuranceOfDayOfWeek(
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

export const previousMonday = (date: CalendarDate | string) =>
	previousOccuranceOfDayOfWeek(date, 1, false);
export const previousTuesday = (date: CalendarDate | string) =>
	previousOccuranceOfDayOfWeek(date, 2, false);
export const previousWednesday = (date: CalendarDate | string) =>
	previousOccuranceOfDayOfWeek(date, 3, false);
export const previousThursday = (date: CalendarDate | string) =>
	previousOccuranceOfDayOfWeek(date, 4, false);
export const previousFriday = (date: CalendarDate | string) =>
	previousOccuranceOfDayOfWeek(date, 5, false);
export const previousSaturday = (date: CalendarDate | string) =>
	previousOccuranceOfDayOfWeek(date, 6, false);
export const previousSunday = (date: CalendarDate | string) =>
	previousOccuranceOfDayOfWeek(date, 7, false);

export const previousOrSameMonday = (date: CalendarDate | string) =>
	previousOccuranceOfDayOfWeek(date, 1, true);
export const previousOrSameTuesday = (date: CalendarDate | string) =>
	previousOccuranceOfDayOfWeek(date, 2, true);
export const previousOrSameWednesday = (date: CalendarDate | string) =>
	previousOccuranceOfDayOfWeek(date, 3, true);
export const previousOrSameThursday = (date: CalendarDate | string) =>
	previousOccuranceOfDayOfWeek(date, 4, true);
export const previousOrSameFriday = (date: CalendarDate | string) =>
	previousOccuranceOfDayOfWeek(date, 5, true);
export const previousOrSameSaturday = (date: CalendarDate | string) =>
	previousOccuranceOfDayOfWeek(date, 6, true);
export const previousOrSameSunday = (date: CalendarDate | string) =>
	previousOccuranceOfDayOfWeek(date, 7, true);

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

export function previousOccuranceOfMonth(
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

export const previousJanuary = (date: CalendarDate | string) =>
	previousOccuranceOfMonth(date, 1);
export const previousFebruary = (date: CalendarDate | string) =>
	previousOccuranceOfMonth(date, 2);
export const previousMarch = (date: CalendarDate | string) =>
	previousOccuranceOfMonth(date, 3);
export const previousApril = (date: CalendarDate | string) =>
	previousOccuranceOfMonth(date, 4);
export const previousMay = (date: CalendarDate | string) =>
	previousOccuranceOfMonth(date, 5);
export const previousJune = (date: CalendarDate | string) =>
	previousOccuranceOfMonth(date, 6);
export const previousJuly = (date: CalendarDate | string) =>
	previousOccuranceOfMonth(date, 7);
export const previousAugust = (date: CalendarDate | string) =>
	previousOccuranceOfMonth(date, 8);
export const previousSeptember = (date: CalendarDate | string) =>
	previousOccuranceOfMonth(date, 9);
export const previousOctober = (date: CalendarDate | string) =>
	previousOccuranceOfMonth(date, 10);
export const previousNovember = (date: CalendarDate | string) =>
	previousOccuranceOfMonth(date, 11);
export const previousDecember = (date: CalendarDate | string) =>
	previousOccuranceOfMonth(date, 12);

export const previousOrSameJanuary = (date: CalendarDate | string) =>
	previousOccuranceOfMonth(date, 1, true);
export const previousOrSameFebruary = (date: CalendarDate | string) =>
	previousOccuranceOfMonth(date, 2, true);
export const previousOrSameMarch = (date: CalendarDate | string) =>
	previousOccuranceOfMonth(date, 3, true);
export const previousOrSameApril = (date: CalendarDate | string) =>
	previousOccuranceOfMonth(date, 4, true);
export const previousOrSameMay = (date: CalendarDate | string) =>
	previousOccuranceOfMonth(date, 5, true);
export const previousOrSameJune = (date: CalendarDate | string) =>
	previousOccuranceOfMonth(date, 6, true);
export const previousOrSameJuly = (date: CalendarDate | string) =>
	previousOccuranceOfMonth(date, 7, true);
export const previousOrSameAugust = (date: CalendarDate | string) =>
	previousOccuranceOfMonth(date, 8, true);
export const previousOrSameSeptember = (date: CalendarDate | string) =>
	previousOccuranceOfMonth(date, 9, true);
export const previousOrSameOctober = (date: CalendarDate | string) =>
	previousOccuranceOfMonth(date, 10, true);
export const previousOrSameNovember = (date: CalendarDate | string) =>
	previousOccuranceOfMonth(date, 11, true);
export const previousOrSameDecember = (date: CalendarDate | string) =>
	previousOccuranceOfMonth(date, 12, true);

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

// TODO: [previous/next][Microsecond/Millisecond/Second/Minute/Hour/Day/WeekOfYear/Weekday/Weekend/Month/Quarter/Tertile/Year/Decade/Century/Era]
