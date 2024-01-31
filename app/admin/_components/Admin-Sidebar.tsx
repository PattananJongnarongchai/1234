"use client";
import { Button, Center, Container, Box, Link, Slide, Spacer, Text, VStack } from "@chakra-ui/react";
import React from "react";

function ASidebar() {
  return (
    <>
      <Box
        display={{
          base: "none",
          sm: "none",
          md: "none",
          lg: "flex",
          xl: "flex",
          "2xl": "flex",
        }}
        spacing="2rem"
        paddingRight="1rem"
      >
        <VStack className="flex-row p-4 h-full shadow-r-lg">
          <Container>
            <Center>
              <Text>Menu</Text>
            </Center>
            
              <Link href="/admin/dashboard"><Button colorScheme="blue" textDecoration="none" mt={5} width={220}>แดชบอร์ด</Button></Link>
            
            <Spacer />

            
              <Link href="/admin/nisid-infomation"><Button colorScheme="blue" textDecoration="none" mt={5} width={220}>ข้อมูลของนักศึกษา</Button></Link>
            
            <Spacer />

            
              <Link href="/admin/nidis-status"><Button colorScheme="blue" textDecoration="none" mt={5} width={220}>สถานะของคำร้องของนักศึกษา</Button></Link>
            
            <Spacer />
            
              <Link href="/admin/location"><Button colorScheme="blue" textDecoration="none" mt={5} width={220}>สถานประกอบการณ์</Button></Link>
            
            <Spacer />
            
              <Link href="/admin/manage-year"><Button colorScheme="blue" textDecoration="none" mt={5} width={220}>จัดการปีการศึกษา</Button></Link>
            
          </Container>
        </VStack>
      </Box>
    </>
  );
}

export default ASidebar;
