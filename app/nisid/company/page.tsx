
import NNavbar from "@/app/nisid/_components/Nisid-Navbar";
import NSidebar from "@/app/nisid/_components/Nisid-Sidebar";
import { Center, Container, Flex, Grid, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
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
      <Container w="fit-content" h="fit-content">
        <Center>
          
            <TableContainer>
              <Table>
                <TableCaption>สถานประกอบการณ์</TableCaption>
                <Thead>
                  <Tr>
                  <Th>ชื่อสถานประกอบการ</Th>
                  <Th>หน่วยงาน</Th>
                  <Th>ที่อยู่</Th>
                  <Th>เบอร์โทรศัพท์</Th>
                  <Th>ทำหนังสือถึง(ชื่อ-นามสกุล)</Th>
                  <Th>ตำแหน่ง</Th>
                    <Th>ลักษณะงาน</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>บริษัท ก.</Td>
                    <Td>รัฐบาล</Td>
                    <Td>
                      82/5 หมู่6 อำเภอลับแล ตำบลทุ่งยั้ง จังหวัดอุตรดิตถ์ 53210
                    </Td>
                    <Td>0643125766</Td>
                    <Td>นายต เต่า</Td>
                    <Td>ฝ่ายบุคคล</Td>
                    <Td>IT Support</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
         
          </Center>
        </Container>
      </Grid>
    </>
  );
}
