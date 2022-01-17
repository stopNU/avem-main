import Document, { Html, Head, Main, NextScript } from "next/document";
import PrismicScript from "../components/PrismicScript";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          
          <link rel="icon" href="/favicon.png" type="image/png" />
        </Head>
        {/*<style jsx global>{ reset }</style>
        <style jsx global>{ globals }</style>*/}
        <body>
          <Main />
          <NextScript />
          <PrismicScript />
        </body>
      </Html>
    );
  }
}
