import NNavbar from "@/app/nisid/_components/Nisid-Navbar";
import NSidebar from "@/app/nisid/_components/Nisid-Sidebar";
import { Center, Container, Flex, Grid } from "@chakra-ui/react";
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
          <Center>ผลการฝึกงาน</Center>
        </Container>
      </Grid>
    </>
  );
}
