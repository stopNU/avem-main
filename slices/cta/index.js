import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import { device } from "../../utils/breakpoints";

import ContentWrapper from "../../components/ui/content-wrapper";
import Button from "../../components/ui/button";

const Section = styled.section`
  padding-top: ${({ theme }) => theme.sections.default};
  padding-bottom: ${({ theme }) => theme.sections.default};
  background: linear-gradient(
      70.08deg,
      #55208c 0%,
      #5d2497 15.16%,
      #6429a3 27.21%,
      #6c2dae 41.97%,
      #7432ba 56.21%,
      #9135b8 69.99%,
      #aa3ab6 83.63%,
      #c042b4 100%
    ),
    linear-gradient(
      70.08deg,
      #55208c 0%,
      #5d2497 15.16%,
      #6429a3 27.21%,
      #6c2dae 41.97%,
      #7432ba 56.21%,
      #9135b8 69.99%,
      #aa3ab6 83.63%,
      #c042b4 100%
    );
`;

const StyledContentWrapper = styled(ContentWrapper)`
@media ${device.tablet} {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
`;

const StyledButton = styled(Button)`
  color: #fff;
`;

const Text = styled.div`
  * {
    color: #fff;
    font-weight: 400;
  }
  p{
      margin-top: 24px;
  }
`;

const CTA = ({ slice }) => {
  return (
    <Section>
      <StyledContentWrapper>
        <Text>
          <RichText render={slice.primary.title} />
          <RichText render={slice.primary.text} />
        </Text>
        <StyledButton primary link={slice.primary.button_link}>
          {slice.primary.button_label}
        </StyledButton>
      </StyledContentWrapper>
    </Section>
  );
};

export default CTA;
