import { cleanup } from '@testing-library/react';
import { useIndividualChartkHook } from './hooks';

jest.mock('./hooks');

const mockResponse = {
  currency: {
    name: 'US Dollar',
    key: 'usd',
    unit: '$',
    type: 'fiat',
    period: 90,
  },
  period: 90,
  setPeriod: () => {},
  candleChartData: [
    {
      close: 19198.11,
      high: 19383.94,
      low: 19058.63,
      open: 19058.63,
      x: new Date(1667966400000),
    },
  ],
};

const mockUseIndividualChartkHook =
  useIndividualChartkHook as jest.MockedFunction<
    typeof useIndividualChartkHook
  >;

describe('useIndividualChartkHook', () => {
  it("mocks the hook's return value", () => {
    mockUseIndividualChartkHook.mockReturnValue(mockResponse);
    mockUseIndividualChartkHook();
  });
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
