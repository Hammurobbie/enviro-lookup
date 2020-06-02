import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import SurveyDataArr from "../Data/SurveyData";
import back_icon from "../img/back_icon.png";
import back_icon_hover from "../img/back_icon_hover.png";

import Footer from "./Footer";
import SampleSearchBar from "./SampleSearchBar";
import ViewDrawing from "./ViewDrawing";

const AppDiv = styled.div`
  background-color: #4b7bd0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  height: 100vh;
`;

const HeaderDiv = styled.div`
  font-size: 1.5rem;
  h3 {
    font-weight: bold;
    margin: 0;
  }

  p {
    padding-top: 1%;
  }
`;

const NavDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 5%;
`;

const Img = styled.img`
  height: 35px;
`;

const DetailsDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0 20px 0;
`;

const DDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 60px 0 60px;
  p {
    font-size: 1rem;
    color: #082a8e;
    margin: 0 0 10px 0;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(245, 245, 245, 0.2);
  }
  div {
    font-size: 1rem;
    color: whitesmoke;
  }
`;

const Button = styled.button`
  text-align: center;
  font-size: 0.95rem;
  background-color: linen;
  border-radius: 10px;
  color: rgba(237, 217, 87);
  background: rgba(245, 245, 245, 0.2);
  margin: 25px 5px 0 0;
  border: none;
  :hover {
    background: rgba(8, 42, 142, 0.5);
    color: white;
    transition: 0.3s ease-in-out;
  }
  :focus {
    outline: none;
  }
`;

const SurveyPage = (props) => {
  const [hover, setHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const currentSurvey = SurveyDataArr.filter(
    (survey) => survey.id === parseInt(props.match.params.id)
  );
  return (
    <AppDiv>
      <NavDiv>
        <Link
          to="/"
          className="back-link-wrapper"
          onMouseEnter={() => setHover(!hover)}
          onMouseLeave={() => setHover(!hover)}
        >
          <Img alt="back button" src={!hover ? back_icon : back_icon_hover} />
        </Link>
        <Button onClick={() => window.print()}>Print Page</Button>
        <Button onClick={toggle}>Survey Drawing</Button>
      </NavDiv>
      <HeaderDiv>
        <h3>{currentSurvey[0].location} Survey</h3>
        <DetailsDiv>
          <DDiv>
            <p>Sample Date</p> <div>{currentSurvey[0].date}</div>
          </DDiv>
          <DDiv>
            <p>Sample Type</p> <div>{currentSurvey[0].sample_type}</div>
          </DDiv>
          <DDiv>
            <p>Analysis</p> <div>{currentSurvey[0].analysis}</div>
          </DDiv>
          <DDiv>
            <p>Specifications</p> <div>{currentSurvey[0].specs}</div>
          </DDiv>
        </DetailsDiv>
        <div>
          <SampleSearchBar currentSurvey={currentSurvey} />
          <ViewDrawing result={currentSurvey[0]} isOpen={isOpen} />
        </div>
      </HeaderDiv>
      <Footer />
    </AppDiv>
  );
};

export default SurveyPage;
