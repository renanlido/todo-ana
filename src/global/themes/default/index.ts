import { DefaultThemeProps } from './IDefaultThemeProps';

const colors = {
  primary: '#383F50',
  lightGray: '#B2B7BB',
  softGray: '#E5E5E5',
  black: '#23262C',
  white: '#F4F6FA',
  forBlack: '#2E3239',
  pureWhite: '#FFFFFF',
  dark: '#191A1D',
  darkLinearGradient: '180deg, #3C4046 0%, #1F2124 100%',
  softLightGradient: '180deg, #FFFFFF 0%, #E8EAEE 100%'
};

const defautlTheme: DefaultThemeProps = {
  title: 'defaultTheme',
  colors,
  font: {
    Poppins: 'Poppins',
    fontSize: '1rem',
    fontWeight: 400
  },
  aplicationTitle: {
    fontSize: '4.375rem',
    fontWeight: 'extraBold'
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  cardSubTitle: {
    fontSize: '0.75rem',
    fontWeight: 400
  },
  taskText: {
    fontSize: '1rem',
    fontWeight: 400
  }
};

export { defautlTheme };
