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
  Spacer, // Import useDisclosure from Chakra UI
} from "@chakra-ui/react";
import React, { useRef } from "react";
import Navbar from "../nisid/_components/Nisid-Navbar";
import Sidebar from "../nisid/_components/Nisid-Sidebar";
import { FiMenu } from "react-icons/fi";

function GDrawers() {
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
          <DrawerFooter>
            <Link href="login">
              <Button colorScheme="blue">Login</Button>
            </Link>
            <Spacer />
            <Link href="register">
              <Button colorScheme="blue">Register</Button>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default GDrawers;
