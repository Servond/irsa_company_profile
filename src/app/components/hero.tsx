"use client";

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.600",
                zIndex: -1,
              }}
            >
              Unleash
            </Text>
            <br />{" "}
            <Text color={"red.500"} as={"span"}>
              Your Dreams
            </Text>{" "}
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg", lg: "2xl" }}
            color={"gray.500"}
          >
            We're a band of dreamers and innovators fueled by a love for games.
            We pour our hearts into crafting immersive experiences that
            transport you to new realities.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"red.400"}
              color={"white"}
              _hover={{
                bg: "red.500",
              }}
              fontSize={{ base: "md", md: "xl" }}
            >
              Start Now
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Hero Image"}
          objectFit={"cover"}
          src={"https://images.unsplash.com/photo-1542751371-adc38448a05e"}
        />
      </Flex>
    </Stack>
  );
}
