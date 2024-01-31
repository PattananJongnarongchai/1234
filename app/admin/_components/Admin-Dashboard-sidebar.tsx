"use client";
import {
  Button,
  Center,
  Container,
  Box,
  Link,
  Slide,
  Spacer,
  Text,
  VStack,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { AiFillSignal, AiOutlineDashboard } from "react-icons/ai";
import { BsPersonVcardFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineLocationCity } from "react-icons/md";

function ADashSidebar() {
  return (
    <>
      <Box
        display={{
          base: "none",
          sm: "none",
          md: "none",
          lg: "none",
          xl: "flex",
          "2xl": "flex",
        }}
        spacing="2rem"
        paddingRight="25rem"
      >
        <VStack
          className="flex-row p-4 h-full shadow-r-lg"
          borderRadius="10px"
          border="1px"
        >
          <Container>
            <Center>
              <Text>Menu</Text>
            </Center>
            <Tooltip hasArrow label="แดชบอร์ด">
              <Link href="/admin/dashboard">
                <IconButton
                  icon={<AiOutlineDashboard />}
                  colorScheme="blue"
                  textDecoration="none"
                  mt={5}
                >
                  แดชบอร์ด
                </IconButton>
              </Link>
            </Tooltip>
            <Spacer />
            <Tooltip hasArrow label="ข้อมูลนักศึกษา">
              <Link href="/admin/nisid-infomation">
                <IconButton
                  icon={<BsPersonVcardFill />}
                  colorScheme="blue"
                  textDecoration="none"
                  mt={5}
                >
                  ข้อมูลของนักศึกษา
                </IconButton>
              </Link>
            </Tooltip>
            <Spacer />
            <Tooltip hasArrow label="สถานะคำร้องของนักศึกษา">
              <Link href="/admin/nidis-status">
                <IconButton
                  icon={<AiFillSignal />}
                  colorScheme="blue"
                  textDecoration="none"
                  mt={5}
                >
                  สถานะของคำร้องของนักศึกษา
                </IconButton>
              </Link>
            </Tooltip>
            <Spacer />
            <Tooltip hasArrow label="สถานประกอบการณ์">
              <Link href="/admin/location">
                <IconButton
                  icon={<MdOutlineLocationCity />}
                  colorScheme="blue"
                  textDecoration="none"
                  mt={5}
                >
                  สถานประกอบการณ์
                </IconButton>
              </Link>
            </Tooltip>
            <Spacer />
            <Tooltip hasArrow label="จัดการปีการศึกษา">
              <Link href="/admin/manage-year">
                <IconButton
                  icon={<FaCalendarAlt />}
                  colorScheme="blue"
                  textDecoration="none"
                  mt={5}
                >
                  จัดการปีการศึกษา
                </IconButton>
              </Link>
            </Tooltip>
          </Container>
        </VStack>
      </Box>
    </>
  );
}

export default ADashSidebar;
