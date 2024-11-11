import { describe, it, expect } from "vitest";
import {
	lastJanuary,
	lastMonday,
	lastOrSameJanuary,
	lastOrSameMonday,
	nextMonday,
	nextOrSameJanuary,
	nextOrSameMonday,
	today,
	tomorrow,
	yesterday,
} from "../src/index.js";

describe("yesterday", () => {
	it("returns yesterday's date PlainDate", () => {
		expect(yesterday().toString()).toBe(
			Temporal.Now.plainDateISO().add({ hours: -24 }).toString(),
		);
	});
});

describe("today", () => {
	it("returns today's date PlainDate", () => {
		expect(today().toString()).toBe(
			Temporal.Now.plainDateISO().add({ hours: 0 }).toString(),
		);
	});
});

describe("tomorrow", () => {
	it("returns tomorrow's date PlainDate", () => {
		expect(tomorrow().toString()).toBe(
			Temporal.Now.plainDateISO().add({ hours: 24 }).toString(),
		);
	});
});

describe("lastMonday", () => {
	it("returns previous monday", () => {
		expect(lastMonday("2024-11-11").toString()).toBe(
			Temporal.PlainDate.from("2024-11-04").toString(),
		);
		expect(lastMonday("2024-11-12").toString()).toBe(
			Temporal.PlainDate.from("2024-11-11").toString(),
		);
	});
});

describe("lastOrSameMonday", () => {
	it("returns previous or same monday", () => {
		expect(lastOrSameMonday("2024-11-11").toString()).toBe(
			Temporal.PlainDate.from("2024-11-11").toString(),
		);
		expect(lastOrSameMonday("2024-11-12").toString()).toBe(
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

describe("lastJanuary", () => {
	it("returns previous january", () => {
		expect(lastJanuary("2024-11-11").toString()).toBe(
			Temporal.PlainDate.from("2024-01-11").toString(),
		);
		expect(lastJanuary("2024-01-15").toString()).toBe(
			Temporal.PlainDate.from("2023-01-15").toString(),
		);
	});
});

describe("lastOrSameJanuary", () => {
	it("returns previous or same January", () => {
		expect(lastOrSameJanuary("2024-11-11").toString()).toBe(
			Temporal.PlainDate.from("2024-01-11").toString(),
		);
		expect(lastOrSameJanuary("2024-01-15").toString()).toBe(
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
