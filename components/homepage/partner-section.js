import styled from "styled-components";
import ContentWrapper from "../ui/content-wrapper";
import Image from "next/image";
import LogosBox from "./logos-box";
import Card from "../ui/card";
import { device } from "../../utils/breakpoints";

import { RichText } from "prismic-reactjs";

const Section = styled.section`
  padding-top: ${({ theme }) => theme.sections.small};
  padding-bottom: ${({ theme }) => theme.sections.small};
  @media ${device.mobile} {
    padding-top: ${({ theme }) => theme.sections.largeX};
    padding-bottom: ${({ theme }) => theme.sections.default};
    margin-top: -120px;
  }
  background-color: #ffffff;
`;

const Headline = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.headings};
`;

const Highlights = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 40px 0;
  @media ${device.small} {
    grid-template-columns: repeat(auto-fit, minmax(261px, 1fr));
    margin-bottom: ${({ theme }) => theme.sections.default};
  }
  text-align: center;
  gap: 24px;
`;

const PartnerSection = (props) => {
  const { title, product_hightlights, partners, investors } = props;

  return (
    <Section>
      <ContentWrapper>
        <Headline>
          <RichText render={title} />
        </Headline>

        <Highlights>
          {product_hightlights.length > 0 &&
            product_hightlights.map((highlight, index) => (
              <Card
                key={index}
                title={highlight.title}
                text={highlight.text}
                icon={highlight.icon}
              />
            ))}
        </Highlights>

        <LogosBox partners={partners} investors={investors} />
      </ContentWrapper>
    </Section>
  );
};

export default PartnerSection;
