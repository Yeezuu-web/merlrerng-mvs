import React from 'react'
import Admin from '../../components/Layouts/Admin'
import {
    Flex,
    SimpleGrid,
    Grid,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import {
    WalletIcon,
    CartIcon,
    DocumentIcon,
    GlobeIcon,
} from '../../components/Icons/Icons'
import MiniStatistics from '../../components/dashboard/MiniStatistics'

const Dashboard = () => {
    const iconBoxInside = useColorModeValue('white', 'white')
    return (
        <Flex flexDirection="column" pt={{ base: '120px', md: '75px' }}>
            <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px">
                <MiniStatistics
                    title={"Today's Moneys"}
                    amount={'$53,000'}
                    percentage={55}
                    icon={
                        <WalletIcon
                            h={'24px'}
                            w={'24px'}
                            color={iconBoxInside}
                        />
                    }
                />
                <MiniStatistics
                    title={"Today's Users"}
                    amount={'2,300'}
                    percentage={5}
                    icon={
                        <GlobeIcon
                            h={'24px'}
                            w={'24px'}
                            color={iconBoxInside}
                        />
                    }
                />
                <MiniStatistics
                    title={'New Clients'}
                    amount={'+3,020'}
                    percentage={-14}
                    icon={
                        <DocumentIcon
                            h={'24px'}
                            w={'24px'}
                            color={iconBoxInside}
                        />
                    }
                />
                <MiniStatistics
                    title={'Total Sales'}
                    amount={'$173,000'}
                    percentage={8}
                    icon={
                        <CartIcon h={'24px'} w={'24px'} color={iconBoxInside} />
                    }
                />
            </SimpleGrid>
            <Grid
                templateColumns={{ md: '1fr', lg: '1.8fr 1.2fr' }}
                templateRows={{ md: '1fr auto', lg: '1fr' }}
                my="26px"
                gap="24px"
            >
                <Text fontSize="6xl" w={'100%'}>
                    Dashboard
                </Text>
            </Grid>
        </Flex>
    )
}

export default Dashboard

Dashboard.getLayout = (page) => {
    return <Admin>{page}</Admin>
}
