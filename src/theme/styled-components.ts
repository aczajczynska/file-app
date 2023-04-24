import * as styledComponents from 'styled-components'

import { TTheme } from './theme'

const { default: styled, ThemeProvider, useTheme, keyframes } = styledComponents as unknown as styledComponents.ThemedStyledComponentsModule<TTheme>

export { ThemeProvider, useTheme, keyframes }

export default styled
