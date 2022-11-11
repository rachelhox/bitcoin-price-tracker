/* eslint-disable no-unused-vars */
declare module '*.svg';

interface OHLCProps {
  x: Date;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface PriceProps {
  x: Date;
  y: number;
}

interface Currency {
  name: string;
  key: string;
  unit: string;
  type: string;
}
interface CurrencyProps {
  key: Currency;
}

interface CurrencyValueProp extends Currency {
  value: number;
}
