import Head from "next/head";
import Layout from "../layouts";
import styled from "styled-components";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { Client, getLayoutData } from "../utils/prismicHelpers";
import SliceZone from "../slices/SliceZone";

import HeroSection from "../components/homepage/hero-section";
import IntroSection from "../components/homepage/intro-section";
import EcosystemSection from "../components/homepage/ecosystem-section";
import PartnerSection from "../components/homepage/partner-section";
import RoadmapSection from "../components/homepage/roadmap-section";

const SymbolTop = styled.div`
  position: absolute;
  //: -230px;
  will-change: transform;
  transform-style: preserve-3d;
  right: 50px;
  //transition-duration: 0.3s;
  //transition-timing-function: ease-in-out;
  //transition-delay: 0.1s;
  z-index: 6;
`;

const SymbolBottom = styled.div`
  position: absolute;
  //: -230px;
  will-change: transform;
  transform-style: preserve-3d;
  //    transform: translate3d(0px, 35.4638px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  left: 50px;
  z-index: 6;
  
`;

const setTranslate = (xPos, yPos, el) =>  {
  el.current.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

export default function Home(props) {
  const { data } = props.doc;
  const symbol1 = useRef();
  const symbol2 = useRef();
  //console.log("props", props);

  useEffect(() => {
    //const onScroll = () => setOffset(window.pageYOffset);
    const storeRequestAnimationFrame = () => requestAnimationFrame;
    const onScroll = (e) => {
      console.log(window, window.pageYOffset, symbol1.current.offsetTop);

      storeRequestAnimationFrame(setTranslate(12, window.pageYOffset/3, symbol1));
      storeRequestAnimationFrame(setTranslate(12, window.pageYOffset/6, symbol2));
      //symbol1.current?.style.transform = `translate3d(12px, ${window.pageYOffset/3}px, 1em) scale3d(1, 1, 1)`;
      //symbol2.current?.style.transform = `translate3d(12px, -${window.pageYOffset/5}px, 1em) scale3d(1, 1, 1)`;
    }

    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
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

      <SymbolTop ref={symbol1}>
        <Image
          src={data.symbol_1.url}
          alt={data.symbol_1.alt}
          width={data.symbol_1.dimensions.width}
          height={data.symbol_1.dimensions.height}
        />
      </SymbolTop>

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

      

      <EcosystemSection
        title={data.eco_title}
        products={data.eco_products}
        symbol_1={data.symbol_1}
      />

      <SymbolBottom ref={symbol2}>
        <Image
          src={data.symbol_2.url}
          alt={data.symbol_2.alt}
          width={data.symbol_2.dimensions.width}
          height={data.symbol_2.dimensions.height}
        />
      </SymbolBottom>

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
