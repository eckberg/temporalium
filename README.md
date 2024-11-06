# Temporalium

A lightweight TypeScript library offering convenient helper functions for the [Temporal](https://tc39.es/proposal-temporal/) API, simplifying date manipulation and comparison.

## 🚧 Work in Progress

This library is under early development, and its API may change. Contributions and feedback are welcome to help shape it toward a stable release!

## Rationale and Features

In anticipation of the Temporal API's broader adoption in ECMAScript, this library provides a convenient utility layer, adding common helper functions to simplify Temporal's usage. Temporalium is guided by the following principles:

- **ECMAScript Focused**: This package targets ECMAScript environments only and does not support CommonJS.
- **Polyfill Dependency**: Uses [@js-temporal/polyfill](https://github.com/js-temporal/temporal-polyfill) until Temporal is widely available natively.
- **Alignment with Temporal Conventions**: Strives to follow Temporal's design conventions to ensure consistency.
- **Optimized for Tree Shaking**: Built with tree-shaking in mind (noting the limitations imposed by the current reliance on the polyfill).
- **v1.0 Release Goal**: Plans to reach a stable release (v1.0) when Temporal is natively supported, at which point the polyfill dependency will be removed.
- **Calendar-Agnostic**: Designed to work independently of specific calendar choices, where feasible.

## Key Features

- **Comparisons**: Easily compare Temporal objects with semantically defined criteria, such as `isMonday(date: Temporal.PlainDate | …)`.
- **Boundaries**: Access Temporal objects at specific boundaries, such as `endOfWeek(date: Temporal.PlainDate | …)`.
- **Navigations**: Retrieve Temporal objects relative to a given date, like `nextMonday(date: Temporal.PlainDate | …)`.


## License

This project is licensed under the MIT License. See the LICENSE file for details.
