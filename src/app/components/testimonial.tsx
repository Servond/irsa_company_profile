"use client";

import {
  Avatar,
  Box,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import { FaQuoteRight } from "react-icons/fa";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Steve Mortimer",
      word: "You can tell the people behind these games truly care. The attention to detail is incredible, and they always seem to be pushing the boundaries of what's possible. What The Football SPORTS™ feels so real, it's like I'm actually on the pitch!",
      background: "Nottingham Forest bench player",
      img: "https://img.freepik.com/free-photo/close-up-confident-male-employee-white-collar-shirt-smiling-camera-standing-self-assured-against-studio-background_1258-26761.jpg?",
    },
    {
      name: "Joseph Fielding",
      word: "These games are constantly evolving, Teamfight Races has reignited my love for racing games! The customization options are incredible, and the tracks are so well-designed – every corner feels like a challenge. I can't wait to see what new content they release next.",
      background: "Vin Diesel brother",
      img: "https://img.freepik.com/free-photo/image-handsome-caucasian-man-party-suit-smiling-pleased-attend-formal-event-standing-white-background_1258-64650.jpg",
    },
    {
      name: "Jeanette Nottingham",
      word: "Never Gone games are always top-notch. They offer something for everyone, whether you're a casual player or a hardcore gamer.",
      background: "Veteran hardcore gamer",
      img: "https://img.freepik.com/free-photo/close-up-portrait-asian-woman-thinking-looking-aside-pondering-making-decision-standing-white-background_1258-89347.jpg",
    },
  ];

  return (
    <Box bg={"black"} minH={"50vh"}>
      <Heading
        px={20}
        pt={10}
        color={"whiteAlpha.800"}
        size={"2xl"}
        textAlign={{ base: "center", lg: "start" }}
        fontWeight={"bold"}
      >
        What&#39;s people say about us?
      </Heading>
      <Container maxW="full" p={{ base: 5, md: 10 }}>
        <SimpleGrid
          columns={{ base: 1, lg: 3 }}
          spacing={5}
          mb={5}
          justifyItems={"center"}
        >
          {testimonials?.map((el, idx) => (
            <Stack
              max-height={"80em"}
              spacing={4}
              p={{ base: 4, sm: 8 }}
              bg={"white"}
              borderTop="2px solid"
              borderColor="red.400"
              borderBottomLeftRadius="lg"
              borderBottomRightRadius="lg"
              maxW="25rem"
              m="10"
              boxShadow="lg"
              alignItems={"center"}
              key={idx}
              position={"relative"}
            >
              <Icon as={FaQuoteRight} w={8} h={8} color="red.400" />
              <Text p={5} color="gray.500">
                {el.word}
              </Text>
              <Stack alignItems="center" position={"absolute"} bottom={5}>
                <Avatar name="avatar" src={el.img} size="lg" />
                <Box textAlign="center">
                  <Text fontWeight="bold" fontSize="lg">
                    {el.name}
                  </Text>
                  <Text fontSize="md" color="gray.500">
                    {el.background}
                  </Text>
                </Box>
              </Stack>
              <Box height={24}>{""}</Box>
            </Stack>
            // </Center>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
