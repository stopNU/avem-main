import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import Image from "next/image";
import { device } from "../../utils/breakpoints";

import ContentWrapper from "../../components/ui/content-wrapper";

//@media ${device.tablet}

const Section = styled.section`
  padding-top: ${({ theme }) => theme.sections.small};
  padding-bottom: ${({ theme }) => theme.sections.small};
  @media ${device.mobile} {
    padding-top: ${({ theme }) => theme.sections.default};
    padding-bottom: ${({ theme }) => theme.sections.default};
  }
  text-align: center;
`;

const Header = styled.div`
  max-width: 600px;
  margin: 0 auto;
  h2 {
    margin-top: 10px;
  }
  p {
    margin-top: 24px;
  }
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
  margin-top: 30px;
  @media ${device.mobile} {
    grid-template-columns: repeat(auto-fill, minmax(356px, 1fr));
    margin-top: 60px;
  }
`;

const Box = styled.div`
  border: 1px solid #d2d2d2;
  border-radius: 10px;
  padding: 24px;
  @media ${device.mobile} {
    padding: 32px;
  }
  p {
    margin-top: 16px;
  }
`;

const EcosystemItem = ({ slice }) => {
  return (
    <Section id={slice.primary.tab_label.toLowerCase().replace(/\s/g, "")}>
      <ContentWrapper>
        <Header>
          <Image
            src={slice.primary.icon.url}
            alt={slice.primary.icon.alt}
            height={slice.primary.icon.dimensions.height}
            width={slice.primary.icon.dimensions.width}
          />
          <RichText render={slice.primary.title} />
          <RichText render={slice.primary.text} />
        </Header>

        <Features>
          {slice.items.length > 0 &&
            slice.items.map((item, index) => (
              <Box key={index}>
                <RichText render={item.title} />
                <RichText render={item.text} />
              </Box>
            ))}
        </Features>
      </ContentWrapper>
    </Section>
  );
};

export default EcosystemItem;
