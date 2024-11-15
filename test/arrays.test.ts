import { describe, expect, it } from "vitest";
import { min } from "../src/arrays.js";

describe("min", () => {
	it("returns smallest Temporal.ZonedDateTime", () => {
		const first = Temporal.Now.instant();
		const last = Temporal.Now.instant().add({ hours: 24 });
		expect(min([last, first])).toBe(first);
	});
});
