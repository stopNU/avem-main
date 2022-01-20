import styled from "styled-components";
import ContentWrapper from "../ui/content-wrapper";
import { RichText } from "prismic-reactjs";
import Image from "next/image";

const Section = styled.section`
  padding-top: ${({ theme }) => theme.sections.large};
  padding-bottom: ${({ theme }) => theme.sections.default};
`;

const Headline = styled.div`
  text-align: center;
  max-width: 620px;
  margin: 0 auto 24px;
  p{
    margin-top: 24px;
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
    margin-top: 16px;
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
          <RichText className="subtitle" render={subtitle} />
        </Headline>
        <Image
          src={image.url}
          alt={image.alt}
          width={image.dimensions.width}
          height={image.dimensions.height}
        />
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
