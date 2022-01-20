import { size } from "./utils/breakpoints";

const theme = {
  colors: {
    primary: "#7F38CA",
    headings: "#423349",
    paragraphs: "#393939",
  },
  fonts: ["Mulish", "sans-serif", "Roboto"],
  fontSizes: {
    h1: "3rem",
    h2: "2.5rem",
    h3: "2rem",
    h4: "1.75rem",
    h5: "1.5rem",
    h6: "1.25rem",
    text: "1.125rem",
  },
  sections: {
    small: "60px",
    default: "90px",
    large: "180px",
  },
  breakpoints: {
    ...size,
  },
};

export default theme;
