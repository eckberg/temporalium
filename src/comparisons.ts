import { Temporal } from "@js-temporal/polyfill";

/**
 * Determines if a given date falls on a Monday.
 *
 * This function accepts various date representations (e.g., `Temporal.PlainDate`,
 * `Temporal.PlainDateTime`, `Temporal.PlainDateLike`, or a string value convertible to a Temporal.PlainDate) and
 * checks if the specified date is a Monday.
 *
 * @param date - A date input that can be:
 *   - `Temporal.PlainDate`: a plain date instance.
 *   - `Temporal.PlainDateTime`: a plain date-time instance (only the date part is used).
 *   - `Temporal.PlainDateLike`: an object with properties of a PlainDate, allowing flexibility in input format.
 *   - `string`: a string value convertible to a Temporal.PlainDate (e.g., "2024-11-06").
 * @returns `true` if the date is a Monday, otherwise `false`.
 *
 * @example
 * ```typescript
 * isMonday(Temporal.PlainDate.from("2024-11-04")); // true
 * isMonday("2024-11-05"); // false
 * ```
 */
function isMonday(
	date:
		| Temporal.PlainDate
		| Temporal.PlainDateTime
		| Temporal.PlainDateLike
		| string,
) {
	const plainDate = Temporal.PlainDate.from(date);
	return plainDate.dayOfWeek === 1;
}

/**
 * Determines if a given date falls on a Tuesday.
 *
 * This function accepts various date representations (e.g., `Temporal.PlainDate`,
 * `Temporal.PlainDateTime`, `Temporal.PlainDateLike`, or a string value convertible to a Temporal.PlainDate) and
 * checks if the specified date is a Tuesday.
 *
 * @param date - A date input that can be:
 *   - `Temporal.PlainDate`: a plain date instance.
 *   - `Temporal.PlainDateTime`: a plain date-time instance (only the date part is used).
 *   - `Temporal.PlainDateLike`: an object with properties of a PlainDate, allowing flexibility in input format.
 *   - `string`: a string value convertible to a Temporal.PlainDate (e.g., "2024-11-06").
 * @returns `true` if the date is a Tuesday, otherwise `false`.
 *
 * @example
 * ```typescript
 * isTuesday(Temporal.PlainDate.from("2024-11-04")); // true
 * isTuesday("2024-11-05"); // false
 * ```
 */
function isTuesday(
	date:
		| Temporal.PlainDate
		| Temporal.PlainDateTime
		| Temporal.PlainDateLike
		| string,
) {
	const plainDate = Temporal.PlainDate.from(date);
	return plainDate.dayOfWeek === 2;
}

export { isMonday, isTuesday };
