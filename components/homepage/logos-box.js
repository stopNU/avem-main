import styled from "styled-components";
import Image from "next/image";

import { RichText } from "prismic-reactjs";

const Box = styled.div`
  padding: 90px 70px;
  background-color: #ffffff;
  box-shadow: 0px 2px 8px rgba(40, 41, 61, 0.04),
    0px 16px 24px rgba(96, 97, 112, 0.16);
  border-radius: 10px;
`;

const Headline = styled.h2`
  text-align: center;
  margin-bottom: 45px;
`;

const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  column-gap: 90px;
  row-gap: 45px;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background: #e7e7e7;
  margin: 40px 0;
`;

const LogosBox = ({ partners, investors }) => {
  const showPartners = partners.length > 0 ? true : false;
  const showInvestor = investors.length > 0 ? true : false;

  return (
    <Box>
      {showPartners && (
        <div>
          <Headline>Our Partners</Headline>
          <Logos>
            {partners.map((partner, index) => (
              <Image
                key={index}
                src={partner.logo.url}
                alt={partner.logo.alt}
                width={partner.logo.dimensions.width}
                height={partner.logo.dimensions.height}
              />
            ))}
          </Logos>
        </div>
      )}
      <Line />
      {showInvestor && (
        <div>
          <Headline>Investors</Headline>
          <Logos>
            {investors.map((investor, index) => (
              <Image
                key={index}
                src={investor.logo.url}
                alt={investor.logo.alt}
                width={investor.logo.dimensions.width}
                height={investor.logo.dimensions.height}
              />
            ))}
          </Logos>
        </div>
      )}
    </Box>
  );
};

export default LogosBox;
