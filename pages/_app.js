import { createGlobalStyle, ThemeProvider } from "styled-components";
//import "../styles/globals.css";
import Head from "next/head";
import theme from "../theme";
import Layout from "../layouts/index";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Mulish', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: #393939;
  }

  a{
    color: inherit;
    text-decoration: none;
  }

  ul{
    padding: 0;
  }

  h1,h2,h3,h4,h5,h6{
    margin: 0;
  }
  p{
    margin: 0;
    font-family: 'Mulish', sans-serif;
  }

  h1{
    font-size: ${({ theme }) => theme.fontSizes.h1};
    font-weight: 900;
    line-height: 54px;
  }
  h2{
    font-size: ${({ theme }) => theme.fontSizes.h2};
    font-weight: 800;
  }
  h3{
    font-size: ${({ theme }) => theme.fontSizes.h3};
    font-weight: 800;
  }
  h4{
    font-size: ${({ theme }) => theme.fontSizes.h4};
    font-weight: 800;
  }
  h5{
    font-size: ${({ theme }) => theme.fontSizes.h5};
    font-weight: 800;
  }
  h6{
    font-size: ${({ theme }) => theme.fontSizes.h6};
    font-weight: 800;
    margin: 6px 0;
  }
  p{
    font-size: ${({ theme }) => theme.fontSizes.text};
    line-height: 24px;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
