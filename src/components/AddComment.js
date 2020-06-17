import React, { useState } from "react";
import styled from "styled-components";
import { Collapse } from "reactstrap";

import SurveyDataArr from "../data/SurveyData";

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0 10px 0;
  margin: 0 4% 0 4%;
`;

const BDiv = styled.div`
  padding-top: 5px;
`;

const Button = styled.button`
  margin-left: 5px;
  border: none;
  background-color: linen;
  border-radius: 10px;
  color: rgba(237, 217, 87);
  background: rgba(245, 245, 245, 0.2);
  :hover {
    background: rgba(255, 105, 97, 0.65);
    color: white;
    transition: 0.3s ease-in-out;
  }
  :focus {
    outline: none;
  }
`;

const Button2 = styled.button`
  margin-left: 5px;
  border: none;
  background-color: linen;
  border-radius: 10px;
  color: rgba(237, 217, 87);
  background: rgba(245, 245, 245, 0.2);
  :hover {
    background: rgba(119, 221, 119, 0.65);
    color: white;
    transition: 0.3s ease-in-out;
  }
  :focus {
    outline: none;
  }
`;

const Input = styled.input`
  color: #082a8e;
  font-size: 1rem;
  font-weight: 500;
  margin: 1% 0 1% 0;
  border: none;
  border-radius: 10px;
  padding: 4px 7px;
  width: 40%;
  box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.2), 0 0 3px rgba(0, 0, 0, 0.1);
  ::placeholder {
    color: rgba(8, 42, 142, 0.5);
  }
  :focus {
    outline: none;
    box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.2), 0 0 4px rgba(0, 0, 0, 0.1),
      0 0 3px 1px #fccbdd;
  }
`;

const AddComment = ({ result, isComment, toggleCom, currentSurvey }) => {
  const [newComment, setnewComment] = useState("");

  const findSurvey = SurveyDataArr.filter(
    (survey) => survey.id === currentSurvey[0].id
  );
  const curSurInd = SurveyDataArr.indexOf(findSurvey[0]);
  const curSamInd = currentSurvey[0].samples.indexOf(result);

  console.log(SurveyDataArr[curSurInd].samples[curSamInd].comments);

  const handleChange = (e) => {
    e.preventDefault();
    setnewComment(e.target.value);
  };

  const handleSubmit = () => {
    SurveyDataArr[curSurInd].samples[curSamInd].comments = newComment;
    toggleCom();
  };

  return (
    <Collapse isOpen={isComment}>
      <div>
        <Div>
          <Input
            className="no-print"
            type="text"
            placeholder="Add comment..."
            onChange={handleChange}
          />
          <BDiv>
            <Button2 className="no-print" onClick={handleSubmit}>
              Save
            </Button2>
            <Button className="no-print" onClick={() => toggleCom()}>
              Cancel
            </Button>
          </BDiv>
        </Div>
      </div>
    </Collapse>
  );
};

export default AddComment;
