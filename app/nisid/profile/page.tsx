'use client'
import NNavbar from "@/app/nisid/_components/Nisid-Navbar";
import NSidebar from "@/app/nisid/_components/Nisid-Sidebar";
import { PhoneIcon } from "@chakra-ui/icons";
import { Avatar, Button, ButtonGroup, Center, Container, Divider, Flex, FormControl, Grid, Input, InputGroup, InputLeftAddon, InputLeftElement, Radio, RadioGroup, Select, Spacer, Stack, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text, Textarea, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import { AiTwotoneSave } from "react-icons/ai";
import { BsCheckLg, BsXLg } from "react-icons/bs";



export default function page() {
  const [Values , setValues] = React.useState('1')
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
            <Center>
              <TabList>
                <Tab>ข้อมูลนักศึกษา</Tab>
              </TabList>
            </Center>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="blue.500"
              borderRadius="1px"
            />
            <TabPanels>
              <TabPanel>
                <Container
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                  mt={5}
                  width={900}
                >
                  <Center>
                    <Text fontSize={20}>ข้อมูลส่วนตัวของนักศึกษา</Text>
                  </Center>
                  <Center>
                    <Wrap>
                      <WrapItem>
                        <Avatar
                          size="2xl"
                          name="Segun Adebayo"
                          src="https://bit.ly/sage-adebayo"
                        />{" "}
                      </WrapItem>
                    </Wrap>
                  </Center>
                  <Text>ชื่อ</Text>
                  <InputGroup>
                    <InputLeftAddon>
                      <Select>
                        <option value="1">นาย</option>
                        <option value="2">นาง</option>
                        <option value="3">นางสาว</option>
                      </Select>
                    </InputLeftAddon>
                    <Input placeholder="ชื่อ" width="65%" />
                  </InputGroup>
                  <Text>นามสกุล</Text>
                  <Input placeholder="นามสกุล" width="65%" />
                  <InputGroup></InputGroup>
                  <Text>รหัสนักศึกษา</Text>
                  <Input placeholder="รหัสนักศึกษา" width="65%" />
                  <Text>เบอร์โทรศัพท์</Text>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <PhoneIcon color="gray.300" />
                    </InputLeftElement>
                    <Input type="tel" placeholder="เบอร์โทรศัพท์" width="65%" />
                  </InputGroup>
                  <FormControl gap={2}>
                    <Text>สาขา</Text>
                    <Select width="50%">
                      <option value="1">สาขาที่ 1</option>
                      <option value="1">สาขาที่ 2</option>
                      <option value="1">สาขาที่ 3</option>
                    </Select>

                    <Text>หลักสูตร</Text>
                    <Select width="50%">
                      <option value="1">หลักสูตรที่ 1</option>
                      <option value="1">หลักสูตรที่ 2</option>
                      <option value="1">หลักสูตรที่ 3</option>
                    </Select>
                  </FormControl>
                  <Text>มีความประสงค์ออกหนังสือ</Text>
                  <RadioGroup onChange={setValues} value={Values}>
                    <Stack direction="column">
                      <Radio value="1">
                        ขอความอนุเคราะห์ให้นักศึกษาฝึกประสบการณ์วิชาชีพ
                        (กรณีไม่ได้ทำงาน)
                      </Radio>
                      <Radio value="2">
                        ขอความอนุเคราะห์ให้ประเมินผลการฝึกประสบการณ์วิชาชีพ
                        (กรณีมีงานทำแล้ว)
                      </Radio>
                    </Stack>
                  </RadioGroup>
                  <ButtonGroup mt={2} mb={2}>
                    <Button colorScheme="green">
                      <BsCheckLg /> บันทึก
                    </Button>
                    <Button colorScheme="red">
                      <BsXLg />
                      ยกเลิก
                    </Button>
                  </ButtonGroup>
                </Container>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Center>
      </Grid>
    </>
  );
}
