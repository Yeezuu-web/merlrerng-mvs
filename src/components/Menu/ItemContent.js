// chakra imports
import { Flex, Text, useColorModeValue, chakra, Box } from '@chakra-ui/react'
import { ClockIcon } from '../Icons/Icons'
import PropTypes from 'prop-types'
import React from 'react'
import Image from 'next/image'

const ItemContent = (props) => {
    const navbarIcon = useColorModeValue('gray.500', 'gray.200')
    const notificationColor = useColorModeValue('gray.700', 'white')
    const spacing = ' '

    const OverrideNextImage = chakra(Image, {
        shouldForwardProp: (props) =>
            ['width', 'height', 'src', 'alt'].includes(props),
    })
    return (
        <Flex alignItems="center" justifyContent="center" p="2">
            <Box pos="relative" w="12" h="12" mr="4">
                <OverrideNextImage
                    src={props.aSrc}
                    alt={props.aName}
                    width="48"
                    height="48"
                    pos="absolute"
                    borderRadius="12"
                />
            </Box>
            <Flex flexDirection="column">
                <Text fontSize="14px" mb="5px" color={notificationColor}>
                    <Text fontWeight="bold" fontSize="14px" as="span">
                        {props.boldInfo}
                        {spacing}
                    </Text>
                    {props.info}
                </Text>
                <Flex alignItems="center">
                    <ClockIcon color={navbarIcon} w="13px" h="13px" me="3px" />
                    <Text fontSize="xs" lineHeight="100%" color={navbarIcon}>
                        {props.time}
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default ItemContent
