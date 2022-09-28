/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { AppTheme } from './theme';
declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {
    // space to customize theme
  }
}
