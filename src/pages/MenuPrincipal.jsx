import React, {useState} from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../Style/GlobalStyle";
import { Light } from "../Style/Theme";
import { Home, About, Contact, Services, Portafolio } from "../Sections/index";
import { Preguntas } from "../Sections/Preguntas";
import { ScrollToTop } from "../Components/ScrollToTop";


function MenuPrincipal() {
  const [click, setClick] = useState(false);
  return (
    <Main>
      <GlobalStyle click={click} />
      <ThemeProvider theme={Light}>
        <Home />
        <About />
        <Services />
        <Portafolio />
        <Preguntas />
        <Contact />
        <ScrollToTop/>
      </ThemeProvider>
    </Main>
  );
}

export default MenuPrincipal;

const Main = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.margin};
`;
