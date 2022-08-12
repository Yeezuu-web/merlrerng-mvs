import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import {globalStyles} from './styles'
import { font } from './fundations/fonts'
import { breakpoints } from './fundations/breakpoints'
import { text } from './fundations/text'
// import { colors } from './fundations/colors'

const theme = extendTheme(
  { breakpoints, colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    gray: {
       50: '#F7FAFC',
       100: '#EDF2F7',
       200: '#E2E8F0',
       300: '#CBD5E0',
       400: '#A0AEC0',
       500: '#718096',
       600: '#4A5568',
       700: "#1f2733",
       800: '#1A202C',
       900: '#171923',
    },
    brand: {
        900: "#1a365d",
        800: "#153e75",
        700: "#2a69ac",
      },
  } },
  globalStyles,
  font,
  text,
  withDefaultColorScheme({
    colorScheme: 'brand'
  })
)

export default theme