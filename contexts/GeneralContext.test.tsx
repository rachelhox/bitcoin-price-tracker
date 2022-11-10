/* eslint-disable no-undef */
import { renderHook, act, cleanup } from '@testing-library/react';
import { GeneralProvider, useGeneralContext } from '.';
import { Props } from './GeneralContext';

global.fetch = jest.fn().mockResolvedValue({ json: () => ({}) });

describe('context: GeneralContext', () => {
  it('changes currency when setCurrency is called', async () => {
    const wrapper: React.FC<Props> = ({ children }) => (
      <GeneralProvider>{children}</GeneralProvider>
    );
    const { result } = renderHook(() => useGeneralContext(), {
      wrapper,
    });
    expect(result.current.currency).toStrictEqual({
      name: 'US Dollar',
      key: 'usd',
      unit: '$',
      type: 'fiat',
    });
    await act(async () => {
      await result.current.setCurrency({
        name: 'Hong Kong Dollar',
        key: 'hkd',
        unit: 'HK$',
        type: 'fiat',
      });
    });
    expect(result.current.currency).toStrictEqual({
      name: 'Hong Kong Dollar',
      key: 'hkd',
      unit: 'HK$',
      type: 'fiat',
    });
  });
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
