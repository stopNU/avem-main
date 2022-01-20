import styled from "styled-components";
import ContentWrapper from "../ui/content-wrapper";

const Section = styled.section`
  padding-top: ${({ theme }) => theme.sections.large};
  padding-bottom: ${({ theme }) => theme.sections.default};
  background-color: ${({ theme }) => theme.colors.primary};
`;

const IntroSection = (props) => {
  const { title, subtitle, image } = props;
  return (
    <Section>
      <ContentWrapper>
        Intro
      </ContentWrapper>
    </Section>
  );
};

export default IntroSection;
