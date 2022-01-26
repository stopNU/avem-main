import Head from "next/head";
import Layout from "../layouts";
import styled from "styled-components";

import { Client, getLayoutData } from "../utils/prismicHelpers";
import SliceZone from "../slices/SliceZone";

import HeroSimple from "../components/shared/hero-simple";

const EcoSections = styled.div`
  section:nth-child(odd) {
    background-color: #fff;
  }
`;

export default function Contact(props) {
  const { data } = props.doc;
  let submenu_items = [];

  if (data.body1?.length > 0) {
    submenu_items = data.body1.map((item) => item.primary.tab_label);
  }

  return (
    <Layout data={props.layoutData}>
      <Head>
        <title>ECo</title>
        <meta name="description" content="Eco meta" />
      </Head>

      <HeroSimple
        title={data.hero_title}
        backgroundImage="/images/ecosystem_bg.png"
        submenuItems={submenu_items.length > 0 ? submenu_items : null}
      />

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
