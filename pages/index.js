import Head from "next/head";
import Layout from "../layouts";
import styled from "styled-components";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { device } from "../utils/breakpoints";

import { Client, getLayoutData } from "../utils/prismicHelpers";
import SliceZone from "../slices/SliceZone";

import HeroSection from "../components/homepage/hero-section";
import IntroSection from "../components/homepage/intro-section";
import EcosystemSection from "../components/homepage/ecosystem-section";
import PartnerSection from "../components/homepage/partner-section";
import RoadmapSection from "../components/homepage/roadmap-section";

const Symbol = styled.div`
  display: none;
  @media ${device.desktopxl} {
    position: absolute;
    will-change: transform;
    transform-style: preserve-3d;
    z-index: 6;
    //width: 100%;
    max-width: 1800px;
    margin: 0 auto;
    display: flex;
    //left: 0;
    right: 30px;
    //margin-right: 0;
    //justify-content: end;
  }
`;

const Symbol1 = styled(Symbol)`
  margin-top: 200px;
  right: 30px;
`;

const Symbol2 = styled(Symbol)`
  //justify-content: start;
  margin-top: -400px;
  left: 30px;
  right: auto;
`;

const Symbol3 = styled(Symbol)`
  margin-top: -900px;
  right: 30px;
`;

const setTranslate = (xPos, yPos, el) => {
  el.current.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
};

export default function Home(props) {
  const { data } = props.doc;
  const symbol1 = useRef();
  const symbol2 = useRef();
  const symbol3 = useRef();
  //console.log("props", props);

  useEffect(() => {
    const storeRequestAnimationFrame = () => requestAnimationFrame;
    const onScroll = (e) => {
      storeRequestAnimationFrame(
        setTranslate(12, window.pageYOffset / 4, symbol1)
      );
      storeRequestAnimationFrame(
        setTranslate(12, window.pageYOffset / 5, symbol2)
      );
      storeRequestAnimationFrame(
        setTranslate(12, window.pageYOffset / 6, symbol3)
      );
    };

    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Layout data={props.layoutData} dark>
      <Head>
        <title>{data.meta_title || "Avem"}</title>
        <meta
          name="description"
          property="og:description"
          content={data.meta_description}
        />
      </Head>

      <HeroSection
        title={data.header_title}
        subtitle={data.header_subtitle}
        image={data.header_image}
        features={data.features}
      />

      <Symbol1 ref={symbol1}>
        <Image
          src={data.symbol_1.url}
          alt={data.symbol_1.alt}
          width={data.symbol_1.dimensions.width}
          height={data.symbol_1.dimensions.height}
        />
      </Symbol1>

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

      <Symbol2 ref={symbol2}>
        <Image
          src={data.symbol_2.url}
          alt={data.symbol_2.alt}
          width={data.symbol_2.dimensions.width}
          height={data.symbol_2.dimensions.height}
        />
      </Symbol2>

      <RoadmapSection
        title={data.roadmap_title}
        roadmap={data.roadmap_items}
        background={data.roadmap_background}
      />

      <Symbol3 ref={symbol3}>
        <Image
          src={data.symbol_3.url}
          alt={data.symbol_3.alt}
          width={data.symbol_3.dimensions.width}
          height={data.symbol_3.dimensions.height}
        />
      </Symbol3>

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
