import { Center, Grid, GridItem, Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react'
import React from 'react'
import AdminNavbar from "../Components/Admin-Navbar";
import { AdminFooter } from './AdminFooter';
const Dashboard = () => {
  return (
    <>
    <AdminNavbar />
    <Center>
    <Grid
    mt="10px"
  w="95%"
  h="600px"
  templateRows='repeat(4, 1fr)'
  templateColumns='repeat(3, 1fr)'
  gap={4}
  bg='grey'
>
  
<GridItem  rowSpan={2} colSpan={1} bg="orange">
{/* <Stat>
    <h1>Sales</h1>
    <StatNumber>345,670</StatNumber>
    <StatHelpText>
      <StatArrow type='increase' />
      23.36%
    </StatHelpText>
  </Stat> */}
</GridItem>
<GridItem  rowSpan={2} colSpan={1} bg="orange"></GridItem>
<GridItem  rowSpan={2} colSpan={1} bg="orange"></GridItem>
<GridItem  rowSpan={2} colSpan={2} bg="orange"></GridItem>
<GridItem  rowSpan={2} colSpan={1} bg="orange"></GridItem>
  </Grid> 
  </Center>
  <AdminFooter/>
    </>
  )
}

export default Dashboard