import {
    Box,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    Portal,
    useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import SidebarContent from '../Sidebar/SidebarContent'
import AdminNavbar from '../Sidebar/AdminNavbar'
import MainPanel from '../Panel/MainPanel'
import PanelContent from '../Panel/PanelContent'
import PanelContainer from '../Panel/PanelContainer'

const Admin = ({ children }) => {
    const sidebar = useDisclosure()

    return (
        <>
            <SidebarContent display={{ base: 'none', xl: 'unset' }} />
            <MainPanel
                as="section"
                w={{ base: 'full', xl: 'calc(100% - 93px)' }}
            >
                <Portal>
                    <AdminNavbar m="3" right={'15px'} />
                </Portal>
                <PanelContainer>
                    <PanelContent>{children}</PanelContent>
                </PanelContainer>
            </MainPanel>
        </>
    )
}

export default Admin

{
    /* <Box
as="section"
bg="gray.100"
_dark={{ bg: 'dark.400' }}
w="full"
p="3"
>
<Drawer
    isOpen={sidebar.isOpen}
    onClose={sidebar.onClose}
    placement="left"
>
    <DrawerOverlay />
    <DrawerContent>
        <SidebarContent w="full" borderRight="none" />
    </DrawerContent>
</Drawer>
<Box
    transition=".3s ease"
    w="full"
    pos="relative"
    ml={{ base: 0, md: 24 }}
>
    <Box as="main" w="full" pt="16">
        <Box w="full" h="100vh">
            {children}
        </Box>
    </Box>
</Box>
</Box> */
}
