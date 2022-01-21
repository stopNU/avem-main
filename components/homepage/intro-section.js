import styled from "styled-components";
import ContentWrapper from "../ui/content-wrapper";
import Button from "../ui/button";
import Image from "next/image";

import { RichText } from "prismic-reactjs";

const Section = styled.section`
  padding-top: ${({ theme }) => theme.sections.default};
  padding-bottom: ${({ theme }) => theme.sections.large};
  background-color: ${({ theme }) => theme.colors.primary};
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
  display: flex;
  justify-content: center;
  column-gap: 40px;
  color: #fff;
  max-width: 400px;
  margin: 40px auto;
`;

const Logos = styled.div`
  display: flex;
  column-gap: 25px;
  justify-content: center;
  padding-top: 35px;
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
