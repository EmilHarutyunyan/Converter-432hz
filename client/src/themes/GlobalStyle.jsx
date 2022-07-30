import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`


  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'SF Pro Display', sans-serif;
    font-size: 16px;
    line-height: 20px;
    color: #4B565F;
    background-color: #fff;
    ::-webkit-scrollbar {
      
    width: 8px;

    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1; 
    }
 
    /* Handle */
    ::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background:#1B90D2
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #1198e5; 
    }
    
    
  }
  ul li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }

`;