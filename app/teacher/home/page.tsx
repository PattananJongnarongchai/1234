import React from 'react'
import TNavbar from '../_components/Teach-Navbar'
import { Center, Container, Flex, Grid } from '@chakra-ui/react'
import TSidebar from '../_components/Teach-Sidebar'

export default function page() {
  return (
    <>
      <TNavbar />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(3, 1fr)",
          "2xl": "repeat(3, 1fr)",
        }}
        gap={6}
        mt={2}
      >
        <TSidebar />
        <Container>
          <Center>หน้าหลักของอาจารย์</Center>
        </Container>
      </Grid>
    </>
  );
}
