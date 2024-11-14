export function yesterday(timeZone?: Temporal.TimeZone | string) {
	return Temporal.Now.plainDateISO(timeZone).add({ days: -1 });
}

export function today(timeZone?: Temporal.TimeZone | string) {
	return Temporal.Now.plainDateISO(timeZone);
}

export function tomorrow(timeZone?: Temporal.TimeZone | string) {
	return Temporal.Now.plainDateISO(timeZone).add({ days: 1 });
}
