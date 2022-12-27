/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { AppThemeProps } from './themes';
declare module 'styled-components' {
  export interface DefaultTheme extends AppThemeProps {
    // space to customize theme
  }
}
