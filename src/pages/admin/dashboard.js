import React from 'react'
import Admin from '../../components/Layouts/Admin'
import { Text, Button } from '@chakra-ui/react'

const Dasboard = () => {
  return (
    <>
        <Button colorScheme='brand'>Dasboard</Button>
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