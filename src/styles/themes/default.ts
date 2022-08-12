import { extendTheme } from "@chakra-ui/react";

const defaultTheme = extendTheme({
  colors: {
    gray: {
      50: "#FFFFFF",
      100: "#FAFAFA",
      200: "#F3F2F2",
      300: "#EDEDED",
      400: "#E6E5E5",
      500: "#D7D5D5",
      600: "#8D8686",
      700: "#574F4D",
      800: "#403937",
      900: "#272221",
    },
    yellow: {
      100: "#F1E9C9",
      500: "#DBAC2C",
      900: "#C47F17",
    },
    purple: {
      100: "#EBE5F9",
      500: "#8047F8",
      900: "#4B2995",
    },
  },
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Baloo 2, sans-serif",
  },
  fontSizes: {
    "5xl": "3rem",
    "4xl": "2rem",
    "3xl": "1.5rem",
    "2xl": "1.25rem",
    xl: "1.125rem",
    lg: "1rem",
    md: "0.875rem",
    sm: "0.75rem",
    xs: "0.625rem",
  },
  styles: {
    global: {
      body: {
        fontSize: "1rem",
        lineHeight: "130%",
        bg: "gray.100",
        color: "gray.700",
      },
      "h1, h2": {
        color: "gray.900",
        fontFamily: "'Baloo 2'",
        fontWeight: "900",
        lineHeight: "130%",
      },
      button: {
        borderRadius: "8px",
      },
    },
  },
  textStyles: {
    titleM: {
      fontSize: "3xl",
      color: "gray.800",
      fontFamily: "'Baloo 2'",
      fontWeight: "900",
    },
    titleS: {
      fontSize: "2xl",
      color: "gray.800",
      fontFamily: "'Baloo 2'",
      fontWeight: "900",
    },
    titleXs: {
      fontSize: "xl",
      color: "gray.800",
      fontFamily: "'Baloo 2'",
      fontWeight: "900",
    },
    titleL: {
      fontSize: "4xl",
      fontFamily: "'Baloo 2'",
      fontWeight: "900",
    },
    regularL: {
      fontSize: "2xl",
      color: "gray.800",
      fontFamily: "'Roboto'",
    },
    regularM: {
      fontSize: "lg",
      color: "gray.800",
      fontFamily: "'Roboto'",
    },
    regularS: {
      fontSize: "md",
      color: "gray.700",
      fontFamily: "'Roboto'",
    },
    buttonS: {
      fontSize: "sm",
      color: "gray.700",
      fontFamily: "'Roboto'",
      lineHeight: "160%",
    },
    buttonG: {
      fontSize: "md",
      color: "white",
      fontFamily: "'Roboto'",
      lineHeight: "160%",
      height: "2.875rem",
    },
    tag: {
      fontSize: "xs",
      fontFamily: "'Roboto'",
      fontWeight: "bold",
    },
    boldM: {
      fontSize: "lg",
      fontWeight: "bold",
      fontFamily: "'Roboto'",
    },
    boldL: {
      fontSize: "xl",
      fontWeight: "bold",
      fontFamily: "'Roboto'",
    },
  },
});

export { defaultTheme };
