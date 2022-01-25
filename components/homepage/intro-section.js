import styled from "styled-components";
import ContentWrapper from "../ui/content-wrapper";
import Button from "../ui/button";
import Image from "next/image";
import BackgroundImage from "../shared/background-image";
import { device } from "../../utils/breakpoints";

import { RichText } from "prismic-reactjs";

const Section = styled.section`
  padding-top: ${({ theme }) => theme.sections.default};
  padding-bottom: ${({ theme }) => theme.sections.default};
  margin-bottom: 0;
  @media ${device.mobile} {
    padding-top: ${({ theme }) => theme.sections.default};
    padding-bottom: ${({ theme }) => theme.sections.large};
    margin-bottom: -${({ theme }) => theme.sections.large};
  }
  position: relative;
  z-index: 1;
`;

const Headline = styled.div`
  text-align: center;
  max-width: 620px;
  margin: 0 auto 24px;
  > * {
    color: #fff;
  }
  p {
    margin-top: 24px;
  }
`;

const Buttons = styled.div`
  color: #fff;
  text-align: center;
  margin: 20px auto;
  a {
    justify-content: center;
    margin-bottom: 15px;
  }
  @media ${device.small} {
    display: flex;
    justify-content: center;
    column-gap: 40px;
    max-width: 400px;
  }

  @media ${device.mobile} {
    margin: 40px auto;
  }
`;

const Logos = styled.div`
  display: flex;
  column-gap: 25px;
  row-gap: 10px;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  @media ${device.small} {
    flex-direction: row;
    padding-top: 35px;
  }
  @media ${device.mobile} {
    flex-direction: row;
    padding-top: 35px;
  }
  .logo-group {
    padding: 16px 24px;
    background: rgba(0, 0, 0, 0.1);
    box-shadow: inset 0px 0.5px 4px rgba(87, 33, 143, 0.25);
    border-radius: 8px;
  }
`;

const IntroSection = (props) => {
  const { title, subtitle, primary_btn, secondary_btn, logos } = props;

  return (
    <Section>
      <BackgroundImage
        src="/images/onesteop_bg.png"
        alt="Spinning planet background"
      />
      <ContentWrapper>
        <Headline>
          <RichText render={title} />
          <RichText render={subtitle} />
        </Headline>
        <Buttons>
          <Button primary link={primary_btn.link}>
            {primary_btn.label}
          </Button>
          <Button secondary link={secondary_btn.link}>
            {secondary_btn.label}
          </Button>
        </Buttons>
        <Logos>
          {logos.map((logo, index) => (
            <div className="logo-group" key={index}>
              <Image
                src={logo.logo.url}
                alt={logo.alt}
                width={logo.logo.dimensions.width}
                height={logo.logo.dimensions.height}
              />
            </div>
          ))}
        </Logos>
      </ContentWrapper>
    </Section>
  );
};

export default IntroSection;
