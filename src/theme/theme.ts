import { extendTheme } from "@chakra-ui/react";

const babyPoop = {
  nipplePink: "#F098C6",
  babyDiarrhea: "#655C31",
  jaundiceYellow: "#FEDB1D",
  banalityBeige: "#F9E1A3",
  deathBlack: "#000000",
};

export const brandColors = {
  1: babyPoop.nipplePink,
  2: babyPoop.babyDiarrhea,
  3: babyPoop.jaundiceYellow,
  4: babyPoop.banalityBeige,
  5: babyPoop.deathBlack,
};

export const yeetTheme = extendTheme({
  fonts: {
    body: `'Poppins', sans-serif`,
    heading: `'Poppins', sans-serif`,
  },
  fontSizes: {
    "7xl": "7.5rem",
    "8xl": "8.75rem",
    "9xl": "12.5rem",
  },
  colors: {
    brandColors,
  },
  styles: {
    global: {
      body: {
        color: brandColors[1],
      },
      a: {
        color: brandColors[1],
        textDecoration: "underline",
      },
      p: {
        color: brandColors[1],
      },
    },
  },
});
