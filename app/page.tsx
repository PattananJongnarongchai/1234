import Image from 'next/image'
import Navbar from './_components/Guest-Navbar'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Center, Container, Divider, Flex, Grid, Heading, Stack, Text } from '@chakra-ui/react';


export default function Home() {
 
  return (
    <>
      <Navbar />
      <Center>
        <Text mt={2} fontSize="40px">
          สถานประกอบการณ์ที่มีในระบบ
        </Text>
      </Center>
      <Center>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(3, 1fr)",
            "2xl": "repeat(3, 1fr)",
          }}
          gap={6}
          mt={2}
        >
          <Card maxW="sm" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md">สถานประกอบการณ์ ที่ 1</Heading>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam fugit ad cupiditate odio sequi quia quaerat repellat
                  reprehenderit, voluptate nisi molestiae, reiciendis ea
                  voluptas animi deserunt mollitia. Quo, nemo quisquam?
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  รับจำนวน 2 คน
                </Text>
              </Stack>
            </CardBody>
           
            <Center>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    ดูรายละเอียด
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Center>
          </Card>
          <Card maxW="sm" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md">สถานประกอบการณ์ ที่ 2</Heading>
                <Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Culpa perspiciatis quibusdam distinctio unde eos? Praesentium
                  consectetur natus magni neque ullam culpa blanditiis obcaecati
                  accusamus. Pariatur similique nesciunt dolorem. Dignissimos,
                  laudantium?
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  รับจำนวน 1 คน
                </Text>
              </Stack>
            </CardBody>
            
            <Center>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    ดูรายละเอียด
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Center>
          </Card>
          <Card maxW="sm" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md">สถานประกอบการณ์ ที่ 3</Heading>
                <Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Iusto temporibus vitae ex illo reiciendis fugit unde vero
                  quae, quidem esse voluptatem itaque quo natus accusantium
                  magni adipisci dignissimos ea! Voluptates aperiam accusantium
                  dolore minus tenetur cumque ut perferendis molestiae, quaerat
                  maxime accusamus corporis nemo illum nam eum commodi,
                  repudiandae adipisci?
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  รับจำนวน 3 คน
                </Text>
              </Stack>
            </CardBody>
            
            <Center>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    ดูรายละเอียด
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Center>
          </Card>
          <Card maxW="sm" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md">สถานประกอบการณ์ ที่ 4</Heading>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias, magni earum? Vitae quae accusamus illum dolorem
                  dolor ipsam non odit aliquam omnis quibusdam unde placeat
                  minus eius quo nobis explicabo suscipit, sint blanditiis eum
                  rem itaque voluptatum vero adipisci? Error odit in veritatis
                  fuga porro sit corporis minus est magni.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  รับจำนวน 1 คน
                </Text>
              </Stack>
            </CardBody>
            
            <Center>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    ดูรายละเอียด
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Center>
          </Card>
          <Card maxW="sm" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md">สถานประกอบการณ์ ที่ 5</Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  sunt, cumque voluptate officia labore laudantium architecto
                  error incidunt provident corporis. Fuga nesciunt vitae
                  veritatis ea dolor, quisquam illum doloribus saepe!
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  รับจำนวน 2 คน
                </Text>
              </Stack>
            </CardBody>
           
            <Center>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    ดูรายละเอียด
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Center>
          </Card>
        </Grid>
      </Center>
    </>
  );
}
