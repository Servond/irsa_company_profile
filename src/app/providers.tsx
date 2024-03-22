// app/providers.tsx
"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["cyrillic"] });
const theme = extendTheme({
  fonts: {
    body: montserrat.style.fontFamily,
    heading: montserrat.style.fontFamily,
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
