import styled from "styled-components";
import ContentWrapper from "../ui/content-wrapper";
import Image from "next/image";
import Roadmap from "./roadmap";

import { RichText } from "prismic-reactjs";

const Section = styled.section`
  padding-top: ${({ theme }) => theme.sections.default};
  padding-bottom: ${({ theme }) => theme.sections.large};
  position: relative;
  //background-color: ${({ theme }) => theme.colors.primary};
`;

const Headline = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.headings};
  margin-bottom: 95px;
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
          alt="Mountains"
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
