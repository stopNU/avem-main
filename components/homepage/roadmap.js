import styled from "styled-components";
import { RichText } from "prismic-reactjs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const RoadmapWrapper = styled(VerticalTimeline)`
  padding: 0;
  &:before {
    top: 75px;
    height: calc(100% - 75px - 116px);
  }
`;

const RoadmapItem = styled(VerticalTimelineElement)`
  text-align: center;
  margin: 0;
  h4 {
    color: #fff;
  }
  .vertical-timeline-element-content {
    padding: 32px 48px;
  }
  .vertical-timeline-element-content-arrow {
    &:before {
      content: "";
      position: absolute;
      right: -9px;
      top: -8px;
      display: block;
      width: 20px;
      height: 20px;
      background-color: #6bded0;
      border-radius: 100%;
    }
    &:after {
      content: "";
      position: absolute;
      display: block;
      width: 12px;
      height: 12px;
      background-color: #ffaca7;
      border-radius: 100%;
      top: -5px;
      left: -8px;
    }
  }
`;

const Roadmap = ({ items }) => {
  return (
    <RoadmapWrapper lineColor={"#ffaca7"} animate={false}>
      {items.map((item, index) => (
        <RoadmapItem
          key={index}
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(0, 0, 0, 0.1)",
            border: "2px solid #6CDCD0",
            color: "#fff",
            width: "356px",
            boxShadow: "none",
          }}
          contentArrowStyle={{
            borderRight: "none",
            borderWidth: "0px",
            width: "52%",
            top: "45%",
            background: "linear-gradient(90deg, #FFACA7 0%, #6BDED0 100%)",
            height: "3px",
          }}
          iconStyle={{
            display: "none",
          }}
        >
          <RichText render={item.title} />
          <RichText render={item.text} />
        </RoadmapItem>
      ))}
    </RoadmapWrapper>
  );
};

export default Roadmap;
