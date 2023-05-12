import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { black } from "./theme";

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    body{
        box-sizing: border-box;
        margin: 0 auto;
        font-family: 'NEXON Lv2 Gothic';
    }
    button {
        background: transparent;
        border:none;
        outline: none;
        color: ${black};
        font-family: inherit;
        text-decoration: none;
    }
    input, textarea, select, a{
        text-decoration: none;
        color: ${black};
        font-family: 'NEXON Lv2 Gothic';
        resize: none;
        outline: none;
    }
    .default-width {
        max-width: 1140px;
        margin: 0 auto;
    }
    h1,h2,h3,h4,h5,h6 {
        font-family: 'NEXON Lv1 Gothic OTF';
    }
    h1{
    font-size: 5.3333333333rem;
    font-weight: 700;
    line-height: .95;
    letter-spacing: .01rem;
    text-transform: uppercase;
    }
    .hide-on-mobile {
        @media screen and (max-width: 939px) {
            display: none;
        }
    }
    .only-on-mobile {
        display: none;

        @media screen and (max-width: 939px) {
            display: block;
        }
    }
    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        @media screen and (max-width: 939px) and (min-width: 767px), screen and (max-width: 766px) {
            flex-direction: column;
            row-gap: 20px;
        }
    }
    @font-face {
    font-family: 'NEXON Lv1 Gothic OTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }
    @font-face {
    font-family: 'NEXON Lv2 Gothic';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }
`;

export default GlobalStyle;
