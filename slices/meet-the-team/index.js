import ContentWrapper from "../../components/ui/content-wrapper";
import styled from "styled-components";
import { device } from "../../utils/breakpoints";

import Image from "next/image";
import { SiLinkedin } from "react-icons/si";
import { RichText } from "prismic-reactjs";

const Section = styled.section`
  padding-top: ${({ theme }) => theme.sections.small};
  padding-bottom: ${({ theme }) => theme.sections.small};
  @media ${device.mobile} {
    padding-top: ${({ theme }) => theme.sections.default};
    padding-bottom: ${({ theme }) => theme.sections.default};
  }
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
`;

const Team = styled.section`
  margin-top: 0px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 20px;
  row-gap: 20px;
  @media ${device.mobile} {
    margin-top: 45px;
    column-gap: 50px;
    row-gap: 30px;
  }
`;
/*background: ${({ gradient }) =>
    //  gradient
    //    ? `linear-gradient(360deg, ${gradient} 0%, rgba(255, 255, 255, 0) 60%)`
    //    : "none"};*/

const Member = styled.section`
  margin-top: 25px;
  @media ${device.mobile} {
    margin-top: 45px;
  }
  .image {
    border-radius: 100%;
  }
  .icon {
    color: #000000;
    font-size: 22px;
    margin-top: 16px;
  }
  h6 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1rem;
    margin-top: 10px;
    @media ${device.mobile} {
      margin-top: 26px;
    }
  }
  p {
    color: #000000;
    font-size: 1rem;
    margin-top: 0px;
    @media ${device.mobile} {
      margin-top: 16px;
    }
  }
`;

const MeetTheTeam = ({ slice }) => {
  return (
    <Section>
      <ContentWrapper>
        <RichText render={slice.primary.title} />

        <Team>
          {slice?.items?.map((member, index) => (
            <Member key={index} gradient={member.gradient_color}>
              <Image
                className="image"
                src={member.profile_picture.url}
                width={member.profile_picture.dimensions.width}
                height={member.profile_picture.dimensions.height}
                alt={member.profile_picture.alt}
                quality={100}
              />
              <RichText render={member.name} />
              <span className="title">
                <RichText render={member.company_title} />
              </span>
              {member.linkedin_link.url && (
                <a
                  href={member.linkedin_link.url}
                  rel="noopener"
                  target="_blank"
                  title="linkedin"
                >
                  <SiLinkedin className="icon" />
                </a>
              )}
            </Member>
          ))}
        </Team>
      </ContentWrapper>
    </Section>
  );
};

export default MeetTheTeam;
