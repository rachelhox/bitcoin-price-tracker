interface IStringIndex extends Record<string, any> {}

/**
 * Takes the key name and returns the location. Will return null if undefined
 */

const currencies: IStringIndex = {
  USD: {
    name: 'US Dollar',
    key: 'usd',
    denom: '$',
  },
};

export const getCurrencyInfo = (key: string | number) => {
  return currencies[key] ?? {};
};
