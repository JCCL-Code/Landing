import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import blanco from "../assets/blanco.png";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    setClick(!click);
  };
  return (
    <Header id="header">
      <LogoBox>
        <img src={blanco} alt="logo de la empresa" />
      </LogoBox>
      <Nav>
        <Button click={click} onClick={() => setClick(!click)}>
          <div className="a"></div>
          <div className="b"></div>
          <div className="c"></div>
        </Button>
        <Menu click={click}>
          <MenuItems onClick={() => scrollTo("inicio")}>Inicio</MenuItems>
          <MenuItems onClick={() => scrollTo("nosotros")}>Nosotros</MenuItems>
          <MenuItems onClick={() => scrollTo("servicios")}>Servicios</MenuItems>
          <MenuItems onClick={() => scrollTo("portafolio")}>
            Potafolios
          </MenuItems>
          <MenuItems onClick={() => scrollTo("preguntas")}>Preguntas</MenuItems>
          <MenuItems onClick={() => scrollTo("contacto")}>Contacto</MenuItems>
        </Menu>
      </Nav>
    </Header>
  );
}

const Header = styled.header`
  position: relative;
  width: 100%;
  height: ${(props) => props.theme.navHeight};
  margin: ${(props) => props.theme.margin} auto;
  display: flex;
  border-bottom: 2px solid ${(props) => props.theme.text};
  transition: all 0.3s ease-in-out;
  @media (max-width: 64em) {
    margin: 0 auto;
  }
`;

const LogoBox = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: ${(props) => props.theme.margin};
  img {
    width: 130px;
    object-fit: cover;
    vertical-align: center;
  }
  @media (max-width: 64em) {
    margin: 0;
  }
`;

const Nav = styled.nav`
  flex-grow: 1;
`;

const animar = keyframes`
  0%{
    visibility: hidden;
    opacity: 0;
    transform: ${(props) =>
      props.click ? "translateY(0)" : "translateY(-1000%)"};
  }
  50%{
    visibility: visible;
    opacity: 0.5;
  }
  100%{
    opacity: 1
  }
`;

const Menu = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${(props) => props.theme.margin};
  @media (max-width: 64em) {
    position: fixed;
    top: 90px;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    z-index: 100;
    background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.85)`};
    backdrop-filter: blur(5px);
    transform: ${(props) =>
      props.click ? "translateY(0)" : "translateY(-1000%)"};
    animation: ${animar} 2s ease ;
    display: block;
    touch-action: none;
  }
`;

const MenuItems = styled.li`
  font-size: ${(props) => props.theme.fontmd};
  cursor: pointer;
  text-transform: uppercase;
  @media (max-width: 64em) {
    display: block;
    margin-bottom: 35px;
    margin-top: 35px;
    text-align: center;
  }
`;

const Button = styled.button`
  display: none;
  border: 0;
  background: transparent;
  cursor: pointer;
  @media (max-width: 64em) {
    position: absolute;
    top: 15px;
    right: 0;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: ${(props) => (props.click ? "9px" : "0.65rem")};
    .a,
    .b,
    .c {
      background-color: black;
      height: 2px;
      width: 65%;
      border-radius: 5px;
      transition: all 0.5s;
      transform-origin: left;
    }

    .a {
      margin-left: ${(props) => (props.click ? "10px" : "0")};
      transform: ${(props) => (props.click ? "rotate(45deg)" : "rotate(0)")};
    }
    .b {
      opacity: ${(props) => (props.click ? "0" : "1")};
    }
    .c {
      margin-left: ${(props) => (props.click ? "10px" : "0")};
      transform: ${(props) => (props.click ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
