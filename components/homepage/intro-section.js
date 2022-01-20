import styled from "styled-components";
import ContentWrapper from "../ui/content-wrapper";
import Button from "../ui/button";

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

const IntroSection = (props) => {
  const { title, subtitle, primary_btn, secondary_btn } = props;

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
      </ContentWrapper>
    </Section>
  );
};

export default IntroSection;
