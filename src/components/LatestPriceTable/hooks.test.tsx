import { cleanup } from '@testing-library/react';
import { usePriceTableHook } from './hooks';

jest.mock('./hooks');

const mockResponse = {
  priceTableData: [
    {
      key: 'aed',
      name: 'United Arab Emirates Dirham',
      type: 'fiat',
      unit: 'DH',
      value: 63890.518,
    },
    {
      key: 'usd',
      name: 'US Dollar',
      type: 'fiat',
      unit: '$',
      value: 17394.665,
    },
  ],
};

const mockUsePriceTableHook = usePriceTableHook as jest.MockedFunction<
  typeof usePriceTableHook
>;

describe('usePriceTableHook', () => {
  it("mocks the hook's return value", () => {
    mockUsePriceTableHook.mockReturnValue(mockResponse);
    mockUsePriceTableHook();
  });
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
