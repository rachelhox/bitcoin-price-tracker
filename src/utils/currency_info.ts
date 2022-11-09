interface IStringIndex extends Record<string, any> {}

/**
 * Takes the key name and returns the location. Will return null if undefined
 */

const currencies: IStringIndex = {
  usd: {
    name: 'US Dollar',
    key: 'usd',
    unit: '$',
    type: 'fiat',
  },
  aed: {
    name: 'United Arab Emirates Dirham',
    key: 'aed',
    unit: 'DH',
    type: 'fiat',
  },
  eur: {
    name: 'Euro',
    key: 'eur',
    unit: '€',
    type: 'fiat',
  },
  aud: {
    name: 'Australian Dollar',
    key: 'aud',
    unit: 'A$',
    type: 'fiat',
  },
  cad: {
    name: 'Canadian Dollar',
    key: 'cad',
    unit: 'CA$',
    type: 'fiat',
  },
  chf: {
    name: 'Swiss Franc',
    key: 'chf',
    unit: 'Fr.',
    type: 'fiat',
  },
  gbp: {
    name: 'British Pound Sterling',
    key: 'gbp',
    unit: '£',
    type: 'fiat',
  },
  hkd: {
    name: 'Hong Kong Dollar',
    key: 'hkd',
    unit: 'HK$',
    type: 'fiat',
  },
  sgd: {
    name: 'Singapore Dollar',
    key: 'sgd',
    unit: 'S$',
    type: 'fiat',
  },
  cny: {
    name: 'Chinese Yuan',
    key: 'cny',
    unit: '¥',
    type: 'fiat',
  },
  jpy: {
    name: 'Japanese Yen',
    key: 'jpy',
    unit: '¥',
    type: 'fiat',
  },
  inr: {
    name: 'Indian Rupee',
    key: 'inr',
    unit: '₹',
    type: 'fiat',
  },
  krw: {
    name: 'South Korean Won',
    key: 'krw',
    unit: '₩',
    type: 'fiat',
  },
};

export const getCurrencyInfo = (key: string | number) => {
  return currencies[key] ?? {};
};
