import { cleanup } from '@testing-library/react';
import { useLineChartHook } from './hooks';

jest.mock('./hooks');

const mockResponse = {
  currency: {
    name: 'US Dollar',
    key: 'usd',
    unit: '$',
    type: 'fiat',
    period: 7,
  },
  period: 7,
  setPeriod: () => {},
  lineChartData: [{ x: new Date(1660291413194), y: 137359.8917588185 }],
};

const mockUseLineChartHook = useLineChartHook as jest.MockedFunction<
  typeof useLineChartHook
>;

describe('useLineChartHook', () => {
  it("mocks the hook's return value", () => {
    mockUseLineChartHook.mockReturnValue(mockResponse);
    mockUseLineChartHook();
  });
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
