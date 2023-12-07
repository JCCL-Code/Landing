import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <MyFooter>
      <h4>JCCL Code &copy; - 2023</h4>
    </MyFooter>
  );
}

const MyFooter = styled.footer`
  width: 100%;
  height: ${(props) => props.theme.navHeight};
  border-top: 2px solid ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${props=> props.theme.margin}
`;
