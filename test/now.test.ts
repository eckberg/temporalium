import { describe, it, expect } from "vitest";
import { yesterday } from "../src/index.js";

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
