import React from "react";
import styled from "styled-components";
import { Collapse } from "reactstrap";

const Div = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0 20px 0;
  background-color: #4b7bd0;
`;

const Img = styled.img`
  width: 50%;
  box-shadow: 5px 10px 10px #4b7bd0;
`;

const ViewDrawing = ({ result, isOpen }) => {
  return (
    <Collapse isOpen={isOpen}>
      <Div>
        {result.drawing ? (
          <Img alt={result.id} src={result.drawing} />
        ) : (
          "No drawing"
        )}
      </Div>
    </Collapse>
  );
};

export default ViewDrawing;
