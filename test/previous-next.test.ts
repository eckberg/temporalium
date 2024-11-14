import { describe, it, expect } from "vitest";
import {
	previousJanuary,
	previousMonday,
	previousOrSameJanuary,
	previousOrSameMonday,
	nextMonday,
	nextOrSameJanuary,
	nextOrSameMonday,
} from "../src/index.js";



describe("previousMonday", () => {
	it("returns previous monday", () => {
		expect(previousMonday("2024-11-11").toString()).toBe(
			Temporal.PlainDate.from("2024-11-04").toString(),
		);
		expect(previousMonday("2024-11-12").toString()).toBe(
			Temporal.PlainDate.from("2024-11-11").toString(),
		);
	});
});

describe("previousOrSameMonday", () => {
	it("returns previous or same monday", () => {
		expect(previousOrSameMonday("2024-11-11").toString()).toBe(
			Temporal.PlainDate.from("2024-11-11").toString(),
		);
		expect(previousOrSameMonday("2024-11-12").toString()).toBe(
			Temporal.PlainDate.from("2024-11-11").toString(),
		);
	});
});

describe("nextMonday", () => {
	it("returns next monday", () => {
		expect(nextMonday("2024-11-11").toString()).toBe(
			Temporal.PlainDate.from("2024-11-18").toString(),
		);
		expect(nextMonday("2024-11-12").toString()).toBe(
			Temporal.PlainDate.from("2024-11-18").toString(),
		);
	});
});

describe("nextOrSameMonday", () => {
	it("returns next or same monday", () => {
		expect(nextOrSameMonday("2024-11-11").toString()).toBe(
			Temporal.PlainDate.from("2024-11-11").toString(),
		);
		expect(nextOrSameMonday("2024-11-12").toString()).toBe(
			Temporal.PlainDate.from("2024-11-18").toString(),
		);
	});
});

describe("previousJanuary", () => {
	it("returns previous january", () => {
		expect(previousJanuary("2024-11-11").toString()).toBe(
			Temporal.PlainDate.from("2024-01-11").toString(),
		);
		expect(previousJanuary("2024-01-15").toString()).toBe(
			Temporal.PlainDate.from("2023-01-15").toString(),
		);
	});
});

describe("previousOrSameJanuary", () => {
	it("returns previous or same January", () => {
		expect(previousOrSameJanuary("2024-11-11").toString()).toBe(
			Temporal.PlainDate.from("2024-01-11").toString(),
		);
		expect(previousOrSameJanuary("2024-01-15").toString()).toBe(
			Temporal.PlainDate.from("2024-01-15").toString(),
		);
	});
});

describe("nextOrSameJanuary", () => {
	it("returns next or same january", () => {
		expect(nextOrSameJanuary("2024-11-11").toString()).toBe(
			Temporal.PlainDate.from("2025-01-11").toString(),
		);
		expect(nextOrSameJanuary("2024-01-15").toString()).toBe(
			Temporal.PlainDate.from("2024-01-15").toString(),
		);
	});
});
