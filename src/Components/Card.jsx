import React from "react";
import styled from "styled-components";

export const Card = () => {
  /* const { image, tech = [] } = props; */
  return (
    <Container>
      <ImgBox>
        <img src="" alt="img de fond" />
      </ImgBox>
      <ContentBox>
        <SubTitle>Tecnologias</SubTitle>
        <Technologies></Technologies>
      </ContentBox>
    </Container>
  );
};
const SubTitle = styled.h3`
  text-align: center;
`;
const Container = styled.div`
  margin: 10px auto;
  width: 220px;
  height: 350px;
  border-radius: 8px;
  overflow: hidden;
  opacity: 0.7;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  transition: all 300ms ease;
  &:hover {
    opacity: 1;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.6);
  }
  @media (max-width: 64em){
    width: 70%;
  }
`;

const ImgBox = styled.picture`
  width: 85%;
  height: 180px;
  margin: 15px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  border-radius: 8px;
  overflow: hidden;
`;

const ContentBox = styled.div`
  width: 85%;
  height: 130px;
  margin: 0 auto;
  overflow: hidden;
`;

const Technologies = styled.ul`
  width: 100%;
  height: 100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
`;

const TechnologieItems = styled.li`
  font-size: ${(props) => props.theme.fontmd};
`;
