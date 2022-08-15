// import React from 'react'
// import { FaBell } from 'react-icons/fa'
// import { FiMenu, FiSearch } from 'react-icons/fi'
// import SwitchMode from '../SwitchMode'
// import {
//     Avatar,
//     Flex,
//     IconButton,
//     Input,
//     InputGroup,
//     InputLeftElement,
//     useDisclosure,
// } from '@chakra-ui/react'

// const NavHead = (props) => {
//     const { ...rest } = props
//     console.log({ ...rest })
//     const sidebar = useDisclosure()

//     return (
//         <Flex
//             as="header"
//             pos="fixed"
//             h="auto"
//             py="3"
//             px="5"
//             align="center"
//             justify="space-between"
//             bg="soft.gradient"
//             _dark={{ bg: 'gray.900' }}
//             boxShadow="rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"
//             borderRadius="10px"
//             {...rest}
//         >
//             <IconButton
//                 aria-label="Menu"
//                 display={{ base: 'inline-flex', md: 'none' }}
//                 onClick={sidebar.onOpen}
//                 icon={<FiMenu />}
//                 size="sm"
//             />
//             <InputGroup w="96" display={{ base: 'none', md: 'flex' }}>
//                 <InputLeftElement color="gray.500">
//                     <FiSearch />
//                 </InputLeftElement>
//                 <Input placeholder="Search for articles..." />
//             </InputGroup>

//             <Flex align="center">
//                 <SwitchMode />
//                 <IconButton
//                     size="md"
//                     fontSize="lg"
//                     aria-label={`Switch to Dark mode`}
//                     variant="ghost"
//                     color="current"
//                     icon={<FaBell />}
//                 />
//                 <Avatar
//                     ml="4"
//                     size="sm"
//                     name="anubra266"
//                     src="https://avatars.githubusercontent.com/u/30869823?v=4"
//                     cursor="pointer"
//                 />
//             </Flex>
//         </Flex>
//     )
// }

// export default NavHead

// Chakra Imports
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    Link,
    useColorModeValue,
} from '@chakra-ui/react'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import AdminNavbarLinks from './AdminNavbarLinks'
import NextLink from 'next/link'

const AdminNavbar = (props) => {
    const [scrolled, setScrolled] = useState(false)

    const {
        variant,
        children,
        fixed,
        secondary,
        brandText,
        logoText,
        onOpen,
        ...rest
    } = props

    const nS = useColorModeValue('0px 7px 23px rgba(0, 0, 0, 0.05)', 'none')
    const nB = useColorModeValue(
        'linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)',
        'linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)',
    )
    const nBr = useColorModeValue('#FFFFFF', 'rgba(255, 255, 255, 0.31)')
    const nF = useColorModeValue(
        'none',
        'drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))',
    )

    // Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
    let mainText = useColorModeValue('gray.700', 'gray.200')
    let secondaryText = useColorModeValue('gray.400', 'gray.200')
    let navbarPosition = 'absolute'
    let navbarFilter = 'none'
    let navbarBackdrop = 'blur(21px)'
    let navbarShadow = 'none'
    let navbarBg = 'none'
    let navbarBorder = 'transparent'
    let secondaryMargin = '0px'
    let paddingX = '15px'
    if (fixed === true)
        if (scrolled === true) {
            navbarPosition = 'fixed'
            navbarShadow = nS
            navbarBg = nB
            navbarBorder = nBr
            navbarFilter = nF
        }
    if (secondary) {
        navbarBackdrop = 'none'
        navbarPosition = 'absolute'
        mainText = 'white'
        secondaryText = 'white'
        secondaryMargin = '22px'
        paddingX = '30px'
    }

    const changeNavbar = () => {
        if (window.scrollY > 1) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNavbar)
        return () => window.removeEventListener('scroll', changeNavbar)
    })

    return (
        <Flex
            position={navbarPosition}
            boxShadow={navbarShadow}
            bg={navbarBg}
            borderColor={navbarBorder}
            filter={navbarFilter}
            backdropFilter={navbarBackdrop}
            borderWidth="1.5px"
            borderStyle="solid"
            transitionDelay="0s, 0s, 0s, 0s"
            transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
            transition-property="box-shadow, background-color, filter, border"
            transitionTimingFunction="linear, linear, linear, linear"
            alignItems={{ xl: 'center' }}
            borderRadius="16px"
            display="flex"
            minH="75px"
            justifyContent={{ xl: 'center' }}
            lineHeight="25.6px"
            mx="auto"
            mt={secondaryMargin}
            pb="8px"
            left={''}
            right={'30px'}
            px={{
                sm: paddingX,
                md: '30px',
            }}
            pl={{
                xl: '12px',
            }}
            pt="8px"
            top="18px"
            w={{ sm: 'calc(100vw - 60px)', md: 'calc(100vw - 75px - 275px)' }}
        >
            <Flex
                w="full"
                flexDirection={{
                    sm: 'column',
                    md: 'row',
                }}
                alignItems={{ xl: 'center' }}
            >
                {/* <Box mb={{ sm: '8px', md: '0px' }}>
                    <NextLink href="/admin/dashboard" passHref>
                        <Link
                            color={mainText}
                            bg="inherit"
                            borderRadius="inherit"
                            fontWeight="bold"
                            _hover={{ color: { mainText } }}
                            _active={{
                                bg: 'inherit',
                                transform: 'none',
                                borderColor: 'transparent',
                            }}
                            _focus={{
                                boxShadow: 'none',
                            }}
                        >
                            {brandText}
                        </Link>
                    </NextLink>
                </Box> */}
                <Box ms="auto" w={{ sm: '100%', md: 'unset' }}>
                    <AdminNavbarLinks
                        onOpen={onOpen}
                        logoText={logoText}
                        fixed={fixed}
                    />
                </Box>
            </Flex>
        </Flex>
    )
}

AdminNavbar.propTypes = {
    brandText: PropTypes.string,
    variant: PropTypes.string,
    secondary: PropTypes.bool,
    fixed: PropTypes.bool,
    onOpen: PropTypes.func,
}

export default AdminNavbar
