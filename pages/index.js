import Head from "next/head";
import Image from "next/image";
import Layout from "../layouts/homepage";

import { Client } from "../utils/prismicHelpers";
//import { linkResolver } from "../../prismic-configuration";

import HeroSection from "../components/homepage/hero-section";
import IntroSection from "../components/homepage/intro-section";
import EcosystemSection from "../components/homepage/ecosystem-section";

export default function Home(props) {
  const { data } = props.doc;
  console.log("props", props);

  return (
    <Layout>
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

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </Layout>
  );
}

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;

  const client = Client();

  console.log("client", client);

  const doc = (await client.getSingle("homepage", ref ? { ref } : null)) || {};

  /*const menu =
    (await client.getSingle("main_navigation", ref ? { ref } : null)) || {};*/

  return {
    props: {
      doc,
      //menu,
      preview,
    },
  };
}
