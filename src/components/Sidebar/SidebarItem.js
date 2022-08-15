import { Box, Icon, Tooltip } from '@chakra-ui/react'
import { useRef } from 'react'

const SidebarItem = (props) => {
    const { icon, children, ...rest } = props

    return (
        <Tooltip label={children} placement="auto" hasArrow>
            <Box
                px="4"
                py="4"
                align="center"
                justifyContent="center"
                rounded="md"
                cursor="pointer"
                color="body"
                _dark={{ color: 'white' }}
                _hover={{
                    bg: 'p15',
                    color: 'primary',
                }}
                role="group"
                fontWeight="semibold"
                transition=".15s ease"
                {...rest}
            >
                {icon && <Icon w={6} boxSize="5" as={icon} />}
            </Box>
        </Tooltip>
    )
}

export default SidebarItem
