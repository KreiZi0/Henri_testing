import React from 'react';
import {render, screen} from '@testing-library/react';
import {PaidVacationDaysService} from './PaidVacationDaysService';
import exp from "constants";

test('renders learn react link', () => {
  const {calculate} = PaidVacationDaysService();

  expect(calculate(14, 0)).toBe(27);
  expect(calculate(61, 0)).toBe(27);
  expect(calculate(50, 20)).toBe(24);
  expect(calculate(45, 15)).toBe(24);
  expect(calculate(60, 30)).toBe(30);
  expect(calculate(60, 45)).toBe(30);
  expect(calculate(1, 0)).toBe(27);
  expect(calculate(60, 15)).toBe(27);
  expect(calculate(20, 20)).toBe(24);
  expect(calculate(45, 20)).toBe(24);
  expect(calculate(100, 0)).toBe(27);


});
