import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import {globalStyles} from './styles'
import { font } from './fundations/fonts'
import { breakpoints } from './fundations/breakpoints'
import { text } from './fundations/text'
import { colors } from './fundations/colors'
import { ButtonStyles as Button } from './components/Button'

const theme = extendTheme(
  {
    breakpoints,
    colors,
    components: {
      Button
    }
  },
  globalStyles,
  font,
  text,
)

export default theme