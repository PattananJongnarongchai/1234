import NNavbar from "@/app/admin/_components/Admin-Navbar";
import NSidebar from "@/app/admin/_components/Admin-Sidebar";
import { Center, Container, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";

export default function page() {
  return (
    <>
      <NNavbar />
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
        <NSidebar />
        <Container>
          <Center style={{border:"10px", borderColor:"gray"}}>
            <Text fontSize={50}>ยินดีต้อนรับ</Text>
            
          </Center>
        </Container>
      </Grid>
    </>
  );
}
