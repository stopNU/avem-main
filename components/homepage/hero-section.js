import styled from "styled-components";
import ContentWrapper from "../ui/content-wrapper";
import { RichText } from "prismic-reactjs";
import { device } from "../../utils/breakpoints";
import Image from "next/image";

const Section = styled.section`
  padding-bottom: ${({ theme }) => theme.sections.small};
  padding-top: ${({ theme }) => theme.sections.small};
  @media ${device.mobile} {
    padding-bottom: ${({ theme }) => theme.sections.default};
    padding-top: ${({ theme }) => theme.sections.large};
  }
  background: radial-gradient(
      ellipse at 125% 105%,
      #ffaca7 0%,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 32%
    ),
    radial-gradient(
      ellipse at -30% 105%,
      #7f38ca 0%,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 32%
    );
`;

const ImageWrapper = styled.div`
  margin: 0 -90px;
  @media ${device.mobile} {
    margin: inherit;
  }
`;

const Headline = styled.div`
  text-align: center;
  max-width: 620px;
  margin: 0 auto 24px;
  h1 {
    color: ${({ theme }) => theme.colors.headings};
  }
  p {
    margin-top: 8px;
    @media ${device.mobile} {
      margin-top: 24px;
    }
  }
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  text-align: center;
  margin-top: 75px;
`;

const Feature = styled.div`
  border: 1px solid #d2d2d2;
  border-radius: 10px;
  padding: 24px;
  &:hover {
    background: #ffffff;
    box-shadow: 0px 2.72797px 5.45594px rgba(40, 41, 61, 0.04),
      0px 10.9119px 21.8238px rgba(96, 97, 112, 0.16);
    transition: all 0.3s;
  }
  p {
    margin-top: 8px;
    @media ${device.mobile} {
      margin-top: 16px;
    }
    font-size: 14px;
  }
  .icon {
    margin-bottom: 24px;
  }
`;

const HeroSection = (props) => {
  const { title, subtitle, image, features } = props;

  return (
    <Section>
      <ContentWrapper>
        <Headline>
          <RichText render={title} />
          <RichText render={subtitle} />
        </Headline>
        <ImageWrapper>
          <Image
            src={image.url}
            alt={image.alt}
            width={image.dimensions.width}
            height={image.dimensions.height}
          />
        </ImageWrapper>
        <Features>
          {features.map((feature, index) => (
            <Feature key={index}>
              {feature.icon.url && (
                <div className="icon">
                  <Image
                    src={feature.icon.url}
                    alt={feature.icon.alt}
                    width={feature.icon.dimensions.width}
                    height={feature.icon.dimensions.height}
                  />
                </div>
              )}
              <RichText render={feature.features_title} />
              <RichText render={feature.text} />
            </Feature>
          ))}
        </Features>
      </ContentWrapper>
    </Section>
  );
};

export default HeroSection;
