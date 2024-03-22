import { Box, HStack, Heading } from "@chakra-ui/react";
import React from "react";
import Card from "./(components)/card";

export default async function Teams() {
  return (
    <Box
      p={5}
      bg={
        "linear-gradient(to bottom, #e53e3e, #aa2d3b, #702130, #3a161f, #000000)"
      }
      minH={"85vh"}
    >
      <Heading
        as="h1"
        size={"4xl"}
        color={"whiteAlpha.800"}
        textAlign={"center"}
        backgroundImage={
          "linear-gradient(to right bottom, #eb212b, #fd497a, #f779bb, #e5a6e8, #d8cbfd, #bec6eb, #afbed5, #a8b4be, #79888f, #4f5e62, #283739, #001413)"
        }
        backgroundClip={"text"}
        my={10}
      >
        Meet Our Team
      </Heading>
      <Box width={"70vw"} mx="auto">
        <Card />
      </Box>
    </Box>
  );
}
