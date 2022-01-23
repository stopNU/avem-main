import Head from "next/head";
import Layout from "../layouts";

import { Client, getLayoutData } from "../utils/prismicHelpers";
import SliceZone from "../slices/SliceZone";

import HeroSimple from "../components/shared/hero-simple";

export default function About(props) {
  const { data } = props.doc;
  console.log("props about", props);

  return (
    <Layout data={props.layoutData}>
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
      </Head>

      <HeroSimple title={data.hero_title} subtitle={data.hero_subtitle} />

      Content

      {data.body && <SliceZone sliceZone={data.body} />}
    </Layout>
  );
}

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;

  const client = Client();

  const doc = (await client.getSingle("aboutpage", ref ? { ref } : null)) || {};
  const layoutData = await getLayoutData(client, ref);

  return {
    props: {
      doc,
      layoutData,
      preview,
    },
  };
}
