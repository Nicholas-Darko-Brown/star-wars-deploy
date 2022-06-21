import { useNavigate } from "react-router-dom";
import { DetailsBtn, DetailsContainer, DetailsTitle, DetailsWrapper } from "./styles";
import { PeopleState } from "./Context";
import { BiArrowBack } from "react-icons/bi";

const Details = () => {
  const { people } = PeopleState();
  
  const navigate = useNavigate();

  let movies = []
 

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
        <p> <span className="properties">Name:</span>  {people?.name} </p>
        <p> <span className="properties">Eye color:</span> {people?.eye_color}</p>
        <p><span className="properties">Hair color:</span> {people?.hair_color}</p>
        <p><span className="properties">Height:</span> {people?.height}</p>
        <p><span className="properties">Skin color:</span> {people?.skin_color}</p>
        <p><span className="properties">Mass:</span> {people?.mass} </p>
        <p><span className="properties">Films:</span> </p>

      
        {people?.films.forEach(async (film) =>{ 
          const fetchData = await fetch(film)
          const response = await fetchData.json()
          movies.push(response.title)
          console.log(movies);
        })}

      </DetailsContainer>
    </DetailsWrapper>
  );
};

export default Details;
