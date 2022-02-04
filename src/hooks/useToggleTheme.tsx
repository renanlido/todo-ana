import {
  useContext,
  createContext,
  useState,
  useCallback,
  useMemo
} from 'react';

import { dark, light, ThemeProps } from '../global/themes';

interface ToggleThemeProps {
  children: React.ReactNode;
}

type ToggleThemeContextType = {
  handleToggleTheme: (checked: boolean) => void;
  toggleTheme: ThemeProps;
};

const ToggleThemeContext = createContext({} as ToggleThemeContextType);

export function ToggleThemeContextProvider({ children }: ToggleThemeProps) {
  const [toggleTheme, setToggleTheme] = useState<ThemeProps>(dark);

  const handleToggleTheme = useCallback(
    (checked: boolean) => setToggleTheme(checked ? light : dark),
    []
  );

  const value = useMemo<ToggleThemeContextType>(
    () => ({
      handleToggleTheme,
      toggleTheme
    }),
    [handleToggleTheme, toggleTheme]
  );

  return (
    <ToggleThemeContext.Provider value={value}>
      {children}
    </ToggleThemeContext.Provider>
  );
}

export const useToggleTheme = () => useContext(ToggleThemeContext);
