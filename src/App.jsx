import { Outlet } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
body,html,#root{height:100%;}
div, ul, li, span, a,h1,body,html{margin:0;padding:0;list-style:none;text-decoration:none;box-sizing: border-box; font-family: "Pacifico", cursive;
font-weight: 400;
font-style: normal;}
a{color:inherit;}
`;
export default function App() {
  return (
    <>
      <GlobalStyled />
      <Outlet />
    </>
  );
}
