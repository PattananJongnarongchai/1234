import NNavbar from "@/app/nisid/_components/Nisid-Navbar";
import NSidebar from "@/app/nisid/_components/Nisid-Sidebar";
import { Button, Center, Container, Flex, Grid, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

export default function page() {
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
        <Container>
          <Center>สถานะของคำร้อง</Center>

          <TableContainer>
            <Table>
              <TableCaption>สถานประกอบการณ์</TableCaption>
              <Thead>
                <Tr>
                  <Th>ที่</Th>
                  <Th>เรียน</Th>
                  <Th>ลำดับ</Th>
                  <Th>การตอบกลับ</Th>
                  <Th>รหัสนักศึกษา</Th>
                  <Th>ชื่อ - สกุล</Th>
                  <Th>หลักสูตร</Th>
                  <Th>จำนวน</Th>
                  <Th>สถานที่ฝึกงาน</Th>
                  <Th>เลขหนักสือถึง</Th>
                  <Th>ตัวเลือก</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>1</Td>
                  <Td>ผู้จัดการ</Td>
                  <Td>1</Td>
                  <Td>รับ</Td>
                  <Td>63046680112</Td>
                  <Td>นาย ก ไก้่</Td>
                  <Td>วิศวกรรมคอมพิวเตอร์</Td>
                  <Td>1</Td>
                  <Td>บริษัท ต เต่า</Td>
                  <Td>1234</Td>
                  <Td>Print</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Container>
      </Grid>
    </>
  );
}
