import React from "react";
import styled from "styled-components";

import nb_logo from "../img/nb_logo.png";
import Footer from "./Footer";
import SearchBar from "./SearchBar";

const AppDiv = styled.div`
  background-color: #4b7bd0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  color: white;
`;

const HeaderDiv = styled.div`
  margin-top: 80px;
  font-size: 1.5rem;
  height: 100%;
  h3 {
    font-weight: bold;
    margin: 0;
  }
`;

const Img = styled.img`
  height: 100px;
  background: rgba(245, 245, 245, 0.25);
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 5px;
`;

const HomePage = () => {
  return (
    <AppDiv>
      <HeaderDiv>
        <Img alt="nb logo" src={nb_logo} />
        <h3>Survey Information</h3>
        <SearchBar />
      </HeaderDiv>
      <Footer />
    </AppDiv>
  );
};

export default HomePage;
