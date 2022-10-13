/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react';

type TabProviderContextProps = {
  tabIdentifierActive: string;
  setTabIdentifierActive: React.Dispatch<React.SetStateAction<string>>;
};

const TabProviderContext = React.createContext<TabProviderContextProps>({
  tabIdentifierActive: '',
  setTabIdentifierActive: () => {},
});

export const useTabProviderContext = () => {
  const context = React.useContext(TabProviderContext);

  if (context) {
    return context;
  }

  throw new Error(
    'Warning! Extracting context without wrapping your component with TabProvider',
  );
};

type TabProviderProps = {
  tabIdentifierActiveDefault?: string;
};

const TabProvider = ({
  tabIdentifierActiveDefault = '',
  children,
}: React.PropsWithChildren<TabProviderProps>) => {
  const [tabIdentifierActive, setTabIdentifierActive] = React.useState(
    tabIdentifierActiveDefault,
  );

  return (
    <TabProviderContext.Provider
      value={{ tabIdentifierActive, setTabIdentifierActive }}
    >
      {children}
    </TabProviderContext.Provider>
  );
};

export default TabProvider;
