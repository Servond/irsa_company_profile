import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function Overview() {
  return (
    <Box
      backgroundImage={
        "linear-gradient(to top, #a41515, #8b121b, #72121d, #58131c, #3f1219, #321116, #250f13, #1a0a0d, #15080a, #100507, #080304, #000000);"
      }
      pb={16}
    >
      <Stack minH={"80vh"} direction={"column"}>
        {/* <Heading
          textAlign={"center"}
          size={{ base: "xl", lg: "4xl" }}
          color={"white"}
        >
          Who we are
        </Heading> */}
        <Flex justifyContent={"center"} mb={5}>
          <Image
            height={"45vh"}
            objectPosition={"0 55%"}
            width={"full"}
            alt={"Overview Image"}
            objectFit={"cover"}
            src={"https://images.unsplash.com/photo-1498736297812-3a08021f206f"}
          />
        </Flex>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          py={16}
          direction={"column"}
        >
          <Heading
            textAlign={"center"}
            size={{ base: "lg", lg: "2xl" }}
            color={"white"}
            my={10}
          >
            <Text color={"red.600"} mb={4}>
              Step beyond games.
            </Text>{" "}
            Dive into living worlds.
          </Heading>
          <Text
            textAlign={"justify"}
            fontSize={{ base: "md", lg: "xl" }}
            color={"whiteAlpha.800"}
            width={{ base: "60vw", lg: "40vw" }}
            display={"table-row"}

            // noOfLines={[5]}
          >
            We are more than a&nbsp;video game developer – we
            are&nbsp;architects of immersive experiences. We're not satisfied
            with mere pixels and polygons. We craft living worlds that transcend
            the boundaries of consoles, phones, and PCs, fostering vibrant
            online communities that span the globe. Fueled by a collective love
            for gaming, our team of dreamers and innovators pours their hearts
            into creating top-rated titles like&nbsp;
            <Text as="b">
              <Text as="u">What The Football&nbsp;SPORTS™</Text>{" "}
            </Text>
            ,&nbsp;{" "}
            <Text as="b">
              <Text as="u">Anyone&nbsp;Battleground™</Text>{" "}
            </Text>
            , and{" "}
            <Text as="b">
              <Text as="u">Teamfight&nbsp;Races</Text>
            </Text>
            . These games showcase our commitment to pushing the boundaries of
            what's possible, delivering heart-pounding challenges, captivating
            narratives, and stunning visuals.
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
}
