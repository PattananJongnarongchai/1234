import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Hide,
  Show,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import MDrawers from "./Admin-Drawer";
import Link from "next/link";

function ANavbar() {
  return (
    <>
      <Flex
        className="shadow-lg"
        minWidth="max-content"
        alignItems="center"
        gap="2"
      >
        <Box p={2}>
          <Link href="/admin/home">InterSystem</Link>
        </Box>
        <Spacer />
        <Center
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
          <ButtonGroup gap={2} p={2}>
            <Link href="../login">
              <Button colorScheme="blue">เข้าสู่ระบบ</Button>
            </Link>

            <Link href="../register">
              <Button colorScheme="blue">สมัครสมาชิก</Button>
            </Link>
          </ButtonGroup>
        </Center>
        <Flex
          display={{
            base: "flex",
            sm: "flex",
            md: "flex",
            lg: "none",
            xl: "none",
            "2xl": "none",
          }}
        >
          <ButtonGroup gap={2} p={2}>
            <MDrawers />
          </ButtonGroup>
        </Flex>
      </Flex>
    </>
  );
}

export default ANavbar;
