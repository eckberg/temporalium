# Temporalium

Temporalium is a TypeScript library offering convenient helper functions for the [Temporal](https://tc39.es/proposal-temporal/) API, simplifying date manipulation and comparison.

## 🚧 Work in Progress

This library is under early development, and its API will change. Contributions and feedback are welcome to help shape it toward a stable release!

## Rationale and Principles

In anticipation of the Temporal API's adoption in ECMAScript, this library provides a convenient utility layer, adding common helper functions to simplify Temporal's usage.

Temporalium is developed with the following guiding principles:

- **ECMAScript-Focused**: This library is designed exclusively for ECMAScript environments, and therefore does not include a CommonJS build.
- **Polyfill Dependency**: Currently relies on the [temporal-polyfill](https://github.com/fullcalendar/temporal-polyfill) to provide compatibility until the Temporal API is natively available in most environments.
- **Immutable by Design**: All functions return new instances rather than modifying existing objects, ensuring immutability throughout.
- **Consistency with Temporal**: Aims to align with the conventions and design patterns of the Temporal API, promoting intuitive use and consistency.
- **Tree-Shaking Optimized**: Built with modern bundling practices to support tree-shaking, though full optimization depends on the eventual removal of the polyfill.
- **Calendar-Agnostic**: Compatible with various calendar systems, while providing semantically meaningful helper functions that may depend on specific calendars when appropriate.
- **Stable v1.0 Milestone**: The ambition is to reach a v1.0 stable release once the Temporal API is widely implemented natively in ECMAScript, at which point the polyfill dependency will be eliminated.

## Key Features

- **Arrays**: Effortlessly manipulate arrays of Temporal objects based on semantic criteria. Examples include `unique(dates: Temporal.PlainDate[])`, which filters out duplicate dates, and `mondays(dates: Temporal.PlainDate[])`, which extracts all Mondays from a list of dates.

- **Is**: Evaluate whether a Temporal object matches a specific condition. Examples include `isMonday(date: Temporal.PlainDate)`, which checks if a date falls on a Monday, and `isInFirstWeekOfMonth(date: Temporal.PlainDate)`, which determines if a date belongs to the first week of its month.

- **Now**: Quickly access Temporal objects for common temporal concepts, such as `today()`, which returns the current date, and `yesterday()`, which provides the date for the previous day.

- **Nth**: Retrieve specific occurrences of days or weekdays within a given time frame. For example, `nthWeekdayOfYear(date: Temporal.PlainDate, nth: number)` identifies the nth weekday in the same year.

- **Previous/Next**: Obtain Temporal objects relative to a given date. For instance, `nextMonday(date: Temporal.PlainDate)` returns the date of the next Monday after the specified date, while `previousFriday(date: Temporal.PlainDate)` finds the Friday before it.

- **Start/End**: Access Temporal objects representing specific boundaries of a time frame. Examples include `endOfWeek(date: Temporal.PlainDate)`, which returns the last day of the week containing the date, and `startOfMonth(date: Temporal.PlainDate)`, which identifies the first day of the month.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
