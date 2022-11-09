/* eslint-disable no-undef */
import React from 'react';
import { getCurrencyInfo } from '@utils';

interface GeneralState {
  currency: Currency;
  setCurrency: React.Dispatch<React.SetStateAction<Currency>>;
}

const initialState: GeneralState = {
  currency: getCurrencyInfo('usd'),
  setCurrency: () => {},
};

export interface Props {
  children: React.ReactNode;
}

const GeneralContext = React.createContext<GeneralState>(initialState);

const GeneralProvider: React.FC<Props> = ({ children }) => {
  const [currency, setCurrency] = React.useState(initialState.currency);
  const currencyProviderValue = React.useMemo(
    () => ({ currency, setCurrency }),
    [currency, setCurrency]
  );

  return (
    <GeneralContext.Provider value={currencyProviderValue}>
      {children}
    </GeneralContext.Provider>
  );
};

const useGeneralContext = (): GeneralState => React.useContext(GeneralContext);

export { GeneralProvider, useGeneralContext };
