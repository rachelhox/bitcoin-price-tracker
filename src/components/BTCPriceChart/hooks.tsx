/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import { useGeneralContext } from '@contexts';

export const useLineChartkHook = () => {
  const { currency } = useGeneralContext();
  const [lineChartData, setLineChartData] = useState<Array<PriceProps>>([]);
  const [period, setPeriod] = useState(30);
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  // eslint-disable-next-line no-unused-vars
  const { data: marketData, isValidating } = useSWR(
    `${process.env.NEXT_PUBLIC_COINGECKO_API_URL}/coins/bitcoin/market_chart?vs_currency=${currency.key}&days=${period}`,
    fetcher,
    { refreshInterval: 60000 }
  );

  useEffect(() => {
    setLineChartData([]);
    if (marketData) {
      marketData.prices?.map((line: any) => {
        const dateObj = new Date(line[0]);
        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear();
        const hour = dateObj.getHours();
        const minute = dateObj.getMinutes();
        setLineChartData((prev) => [
          ...prev,
          {
            x: new Date(year, month, day, hour, minute),
            y: line[1],
          },
        ]);
      });
    }
  }, [marketData, isValidating, currency, period]);

  return { currency, period, setPeriod, lineChartData };
};
