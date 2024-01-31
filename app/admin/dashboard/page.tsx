import NNavbar from "@/app/admin/_components/Admin-Dashboard-Navbar";
import NSidebar from "@/app/admin/_components/Admin-Dashboard-sidebar";
import { Card, CardBody, CardHeader, Center, Container, Divider, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";

export default function page() {
  return (
    <>
      <NNavbar />
      <Grid
        templateColumns="repeat(3, 1fr)"
        templateRows="repeat(2 , 1fr)"
        gap={2}
        mt={2}
      >
        <GridItem rowSpan={2} colSpan={1}>
          <NSidebar />
        </GridItem>
        <Center>
          <GridItem rowSpan={2} colSpan={2}>
            <Container>
              <Text textAlign="center">Dashboard</Text>
              <Grid templateColumns="repeat(3 , 1fr)" gap={2}>
                <Card>
                  <CardHeader>Lorem ipsum dolor sit amet.</CardHeader>
                  <Divider />
                  <CardBody>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi, harum?
                  </CardBody>
                </Card>
                <Card>
                  <CardHeader>Lorem ipsum dolor sit amet.</CardHeader>
                  <Divider />
                  <CardBody>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi, harum?
                  </CardBody>
                </Card>
                <Card>
                  <CardHeader>Lorem ipsum dolor sit amet.</CardHeader>
                  <Divider />
                  <CardBody>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi, harum?
                  </CardBody>
                </Card>
              </Grid>
            </Container>
          </GridItem>
        </Center>
      </Grid>
    </>
  );
}
