// Shared styles for layout

import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  background-color: hotpink;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  max-width: 1024px;
  padding: 40px 40px 20px 40px;
  border: 1px solid hotpink;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const Thumbnail = styled.img`
  max-width: 200px;
  height: auto;
  margin-right: 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 20px;
  align-items: flex-start;
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
