import styled from "styled-components";
import ContentWrapper from "../ui/content-wrapper";
import { device } from "../../utils/breakpoints";
import Image from "next/image";
import { RichText } from "prismic-reactjs";

const Section = styled.section`
  padding-top: ${({ theme }) => theme.sections.small};
  padding-bottom: ${({ theme }) => theme.sections.small};
  background-color: #fff;
  @media ${device.mobile} {
    padding-top: ${({ theme }) => theme.sections.default};
    padding-bottom: ${({ theme }) => theme.sections.default};
  }
`;

const StyledContentWrapper = styled(ContentWrapper)`
  @media ${device.mobile} {
    position: relative;
  }
`;

const Feature = styled.div`
  text-align: center;
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: dense;
    column-gap: 210px;
    text-align: left;
    &:nth-child(odd) div {
      grid-column-start: 2;
    }
  }
  &:not(:last-child) {
    margin-bottom: 50px;
  }
  p {
    margin-top: 12px;
    @media ${device.tablet} {
      margin-top: ${({ theme }) => theme.spacing.text};
    }
  }
`;

const ImageWrapper = styled.div`
  display: none;
  @media ${device.mobile} {
    display: block;
    position: absolute;
    top: -${({ theme }) => theme.sections.largeX};
    right: 0;
  }
`;

const FeaturesSection = ({ features, symbol }) => {
  if (features.length === 0) {
    return null;
  }

  return (
    <Section>
      <StyledContentWrapper>
        <ImageWrapper>
          <Image
            src={symbol.url}
            width={symbol.dimensions.width}
            height={symbol.dimensions.height}
            alt={symbol.alt}
          />
        </ImageWrapper>
        {features.map((feature, index) => (
          <Feature key={index}>
            <div>
              <RichText render={feature.title} />
              <RichText render={feature.text} />
            </div>
          </Feature>
        ))}
      </StyledContentWrapper>
    </Section>
  );
};

export default FeaturesSection;
