import { size } from "./utils/breakpoints";

const theme = {
  colors: {
    primary: "#7F38CA",
    secondary: "#FFACA7",
    headings: "#423349",
    paragraphs: "#393939",
    background: "#F8F8F8",
  },
  fonts: ["Mulish", "sans-serif", "Roboto"],
  fontSizes: {
    h1: "3rem",
    h2: "2.5rem", //40px
    h3: "2rem", //32px
    h4: "1.75rem", //28px
    h5: "1.5rem", //24px
    h6: "1.25rem",
    text: "1.125rem",
  },
  spacing: {
    text: "24px",
  },
  sections: {
    small: "60px",
    default: "90px",
    large: "180px",
    largeX: "200px",
    largeXX: "270px",
  },
  breakpoints: {
    ...size,
  },
};

export default theme;
