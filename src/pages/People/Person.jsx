import { useNavigate } from "react-router-dom";
import { PeopleState } from "../ListerPage/Context";


const Person = ({ person }) => {
    const navigate = useNavigate();
    const { setPeople } = PeopleState();

    const handleDetails = async (id) => {
        try {
          const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
          const jsonResponse = await response.json();
          setPeople(jsonResponse.result);
        } catch (error) {
          console.log(error);
        }
    
        navigate("/peopleDetails");
      };


  return (
    <div className="card" key={person?.url}>
      <h3>{person.name}</h3>
      <p>Skin Color - {person.skin_color}</p>
      <p>Birth Year - {person.birth_year}</p>

      <button person={person} onClick={() => handleDetails(person.url)}>More</button>
    </div>
  );
};

export default Person;