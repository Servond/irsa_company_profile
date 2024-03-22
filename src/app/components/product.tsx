"use client";
import {
  Box,
  Center,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function Product() {
  const games = [
    {
      genre: "sports",
      title: "What The Football SPORTS",
      platform: ["PC"],
      image:
        "https://images.unsplash.com/photo-1615912265844-dac2071fd173?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      genre: "survival",
      title: "People Battleground",
      platform: ["PC, Mobile"],
      image:
        "https://plus.unsplash.com/premium_photo-1682124119930-9c9bc75441fc?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      genre: "racing",
      title: "Teamfight Races",
      platform: ["PC, Mobile"],
      image:
        "https://images.unsplash.com/photo-1637160969718-6618307797f4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const IMAGE =
    "https://images.unsplash.com/photo-1615912265844-dac2071fd173?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <Box
      bg={
        "linear-gradient(to bottom, #a41515, #8b121b, #72121d, #58131c, #3f1219, #321116, #250f13, #1a0a0d, #15080a, #100507, #080304, #000000)"
      }
    >
      <Heading
        px={20}
        pt={10}
        color={"whiteAlpha.800"}
        size={"2xl"}
        textAlign={{ base: "center", lg: "start" }}
        fontWeight={"bold"}
      >
        Games
      </Heading>
      <Flex
        py={20}
        justifyContent={"space-evenly"}
        flexDirection={{ base: "column", lg: "row" }}
        alignItems={"center"}
      >
        {games.map((el, idx) => (
          <Box
            key={idx}
            role={"group"}
            p={6}
            m={5}
            maxW={"330px"}
            w={"full"}
            bg={"red.800"}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
            cursor={"pointer"}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage: `url(${IMAGE})`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(35px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={el.image}
                alt="#"
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Text
                color={"red.300"}
                fontSize={"sm"}
                textTransform={"uppercase"}
              >
                {el.genre}
              </Text>
              <Heading
                fontSize={"2xl"}
                fontFamily={"body"}
                fontWeight={500}
                textAlign={"center"}
                color={"white"}
              >
                {el.title}
              </Heading>
              <Stack direction={"row"} align={"center"}>
                <Text fontWeight={800} fontSize={"xl"}>
                  {el.platform}
                </Text>
                {/* <Text textDecoration={"line-through"} color={"gray.600"}>
              $199
            </Text> */}
              </Stack>
            </Stack>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
