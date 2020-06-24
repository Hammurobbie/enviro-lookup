import React from "react";
import styled from "styled-components";
import { Collapse } from "reactstrap";

const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 0 20px 0;
  background-color: #4b7bd0;
`;

const Embed = styled.embed`
  width: 90%;
  padding: 10px 0;
  height: 500px;
`;

const ViewDrawing = ({ result, isOpen }) => {
  return (
    <Collapse className="no-print" isOpen={isOpen}>
      <Div>
        {result.drawing
          ? result.drawing.map((drawing) => <Embed src={drawing} />)
          : "No drawing"}
      </Div>
    </Collapse>
  );
};

export default ViewDrawing;
