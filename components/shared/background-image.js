import styled from "styled-components";
import Image from "next/image";
import { device } from "../../utils/breakpoints";

const Background = styled.div`
  display: ${({ hide }) => (hide === "mobile" ? "none" : "block")};
  width: 100%;
  height: 100%;
  overflow: hidden;
  @media ${device.mobile} {
    display: block;
  }
  > span {
    z-index: -1;
  }
`;

const BackgroundImage = ({ src, alt, hide }) => {
  return (
    <Background hide={hide}>
      <Image
        alt={alt}
        src={src}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </Background>
  );
};

export default BackgroundImage;
