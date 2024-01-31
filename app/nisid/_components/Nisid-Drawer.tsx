'use client'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  ButtonGroup,
    Box,
  Link,
  Spacer,
  Container,
  VStack,
  Center,  // Import useDisclosure from Chakra UI
} from "@chakra-ui/react";
import React, { useRef } from "react";

import { FiMenu } from "react-icons/fi";

function NDrawers() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
    
  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <FiMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>เมนู</DrawerHeader>
          <Box>
            <VStack className="flex-row p-4 h-full shadow-r-lg">
              <Container
              >
                <Spacer />

                <Link href="/nisid/profile">
                  <Button
                    colorScheme="blue"
                    textDecoration="none"
                    mt={5}
                    width={200}
                  >
                    จัดการข้อมูลส่วนตัว
                  </Button>
                </Link>

                <Spacer />

                <Link href="/nisid/registry">
                  {" "}
                  <Button
                    colorScheme="blue"
                    textDecoration="none"
                    mt={5}
                    width={200}
                  >
                    ลงทะเบียนคำร้องขอฝึก
                  </Button>
                </Link>

                <Spacer />

                <Link href="/nisid/company">
                  <Button
                    colorScheme="blue"
                    textDecoration="none"
                    mt={5}
                    width={200}
                  >
                    สถานประกอบการณ์
                  </Button>
                </Link>

                <Spacer />

                <Link href="/nisid/status">
                  <Button
                    colorScheme="blue"
                    textDecoration="none"
                    mt={5}
                    width={200}
                  >
                    สถานะของคำร้อง
                  </Button>
                </Link>

                <Spacer />

                <Link href="/nisid/resualt">
                  <Button
                    colorScheme="blue"
                    textDecoration="none"
                    mt={5}
                    width={200}
                  >
                    ผลการฝึกงาน
                  </Button>
                </Link>
              </Container>
            </VStack>
          </Box>

          <DrawerFooter justifyContent="left" ml={2} gap={12}>
            <Link href="login">
              <Button colorScheme="blue">Login</Button>
            </Link>

            <Link href="register">
              <Button colorScheme="blue">Register</Button>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NDrawers;
