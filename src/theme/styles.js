import { mode } from '@chakra-ui/theme-tools'

export const globalStyles = {
    styles: {
        global: (props) => ({
            body: {
                bg: mode('gray.100', 'dark.400')(props),
                fontFamily: 'Poppins, sans-serif',
            },
            html: {
                fontFamily: 'Poppins, sans-serif',
            },
        }),
    },
}
