import styled from "styled-components";
import ContentWrapper from "../ui/content-wrapper";
import { device } from "../../utils/breakpoints";
import Roadmap from "./roadmap";
import BackgroundImage from "../shared/background-image";

import { RichText } from "prismic-reactjs";

const Section = styled.section`
  padding-top: ${({ theme }) => theme.sections.small};
  padding-bottom: ${({ theme }) => theme.sections.small};
  position: relative;
  z-index: 1;
  @media ${device.mobile} {
    padding-top: ${({ theme }) => theme.sections.large};
    padding-bottom: ${({ theme }) => theme.sections.large};
  }
  @media (min-width: 2200px) {
    padding-top: 300px;
    padding-bottom: 300px;
  }
  @media (min-width: 2500px) {
    background: linear-gradient(
      70.08deg,
      #55208c 0%,
      #5d2497 7.74%,
      #6429a3 15.72%,
      #6c2dae 23.55%,
      #7432ba 31.44%,
      #9135b8 41.76%,
      #aa3ab6 51.37%,
      #c042b4 59.62%,
      #dd57a7 70.53%,
      #e765a3 76.65%,
      #ef729f 84.9%,
      #fa8f9f 92.77%,
      #ffaca7 100%
    );
    z-index: inherit;
  }
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
