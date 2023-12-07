import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import MenuPrincipal from "../pages/MenuPrincipal";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MyRoutes = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MenuPrincipal />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default MyRoutes;

const Section = styled.section``;
