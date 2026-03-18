import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
  background-color: #F4F5F6;
  font-family: montserrat;
  font-weight: 400;
  font-size: 12px;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a,
  a:visited, a:hover {
  text-decoration: none;
  cursor: pointer;
}

  ul li {
    list-style: none;
  }

body {
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;

}

button {
  border-radius: 6px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
}
`;

export const SWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const SContainer = styled.div`
  margin: ${({ $entry }) => $entry && "auto"};
  width: ${({ $width }) => $width ?? "auto"};
  height: ${({ $height }) => $height ?? "auto"};

  background-color: #ffffff;

  //*:not(hr) {
  //background: linear-gradient(to bottom, black 2px, transparent 2px) center;
  ${({ $noPadding }) =>
    $noPadding
      ? {
          backgroundImage: "linear-gradient(#999999)",
          backgroundSize: "100% 0.5px",
          backgroundPosition: "top 113px right 0px",
          backgroundRepeat: "no-repeat",
        }
      : {
          padding: "32px",
        }}

  /* &::-webkit-scrollbar {
  background-color: #000000;
    //display: none;
} */

  border-radius: 30px;
  //border: 0.7px solid #d4dbe5;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);

  /* &::-webkit-scrollbar {
  width: 10px;
  background-color: #000000;
} */

  /* &::-webkit-scrollbar-track:vertical:start:decrement {
    //width: 0px;
     background-color: #000000;
     display: none;
  } */
  /* scrollbar-width: thin;
  scrollbar-color: #000000 #ffffff; */

  /* &::-webkit-scrollbar-button:vertical:end:increment {
    background: linear-gradient(300deg, #02141a 40%, rgba(0, 0, 0, 0) 41%),

    background-color: #f6f8f4;
} */

  /* &::-webkit-scrollbar-thumb {
  background-color: #050c26;
  border-radius: 20px;
  border: 3px solid #050c26;
} */
`;

export const STitle = styled.h1`
  margin-top: 36px;
  margin-bottom: 32px;
  font-size: 32px;
`;

export const SWindow = styled.div`
  display: flex;
  justify-content: center;
  gap: 33px;
`;

export const SCenter = styled.div`
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
`;
