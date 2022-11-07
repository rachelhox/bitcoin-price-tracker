/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
/* eslint-disable no-console */
import { useState, useMemo } from 'react';
import axios from 'axios';
import useSWR from 'swr';

export const useIndividualChartkHook = () => {
  const [currency, setCurrency] = useState('usd');
  const [candleChartData, setCandleChartData] = useState<Array<OHLCProps>>([]);
  const [period, setPeriod] = useState(90);
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  // eslint-disable-next-line no-unused-vars
  const { data: chartData, error } = useSWR(
    `${process.env.NEXT_PUBLIC_COINGECKO_API_URL}/coins/bitcoin/ohlc?vs_currency=${currency}&days=${period}`,
    fetcher
  );
  //   console.log(
  //     'query',
  //     `${process.env.NEXT_PUBLIC_COINGECKO_API_URL}/coins/bitcoin/
  //   ohlc?vs_currency=${currency}&days=${period}`
  //   );

  //   console.log(data, error);
  useMemo(() => {
    // console.log('hit');
    if (chartData) {
      chartData.map((candle: any) => {
        const dateObj = new Date(candle[0]);
        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear();
        // console.log('candle', day, month, year);
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
      // setChartData(data);
    }
    return candleChartData;
  }, [chartData]);
  return candleChartData;
};
