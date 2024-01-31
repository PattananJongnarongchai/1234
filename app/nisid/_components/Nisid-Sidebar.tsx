'use client'
import { Box, Button, Center, Container,  Link , Spacer ,Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiFillSignal } from 'react-icons/ai';
import { BsFillClipboardDataFill, BsFillPersonVcardFill } from 'react-icons/bs';
import { HiOutlineDocumentPlus } from 'react-icons/hi2';
import { MdLocationCity } from 'react-icons/md';

function NSidebar() {
    
  return (
    <>
      <Box
        display={{
          base: "none",
          sm: "none",
          md: "none",
          lg: "flex",
          xl: "flex",
          "2xl": "flex",
        }}
        spacing="2rem"
        paddingRight="1rem"
      >
        <VStack>
          <Container
            borderRadius="10"
            textAlign="left"
            className="flex-row p-4 h-full"
          >
            <Center>
              <Text>Menu</Text>
            </Center>
            <Spacer />

            <Link href="profile">
              <Button
                colorScheme="blue"
                textDecoration="none"
                mt={5}
                width={200}
              >
                <BsFillPersonVcardFill />
                ข้อมูลส่วนตัว
              </Button>
            </Link>

            <Spacer />

            <Link href="registry">
              {" "}
              <Button
                colorScheme="blue"
                textDecoration="none"
                mt={5}
                width={200}
              >
                <HiOutlineDocumentPlus />
                ลงทะเบียนคำขอฝึก
              </Button>
            </Link>

            <Spacer />

            <Link href="company">
              <Button
                colorScheme="blue"
                textDecoration="none"
                mt={5}
                width={200}
              >
                <MdLocationCity />
                สถานประกอบการณ์
              </Button>
            </Link>

            <Spacer />

            <Link href="status">
              <Button
                colorScheme="blue"
                textDecoration="none"
                mt={5}
                width={200}
              >
                <AiFillSignal />
                สถานะของคำร้อง
              </Button>
            </Link>

            <Spacer />

            <Link href="resualt">
              <Button
                colorScheme="blue"
                textDecoration="none"
                mt={5}
                width={200}
              >
                <BsFillClipboardDataFill />
                ผลการฝึกงาน
              </Button>
            </Link>
          </Container>
        </VStack>
      </Box>
    </>
  );
}

export default NSidebar


