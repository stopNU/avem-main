import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import Image from "next/image";
//import { device } from "../../utils/breakpoints";

import ContentWrapper from "../../components/ui/content-wrapper";

const Section = styled.section`
  padding-top: ${({ theme }) => theme.sections.default};
  padding-bottom: ${({ theme }) => theme.sections.default};
`;

const Header = styled.div`
  
`;

/*const StyledContentWrapper = styled(ContentWrapper)`
@media ${device.tablet} {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
`;*/

const EcosystemItem = ({ slice }) => {
  return (
    <Section>
      <ContentWrapper>
        <Header>
            <Image 
                src={slice.primary.icon.url}
                alt={slice.primary.icon.alt}
                height={slice.primary.icon.dimensions.height}
                width={slice.primary.icon.dimensions.width} />
            <RichText render={slice.primary.title} />
            <RichText render={slice.primary.text} />
        </Header>

      </ContentWrapper>
    </Section>
  );
};

export default EcosystemItem;
