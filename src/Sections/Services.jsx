import React from "react";
import styled from "styled-components";
import { Section, FlexBox } from "../Style/UI";
import CardJob from "../Components/CardJob";
import { FaFigma, FaReact, FaDocker } from "react-icons/fa";
function Services() {
  return (
    <Section id="servicios" colum="true">
      <Title font="large">Servicios</Title>
      <Container>
        <CardJob
          icon={<FaFigma />}
          titulo="Diseño de la estructura"
          parrafo="
          ¡Transformamos tu presencia en línea con diseños web innovadores y cautivadores! En la encrucijada entre creatividad y funcionalidad, creamos experiencias web impactantes y a medida. Nuestro enfoque experto en diseño da vida a sitios que no solo impresionan visualmente, sino que también potencian tu marca. Desde interfaces intuitivas hasta estilos personalizados, cada aspecto se adapta para cautivar a tu audiencia. Confía en nuestro equipo para convertir tus conceptos en experiencias web memorables y efectivas que destacan entre la multitud digital."
        />
        <CardJob
          icon={<FaReact />}
          titulo="Desarrollo de la pagina"
          parrafo="Nuestro enfoque en desarrollo web abraza tecnologías de vanguardia como React y Angular, garantizando sitios dinámicos y eficientes. Implementamos estilos personalizados que reflejan la identidad única de tu marca. Además, manejamos bases de datos de manera experta para potenciar la funcionalidad de tus proyectos. Desde la creación de interfaces interactivas hasta la gestión de datos complejos, nuestro equipo fusiona lo último en tecnología con una sólida experiencia para ofrecer soluciones web innovadoras y a la medida de tus necesidades."
        />
        <CardJob
          icon={<FaDocker />}
          titulo="Inclucion dentro de la red"
          parrafo="Nuestra página web es una puerta abierta a la inclusión. Diseñada con accesibilidad en mente, ofrece igualdad de acceso y experiencia a todos los usuarios. Implementamos herramientas como lectores de pantalla y una navegación intuitiva. Además, promovemos la diversidad lingüística con contenido multilingüe y adaptado. Desde su diseño hasta la experiencia del usuario, nos comprometemos a brindar una experiencia enriquecedora para cada visitante, independientemente de sus capacidades o contexto cultural."
        />
      </Container>
    </Section>
  );
}

export default Services;

const Container = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 40em) {
    width: 100%;
    flex-direction: column;
  }
`;

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
  margin-bottom: 30px;
  margin-top: 30px;
  @media (max-width: 64em) {
    margin: 0 auto;
    margin-bottom: 20px;
    margin-top: 0;
    text-align: center;
    font-size: ${(props) => props.theme.fontxl};
    text-align: center;
  }
`;
