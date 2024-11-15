// TODO: firstOf() or min()
// TODO: lastOf() or max()
// TODO: unique()
// TODO: weekends()
// TODO: weekdays()
// TODO: mondays/tuesdays/…()

import { CompareFunction, TemporalsWithCompareConstructors, TemporalsWithCompareInstances } from "./types.js";



const temporalCompareMap: Map<TemporalsWithCompareConstructors, CompareFunction<TemporalsWithCompareInstances>> = new Map([
  [Temporal.Instant, Temporal.Instant.compare as CompareFunction<Temporal.Instant>],
  [Temporal.ZonedDateTime, Temporal.ZonedDateTime.compare as CompareFunction<Temporal.ZonedDateTime>],
  [Temporal.PlainDate, Temporal.PlainDate.compare as CompareFunction<Temporal.PlainDate>],
  [Temporal.PlainTime, Temporal.PlainTime.compare as CompareFunction<Temporal.PlainTime>],
  [Temporal.PlainDateTime, Temporal.PlainDateTime.compare as CompareFunction<Temporal.PlainDateTime>],
  [Temporal.PlainYearMonth, Temporal.PlainYearMonth.compare as CompareFunction<Temporal.PlainYearMonth>],
]);

export function min(
	array: (
		| Temporal.Instant
		| Temporal.ZonedDateTime
		| Temporal.PlainDate
		| Temporal.PlainTime
		| Temporal.PlainDateTime
		| Temporal.PlainYearMonth
	)[],
) {
	if (array.length === 0) return undefined;

	return array.reduce((minItem, currentItem) => {
		const compareFn = temporalCompareMap.get(minItem.constructor);
		if (compareFn && minItem.constructor === currentItem.constructor) {
			return compareFn(minItem, currentItem) > 0 ? currentItem : minItem;
		}
		throw new Error("Incompatible Temporal types in array.");
	});
}
