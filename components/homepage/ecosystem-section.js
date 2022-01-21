import styled from "styled-components";
import ContentWrapper from "../ui/content-wrapper";
import Image from "next/image";
import Button from "../ui/button";

import { RichText } from "prismic-reactjs";

const Section = styled.section`
  padding-top: ${({ theme }) => theme.sections.default};
  padding-bottom: ${({ theme }) => theme.sections.large};
  //background-color: ${({ theme }) => theme.colors.primary};
`;

const Headline = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.headings};
  margin-bottom: 95px;
`;

const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(356px, 1fr));
  column-gap: 24px;
  row-gap: 90px;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  background-color: #ffffff;
  border: 1px solid #d2d2d2;
  border-radius: 10px;
  padding: 0px 32px 32px;
  .image {
    margin-top: -55px;
  }
  .btn-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 24px;
  }
  p{
      margin-top: 16px;
  }
`;

const EcosystemSection = (props) => {
  const { title, products } = props;

  return (
    <Section>
      <ContentWrapper>
        <Headline>
          <RichText render={title} />
        </Headline>
        <Products>
          {products.map((product) => (
            <Product key={product.title}>
              <div>
                <div className="image">
                  <Image
                    src={product.icon.url}
                    alt={product.icon.alt}
                    width={product.icon.dimensions.width}
                    height={product.icon.dimensions.height}
                  />
                </div>
                <RichText render={product.title} />
                <RichText render={product.text} />
              </div>
              <div className="btn-wrapper">
                <Button
                  primary
                  link={{
                    url: "/ecosystem",
                    target: "",
                  }}
                >
                  Learn more
                </Button>
              </div>
            </Product>
          ))}
        </Products>
      </ContentWrapper>
    </Section>
  );
};

export default EcosystemSection;
