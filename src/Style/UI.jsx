import styled, { keyframes } from "styled-components";

export const show = keyframes`
  from{
    opacity: 0;
    scale: 25%;
  }
  to{
    opacity:1;
    scale: 100%;
  }
`;

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: ${(props) => (props.colum == "true" ? "column" : "row")};
  width: 100%;
  min-height: ${(props) => (props.height == "1" ? "80vh" : "100vh")};
  height: auto;
  align-items: center;
  transition: all 0.5s ease-in;
  /* view-timeline: --image;
  view-timeline-axis: block;
  animation-timeline: --image;
  animation-name: ${show};
  animation-range: entry 50% cover 70%;
  animation-fill-mode: both; */
  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 40em) {
    width: 100%;
  }
`;

export const FlexBox = styled.div`
  position: relative;
  width: ${(props) =>
    props.width == "1" ? "30%" : props.width == "2" ? "65%" : "48%"};
  min-height: 75vh;
  height: auto;
  margin: 10px auto;
  transition: all 0.5s ease-in;
  @media (max-width: 64em) {
    width: 80%;
    min-height: 100%;
  }
`;

const Aparecer = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1
  }

`;

export const Decorador = styled.span`
  position: absolute;
  padding: ${(props) =>
    props.padding == "1" ? "120px" : props.padding == "2" ? "80px" : "20px"};
  top: ${(props) => (props.up == "true" ? "10px" : "none")};
  left: ${(props) => (props.left == "true" ? "-50px" : "none")};
  bottom: ${(props) => (props.bottom == "true" ? "10px" : "none")};
  right: ${(props) => (props.rigth == "true" ? "-50px" : "none")};
  border-radius: 50%;
  background: ${(props) =>
    props.color == "orange"
      ? "linear-gradient(to left, white, #ff8000)"
      : props.color == "yellow"
      ? "linear-gradient(to right, white, #fff200)"
      : "red"};
  animation: ${Aparecer} 2.5s forwards;
  z-index: -5;
  @media (max-width: 64em) {
    padding: ${(props) =>
      props.padding == "1" ? "80px" : props.padding == "2" ? "40px" : "20px"};
    top: ${(props) => (props.up == "true" ? "10px" : "none")};
    left: ${(props) => (props.left == "true" ? "-60px" : "none")};
    bottom: ${(props) => (props.bottom == "true" ? "80px" : "none")};
    right: ${(props) => (props.rigth == "true" ? "-40px" : "none")};
  }
`;

export const Title = styled.h1`
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

export const Parrafo = styled.p`
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  text-align: justify;
  text-justify: inter-word;
  font-size: ${(props) => props.theme.fontlg};
  text-indent: 20px;
  margin-bottom: 50px;
  @media (max-width: 64em) {
    width: 100%;
  }
`;
