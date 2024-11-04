import { Temporal } from "@js-temporal/polyfill";

/**
 * Checks if a given Temporal.PlainDate is a Monday.
 *
 * @param date - A Temporal.PlainDate instance to check.
 * @returns `true` if the date is a Monday, otherwise `false`.
 */
export function isMonday(date: Temporal.PlainDate) {
	return date.dayOfWeek === 1;
}
