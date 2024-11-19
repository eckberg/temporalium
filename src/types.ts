/**
 * Custom type for possibly improved resolving of parameters
 * passed to Temporal.PlainDate.from() and a replacement for
 * PlainDateLike for better typings.
 *
 * TODO: Further investigations needed to ensure correct implementation
 * of the spec. Otherwise, rollback to same typings as Temporal.PlainDate.from().
 * Why is this so loosly implemented in the spec and polyfill?
 */
export type CalendarDate =
	| Temporal.PlainDate
	| ((
			| {
					year: number;
			  }
			| {
					era: string;
					eraYear: number;
			  }
	  ) &
			({ month: number } | { monthCode: string }) & {
				day: number;
				calendar?: Temporal.CalendarLike;
			});

export type TemporalsComparable =
	| Temporal.Instant
	| Temporal.ZonedDateTime
	| Temporal.PlainDate
	| Temporal.PlainTime
	| Temporal.PlainDateTime
	| Temporal.PlainYearMonth;

export type TemporalsCompareFunction = (
	one: TemporalsComparable | string,
	b: TemporalsComparable | string,
) => Temporal.ComparisonResult;
