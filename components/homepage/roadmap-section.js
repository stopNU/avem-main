import styled from "styled-components";
import ContentWrapper from "../ui/content-wrapper";
import { device } from "../../utils/breakpoints";
import Image from "next/image";
import Roadmap from "./roadmap";
import BackgroundImage from "../shared/background-image";

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
`;

const Headline = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.headings};
  margin-bottom: 40px;
  h2 {
    color: #fff;
  }
`;

const RoadmapSection = ({ title, roadmap, background }) => {
  return (
    <Section>
      <BackgroundImage alt={background.alt} src={background.url} />
    
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
