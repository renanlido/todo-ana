import 'styled-components';
import { ThemeProps } from '../themes';

type Theme = ThemeProps;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
