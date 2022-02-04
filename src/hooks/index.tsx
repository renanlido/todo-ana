import { ToggleThemeContextProvider, useToggleTheme } from './useToggleTheme';

interface CustomContextHooksProps {
  children: React.ReactNode;
}

export function CustomContextHooks({ children }: CustomContextHooksProps) {
  return <ToggleThemeContextProvider>{children}</ToggleThemeContextProvider>;
}

export { useToggleTheme };
