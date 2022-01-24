import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import { device } from "../../utils/breakpoints";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const RoadmapWrapper = styled(VerticalTimeline)`
  padding: 0;
  @media ${device.tablet} {
    width: 100%;
    max-width: 900px;
  }
  @media ${device.desktop} {
    width: 90%;
  }
  @media ${device.desktopxl} {
    max-width: 1170px;
  }
  &:before {
    display: none;
    @media ${device.tablet} {
      display: block;
      top: 75px;
      height: calc(100% - 75px - 116px);
      height: ${({ lastItemHeight }) =>
        `calc(100% - 80px - ${lastItemHeight / 2}px);`};
      left: 50%;
      margin-left: -2px;
    }
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
    margin: 0 auto 32px;
    width: 100%;
    max-width: 343px;
    border: 2px solid
      ${({ completed }) => (completed ? "#6CDCD0" : "transparent")};
    @media ${device.tablet} {
      margin-left: 0;
      margin-bottom: 0;
      max-width: 356px;
    }
  }
  &:nth-child(even):not(.vertical-timeline-element--left) {
    .vertical-timeline-element-content-arrow {
      @media ${device.tablet} {
        left: auto;
        right: 100%;
        transform: rotate(0deg);
      }
    }
    .vertical-timeline-element-content {
      @media ${device.tablet} {
        float: right;
      }
    }
  }

  .vertical-timeline-element-content-arrow {
    top: auto;
    bottom: -46px;
    margin: 0 auto;
    left: 0;
    right: 0;
    @media ${device.tablet} {
      top: 45% !important;
      left: 100%;
      width: ${({ completed }) => (completed ? "94px" : "86px")};
      transform: rotate(180deg);
    }
    @media ${device.desktopxl} {
      width: ${({ completed }) => (completed ? "52%" : "50%")};
    }
    &:before {
      content: "";
      display: block;
      width: 20px;
      height: 20px;
      box-sizing: border-box;
      position: absolute;
      background-color: #6CDCD0;
      border-radius: 100%;
      border: ${({ completed }) => (completed ? "none" : "3px solid #6CDCD0")};
      bottom: 0;
      left: -10px;
      z-index: 1;
      @media ${device.tablet} {
        background-color: ${({ completed }) =>
        completed ? "#6CDCD0" : "transparent"};
        right: ${({ completed }) => (completed ? "-9px" : "-17px")};
        top: -8px;
        left: auto;
      }
    }
    &:after {
      content: "";
      position: absolute;
      display: block;
      background-color: #6bded0;
      width: 3px;
      height: 32px;
      top: -42px;
      left: -1px;
      @media ${device.tablet} {
        width: 12px;
        height: 12px;
        background-color: #ffaca7;
        border-radius: 100%;
        top: -5px;
        left: -8px;
      }
    }
  }

  &:nth-child(odd) .vertical-timeline-element-content-arrow {
    @media ${device.tablet} {
      margin-left: ${({ completed }) => (completed ? "inherit" : "8px")};
    }
  }

  &:nth-child(even) .vertical-timeline-element-content-arrow {
    @media ${device.tablet} {
      margin-right: ${({ completed }) => (completed ? "inherit" : "8px")};
    }
  }

  &:last-child {
    .vertical-timeline-element-content-arrow {
      display: none;
      @media ${device.tablet} {
        display: block;
      }
    }
  }
`;

const Roadmap = ({ items }) => {
  const listRef = useRef();
  const [lastItemHeight, setLastItemHeight] = useState();

  const getListSize = () => {
    const newHeight = listRef?.current?.lastElementChild.clientHeight;
    setLastItemHeight(newHeight);
    console.log("newHeight", newHeight);
  };

  useEffect(() => {
    getListSize();
  }, [items]);

  return (
    <RoadmapWrapper
      lineColor={"#ffaca7"}
      animate={false}
      lastItemHeight={lastItemHeight}
    >
      <div ref={listRef}>
        {items.map((item, index) => (
          <RoadmapItem
            key={index}
            completed={item.completed}
            contentStyle={{
              background: "rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              color: "#fff",
              boxShadow: "none",
            }}
            contentArrowStyle={{
              borderRight: "none",
              borderWidth: "0px",
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
      </div>
    </RoadmapWrapper>
  );
};

export default Roadmap;
