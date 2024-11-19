// TODO: weekends()
// TODO: weekdays()
// TODO: mondays/tuesdays/…()

import { TemporalsComparable, TemporalsCompareFunction } from "./types.js";

export const temporalsCompareFns = new Map<
	TemporalsComparable["constructor"],
	TemporalsCompareFunction
>([
	[Temporal.Instant, Temporal.Instant.compare as TemporalsCompareFunction],
	[
		Temporal.ZonedDateTime,
		Temporal.ZonedDateTime.compare as TemporalsCompareFunction,
	],
	[Temporal.PlainDate, Temporal.PlainDate.compare as TemporalsCompareFunction],
	[Temporal.PlainTime, Temporal.PlainTime.compare as TemporalsCompareFunction],
	[
		Temporal.PlainDateTime,
		Temporal.PlainDateTime.compare as TemporalsCompareFunction,
	],
	[
		Temporal.PlainYearMonth,
		Temporal.PlainYearMonth.compare as TemporalsCompareFunction,
	],
]);

export function min(array: TemporalsComparable[]) {
	if (array.length === 0) return undefined;

	return array.reduce((minItem, currentItem) => {
		const compareFn = temporalsCompareFns.get(minItem.constructor);

		if (compareFn && minItem.constructor === currentItem.constructor) {
			return compareFn(minItem, currentItem) > 0 ? currentItem : minItem;
		}

		throw new Error("Incompatible Temporal types in array.");
	});
}

export function max(array: TemporalsComparable[]) {
	if (array.length === 0) return undefined;

	return array.reduce((maxItem, currentItem) => {
		const compareFn = temporalsCompareFns.get(maxItem.constructor);

		if (compareFn && maxItem.constructor === currentItem.constructor) {
			return compareFn(maxItem, currentItem) < 0 ? currentItem : maxItem;
		}

		throw new Error("Incompatible Temporal types in array.");
	});
}

/**
 * Important to note that this unqiue function is based on the
 * Temporal compare function, meaning that it adds some complexity
 * instead of just using [...new Set(array)].
 *
 * @param array
 * @returns
 */
export function unique(array: TemporalsComparable[]) {
	if (array.length === 0) return undefined;

	return array.filter((item, _index, self) => {
		const compareFn = temporalsCompareFns.get(item.constructor);

		return (
			self.findIndex((other) => {
				if (compareFn && item.constructor === other.constructor) {
					return compareFn(item, other) === 0;
				}

				throw new Error("Incompatible Temporal types in array.");
			}) === 0
		);
	});
}
