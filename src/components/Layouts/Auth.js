import { Box, calc, Portal } from '@chakra-ui/react'
import { useRef, createRef } from 'react'
import AuthFooter from '../Footer/AuthFooter'
import Choc from './choc'

const Auth = ({ children }) => {
    const warpper = createRef()
    const navRef = useRef()

    return (
        <>
            <Box ref={navRef} w="full" h="full">
                <Choc />
                <Portal containerRef={navRef}></Portal>
                <Box w="full" h="full">
                    <Box ref={warpper} w="full">
                        {children}
                    </Box>
                </Box>
                <Box
                    px={'24px'}
                    mx="auto"
                    width="1440px"
                    maxW="100%"
                    modifiers={{
                        offset: {
                            enabled: true,
                            offset: '0, 30',
                        },
                    }}
                >
                    <AuthFooter />
                </Box>
            </Box>
        </>
    )
}

export default Auth
