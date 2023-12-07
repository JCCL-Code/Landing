import styled from "styled-components";
import { Accordion } from "../Components/Acordion";
import { Section } from "../Style/UI";
export function Preguntas() {
  return (
    <Section id="preguntas" colum="true" height="1">
      <Title>Preguntas</Title>
      <Container>
        <Box>
          <Accordion title="¿lorem ipsum dolor amet?">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem, consequatur?
          </Accordion>
          <Accordion title="¿Lorem ipsum dolor sit amet, consectetur adipisicing elit?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            non dicta tempora, expedita quia commodi fuga mollitia dolores
            praesentium delectus.
          </Accordion>
          <Accordion title="¿amet consectetur adipisicing elit. Doloremque non dicta?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            nemo necessitatibus placeat non blanditiis dolorem tempore ratione
            explicabo quia quidem!
          </Accordion>
        </Box>
        <Box>
          <Accordion title="¿adipisicing elit. Doloremque non dicta">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            reiciendis eaque eligendi delectus enim iure aut voluptatem
            veritatis quasi magnam! Impedit aut, sequi exercitationem
            repudiandae beatae possimus dignissimos quae id quos quam
            laudantium, reiciendis atque, minima ab repellat dolores officiis.
          </Accordion>
          <Accordion title="¿repudiandae beatae possimus s.?">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae dolorem voluptatum quae quasi quo nihil officiis nostrum
            quidem repellat? Ex iusto ratione ab? Incidunt facilis maiores
            obcaecati molestiae a! Magnam ipsam officiis quisquam voluptatum
            saepe placeat fugit assumenda aliquam expedita, praesentium
            adipisci, earum eligendi asperiores? Perspiciatis facilis
            reprehenderit dolorum recusandae.
          </Accordion>
          <Accordion title="¿placeat fugit assumenda aliquam expedita, praesentium?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            deleniti cupiditate minima alias, rerum itaque totam corporis a
            provident, voluptatum, eos suscipit. Atque neque quam earum sequi,
            voluptatibus nostrum suscipit perferendis eveniet excepturi aut
            corporis.
          </Accordion>
        </Box>
      </Container>
    </Section>
  );
}

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxl};
  text-transform: uppercase;
  margin: 30px auto;
  width: fit-content;
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
    margin: 10px auto;
  }
`;
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 64em) {
    width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 48em) {
    margin: 0 auto;
    width: 90%;
    flex-direction: column;

    & > *:last-child {
      & > *:first-child {
        margin-top: 0;
      }
    }
  }
`;
const Box = styled.div`
  width: 45%;
  @media (max-width: 64em) {
    align-self: center;
  }
  @media (max-width: 48em) {
    width: 90%;
  }
`;
