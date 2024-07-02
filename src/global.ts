import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
* {
    margin: 0 ;
    padding: 0;
    box-sizing: border-box;
    background-color: green;




}
body ,input, textarea ,div,button {
   
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;

}
`;