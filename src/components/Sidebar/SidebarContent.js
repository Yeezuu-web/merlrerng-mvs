import { Box, Flex, Text } from "@chakra-ui/react"
import NavItem from "./NavItem";
import { Logo } from "@choc-ui/logo";
import { MdHome } from "react-icons/md";
import { FaClipboardCheck, FaRss } from "react-icons/fa";
import { HiCode, HiCollection } from "react-icons/hi";
import { AiFillGift } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
const SidebarContent = (props) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="white"
      _dark= {{bg: "gray.900"}}
      boxShadow="rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"
      w="20"
      {...props}
    >
    <Flex align="center" justifyContent="center">
      <Text px="4" py="5" fontSize="lg" ml="0" color="brand.800" _dark={{ color: "white" }} fontWeight="semibold">
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
        <NavItem icon={MdHome}>Home</NavItem>
        <NavItem icon={FaRss}>Articles</NavItem>
        <NavItem icon={HiCollection}>Collections</NavItem>
        <NavItem icon={FaClipboardCheck}>Checklists</NavItem>
        <NavItem icon={HiCode}>Integrations</NavItem>
        <NavItem icon={AiFillGift}>Changelog</NavItem>
        <NavItem icon={BsGearFill}>Settings</NavItem>
      </Flex>
    </Box>
);
  
export default SidebarContent