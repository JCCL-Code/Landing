import React from "react";
import styled from "styled-components";

function CardJob(props) {
  const { icon, parrafo, titulo, badge } = props;
  return (
    <Container>
      <HeaderBox>
        <Span border="true" radio="true" bg="true">
          {icon}
        </Span>
        <Span>{titulo}</Span>
      </HeaderBox>
      <Content>
        <Parrafo>{parrafo}</Parrafo>
      </Content>
    </Container>
  );
}

export default CardJob;

const Container = styled.article`
  width: 30%;
  min-height: 65vh;
  height: fit-content;
  border-radius: 10px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  display: grid;
  grid-template:
    "a1" 100px
    "a2" auto/100%;
  transition: all 300ms ease-in;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
    & > * {
      color: #fff;
    }
  }
  margin: 20px;
  @media (max-width: 64em) {
    width: 80%;
    margin: 10px auto;
  }
`;

const HeaderBox = styled.picture`
  grid-area: a1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
  margin-top: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;
const Content = styled.div`
  grid-area: a2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
`;

const Parrafo = styled.p`
  width: 100%;
  margin: 10px auto;
  margin-top: 20px;
  text-align: justify;
  font-size: ${(props) => props.theme.fontmd};
  text-indent: 20px;
`;

const Span = styled.span`
  padding: 10px 15px;
  background-color: ${(props) => (props.bg == "true" ? "#111" : "none")};
  border: ${(props) =>
    props.border == "true" ? "1px solid rgba(0,0,0,0.5)" : "none"};
  border-radius: ${(props) => (props.radio == "true" ? "50%" : "none")};
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 700;
  svg {
    font-size: ${(props) => props.theme.fontxl};
    color: greenyellow;
  }
`;
