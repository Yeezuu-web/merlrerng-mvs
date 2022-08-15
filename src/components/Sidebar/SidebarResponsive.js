/*eslint-disable*/
import { HamburgerIcon } from '@chakra-ui/icons'
// chakra imports
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Link,
    Stack,
    Text,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react'
import IconBox from '../Icons/IconBox'
import { CreativeTimLogo, HomeIcon, PersonIcon } from '../Icons/Icons'
import Separator from '../Separator/Separator'
import { useRef, useState } from 'react'
import { withRouter } from 'next/router'
import NextLink from 'next/link'
import SidebarContent from './SidebarContent'

const SidebarResponsive = ({ router }, props) => {
    // this is for the rest of the collapses
    const [state, setState] = useState({})
    const mainPanel = useRef()
    // verifies if routeName is the one active (in browser input)
    const activeRoute = (routeName) => {
        return router.pathname === routeName ? 'active' : ''
    }

    const activeBg = useColorModeValue('white', 'gray.700')
    const inactiveBg = useColorModeValue('white', 'gray.700')
    const activeColor = useColorModeValue('gray.700', 'white')
    const inactiveColor = useColorModeValue('gray.400', 'gray.400')

    const { logoText, ...rest } = props
    //  BRAND
    //  Chakra Color Mode
    let hamburgerColor = useColorModeValue('gray.500', 'gray.200')

    // SIDEBAR
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    // Color variables
    return (
        <Flex
            display={{ sm: 'flex', xl: 'none' }}
            ref={mainPanel}
            alignItems="center"
        >
            <HamburgerIcon
                color={hamburgerColor}
                w="18px"
                h="18px"
                ref={btnRef}
                colorscheme={'teal'}
                cursor="pointer"
                onClick={onOpen}
            />
            <Drawer isOpen={isOpen} onClose={onClose} placement="left">
                <DrawerOverlay />
                <DrawerContent bg="transparent" shadow="none">
                    <SidebarContent display="unset" />
                </DrawerContent>
            </Drawer>
        </Flex>
    )
}

export default withRouter(SidebarResponsive)
