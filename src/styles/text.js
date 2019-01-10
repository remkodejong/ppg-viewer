import styled from "styled-components";
import { mqFrom } from "./mediaqueries";

export const Title = styled.h1`
  color: #fff;
  margin-top: 0;
  transition: transform 0.2s ease-in-out;
`;

export const Description = styled.p`
  color: #fff;
  font-size: 1.1em;
  line-height: 1.1;

  ${mqFrom.M`
    font-size: 1.3em;
    line-height: 1.3;
    max-width: 90%;
  `}
`;
