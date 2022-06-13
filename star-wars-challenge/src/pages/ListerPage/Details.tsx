import React from "react";
import { useNavigate } from "react-router-dom";
import { DetailsBtn, DetailsContainer, DetailsTitle, DetailsWrapper } from "./styles";
import { PeopleState } from "./Context";
import { BiArrowBack } from "react-icons/bi";

const Details: React.FC = () => {
  const { people } = PeopleState();
  
  const navigate = useNavigate();
  
  return (
    <DetailsWrapper>
      <DetailsBtn
        onClick={() => {
          navigate("/listerPage");
        }}
      >
        Back <BiArrowBack />
      </DetailsBtn>

      <DetailsContainer>
        <DetailsTitle>Details</DetailsTitle>
        <p> <span className="properties">Name:</span>  {people?.properties?.name} </p>
        <p> <span className="properties">Birth year:</span>  {people?.properties?.birth_year} </p>
        <p> <span className="properties">Eye color:</span> {people?.properties?.eye_color}</p>
        <p><span className="properties">Gender:</span> {people?.properties?.gender}</p>
        <p><span className="properties">Hair color:</span> {people?.properties?.hair_color}</p>
        <p><span className="properties">Height:</span> {people?.properties?.height}</p>
        <p><span className="properties">Skin color:</span> {people?.properties?.skin_color}</p>
        <p><span className="properties">Mass:</span> {people?.properties?.mass} </p>
      </DetailsContainer>
    </DetailsWrapper>
  );
};

export default Details;
