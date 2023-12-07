import React from "react";
import MyRoutes from "./routes/MisRutas";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Style/GlobalStyle";
import { Light } from "./Style/Theme";

function App() {
  return (
    <Home>
      <GlobalStyle />
      <ThemeProvider theme={Light}>
        <MyRoutes />
      </ThemeProvider>
    </Home>
  );
}

export default App;

const Home = styled.div`
  width: 85%;
  margin: 0 auto;
`;
