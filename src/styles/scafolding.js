// Shared styles for layout

import styled from "styled-components";

import { mqFrom, mqTo } from "./mediaqueries";

export const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: hotpink;

  ${mqFrom.M`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const Container = styled.section`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;

  ${mqTo.M`
    min-height: 100vh;
  `};

  ${mqFrom.M`
    max-width: 1024px;
    padding: 40px 40px 20px 40px;
    border: 1px solid hotpink;
    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
  `}
`;

export const Thumbnail = styled.img`
  max-width: 210px;
  width: 100%;
  height: auto;
  margin-right: 20px;
`;

export const ContentWrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 20px;
  align-items: center;

  ${mqFrom.M`
    flex-flow: row nowrap;
    align-items: flex-start;
  `}
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  ${mqTo.M`
    margin: 20px 0;
    text-align: center;
  `}
`;

export const BackgroundImg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.3;
  filter: blur(8px);

  ${props =>
    props.image &&
    `
    background-image: url('${props.image}');
    background-position: center center;
    background-size: cover;
    `}
`;
