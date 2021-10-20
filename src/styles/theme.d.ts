import "styled-components";

import theme from './defaultTheme';

export type Theme = typeof theme;

declare module 'styled-components'{
  export interface DefaultTheme extends Theme {}
}
