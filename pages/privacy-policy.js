import Head from "next/head";
import Layout from "../layouts";
import styled from "styled-components";
import { Client, getLayoutData } from "../utils/prismicHelpers";
import HeroSimple from "../components/shared/hero-simple";
import { RichText } from "prismic-reactjs";
import ContentWrapper from "../components/ui/content-wrapper";

const Section = styled.section`
  padding-top: ${({ theme }) => theme.sections.default};
  padding-bottom: ${({ theme }) => theme.sections.default};
`;

export default function Contact(props) {
  const { data } = props.doc;

  return (
    <Layout data={props.layoutData}>
      <Head>
        <title>Privacy Policy - Avem</title>
        <meta name="description" content="Avem's Privacy Policy." />
      </Head>

      <HeroSimple title={data.title} />
      <Section>
        <ContentWrapper>
          <RichText render={data.text} />
        </ContentWrapper>
      </Section>
    </Layout>
  );
}

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;

  const client = Client();

  const doc =
    (await client.getSingle("privacy_policy_page", ref ? { ref } : null)) || {};
  const layoutData = await getLayoutData(client, ref);

  return {
    props: {
      doc,
      layoutData,
      preview,
    },
  };
}
