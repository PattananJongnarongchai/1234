import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Hide,
  Show,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import MDrawers from "./Manager-Drawer";
import Link from "next/link";

function MNavbar() {
  return (
    <>
      <Flex
        className="shadow-lg"
        minWidth="max-content"
        alignItems="center"
        gap="2"
      >
        <Box p={2}>
          <Link href="/">InterSystem</Link>
        </Box>
        <Spacer />
        <Hide below="lg">
          <ButtonGroup gap={2} p={2}>
            <Link href="../login">
              <Button colorScheme="blue">เข้าสู่ระบบ</Button>
            </Link>

            <Link href="../register">
              <Button colorScheme="blue">สมัครสมาชิก</Button>
            </Link>
          </ButtonGroup>
        </Hide>
        <Show below="lg">
          <ButtonGroup gap={2} p={2}>
            <MDrawers />
          </ButtonGroup>
        </Show>
      </Flex>
    </>
  );
}

export default MNavbar;
