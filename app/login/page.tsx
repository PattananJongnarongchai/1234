'use client'
import React from 'react'
import Navbar from '../nisid/_components/Nisid-Navbar'
import { Button, Center, Checkbox, Container, Flex, Grid, Input, InputGroup, InputLeftElement, Spacer, Text } from '@chakra-ui/react'
import Sidebar from '../nisid/_components/Nisid-Sidebar'
import { BsPersonFill, BsKeyFill } from 'react-icons/bs';
import axios from 'axios'
async function login(username: any, password: any) {
  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("การเข้าระบบล้มเหลว");
    }

    const data = await response.json();
    return data; // นี่อาจเป็น token หรือข้อมูลผู้ใช้ที่ได้จากการเข้าระบบ
  } catch (error) {
    throw new Error("การเข้าระบบล้มเหลว");
  }
}

export default function Page() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = async () => {
    try {
      const userData = await login(username, password);
      console.log("เข้าระบบสำเร็จ", userData);

      // ทำสิ่งที่คุณต้องการหลังจากการเข้าระบบ เช่น นำไปยังหน้าหลัก โดยใช้ React Router
      // history.push("/หน้าหลัก");
    } catch (error) {
      console.error("เข้าระบบล้มเหลว", error.message);
      // แสดงข้อความผิดพลาดหรือทำการ redirect ไปยังหน้า error ตามความเหมาะสม
    }
  };

  return (
    <div>
      {/* ... (existing JSX code) */}
      <Text>Username</Text>
      <InputGroup>
        <Input
          placeholder="Username"
          width="md"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputLeftElement>
          <BsPersonFill />
        </InputLeftElement>
      </InputGroup>
      <Text>Password</Text>
      <InputGroup size="md">
        <Input
          width="md"
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputLeftElement>
          <BsKeyFill />
        </InputLeftElement>
      </InputGroup>
      <Spacer />
      <Checkbox onChange={() => setShowPassword(!showPassword)}>
        แสดงรหัสผ่าน
      </Checkbox>
      <Spacer />
      <Button mt={2} colorScheme="green" type="submit" onClick={handleLogin}>
        เข้าสู่ระบบ
      </Button>
      {/* ... (existing JSX code) */}
    </div>
  );
}