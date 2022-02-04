import { ThemeProps } from './IThemeProps';
import { defautlTheme } from '../default';

const { aplicationTitle, cardTitle, cardSubTitle, taskText, colors, font } =
  defautlTheme;

const dark: ThemeProps = {
  title: 'dark',
  backgroundColor: colors.black,
  default: {
    font,
    colors
  },
  card: {
    colors: {
      backgroundColor: colors.primary,
      boxShadow: '0px 20px 60px rgba(0, 0, 0, 0.05)'
    }
  },
  texts: {
    aplicationTitle: {
      color: colors.pureWhite,
      fontSize: aplicationTitle.fontSize,
      fontWeight: aplicationTitle.fontWeight
    },
    cardTitle: {
      fontWeight: cardTitle.fontWeight,
      color: colors.white,
      fontSize: cardTitle.fontSize
    },
    cardSubTitle: {
      color: colors.softGray,
      fontSize: cardSubTitle.fontSize,
      fontWeight: cardSubTitle.fontWeight
    },
    taskText: {
      colors: {
        active: colors.white,
        inactive: colors.softGray
      },
      fontSize: taskText.fontSize,
      fontWeight: taskText.fontWeight
    }
  },
  divider: 'rgba(244, 246, 250, 0.1)',
  checkbox: {
    colors: {
      border: colors.dark,
      check: colors.white,
      fill: colors.darkLinearGradient
    },
    fontSize: taskText.fontSize,
    fontWeight: taskText.fontWeight
  },
  textAreaInput: {
    colors: {
      background: colors.forBlack,
      text: colors.white
    },
    fontSize: taskText.fontSize,
    fontWeight: taskText.fontWeight
  }
};

export { dark };
