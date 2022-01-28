import Head from "next/head";
import Layout from "../layouts";

import { Client, getLayoutData } from "../utils/prismicHelpers";
import SliceZone from "../slices/SliceZone";

import HeroSimple from "../components/shared/hero-simple";
import ContactForm from "../components/forms/contact-form";

export default function Contact(props) {
  const { data } = props.doc;
  console.log("props contact", props);

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
      <ContactForm
        receiverEmail={data.email_receive}
        senderEmail={data.email_sender}
      />

      {data.body && <SliceZone sliceZone={data.body} />}
    </Layout>
  );
}

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;

  const client = Client();

  const doc =
    (await client.getSingle("contact_page", ref ? { ref } : null)) || {};
  const layoutData = await getLayoutData(client, ref);

  /* Remove from prod build */
  if (process.env.NODE_ENV === "production") {
    return { notFound: true };
  }

  return {
    props: {
      doc,
      layoutData,
      preview,
    },
  };
}
