import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SurveyDiv = styled.div`
  background: rgba(245, 245, 245, 0.5);
  border-radius: 10px;
  margin: 0 20% 0 20%;
  p {
    padding: 7px 0 7px 0;
  }
  :hover {
    background: rgba(237, 217, 87, 0.7);
    transition: 0.3s ease-in-out;
  }
`;

const ResultCard = ({ result }) => {
  return (
    <Link to={`/survey/${result.id}`} className="link">
      <SurveyDiv>
        <p>{result.location}</p>
      </SurveyDiv>
    </Link>
  );
};

export default ResultCard;
