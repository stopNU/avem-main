import Head from "next/head";
import Layout from "../layouts";

import { Client, getLayoutData } from "../utils/prismicHelpers";
import SliceZone from "../slices/SliceZone";
//import { linkResolver } from "../../prismic-configuration";

import HeroSection from "../components/homepage/hero-section";
import IntroSection from "../components/homepage/intro-section";
import EcosystemSection from "../components/homepage/ecosystem-section";
import PartnerSection from "../components/homepage/partner-section";
import RoadmapSection from "../components/homepage/roadmap-section";

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
      <RoadmapSection
        title={data.roadmap_title}
        roadmap={data.roadmap_items}
        background={data.roadmap_background}
      />

      <PartnerSection
        title={data.highlights_title}
        product_hightlights={data.highlights}
        partners={data.partners}
        investors={data.investors}
      />

      {data.body && <SliceZone sliceZone={data.body} />}
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
