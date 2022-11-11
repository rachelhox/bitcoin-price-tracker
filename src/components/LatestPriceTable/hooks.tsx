/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import { getCurrencyInfo } from '@src/utils';
import { currencyKeys } from './config';

export const usePriceTableHook = () => {
  const currencies = currencyKeys.map((x: string) => getCurrencyInfo(x));
  const [priceTableData, setPriceTableData] = useState<
    Array<CurrencyValueProp>
  >([]);
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  // eslint-disable-next-line no-unused-vars
  const { data: ratesData, isValidating } = useSWR(
    `${process.env.NEXT_PUBLIC_COINGECKO_API_URL}/exchange_rates`,
    fetcher,
    { refreshInterval: 60000 }
  );
  useEffect(() => {
    setPriceTableData([]);
    if (ratesData) {
      const { rates } = ratesData;
      currencies.map((currency: Currency) => {
        const currencyTarget = rates[currency.key];
        setPriceTableData((prev) => [
          ...prev,
          {
            ...currency,
            value: currencyTarget.value,
          },
        ]);
      });
    }
  }, [ratesData, isValidating]);

  return { priceTableData };
};
