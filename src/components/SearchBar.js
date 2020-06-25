import React, { useState, useEffect } from "react";
import styled from "styled-components";

import SurveyDataArr from "../data/SurveyData";
import ResultCard from "./ResultCard";
import { db } from "../data/store";

const Input = styled.input`
  color: #ef1e14;
  font-size: 1.15rem;
  margin: 3% 0 1% 0;
  border: none;
  border-radius: 5px;
  padding: 10px 13px;
  width: 20%;
  box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.2), 0 0 3px rgba(0, 0, 0, 0.1);
  ::placeholder {
    color: rgba(239, 30, 20, 0.5);
  }
  :focus {
    outline: none;
    box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.2), 0 0 4px rgba(0, 0, 0, 0.1),
      0 0 3px 1px #fccbdd;
  }
`;

const ResultsDiv = styled.div`
  height: 40vh;
  margin: 0 20% 0 20%;
  overflow: auto;
  border-top: 1px solid rgba(245, 245, 245, 0.25);
  padding-top: 15px;
`;

const NoResultsDiv = styled.div`
  font-style: italic;
  font-size: 1.15rem;
  margin-top: 15px;
`;

const SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`;

const SearchBar = () => {
  console.log(db);

  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const surveyResults = SurveyDataArr.filter(
      (survey) =>
        survey.location.toLowerCase().includes(searchValue.toLowerCase())
      // ||
      // survey.date.toLowerCase().includes(searchValue.toLowerCase()) ||
      // survey.sample_type.toLowerCase().includes(searchValue.toLowerCase()) ||
      // survey.analysis.toLowerCase().includes(searchValue.toLowerCase())
    );

    setSearchResults(surveyResults);
  }, [searchValue]);

  return (
    <div>
      <SearchDiv>
        <Input placeholder="Search..." onChange={handleChange} />
      </SearchDiv>
      <ResultsDiv>
        {!searchValue ? (
          <NoResultsDiv>
            Try searching by location (ex Building S-79).
            {/* , date (ex April 1, 2020)
            or sample type (ex Asbestos). */}
          </NoResultsDiv>
        ) : searchResults.length < 1 ? (
          <NoResultsDiv>No Results</NoResultsDiv>
        ) : (
          searchResults &&
          searchResults.map((result) => (
            <ResultCard key={result.id} result={result} />
          ))
        )}
      </ResultsDiv>
    </div>
  );
};

export default SearchBar;
