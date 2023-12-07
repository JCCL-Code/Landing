import React from "react";
import styled from "styled-components";
import { FlexBox, Section } from "../Style/UI";
import { Carousel } from "../Components/Carousel";

function About() {
  return (
    <Section id="nosotros">
      <FlexBox>
        <Carousel />
      </FlexBox>
      <FlexBox>
        <Title font="large">Sobre Nosotros</Title>
        <Parrafo>
          Nuestro equipo está formado por profesionales creativos y
          comprometidos, compartiendo la visión de crear impacto a través de la
          transformación de ideas de nuestros clientes a código. Nos dedicamos a
          convertir las ideas de nuestros clientes en realidad tangible a través
          del código y nos esforzamos por ir más allá de las expectativas
          convencionales, explorando constantemente nuevas fronteras
          tecnológicas y adoptando enfoques innovadores para asegurarnos de que
          cada proyecto no solo cumpla, sino supere las metas establecidas.
          <br />
          Valoramos la colaboración y la comunicación transparente, entendiendo
          que cada proyecto es único y merece una atención personalizada. Nos
          comprometemos a no solo satisfacer, sino superar las expectativas,
          creando soluciones digitales funcionales. Nuestro equipo está
          integrado por Cristian Vázquez, Lucas Perucho, Juan Manuel Aguirre y
          Cristian Sombra.
        </Parrafo>
      </FlexBox>
    </Section>
  );
}

export default About;

const Title = styled.h1`
  text-align: center;
  width: 65%;
  margin: 0 auto;
  font-size: ${(props) =>
    props.font == "extra-large"
      ? props.theme.fontxxxl
      : props.font == "large"
      ? props.theme.fontxl
      : props.theme.fontmd};
  text-transform: uppercase;
  margin-top: 50px;
  margin-bottom: 20px;
  transition-delay: 300ms;
  @media (max-width: 64em) {
    width: 100%;
    font-size: ${(props) => props.theme.fontlg};
    margin-top: 30px;
    margin-bottom: 0;
  }
`;

const SubTitle = styled.div`
  text-align: center;
  width: 65%;
  margin: 0 auto;
  font-size: ${(props) => props.theme.fontxl};
  font-weight: 600;
  transition-delay: 500ms;
`;

const Parrafo = styled.p`
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  text-align: justify;
  font-size: ${(props) => props.theme.fontlg};
  text-indent: 20px;
  margin-bottom: 50px;
  @media (max-width: 64em) {
    width: 100%;
  }
`;
