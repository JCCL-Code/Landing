import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Section, FlexBox, Title, Parrafo } from "../Style/UI";
import styled from "styled-components";
import Blanco from "../assets/blanco.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pbzuijr",
        "template_iuxerfr",
        form.current,
        "SOUwidYym3mXQbe0t"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Section id="contacto">
      <FlexBox>
        <Title font="large">Contactanos</Title>
        <Parrafo>
          En nuestra empresa de desarrollo web, brindamos soluciones a medida
          con diseño innovador y funcionalidad superior. Con enfoque en la
          creación de componentes de calidad, landing pages impactantes y
          aplicaciones escalables utilizando React, ofrecemos resultados que
          transforman negocios.
          <br /> Contáctanos para impulsar tu presencia online con soluciones
          tecnológicas de vanguardia.
        </Parrafo>
        <LogoBox>
          <img src={Blanco} alt="" />
        </LogoBox>
      </FlexBox>
      <FlexBox>
        <Form ref={form} onSubmit={sendEmail}>
          <Label>Name</Label>
          <Input type="text" name="user_name" />
          <Label>Email</Label>
          <Input type="email" name="user_email" />
          <Label>Message</Label>
          <TextArea name="message" />
          <Button>Enviar</Button>
        </Form>
      </FlexBox>
    </Section>
  );
};

export default Contact;

export const LogoBox = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const Form = styled.form`
  width: 85%;
  min-height: 50vh;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  @media (max-width: 64em) {
    width: 100%;
    margin-top: 0;
  }
`;
export const Input = styled.input`
  display: block;
  width: 90%;
  height: 40px;
  margin: 10px auto;
  padding: 5px 10px;
  border: 1px solid #111;
  border-radius: 8px;
  outline: 0;
  &:focus {
    border: 2px solid #1111ba;
  }
`;
export const Button = styled.button`
  padding: 15px 20px;
  background-color: #856b6b;
  display: block;
  border-radius: 8px;
  border: none;
  margin: 10px auto;
  cursor: pointer;
  color: ${(props) => props.theme.body};
  font-weight: bold;
  text-transform: uppercase;
`;
export const TextArea = styled.textarea`
  border-radius: 10px;
  margin: 10px auto;
  padding: 20px;
  width: 90%;
  height: 200px;
  outline: 0;
  &:focus {
    border: 2px solid #1111ba;
  }
`;

export const Label = styled.label`
  width: 90%;
  text-align: start !important;
  font-size: ${(props) => props.theme.fontmd};
`;
