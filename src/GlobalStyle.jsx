import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    body{
        box-sizing: border-box;
        font-family: 'NEXON Lv2 Gothic';
    }
    input, textarea, select, a{
        text-decoration: none;
        color: black;
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

    h1{
    font-size: 5.3333333333rem;
    font-weight: 700;
    line-height: .95;
    letter-spacing: .01rem;
    text-transform: uppercase;
    }
`;

export default GlobalStyle;
