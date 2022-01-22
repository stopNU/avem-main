import styled from "styled-components";
import ContentWrapper from "../ui/content-wrapper";
import Image from "next/image";
import LogosBox from "./logos-box";

import { RichText } from "prismic-reactjs";

const Section = styled.section`
  padding-top: ${({ theme }) => theme.sections.default};
  padding-bottom: ${({ theme }) => theme.sections.default};
  background-color: #ffffff;
`;

const Headline = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.headings};
`;

const Highlights = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(356px, 1fr));
  text-align: center;
  gap: 24px;
  margin-top: 40px;
  margin-bottom: ${({ theme }) => theme.sections.default};
`;

const Highlight = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #d2d2d2;
  background: #ffffff;
  border-radius: 10px;
  .header {
    padding: 32px 24px;
    h5 {
      margin-top: 14px;
    }
  }
  .text {
    background-color: ${({ theme }) => theme.colors.background};
    padding: 24px;
    height: 100%;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    p {
      font-size: 1rem;
    }
  }
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
              <Highlight key={index}>
                <div className="header">
                  <Image
                    src={highlight.icon.url}
                    alt={highlight.icon.alt}
                    width={highlight.icon.dimensions.width}
                    height={highlight.icon.dimensions.height}
                  />
                  <RichText render={highlight.title} />
                </div>
                <div className="text">
                  <RichText render={highlight.text} />
                </div>
              </Highlight>
            ))}
        </Highlights>

        <LogosBox partners={partners} investors={investors} />
      </ContentWrapper>
    </Section>
  );
};

export default PartnerSection;
