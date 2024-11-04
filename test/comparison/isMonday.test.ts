import { describe, it, expect } from 'vitest';
import { Temporal } from '@js-temporal/polyfill';
import { isMonday } from '../../src';

describe('isMonday', () => {
  it('returns true for a Monday date', () => {
    const mondayDate = Temporal.PlainDate.from('2024-11-04'); // This is a Monday
    expect(isMonday(mondayDate)).toBe(true);
  });

  it('returns false for a non-Monday date', () => {
    const sundayDate = Temporal.PlainDate.from('2024-11-03'); // This is a Sunday
    expect(isMonday(sundayDate)).toBe(false);
  });
});
