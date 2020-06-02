import React from "react";
import styled from "styled-components";
import { Collapse } from "reactstrap";

const Div = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0 20px 0;
`;

const Img = styled.img`
  width: 80%;
  box-shadow: 5px 10px 10px #4b7bd0;
`;

const ViewPhoto = ({ result, isOpen }) => {
  return (
    <Collapse isOpen={isOpen}>
      <div>
        <Div>
          {result.image_id ? (
            <Img alt={result.sample_number} src={result.image_id} />
          ) : (
            "No photo"
          )}
        </Div>
      </div>
    </Collapse>
  );
};

export default ViewPhoto;
