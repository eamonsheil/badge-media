import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    min-height: 100%;
}
body {
    margin: 0;
    box-sizing: border-box;
    height: 100%;
    ${'' /* border: 30px solid; */}
}

`