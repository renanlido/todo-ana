import { ThemeProps } from './IThemeProps';
import { defautlTheme } from '../default';

const { aplicationTitle, cardTitle, cardSubTitle, taskText, colors, font } =
  defautlTheme;

const light: ThemeProps = {
  title: 'light',
  default: {
    font,
    colors
  },
  backgroundColor: colors.softGray,
  card: {
    colors: {
      backgroundColor: colors.pureWhite,
      boxShadow: '0px 20px 60px rgba(0, 0, 0, 0.05)'
    }
  },
  texts: {
    aplicationTitle: {
      color: colors.black,
      fontSize: aplicationTitle.fontSize,
      fontWeight: aplicationTitle.fontWeight
    },
    cardTitle: {
      color: colors.black,
      fontWeight: cardTitle.fontWeight,
      fontSize: cardTitle.fontSize
    },
    cardSubTitle: {
      color: colors.lightGray,
      fontSize: cardSubTitle.fontSize,
      fontWeight: cardSubTitle.fontWeight
    },
    taskText: {
      colors: {
        active: colors.primary,
        inactive: colors.lightGray
      },
      fontSize: taskText.fontSize,
      fontWeight: taskText.fontWeight
    }
  },
  divider: colors.softGray,
  checkbox: {
    colors: {
      border: colors.softGray,
      check: colors.dark,
      fill: colors.softLightGradient
    },
    fontSize: taskText.fontSize,
    fontWeight: taskText.fontWeight
  },
  textAreaInput: {
    colors: {
      background: colors.white,
      text: colors.dark
    },
    fontSize: taskText.fontSize,
    fontWeight: taskText.fontWeight
  }
};

export { light };
