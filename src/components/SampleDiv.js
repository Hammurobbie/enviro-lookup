import React, { useState } from "react";
import styled from "styled-components";

import AddComment from "./AddComment";
import ViewPhoto from "./ViewPhoto";

const SampleCont = styled.div`
  width: 450px;
  margin: 1% 2% 1% 2%;
  border-radius: 10px;
  padding: 2px 2.5px 2px 2.5px;
  background: rgba(245, 245, 245, 0.2);
  text-align: left;
  p {
    padding: 0 0 5px 15px;
    margin: 5px 40px 5px 40px;
    border-bottom: 1px solid rgba(245, 245, 245, 0.15);
    :last-child {
      border-bottom: none;
      padding-top: 5px;
    }
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Button = styled.button`
  text-align: center;
  font-size: 0.75rem;
  background-color: linen;
  border-radius: 10px;
  color: rgba(237, 217, 87);
  background: rgba(245, 245, 245, 0.2);
  margin: 10px 15% 10px 15%;
  padding-top: 4px;
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

const SampleDiv = ({ result, currentSurvey }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isComment, setComment] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleCom = () => setComment(!isComment);

  console.log(result);
  return (
    <SampleCont>
      <p>
        <span style={{ color: "#082a8e" }}>Number: </span>
        {result.sample_number}
      </p>
      <p>
        <span style={{ color: "#082a8e" }}>Description: </span>
        {result.sample_description}
      </p>
      <p>
        <span style={{ color: "#082a8e" }}>Location: </span>
        {result.sample_location}
      </p>
      <p>
        <span style={{ color: "#082a8e" }}>Results: </span>
        {result.results}
      </p>
      <p>
        <span style={{ color: "#082a8e" }}>Quantity: </span>
        {result.quantity}
      </p>
      {result.comments ? (
        <p>
          <span style={{ color: "#082a8e" }}>Comments: </span>
          {result.comments}
        </p>
      ) : (
        ""
      )}
      <ButtonDiv>
        <Button onClick={toggle}>View Photo</Button>
        <Button onClick={toggleCom}>Add Comment</Button>
      </ButtonDiv>
      <ViewPhoto result={result} isOpen={isOpen} />
      <AddComment
        result={result}
        isComment={isComment}
        toggleCom={toggleCom}
        currentSurvey={currentSurvey}
      />
    </SampleCont>
  );
};

export default SampleDiv;
