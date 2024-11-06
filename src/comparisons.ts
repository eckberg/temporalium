import { Temporal } from "@js-temporal/polyfill";

// TODO: isToday()
// TODO: isTomorrow()
// TODO: isYesterday()

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

/**
 * Determines if a given date falls on a Wednesday.
 *
 * This function accepts various date representations (e.g., `Temporal.PlainDate`,
 * `Temporal.PlainDateTime`, `Temporal.PlainDateLike`, or a string value convertible to a Temporal.PlainDate) and
 * checks if the specified date is a Wednesday.
 *
 * @param date - A date input that can be:
 *   - `Temporal.PlainDate`: a plain date instance.
 *   - `Temporal.PlainDateTime`: a plain date-time instance (only the date part is used).
 *   - `Temporal.PlainDateLike`: an object with properties of a PlainDate, allowing flexibility in input format.
 *   - `string`: a string value convertible to a Temporal.PlainDate (e.g., "2024-11-06").
 * @returns `true` if the date is a Wednesday, otherwise `false`.
 *
 * @example
 * ```typescript
 * isWednesday(Temporal.PlainDate.from("2024-11-04")); // true
 * isWednesday("2024-11-05"); // false
 * ```
 */
function isWednesday(
	date:
		| Temporal.PlainDate
		| Temporal.PlainDateTime
		| Temporal.PlainDateLike
		| string,
) {
	const plainDate = Temporal.PlainDate.from(date);
	return plainDate.dayOfWeek === 3;
}

/**
 * Determines if a given date falls on a Thursday.
 *
 * This function accepts various date representations (e.g., `Temporal.PlainDate`,
 * `Temporal.PlainDateTime`, `Temporal.PlainDateLike`, or a string value convertible to a Temporal.PlainDate) and
 * checks if the specified date is a Thursday.
 *
 * @param date - A date input that can be:
 *   - `Temporal.PlainDate`: a plain date instance.
 *   - `Temporal.PlainDateTime`: a plain date-time instance (only the date part is used).
 *   - `Temporal.PlainDateLike`: an object with properties of a PlainDate, allowing flexibility in input format.
 *   - `string`: a string value convertible to a Temporal.PlainDate (e.g., "2024-11-06").
 * @returns `true` if the date is a Thursday, otherwise `false`.
 *
 * @example
 * ```typescript
 * isThursday(Temporal.PlainDate.from("2024-11-04")); // true
 * isThursday("2024-11-05"); // false
 * ```
 */
function isThursday(
	date:
		| Temporal.PlainDate
		| Temporal.PlainDateTime
		| Temporal.PlainDateLike
		| string,
) {
	const plainDate = Temporal.PlainDate.from(date);
	return plainDate.dayOfWeek === 4;
}

/**
 * Determines if a given date falls on a Friday.
 *
 * This function accepts various date representations (e.g., `Temporal.PlainDate`,
 * `Temporal.PlainDateTime`, `Temporal.PlainDateLike`, or a string value convertible to a Temporal.PlainDate) and
 * checks if the specified date is a Friday.
 *
 * @param date - A date input that can be:
 *   - `Temporal.PlainDate`: a plain date instance.
 *   - `Temporal.PlainDateTime`: a plain date-time instance (only the date part is used).
 *   - `Temporal.PlainDateLike`: an object with properties of a PlainDate, allowing flexibility in input format.
 *   - `string`: a string value convertible to a Temporal.PlainDate (e.g., "2024-11-06").
 * @returns `true` if the date is a Friday, otherwise `false`.
 *
 * @example
 * ```typescript
 * isFriday(Temporal.PlainDate.from("2024-11-04")); // true
 * isFriday("2024-11-05"); // false
 * ```
 */
function isFriday(
	date:
		| Temporal.PlainDate
		| Temporal.PlainDateTime
		| Temporal.PlainDateLike
		| string,
) {
	const plainDate = Temporal.PlainDate.from(date);
	return plainDate.dayOfWeek === 5;
}

/**
 * Determines if a given date falls on a Saturday.
 *
 * This function accepts various date representations (e.g., `Temporal.PlainDate`,
 * `Temporal.PlainDateTime`, `Temporal.PlainDateLike`, or a string value convertible to a Temporal.PlainDate) and
 * checks if the specified date is a Saturday.
 *
 * @param date - A date input that can be:
 *   - `Temporal.PlainDate`: a plain date instance.
 *   - `Temporal.PlainDateTime`: a plain date-time instance (only the date part is used).
 *   - `Temporal.PlainDateLike`: an object with properties of a PlainDate, allowing flexibility in input format.
 *   - `string`: a string value convertible to a Temporal.PlainDate (e.g., "2024-11-06").
 * @returns `true` if the date is a Saturday, otherwise `false`.
 *
 * @example
 * ```typescript
 * isSaturday(Temporal.PlainDate.from("2024-11-04")); // true
 * isSaturday("2024-11-05"); // false
 * ```
 */
function isSaturday(
	date:
		| Temporal.PlainDate
		| Temporal.PlainDateTime
		| Temporal.PlainDateLike
		| string,
) {
	const plainDate = Temporal.PlainDate.from(date);
	return plainDate.dayOfWeek === 6;
}

/**
 * Determines if a given date falls on a Sunday.
 *
 * This function accepts various date representations (e.g., `Temporal.PlainDate`,
 * `Temporal.PlainDateTime`, `Temporal.PlainDateLike`, or a string value convertible to a Temporal.PlainDate) and
 * checks if the specified date is a Sunday.
 *
 * @param date - A date input that can be:
 *   - `Temporal.PlainDate`: a plain date instance.
 *   - `Temporal.PlainDateTime`: a plain date-time instance (only the date part is used).
 *   - `Temporal.PlainDateLike`: an object with properties of a PlainDate, allowing flexibility in input format.
 *   - `string`: a string value convertible to a Temporal.PlainDate (e.g., "2024-11-06").
 * @returns `true` if the date is a Sunday, otherwise `false`.
 *
 * @example
 * ```typescript
 * isSunday(Temporal.PlainDate.from("2024-11-04")); // true
 * isSunday("2024-11-05"); // false
 * ```
 */
function isSunday(
	date:
		| Temporal.PlainDate
		| Temporal.PlainDateTime
		| Temporal.PlainDateLike
		| string,
) {
	const plainDate = Temporal.PlainDate.from(date);
	return plainDate.dayOfWeek === 7;
}

// TODO: isWeekday()
// TODO: isWeekend()

// TODO: isFirstDayOfWeek()
// TODO: isFirstDayOfMonth()
// TODO: isFirstDayOfQuarter()
// TODO: isFirstDayOfTertile()
// TODO: isFirstDayOfYear()
// TODO: isFirstDayOfDecade()

// TODO: isLastDayOfWeek()
// TODO: isLastDayOfMonth()
// TODO: isLastDayOfQuarter()
// TODO: isLastDayOfTertile()
// TODO: isLastDayOfYear()
// TODO: isLastDayOfDecade()

// TODO: isFirstWeekOfMonth()
// TODO: isFirstWeekOfQuarter()
// TODO: isFirstWeekOfTertile()
// TODO: isFirstWeekOfYear()
// TODO: isFirstWeekOfDecade()

// TODO: isLastWeekOfMonth()
// TODO: isLastWeekOfQuarter()
// TODO: isLastWeekOfTertile()
// TODO: isLastWeekOfYear()
// TODO: isLastWeekOfDecade()

// TODO …

export {
	isMonday,
	isTuesday,
	isWednesday,
	isThursday,
	isFriday,
	isSaturday,
	isSunday,
};
