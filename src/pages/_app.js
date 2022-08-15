import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'

const MyApp = ({ Component, pageProps }) => {
    const getLayout = Component.getLayout || ((page) => page)
    return (
        <ChakraProvider theme={theme} resetCSS>
            {getLayout(<Component {...pageProps} />)}
        </ChakraProvider>
    )
}

export default MyApp
