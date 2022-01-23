import Head from "next/head";
import Layout from "../layouts";

import { Client, getLayoutData } from "../utils/prismicHelpers";
import SliceZone from "../slices/SliceZone";

import HeroSimple from "../components/shared/hero-simple";

export default function Contact(props) {
  const { data } = props.doc;
  console.log("props contact", props);

  return (
    <Layout data={props.layoutData}>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact meta" />
      </Head>

      <HeroSimple title={data.hero_title} subtitle={data.hero_subtitle} />

      {data.body && <SliceZone sliceZone={data.body} />}
    </Layout>
  );
}

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;

  const client = Client();

  const doc = (await client.getSingle("contact_page", ref ? { ref } : null)) || {};
  const layoutData = await getLayoutData(client, ref);

  return {
    props: {
      doc,
      layoutData,
      preview,
    },
  };
}