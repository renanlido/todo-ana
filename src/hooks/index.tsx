import {
  BoxDimensionsContextProvider,
  useBoxDimensions
} from './useBoxDimensions';

interface CustomContextHooksProps {
  children: React.ReactNode;
}

export function CustomContextHooks({ children }: CustomContextHooksProps) {
  return (
    <BoxDimensionsContextProvider>{children}</BoxDimensionsContextProvider>
  );
}

export { useBoxDimensions };
