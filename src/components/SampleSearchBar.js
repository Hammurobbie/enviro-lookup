import React, { useState, useEffect } from "react";
import styled from "styled-components";

import SampleDiv from "./SampleDiv";

const Input = styled.input`
  color: #ef1e14;
  font-size: 0.9rem;
  margin: 1% 0 1% 0;
  border: none;
  border-radius: 5px;
  padding: 8px 10px;
  width: 15%;
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

const NoResultsDiv = styled.div`
  font-style: italic;
  font-size: 1rem;
  margin-top: 15px;
`;

const ResultsDiv = styled.div`
  height: 49vh;
  margin: 0 5% 0 5%;
  overflow: auto;
  border-top: 1px solid rgba(245, 245, 245, 0.25);
  padding-top: 15px;
`;

const SearchDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 15px;
`;

const SamplesDiv = styled.div`
  font-size: 1rem;
  margin: 9px 0 35px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const SampleSearchBar = ({ currentSurvey }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const samplesArr = [];

    currentSurvey.map((survey) =>
      survey.samples.map((sample) => samplesArr.push(sample))
    );

    const sampleResults = samplesArr.filter(
      (sample) =>
        sample.sample_number
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        sample.sample_description
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        sample.results.toLowerCase().includes(searchValue.toLowerCase())
    );

    setSearchResults(sampleResults);
  }, [searchValue, currentSurvey]);

  return (
    <div>
      <SearchDiv>
        <Input
          className="no-print"
          placeholder="Search..."
          onChange={handleChange}
        />
      </SearchDiv>
      <ResultsDiv>
        {!searchValue ? (
          <NoResultsDiv>
            Try searching by sample number (ex FD-01), sample description (ex
            12x12 White Speckled Floor Tile) or sample results (ex 3%
            Chrysotile).
          </NoResultsDiv>
        ) : searchResults.length < 1 ? (
          <NoResultsDiv>No Results</NoResultsDiv>
        ) : (
          <SamplesDiv>
            {searchResults &&
              searchResults.map((result) => (
                <SampleDiv
                  key={result.id}
                  result={result}
                  currentSurvey={currentSurvey}
                />
              ))}
          </SamplesDiv>
        )}
      </ResultsDiv>
    </div>
  );
};

export default SampleSearchBar;
