// these sizes are arbitrary and you can set them to whatever you wish
// this is the default media query generator from styled-components
import { css } from "styled-components";

const sizes = {
  L: 992,
  M: 768,
  S: 576
};

// Iterate through the sizes and create a media template
export const mqFrom = Object.keys(sizes).reduce((acc, label) => {
  const emSize = sizes[label] / 16;
  acc[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

// Iterate through the sizes and create a media template
export const mqTo = Object.keys(sizes).reduce((acc, label) => {
  const emSize = (sizes[label] - 1) / 16;
  acc[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
