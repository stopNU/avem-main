import styled from "styled-components";
import ContentWrapper from "../ui/content-wrapper";
import { device } from "../../utils/breakpoints";
import Image from "next/image";
import Roadmap from "./roadmap";

import { RichText } from "prismic-reactjs";

const Section = styled.section`
  padding-top: ${({ theme }) => theme.sections.small};
  padding-bottom: ${({ theme }) => theme.sections.small};
  @media ${device.mobile} {
    padding-top: ${({ theme }) => theme.sections.large};
    padding-bottom: ${({ theme }) => theme.sections.large};
  }

  position: relative;
  z-index: 1;
  /*background-color: ${({ theme }) => theme.colors.primary};
  @media ${device.xsmall} {
    background-color: transparent;
  }*/
`;

const Headline = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.headings};
  margin-bottom: 40px;
  h2 {
    color: #fff;
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  > span {
    z-index: -1;
  }
`;

const RoadmapSection = ({ title, roadmap, background }) => {
  return (
    <Section>
      <Background>
        <Image
          alt={background.alt}
          src={background.url}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </Background>
      <ContentWrapper>
        <Headline>
          <RichText render={title} />
        </Headline>
        <Roadmap items={roadmap} />
      </ContentWrapper>
    </Section>
  );
};

export default RoadmapSection;
