import { Box, Icon, Tooltip } from "@chakra-ui/react"
import { useRef } from "react";

const NavItem = (props) => {
    const { icon, children, ...rest } = props;
  
  return (
      <Tooltip label={children} placement="auto" hasArrow>
        <Box
          px="4"
          py="4"
          align="center"
          justifyContent="center"
          rounded="md"
          cursor="pointer"
          color="brand.800"
          _dark={{ color: "white" }}
          _hover={{
            bg: "gray.200",
            color: "brand.700"
          }}
          role="group"
          fontWeight="semibold"
          transition=".15s ease"
          {...rest}
        >
          
            {icon && (
              <Icon
                w={6}
                boxSize="5"
                _groupHover={{
                  color: "brand.600",
                }}
                as={icon}
              />
              )}
        </Box>
      </Tooltip>
    );
};
  
export default NavItem