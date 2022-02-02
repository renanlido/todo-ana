import { useContext, createContext, useState, useCallback } from 'react';

interface BoxDimensionsProps {
  children: React.ReactNode;
}

type BoxDimensionsContextType = {
  changeBoxWidth: (boxSize: number) => void;
  boxWidth: number;
};

const BoxDimensionsContext = createContext({} as BoxDimensionsContextType);

export function BoxDimensionsContextProvider({ children }: BoxDimensionsProps) {
  const [boxWidth, setBoxWidth] = useState(0);

  const changeBoxWidth = useCallback((boxSize: number) => {
    setBoxWidth(boxSize);
  }, []);

  return (
    <BoxDimensionsContext.Provider
      value={{
        changeBoxWidth,
        boxWidth
      }}
    >
      {children}
    </BoxDimensionsContext.Provider>
  );
}

export const useBoxDimensions = () => useContext(BoxDimensionsContext);
