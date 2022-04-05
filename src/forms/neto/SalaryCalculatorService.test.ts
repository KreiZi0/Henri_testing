import React from 'react';
import {render, screen} from '@testing-library/react';
import {PriceCalculationService} from './SalaryCalculatorService';

test('renders learn react link', () => {
    const {calculate} = PriceCalculationService();

    expect(calculate(800)).toBe(716.96);
    expect(calculate(1200)).toBe(1025.44);
    expect(calculate(500)).toBe(482.00);
    expect(calculate(333)).toBe(321.01);
    expect(calculate(703)).toBe(642.15);
    expect(calculate(1500)).toBe(1223.47);
    expect(calculate(2500)).toBe(1928.00);
    expect(calculate(100)).toBe(96.40);
    expect(calculate(1700)).toBe(1355.48);
    expect(calculate(2000)).toBe(1553.51);

});