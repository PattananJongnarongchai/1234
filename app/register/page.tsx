'use client'
import React from 'react'
import NNavbar from '../nisid/_components/Nisid-Navbar';
import { Center, Container, Flex , Input , Text , Spacer, Button, Checkbox, InputGroup, InputLeftElement, Grid, Hide } from '@chakra-ui/react';
import NSidebar from '../nisid/_components/Nisid-Sidebar';
import { BsKeyFill, BsPersonFill } from 'react-icons/bs';

export default function page() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
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

        <Container mt={5}>
          <Center>Register Page</Center>
          <Text>Username</Text>
          <InputGroup>
            <Input placeholder="Username" width="md" />
            <InputLeftElement>
              <BsPersonFill />
            </InputLeftElement>
          </InputGroup>
          <Text>Password</Text>
          <InputGroup size="md">
            <Input
              width="md"
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputLeftElement>
              <BsKeyFill />
            </InputLeftElement>
          </InputGroup>
          <Text>Confirm Password</Text>
          <InputGroup size="md">
            <Input
              width="md"
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputLeftElement>
              <BsKeyFill />
            </InputLeftElement>
          </InputGroup>
          <Spacer />
          <Checkbox>บันทึกรหัสผ่าน</Checkbox>
          <Spacer />
          <Button mt={2} colorScheme="green" type="submit">
            เข้าสู่ระบบ
          </Button>
        </Container>
      </Grid>
    </>
  );
}
