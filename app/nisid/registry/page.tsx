'use client'
import NNavbar from "@/app/nisid/_components/Nisid-Navbar";
import NSidebar from "@/app/nisid/_components/Nisid-Sidebar";
import { PhoneIcon } from "@chakra-ui/icons";
import { Avatar, Button, ButtonGroup, Center, Container, Divider, Flex, FormControl, Grid, Input, InputGroup, InputLeftElement, Radio, RadioGroup, Select, Stack, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs,Text, Textarea, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import { BsCheckLg, BsXLg } from "react-icons/bs";

export default function page() {
  const [Values, setValues] = React.useState("1");
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
        <Center>
          <Tabs position="relative" variant="unstyled">
            <TabList>
              <Tab>เพิ่มชื่อนักศึกษา</Tab>
              <Tab>เพิ่มข้อมูลสถานประกอบการณ์</Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="blue.500"
              borderRadius="1px"
            />
            <TabPanels>
              <TabPanel>
                <Grid
                  templateColumns={{
                    base: "repeat(2, 1fr)",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(2, 1fr)",
                    xl: "repeat(2, 1fr)",
                    "2xl": "repeat(2, 1fr)",
                  }}
                  gap={6}
                  mt={2}
                >
                  <Text>ชื่อ-นามสกุุล</Text>
                </Grid>
                <InputGroup>
                  <Input placeholder="ชื่อ-นามสกุุล" />
                </InputGroup>
                <Text>รหัสนักศึกษา</Text>
                <InputGroup>
                  <Input placeholder="รหัสนักศึกษา" />
                </InputGroup>
                <Text>เบอร์โทรศัพท์</Text>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <PhoneIcon color="gray.300" />
                  </InputLeftElement>
                  <Input placeholder="เบอร์โทรศัพท์" width="50%" mb={5} />
                </InputGroup>
                <Divider />
                <Grid
                  templateColumns={{
                    base: "repeat(3, 1fr)",
                    sm: "repeat(3, 1fr)",
                    md: "repeat(3, 1fr)",
                    lg: "repeat(3, 1fr)",
                    xl: "repeat(3, 1fr)",
                    "2xl": "repeat(3, 1fr)",
                  }}
                  gap={6}
                  mt={2}
                >
                  <Text>ชื่อ-นามสกุุล</Text>
                </Grid>
                <InputGroup>
                  <Input placeholder="ชื่อ-นามสกุุล" />
                </InputGroup>
                <Text>รหัสนักศึกษา</Text>
                <InputGroup>
                  <Input placeholder="รหัสนักศึกษา" />
                </InputGroup>
                <Text>เบอร์โทรศัพท์</Text>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <PhoneIcon color="gray.300" />
                  </InputLeftElement>
                  <Input placeholder="เบอร์โทรศัพท์" width="50%" mb={5} />
                </InputGroup>
                <Divider />
                <Grid
                  templateColumns={{
                    base: "repeat(3, 1fr)",
                    sm: "repeat(3, 1fr)",
                    md: "repeat(3, 1fr)",
                    lg: "repeat(3, 1fr)",
                    xl: "repeat(3, 1fr)",
                    "2xl": "repeat(3, 1fr)",
                  }}
                  gap={6}
                  mt={2}
                >
                  <Text>ชื่อ-นามสกุุล</Text>
                </Grid>
                <InputGroup>
                  <Input placeholder="ชื่อ-นามสกุุล" />
                </InputGroup>
                <Text>รหัสนักศึกษา</Text>
                <InputGroup>
                  <Input placeholder="รหัสนักศึกษา" />
                </InputGroup>
                <Text>เบอร์โทรศัพท์</Text>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <PhoneIcon color="gray.300" />
                  </InputLeftElement>
                  <Input placeholder="เบอร์โทรศัพท์" width="50%" mb={5} />
                </InputGroup>
                <Divider />
                <ButtonGroup mt={2} mb={2}>
                  <Button colorScheme="green">
                    <BsCheckLg /> บันทึก
                  </Button>
                  <Button colorScheme="red">
                    <BsXLg />
                    ยกเลิก
                  </Button>
                </ButtonGroup>
              </TabPanel>
              <TabPanel>
                <Text>ชื่อสถานประกอบการ</Text>
                <Input placeholder="ชื่อสถานประกอบการณ์" />
                <Text>เป็นหน่วยงานของ</Text>
                <RadioGroup onChange={setValues} value={Values}>
                  <Stack direction="row">
                    <Radio value="1">รัฐบาล</Radio>
                    <Radio value="2">เอกชน</Radio>
                    <Radio value="3">รัฐวิสาหกิจ</Radio>
                    <Radio value="4">ธุรกิจส่วนตัว</Radio>
                  </Stack>
                </RadioGroup>
                <Text mt={2}>ที่อยู่</Text>
                <Textarea placeholder="ที่อยู่" />
                <Text>เบอร์โทรศัพท์</Text>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <PhoneIcon color="gray.300" />
                  </InputLeftElement>
                  <Input placeholder="เบอร์โทรศัพท์" width="50%" mb={5} />
                </InputGroup>
                <Text>ทำหนังสือถึง</Text>
                <Input placeholder="ชื่อ - นามสกุล" />
                <Text>รายละเอียดหรือลักษณะงานที่ฝึก / แผนกที่ฝึก</Text>
                <Textarea placeholder="รายละเอียดหรือลักษณะงานที่ฝึก" />
                <ButtonGroup mt={2} mb={2}>
                  <Button colorScheme="green">
                    <BsCheckLg /> บันทึก
                  </Button>
                  <Button colorScheme="red">
                    <BsXLg />
                    ยกเลิก
                  </Button>
                </ButtonGroup>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Center>
      </Grid>
    </>
  );
}
