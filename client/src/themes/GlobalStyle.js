import { createGlobalStyle } from 'styled-components'
import bg from '../pics/bg.jpg'

const size = {
    mobile: "425px",
    tablet: "768px",
    computer: "1024px"
}
export const device = {
    mobile: `(min-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    computer: `(min-width: ${size.computer})`
}

const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        background-color: regb(20 30 34);
    }
    body {
        font-family: "'Simplifica, "Ubuntu";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;


        width: 100vw;
        height: 100vh;
        background-image: url(${bg});
        background-repeat: no-repeat;
        background-position: center -175px;
        background-attachment: scroll;
        background-size: auto 100%;
        background-color: rgb(20 30 34);
    }

    * {
        box-sizing: border-box;
    }
`;

const breakpoint = {
    mobile: "600px",
    tabletPortrait: "900px",
    tabletLandscape: "1200px",
    desktop: "1800px"
};
export const media = {
    mobile: `(max-width: ${breakpoint.mobile})`,
    tabletPortrait: `(min-width: ${breakpoint.mobile})`,
    tabletLandscape: `(mi-nwidth: ${breakpoint.tabletPortrait})`,
    desktop: `(min-width: ${breakpoint.tabletLandscape})`,
    desktopLarge: `(min-width: ${breakpoint.desktop})`
};

export default GlobalStyle;