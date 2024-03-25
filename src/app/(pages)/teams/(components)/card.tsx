import {
  Box,
  Flex,
  HStack,
  Heading,
  Img,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MdMail } from "react-icons/md";

type nameType = {
  title: string;
  first: string;
  last: string;
};

type imgType = {
  large: string;
  medium: string;
  thumbnail: string;
};

type resultType = {
  gender: string;
  name: nameType;
  email: string;
  phone: string;
  cell: string;
  picture: imgType;
};

async function getData() {
  const url =
    "https://randomuser.me/api/?results=4&inc=gender,name,email,phone,cell,picture";
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/teams`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Card() {
  const res = await getData();
  const { results: person } = res;
  const positions = ["CEO", "CTO", "CFO", "CMO"];
  return (
    <SimpleGrid
      templateColumns={{
        base: "repeat(1, 2fr)",
        md: "repeat(2, 2fr)",
        "2xl": "repeat(4, 2fr)",
      }}
    >
      {person.map((persons: resultType, idx: number) => (
        <Box
          w="xs"
          rounded={"sm"}
          my={5}
          mx={"auto"}
          // mx={[0, 5]}
          overflow={"hidden"}
          bg="white"
          border={"1px"}
          borderColor="black"
          boxShadow={"6px 6px 0 black"}
          key={idx}
        >
          <Box h={"200px"} borderBottom={"1px"} borderColor="black">
            <Img
              src={persons?.picture?.large}
              roundedTop={"sm"}
              objectFit="cover"
              h="full"
              w="full"
              alt={"Blog Image"}
            />
          </Box>
          <Box p={4}>
            <Box
              bg="black"
              display={"inline-block"}
              px={2}
              py={1}
              color="white"
              mb={2}
            >
              <Text fontSize={"xs"} fontWeight="medium">
                {positions[idx]}
              </Text>
            </Box>
            <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
              {`${persons?.name?.first} ${persons?.name?.last}`}
            </Heading>
            <Text color={"gray.500"} noOfLines={2}>
              Phone: {persons?.cell}
            </Text>
          </Box>
          <HStack borderTop={"1px"} color="black">
            <Flex
              p={4}
              alignItems="center"
              justifyContent={"space-between"}
              roundedBottom={"sm"}
              w={"85%"}
            >
              <Text fontSize={"sm"} fontWeight={"semibold"}>
                {persons?.email}
              </Text>
            </Flex>
            <Flex
              p={4}
              alignItems="center"
              justifyContent={"space-between"}
              roundedBottom={"sm"}
              borderLeft={"1px"}
            >
              <MdMail />
            </Flex>
          </HStack>
        </Box>
        // </Box>
      ))}
    </SimpleGrid>
  );
}
