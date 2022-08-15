import { Box, Flex, Text } from '@chakra-ui/react'
import SidebarItem from './SidebarItem'
import { Logo } from '@choc-ui/logo'
import { MdHome } from 'react-icons/md'
import { FaClipboardCheck, FaRss } from 'react-icons/fa'
import { HiCode, HiCollection } from 'react-icons/hi'
import { AiFillGift } from 'react-icons/ai'
import { BsGearFill } from 'react-icons/bs'
const SidebarContent = (props) => (
    <Box
        as="nav"
        pos="fixed"
        zIndex="sticky"
        pb="10"
        overflowX="auto"
        overflowY="auto"
        bg="soft.gradient"
        _dark={{ bg: 'dark.gradient' }}
        boxShadow="rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"
        w="20"
        borderRadius="10px"
        m="3"
        display={{ sm: 'none', md: 'none', xl: 'block' }}
        {...props}
    >
        <Flex align="center" justifyContent="center">
            <Text
                px="4"
                py="5"
                fontSize="lg"
                ml="0"
                color="body"
                _dark={{ color: 'white' }}
                fontWeight="semibold"
            >
                MVS
            </Text>
        </Flex>

        <Flex
            mt="10"
            direction="column"
            alignItems="center"
            gap="5"
            justifyContent="center"
            as="nav"
            fontSize="sm"
            color="gray.600"
            aria-label="Main Navigation"
        >
            <SidebarItem icon={MdHome}>Home</SidebarItem>
            <SidebarItem icon={FaRss}>Articles</SidebarItem>
            <SidebarItem icon={HiCollection}>Collections</SidebarItem>
            <SidebarItem icon={FaClipboardCheck}>Checklists</SidebarItem>
            <SidebarItem icon={HiCode}>Integrations</SidebarItem>
            <SidebarItem icon={AiFillGift}>Changelog</SidebarItem>
            <SidebarItem icon={BsGearFill}>Settings</SidebarItem>
        </Flex>
    </Box>
)

export default SidebarContent
