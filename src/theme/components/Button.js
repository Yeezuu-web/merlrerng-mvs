import { mode, whiten, darken } from '@chakra-ui/theme-tools'

export const ButtonStyles = {
    // style object for base or default style
    baseStyle: {},
    // styles for different sizes ("sm", "md", "lg")
    sizes: {},
    // styles for different visual variants ("outline", "solid")
    variants: {
        brand: (props) => ({
            bg: 'brand.500',
            color: 'white',
            _hover: {
                bg: mode(
                    darken('brand.500', 20),
                    whiten('brand.500', 10),
                )(props),
                boxShadow: 'md',
            },
        }),
        primary: (props) => ({
            bg: 'primary',
            color: 'white',
            _hover: {
                bg: mode(darken('primary', 20), whiten('primary', 10))(props),
                boxShadow: 'md',
            },
        }),
        secondary: (props) => ({
            bg: 'secondary',
            color: 'white',
            _hover: {
                bg: mode(
                    darken('secondary', 20),
                    whiten('secondary', 10),
                )(props),
                boxShadow: 'md',
            },
        }),
        success: (props) => ({
            bg: 'success',
            color: 'white',
            _hover: {
                bg: mode(darken('success', 20), whiten('success', 10))(props),
                boxShadow: 'md',
            },
        }),
        danger: (props) => ({
            bg: 'danger',
            color: 'white',
            _hover: {
                bg: mode(darken('danger', 20), whiten('danger', 10))(props),
                boxShadow: 'md',
            },
        }),
        warning: (props) => ({
            bg: 'warning',
            color: 'white',
            _hover: {
                bg: mode(darken('warning', 20), whiten('warning', 10))(props),
                boxShadow: 'md',
            },
        }),
        info: (props) => ({
            bg: 'info',
            color: 'white',
            _hover: {
                bg: mode(darken('info', 20), whiten('info', 10))(props),
                boxShadow: 'md',
            },
        }),
        primaryOutline: (props) => ({
            bg: 'transparent',
            color: 'primary',
            border: '2px solid',
            borderColor: 'primary',
            _hover: {
                borderColor: mode(
                    darken('primary', 20),
                    whiten('primary', 10),
                )(props),
                boxShadow: 'sm',
                color: mode(
                    darken('primary', 20),
                    whiten('primary', 10),
                )(props),
                transform: 'scale(1.02)',
            },
        }),
        secondaryOutline: (props) => ({
            bg: 'transparent',
            color: 'secondary',
            border: '2px solid',
            borderColor: 'secondary',
            _hover: {
                borderColor: mode(
                    darken('secondary', 20),
                    whiten('secondary', 10),
                )(props),
                boxShadow: 'sm',
                color: mode(
                    darken('secondary', 20),
                    whiten('secondary', 10),
                )(props),
                transform: 'scale(1.02)',
            },
        }),
        successOutline: (props) => ({
            bg: 'transparent',
            color: 'success',
            border: '2px solid',
            borderColor: 'success',
            _hover: {
                borderColor: mode(
                    darken('success', 10),
                    whiten('success', 10),
                )(props),
                boxShadow: 'sm',
                color: mode(
                    darken('success', 20),
                    whiten('success', 10),
                )(props),
                transform: 'scale(1.02)',
            },
        }),
        dangerOutline: (props) => ({
            bg: 'transparent',
            color: 'danger',
            border: '2px solid',
            borderColor: 'danger',
            _hover: {
                borderColor: mode(
                    darken('danger', 20),
                    whiten('danger', 10),
                )(props),
                boxShadow: 'sm',
                color: mode(darken('danger', 20), whiten('danger', 10))(props),
                transform: 'scale(1.02)',
            },
        }),
        warningOutline: (props) => ({
            bg: 'transparent',
            color: 'warning',
            border: '2px solid',
            borderColor: 'warning',
            _hover: {
                borderColor: mode(
                    darken('warning', 20),
                    whiten('warning', 10),
                )(props),
                boxShadow: 'sm',
                color: mode(
                    darken('warning', 20),
                    whiten('warning', 10),
                )(props),
                transform: 'scale(1.02)',
            },
        }),
        infoOutline: (props) => ({
            bg: 'transparent',
            color: 'info',
            border: '2px solid',
            borderColor: 'info',
            _hover: {
                borderColor: mode(
                    darken('info', 20),
                    whiten('info', 10),
                )(props),
                boxShadow: 'sm',
                color: mode(darken('info', 20), whiten('info', 10))(props),
                transform: 'scale(1.02)',
            },
        }),
    },
    // default values for 'size', 'variant' and 'colorScheme'
    defaultProps: {},
}
