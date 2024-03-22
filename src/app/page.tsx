import { Box, Heading } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Overview from "./components/overview";
import Product from "./components/product";
import Testimonial from "./components/testimonial";

const HeroSection = dynamic(() => import("./components/hero"));

export default function Home() {
  return (
    <Box>
      <Box>
        <HeroSection />
      </Box>
      <Box>
        <Overview />
      </Box>
      <Box>
        <Product />
      </Box>
      <Box>
        <Testimonial />
      </Box>
    </Box>
  );
}
