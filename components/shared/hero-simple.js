import styled from "styled-components";
import ContentWrapper from "../ui/content-wrapper";
import { RichText } from "prismic-reactjs";
import { device } from "../../utils/breakpoints";

const Section = styled.section`
  padding-top: ${({ theme }) => theme.sections.small};
  padding-bottom: ${({ theme }) => theme.sections.small};
  @media ${device.mobile} {
    padding-top: ${({ theme }) => theme.sections.large};
    padding-bottom: ${({ theme }) => theme.sections.default};
  }
  background-color: ${({ theme }) => theme.colors.primary};
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
  color: #fff;
`;

const Headline = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 620px;
  > * {
    color: #fff;
  }
  p {
    margin-top: 24px;
  }
`;

const HeroSimple = (props) => {
  const { title, subtitle } = props;

  return (
    <Section>
      <ContentWrapper>
        <Headline>
          <RichText render={title} />
          {subtitle && <RichText render={subtitle} />}
        </Headline>
      </ContentWrapper>
    </Section>
  );
};

export default HeroSimple;
