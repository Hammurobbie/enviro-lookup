import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  background: #082a8e;
  font-size: 1rem;
  color: #4b7bd0;
  border-top: 1px solid #e8e8e8;
  justify-content: center;
  padding-top: 15px;
  position: relative;
  width: 100%;
  bottom: 0;
  margin: 0 auto;
`;

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <FooterDiv>
      <p className="no-print">
        <span style={{ color: "rgba(237, 217, 87, 0.5)" }}>
          Copyright © {year}
        </span>{" "}
        | BH&M Environmental Consultants Millington, Tennessee
      </p>
    </FooterDiv>
  );
};

export default Footer;
