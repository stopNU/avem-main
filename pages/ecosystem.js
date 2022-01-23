import Head from "next/head";
import Layout from "../layouts";
import styled from "styled-components";

import { Client, getLayoutData } from "../utils/prismicHelpers";
import SliceZone from "../slices/SliceZone";

import HeroSimple from "../components/shared/hero-simple";

const EcoSections = styled.div`
  section:nth-child(odd){
    background-color: #FFF;
  }
  
`;

export default function Contact(props) {
  const { data } = props.doc;
  console.log("props eco", props);

  return (
    <Layout data={props.layoutData}>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact meta" />
      </Head>

      <HeroSimple title={data.hero_title} />

      <EcoSections>
      {data.body1 && <SliceZone sliceZone={data.body1} />}
      </EcoSections>
      {data.body && <SliceZone sliceZone={data.body} />}
    </Layout>
  );
}

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;

  const client = Client();

  const doc =
    (await client.getSingle("ecosystem_page", ref ? { ref } : null)) || {};
  const layoutData = await getLayoutData(client, ref);

  return {
    props: {
      doc,
      layoutData,
      preview,
    },
  };
}
