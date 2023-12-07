import styled from "styled-components";
import { useState, useEffect } from "react";
import { FaMinus as Minus, FaPlus as Plus } from "react-icons/fa";
export function Accordion({ title, children }) {
  const [collapse, setCollapse] = useState(false);

  return (
    <Container>
      <Title onClick={() => setCollapse(!collapse)}>
        <Name>
          <span>{title}</span>
        </Name>
        {collapse ? (
          <Indicator>
            <Minus />
          </Indicator>
        ) : (
          <Indicator>
            <Plus />
          </Indicator>
        )}
      </Title>
      <Reveal clicked={collapse}>{children}</Reveal>
    </Container>
  );
}

const Container = styled.div`
  cursor: pointer;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.carouselColor};
  margin: 3rem 0;

  @media (max-width: 48em) {
    margin: 2rem 0;
  }
`;
const Title = styled.div`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: height 0.3s ease-in-out;
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;
const Reveal = styled.div`
  display: ${(props) => (props.clicked ? "inline-block" : "none")};
  margin-top: 1rem;
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 300;
  line-height: 1.1rem;
  transition: height 0.3s ease-in-out;
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;
const Name = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.3s cubic-bezier(1, 0, 1, 0);
`;
const Indicator = styled.span`
  font-size: ${(props) => props.theme.fontxxl};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 1rem;
    height: auto;
    fill: ${(props) => props.theme.text};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;
