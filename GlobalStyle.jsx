import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { rotonda } from '../static/fonts/rotonda/stylesheet.css';
import { roboto } from '../static/fonts/roboto/stylesheet.css';

export const GlobalStyle = createGlobalStyle`
  ${normalize};
  ${rotonda};
  ${roboto};

  * {
    box-sizing: border-box;

    &::before,
    &::after {
      box-sizing: border-box;
    }
  }

  html {
    color: ${(props) => props.theme.COLOR};
    font-size: ${(props) => props.theme.FONT_SIZE};
    font-family: ${(props) => props.theme.FONT_FAMILY};
    line-height: ${(props) => props.theme.LINE_HEIGHT};
    font-weight: ${(props) => props.theme.FONT_WEIGHT};
  }

  #root {
    min-height: 100vh;
    display: grid;
    align-content: start;
    grid-template-rows: auto 1fr auto; 
    background-color: ${(props) => props.theme.BG_COLOR};
    user-select: none;
  }

  h1, h2, h3 , h4 ,h5 ,h6, p {
    margin: 0;
  }
`;
