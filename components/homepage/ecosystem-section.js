//import { useEffect, useRef } from "react";
import styled from "styled-components";
import ContentWrapper from "../ui/content-wrapper";
import Image from "next/image";
import Button from "../ui/button";
import BackgroundImage from "../shared/background-image";
import { device } from "../../utils/breakpoints";

import { RichText } from "prismic-reactjs";

const Section = styled.section`
  padding-top: ${({ theme }) => theme.sections.small};
  padding-bottom: ${({ theme }) => theme.sections.small};
  background-color: ${({ theme }) => theme.colors.background};
  @media ${device.mobile} {
    padding-top: ${({ theme }) => theme.sections.largeXX};
    padding-bottom: ${({ theme }) => theme.sections.large};
    margin-bottom: -${({ theme }) => theme.sections.default};
  }
  position: relative;
  z-index: 0;
`;

const Headline = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.headings};
  margin-bottom: 95px;
`;

const Products = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 -24px;
  @media ${device.small} {
    grid-template-columns: repeat(auto-fit, minmax(356px, 1fr));
    margin: 0;
  }
  column-gap: 24px;
  row-gap: 90px;
`;

/*const SymbolTop = styled.div`
  position: absolute;
  top: -230px;
  right: 50px;
  z-index: 6;
`;*/

const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  background-color: #ffffff;
  border-top: 1px solid #d2d2d2;
  border-bottom: 1px solid #d2d2d2;
  @media ${device.small} {
    border-radius: 10px;
    border: 1px solid #d2d2d2;
  }
  padding: 0px 32px 32px;
  .image {
    margin-top: -55px;
  }
  .btn-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 24px;
  }
  p {
    margin-top: 16px;
  }
`;

const EcosystemSection = (props) => {
  const { title, products, symbol_1 } = props;
  //const [offset, setOffset] = useState(0);
  //const symbol1 = useRef();

  //useEffect(() => {
    //const onScroll = () => setOffset(window.pageYOffset);
    /*const onScroll = (e) => {
      console.log(symbol1.current.style.transform);
      //symbol1.current.style.bottom = window.pageYOffset/10 + 'px';
      symbol1.current.style.transform = `translate3d(12px, ${window.pageYOffset/5}px, 1em)`;
    }

    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);*/
//}, []);

  return (
    <Section>
      <BackgroundImage
        src="/images/ecosystem-home_bg.png"
        alt="Shape backgrounds"
        hide="mobile"
      />
      {/*<SymbolTop ref={symbol1}>
        <Image
          src={symbol_1.url}
          alt={symbol_1.alt}
          width={symbol_1.dimensions.width}
          height={symbol_1.dimensions.height}
        />
  </SymbolTop>*/}
      <ContentWrapper>
        <Headline>
          <RichText render={title} />
        </Headline>
        <Products>
          {products.map((product, index) => (
            <Product key={index}>
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
                    url: `/ecosystem#${product.title[0].text
                      .toLowerCase()
                      .replace(/\s/g, "")}`,
                    target: "",
                  }}
                >
                  Explore
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
