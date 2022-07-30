import { createGlobalStyle } from "styled-components";
import SFProDisplayBlack from "../assets/fonts/SFProDisplay-Black.ttf";
import SFProDisplayBold from "../assets/fonts/SFProDisplay-Bold.ttf";
import SFProDisplayHeavy from "../assets/fonts/SFProDisplay-Heavy.ttf";
import SFProDisplayLight from "../assets/fonts/SFProDisplay-Light.ttf";
import SFProDisplayMedium from "../assets/fonts/SFProDisplay-Medium.ttf";
import SFProDisplayRegular from "../assets/fonts/SFProDisplay-Regular.ttf";
import SFProDisplaySemibold from "../assets/fonts/SFProDisplay-Semibold.ttf";
import SFProDisplayThin from "../assets/fonts/SFProDisplay-Thin.ttf";

export const FontStyle = createGlobalStyle`
    @font-face {
      font-family: "SF Pro Display";
      src: url(${SFProDisplayBlack}) format('truetype');
      font-weight: 900;
      font-style: normal;
    }
    @font-face {
      font-family: "SF Pro Display";
      src: url(${SFProDisplayBold}) format('truetype');
      font-weight: 700;
      font-style: normal;
    }
    @font-face {
      font-family: "SF Pro Display";
      src: url(${SFProDisplayHeavy}) format('truetype');
      font-weight: 200;
      font-style: normal;
    }
    @font-face {
      font-family: "SF Pro Display";
      src: url(${SFProDisplayLight}) format('truetype');
      font-weight: 300;
      font-style: normal;
    }
    @font-face {
      font-family: "SF Pro Display";
      src: url(${SFProDisplayMedium}) format('truetype');
      font-weight: 500;
      font-style: normal;
    }
    @font-face {
      font-family: "SF Pro Display";
      src: url(${SFProDisplayRegular}) format('truetype');
      font-weight: 400;
      font-style: normal;
    }
    @font-face {
      font-family: "SF Pro Display";
      src: url(${SFProDisplaySemibold}) format('truetype');
      font-weight: 600;
      font-style: normal;
    }
    @font-face {
      font-family: "SF Pro Display";
      src: url(${SFProDisplayThin}) format('truetype');
      font-weight: 100;
      font-style: normal;
    }`;
