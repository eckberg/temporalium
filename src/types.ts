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

export type TemporalsWithCompareConstructors = typeof Temporal.Instant
| typeof Temporal.ZonedDateTime
| typeof Temporal.PlainDate
| typeof Temporal.PlainTime
| typeof Temporal.PlainDateTime
| typeof Temporal.PlainYearMonth;

export type TemporalsWithCompareInstances = InstanceType<TemporalsWithCompareConstructors>;

export type CompareFunction<TemporalsWithCompareInstances> = (a: TemporalsWithCompareInstances, b: TemporalsWithCompareInstances) => Temporal.ComparisonResult;

// Create a mapping that enforces the relationship between constructors and their compare functions
export type TemporalCompareMap = {
  [K in TemporalsWithCompareConstructors as InstanceType<K>['constructor']]: CompareFunction<InstanceType<K>>;
};
