import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        width: 100%;
        font-family: sans-serif;
        overflow-x: hidden;
    }
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
`;
