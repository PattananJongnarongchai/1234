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
        <Container borderRadius="100px">
          <Center>
            <Text fontSize={50}>Teacher Dashboard</Text>
          </Center>
        </Container>
      </Grid>
    </>
  );
}
