import styled from "styled-components";
import Image from "next/image";
import { device } from "../../utils/breakpoints";

import { RichText } from "prismic-reactjs";

const Box = styled.div`
  border: 1px solid #d2d2d2;
  border-radius: 10px;
  padding: 24px;
  background-color: #F8F8F8;
  &:hover {
    background-color: #ffffff;
    box-shadow: 0px 2.72797px 5.45594px rgba(40, 41, 61, 0.04),
      0px 10.9119px 21.8238px rgba(96, 97, 112, 0.16);
    transition: all 0.3s;
  }
  p {
    margin-top: 8px;
    @media ${device.mobile} {
      margin-top: 16px;
    }
    font-size: 14px;
  }
  .icon {
    margin-bottom: 24px;
  }
`;

const Card = ({ icon, title, text }) => {
  return (
    <Box>
      {icon.url && (
        <div className="icon">
          <Image
            src={icon.url}
            alt={icon.alt}
            width={icon.dimensions.width}
            height={icon.dimensions.height}
          />
        </div>
      )}
      <RichText render={title} />
      <RichText render={text} />
    </Box>
  );
};

export default Card;
