import Head from "next/head";
import Layout from "../layouts";

import { Client, getLayoutData } from "../utils/prismicHelpers";
//import { linkResolver } from "../../prismic-configuration";

import HeroSection from "../components/homepage/hero-section";
import IntroSection from "../components/homepage/intro-section";
import EcosystemSection from "../components/homepage/ecosystem-section";

export default function Home(props) {
  const { data } = props.doc;
  console.log("props", props);

  return (
    <Layout data={props.layoutData} dark>
      <Head>
        <title>Avem</title>
        <meta name="description" content="Avem" />
      </Head>

      <HeroSection
        title={data.header_title}
        subtitle={data.header_subtitle}
        image={data.header_image}
        features={data.features}
      />

      <IntroSection
        title={data.intro_title}
        subtitle={data.intro_subtitle}
        primary_btn={{
          label: data.button_label_primary,
          link: data.button_link_primary,
        }}
        secondary_btn={{
          label: data.button_label_secondary,
          link: data.button_link_secondary,
        }}
        logos={data.intro_logos}
      />

      <EcosystemSection title={data.eco_title} products={data.eco_products} />
    </Layout>
  );
}

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;

  const client = Client();

  const doc = (await client.getSingle("homepage", ref ? { ref } : null)) || {};
  const layoutData = await getLayoutData(client, ref);

  return {
    props: {
      doc,
      layoutData,
      preview,
    },
  };
}
