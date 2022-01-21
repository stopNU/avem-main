import styled from "styled-components";
import ContentWrapper from "../ui/content-wrapper";
import Image from "next/image";
import { RichText } from "prismic-reactjs";

const Section = styled.section`
  padding: 40px 0;
  background-color: #f8f8f8;
  text-align: center;
`;

const Footer = (props) => {
  const { logo } = props;

  return (
    <Section>
      <ContentWrapper>
        {logo?.url ? (
          <Image
            src={logo.url}
            alt={logo.alt}
            width={logo.dimensions.width}
            height={logo.dimensions.height}
          />
        ) : 'Avem'}
      </ContentWrapper>
    </Section>
  );
};

export default Footer;
