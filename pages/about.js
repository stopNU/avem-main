import Head from "next/head";
import Layout from "../layouts";

import { Client, getLayoutData } from "../utils/prismicHelpers";
import SliceZone from "../slices/SliceZone";

import HeroSimple from "../components/shared/hero-simple";
import FeaturesSection from "../components/about/features-section";

export default function About(props) {
  const { data } = props.doc;

  return (
    <Layout data={props.layoutData}>
      <Head>
        <title>{data.meta_title || "Avem"}</title>
        <meta
          name="description"
          property="og:description"
          content={data.meta_description}
        />
      </Head>

      <HeroSimple title={data.hero_title} subtitle={data.hero_subtitle} />
      <FeaturesSection features={data.features} symbol={data.symbol} />

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
