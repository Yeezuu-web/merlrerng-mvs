import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import { globalStyles } from './styles'
import { font } from './fundations/fonts'
import { breakpoints } from './fundations/breakpoints'
import { text } from './fundations/text'
import { colors } from './fundations/colors'
import { ButtonStyles as Button } from './components/Button'
import { MainPanelComponent } from './additionals/layout/MainPanel'
import { PanelContentComponent } from './additionals/layout/PanelContent'
import { PanelContainerComponent } from './additionals/layout/PanelContainer'
import { CardComponent } from './additionals/card/Card'
import { CardBodyComponent } from './additionals/card/CardBody'
import { CardHeaderComponent } from './additionals/card/CardHeader'

const theme = extendTheme(
    {
        breakpoints,
        colors,
        components: {
            Button,
        },
    },
    globalStyles,
    font,
    text,
    CardComponent,
    CardBodyComponent,
    CardHeaderComponent,
    MainPanelComponent, // Main Panel component
    PanelContentComponent, // Panel Content component
    PanelContainerComponent, // Panel Container component
)

export default theme
