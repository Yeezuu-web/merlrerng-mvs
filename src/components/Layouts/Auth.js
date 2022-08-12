import { Box, calc, Portal } from "@chakra-ui/react"
import { useRef, createRef } from "react"
import AuthFooter from "../Footer/AuthFooter"

const Auth = ({children}) => {
    const warpper = createRef()
    const navRef = useRef()

    return (
        <>
            <Box ref={navRef} w={'100%'} h="100vh">
                <Portal containerRef={navRef}>
                    
                </Portal>
                <Box w={'100%'}>
                    <Box ref={warpper} w={'100%'}>
                        {children}
                    </Box>
                </Box>
                <Box px={'24px'} mx="auto" width="1440px" maxW="100%" 
                    modifiers={{
                        offset: {
                            enabled: true,
                            offset: "0, 30"
                        }
                    }}
                >
                    <AuthFooter/>
                </Box>
            </Box>
        </>
    )
}

export default Auth