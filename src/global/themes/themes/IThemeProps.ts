import { ColorsProps, FontsDefinitions } from '../default/IDefaultThemeProps';

type TextsProps = {
  color: string;
  fontSize: string;
  fontWeight: number | string;
};

interface TaskTextsProp extends Omit<TextsProps, 'color'> {
  colors: {
    active: string;
    inactive: string;
  };
}

interface CheckboxProps extends Omit<TextsProps, 'color'> {
  colors: {
    fill: string;
    border: string;
    check: string;
  };
}

interface TextAreaInputProps extends Omit<TextsProps, 'color'> {
  colors: {
    background: string;
    text: string;
  };
}

type CardProps = {
  colors: {
    backgroundColor: string;
    boxShadow: string;
  };
};

type ThemeProps = {
  title: string;
  default: {
    colors: ColorsProps;
    font: FontsDefinitions;
  };
  backgroundColor: string;
  card: CardProps;
  texts: {
    aplicationTitle: TextsProps;
    cardTitle: TextsProps;
    cardSubTitle: TextsProps;
    taskText: TaskTextsProp;
  };
  divider: string;
  checkbox: CheckboxProps;
  textAreaInput: TextAreaInputProps;
};

export type { ThemeProps };
