import React from 'react'
import Admin from '../../components/Layouts/Admin'
import { Text, Button } from '@chakra-ui/react'

const Dasboard = () => {
  return (
    <>
        <Text fontSize="2xl" fontWeight="600" color="brand.900" _dark={{color:"white"}}>Dashboard</Text>
    </>
  )
}

export default Dasboard

Dasboard.getLayout = page => {
    return (
        <Admin>
            {page}
        </Admin>
    )
}