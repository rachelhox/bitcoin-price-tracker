/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import axios from 'axios';
import useSWR from 'swr';

export const useIndividualChartkHook = () => {
  const [currency, setCurrency] = useState('usd');
  const [candleChartData, setCandleChartData] = useState<Array<OHLCProps>>([]);
  const [period, setPeriod] = useState(90);
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  // eslint-disable-next-line no-unused-vars
  const { data: chartData, isValidating } = useSWR(
    `${process.env.NEXT_PUBLIC_COINGECKO_API_URL}/coins/bitcoin/ohlc?vs_currency=${currency}&days=${period}`,
    fetcher,
    { refreshInterval: 60000 }
  );

  useEffect(() => {
    setCandleChartData([]);
    if (chartData) {
      chartData.map((candle: any) => {
        const dateObj = new Date(candle[0]);
        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear();
        setCandleChartData((prev) => [
          ...prev,
          {
            x: new Date(year, month, day),
            open: candle[1],
            high: candle[2],
            low: candle[3],
            close: candle[4],
          },
        ]);
      });
    }
  }, [chartData, isValidating]);

  return { currency, period, candleChartData };
};
