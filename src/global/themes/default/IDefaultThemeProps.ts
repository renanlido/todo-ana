type FontWeight = 400 | 'bold' | 'extraBold';

type FontsDefinitions = {
  Poppins: string;
  fontSize: string;
  fontWeight: FontWeight;
};

type ColorsProps = {
  primary: string;
  lightGray: string;
  softGray: string;
  black: string;
  white: string;
  forBlack: string;
  pureWhite: string;
  dark: string;
  darkLinearGradient: string;
  softLightGradient: string;
};

type TextDefinitions = {
  fontSize: string;
  fontWeight: FontWeight;
};

type DefaultThemeProps = {
  title: string;
  colors: ColorsProps;
  aplicationTitle: TextDefinitions;
  cardTitle: TextDefinitions;
  cardSubTitle: TextDefinitions;
  taskText: TextDefinitions;
  font: FontsDefinitions;
};

export type { DefaultThemeProps, FontsDefinitions, ColorsProps };
