import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "../teams/(components)/card";

export default function AboutUs() {
  return (
    <Box>
      <Box
        bg={
          "radial-gradient(at center bottom, rgba(6, 6, 6, 1.0), rgba(36, 32, 32, 1.0))"
        }
      >
        <Flex justifyContent={"center"} p={{ base: 5, lg: 20 }}>
          <Image
            src="https://images.unsplash.com/photo-1533619025797-cb54d7bcb5e2"
            w="100%"
            h={{ base: "600px", lg: "900px" }}
            alt="company-first-office"
            objectFit={"cover"}
            objectPosition={{ base: "center", lg: "center 80%" }}
          ></Image>
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Box
            width={{ base: "90vw", xl: "60vw" }}
            bg={"whiteAlpha.800"}
            p={10}
            borderRadius={"5"}
          >
            <Text
              fontWeight={""}
              fontSize={{ base: "lg", lg: "2xl" }}
              textIndent={"10%"}
            >
              Hailing from the heart of{" "}
              <Text as={"u"}>
                <Link
                  _hover={{ color: "red" }}
                  href="https://www.google.com/maps/d/u/0/viewer?mid=1WQ3n8GVMHH3bpJJTGsw3_U25qIM&hl=en&ll=37.517236%2C127.04732499999996&z=17"
                >
                  Seoul&#39;s
                </Link>
              </Text>{" "}
              vibrant Gangnam district, we are a passionate game developer
              dedicated to crafting engaging and innovative games that bring
              your wildest gaming dreams to life. Our mission is simple: to
              provide a platform for everyone to experience the joy and
              excitement of interactive entertainment.
            </Text>
            <Text fontSize={{ base: "lg", lg: "2xl" }} textIndent={"10%"}>
              We believe games are more than just entertainment. They&#39;re
              portals to fantastical worlds where you can be anything you
              imagine, from a fearless adventurer to a cunning strategist.
              They&#39;re challenging puzzles that test your wit and
              problem-solving skills. And they&#39;re social spaces where you
              can connect with friends from all over the world, forging bonds
              through shared experiences and friendly competition. That&#39;s
              why we focus on creating immersive experiences that cater to a
              wide range of players, from casual gamers seeking a quick escape
              to hardcore enthusiasts looking for a deep and rewarding
              challenge.
            </Text>
          </Box>
        </Flex>
        <Box>
          <Container maxW="80vh" px={{ base: 6, md: 3 }} py={10}>
            <Stack direction={{ base: "column-reverse", md: "row" }}>
              <Stack
                direction="column"
                spacing={8}
                width={{ base: "full", lg: "60%" }}
              >
                <Heading
                  as="h3"
                  size="4xl"
                  fontWeight="bold"
                  textAlign="left"
                  maxW={{ base: "100%", md: "480px" }}
                  color={"whiteAlpha.900"}
                >
                  Culture
                </Heading>
                <Text
                  color={"whiteAlpha.700"}
                  fontSize="xl"
                  textAlign="left"
                  lineHeight="1.375"
                  fontWeight="300"
                  // maxW={{ base: "100%", md: "470px" }}
                >
                  Our development process is driven by a core value we call
                  <Text as="b" color={"red.400"}>
                    {" "}
                    unleashing dreams.
                  </Text>{" "}
                  We actively seek out fresh ideas and innovative concepts,
                  fostering a collaborative environment where creativity
                  thrives. We believe in the power of imagination, and we&#39;re
                  committed to transforming your dream game into a reality.
                </Text>
              </Stack>
              <Box width={{ base: "full", lg: "40%" }} ml={{ base: 0, md: 5 }}>
                <Image
                  w="full"
                  h="100%"
                  minW={{ base: "auto", md: "30rem" }}
                  objectFit="cover"
                  src="https://images.unsplash.com/photo-1588591795084-1770cb3be374"
                  rounded="md"
                  alt="culture_nevergone"
                  fallback={<Skeleton />}
                />
              </Box>
            </Stack>
          </Container>
        </Box>
        <Box width={"70vw"} mx={"auto"}>
          <Heading
            as="h1"
            size={"4xl"}
            color={"whiteAlpha.800"}
            textAlign={"center"}
            my={20}
          >
            Meet Our Team
          </Heading>
          <Card />
        </Box>
      </Box>
    </Box>
  );
}
