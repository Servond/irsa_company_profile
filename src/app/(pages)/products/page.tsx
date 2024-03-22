import {
  Avatar,
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Fragment } from "react";

export default function Products() {
  const game = [
    {
      title: "What the Football",
      genre: "Sports",
      image:
        "https://images.unsplash.com/photo-1615912265844-dac2071fd173?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 445,
    },
    {
      title: "People Battleground",
      genre: "Survival",
      image:
        "https://plus.unsplash.com/premium_photo-1682124119930-9c9bc75441fc?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Teamfight Races",
      genre: "Racing",
      image:
        "https://images.unsplash.com/photo-1637160969718-6618307797f4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 430,
    },
  ];

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
    <Box
      bg={
        "radial-gradient(circle, #bb0009, #d93c57, #e66e96, #e79ec9, #e8caeb, #d4c5dd, #c5c0cc, #b9b9b9, #878787, #585858, #2e2e2e, #000000)"
      }
      py={10}
      px={5}
    >
      {/* overview game start */}
      <Stack spacing={20} px={5} py={10}>
        {game?.map((el, idx) => (
          <Box
            w="full"
            mx="auto"
            px={{ base: "0", lg: "12" }}
            py={{ base: "0", lg: "12" }}
            border={"1px solid black"}
            bg={"white"}
            borderRadius={8}
            key={idx}
          >
            <Stack
              direction={{ base: "column-reverse", lg: "row" }}
              spacing={{ base: "0", lg: "10" }}
            >
              <Box
                width={{ lg: "sm" }}
                transform={{ base: "translateY(-50%)", lg: "none" }}
                bg={{
                  base: "red.500",
                  lg: "transparent",
                }}
                mx={{ base: "6", md: "8", lg: "0" }}
                px={{ base: "6", md: "8", lg: "0" }}
                py={{ base: "6", md: "8", lg: "12" }}
                pos={"relative"}
              >
                <Stack spacing={{ base: "8", lg: "10" }}>
                  <Stack spacing={{ base: "2", lg: "4" }}>
                    <Heading size={{ base: "xl", lg: "2xl" }} color={"black"}>
                      {el.title}
                    </Heading>
                    <Heading
                      size={{ base: "lg", lg: "xl" }}
                      fontWeight="bold"
                      color={"red.400"}
                    >
                      {el.genre}
                    </Heading>
                    <Text
                      position={"absolute"}
                      bottom={"2px"}
                      left={{ lg: 0 }}
                      right={{ base: "2px" }}
                      bg={"black"}
                      w={"fit-content"}
                      px={4}
                      fontSize={{ base: "sm", lg: "lg" }}
                      color={el?.price ? "green.100" : "whiteAlpha.800"}
                      borderRadius={20}
                    >
                      {el?.price ? `$ ${el.price}` : "Free to play"}
                    </Text>
                  </Stack>
                </Stack>
              </Box>
              <Flex flex="1" overflow="hidden">
                <Image
                  src={el.image}
                  alt="Lovely Image"
                  fallback={<Skeleton />}
                  maxH="450px"
                  maxW="100%"
                  objectFit="cover"
                  flex="1"
                  borderRadius={{ lg: "20px 65px 20px 65px" }}
                  border={{ lg: "5px groove black" }}
                />
              </Flex>
            </Stack>
          </Box>
        ))}
      </Stack>
      {/* testimonials section start */}
      <Container
        maxW="5xl"
        p={{ base: 5, md: 10 }}
        bg="white"
        borderRadius={"5%"}
      >
        <Flex justifyContent="center" mb={8}>
          <Heading as="h3" fontSize="3xl" fontWeight="bold" mb={3}>
            What's people say about us ...
          </Heading>
        </Flex>
        {testimonials.map((obj, index) => (
          <Fragment key={index}>
            <VStack spacing={3} pt={1} justifyContent="center">
              <Avatar
                size="xl"
                showBorder={true}
                borderColor="green.400"
                name="avatar"
                src={obj.img}
              />
              <Box textAlign="center">
                <Text fontWeight="bold" fontSize="lg">
                  {obj.name}
                </Text>
                <Text fontWeight="medium" fontSize="sm" color="gray.400">
                  {obj.background}
                </Text>
              </Box>
              <Box textAlign="center" maxW="4xl">
                <Text fontSize="md" fontWeight="medium">
                  {obj.word}
                </Text>
              </Box>
            </VStack>
            {testimonials.length - 1 !== index && <Divider my={6} />}
          </Fragment>
        ))}
      </Container>
    </Box>
  );
}
