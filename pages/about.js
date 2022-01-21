import Head from "next/head";
import Layout from "../layouts";
import { Client } from "../utils/prismicHelpers";

import HeroSimple from "../components/shared/hero-simple";

export default function About(props) {
  const { data } = props.doc;
  console.log("props about", props);

  return (
    <Layout>
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
      </Head>

      <HeroSimple title={data.hero_title} subtitle={data.hero_subtitle} />

      <footer>Footer</footer>
    </Layout>
  );
}

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;

  const client = Client();

  const doc = (await client.getSingle("aboutpage", ref ? { ref } : null)) || {};

  return {
    props: {
      doc,
      preview,
    },
  };
}
