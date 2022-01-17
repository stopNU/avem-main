import { createGlobalStyle, ThemeProvider } from "styled-components";
//import "../styles/globals.css";
import Head from "next/head";
import theme from "../theme";
import Layout from "../layouts/index";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Mulish', sans-serif;
  }

  a{
    text-decoration: none;
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
