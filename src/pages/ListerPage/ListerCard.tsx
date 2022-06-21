import { ListerItem, ListerPageBtn } from "./styles";
import { useNavigate } from "react-router-dom";
import { PeopleState } from "./Context";
import { FC } from "react";

const ListerCard: FC = ({ item }: any) => {
  const { visited, setPeople, setVisited } = PeopleState();
  const navigate = useNavigate();

  const handleDetails = async (id: string) => {
    if(visited[2]){
      visited.shift();
      visited.push({id: id, character: item.name});
      setVisited(visited)
      localStorage.setItem('visits', visited)
    }else {
      visited.push({id: id, character: item.name});
      setVisited(visited);
      localStorage.setItem('visits', visited)
    }
    
    try {
      const response = await fetch(id);
      const jsonResponse = await response.json();
      setPeople(jsonResponse);
    } catch (error) {
      console.log(error);
    }

    navigate("/details");
  };
  

  return (
    <ListerItem key={item?.uid}>
      <h5>{item?.name}</h5> 
      <span> <span className="item-keys">DOB:</span> {item?.birth_year} </span> 
      <span> <span className="item-keys">Gender:</span> {item?.gender} </span>

      <ListerPageBtn onClick={() => handleDetails(item?.url)}>
        Details
      </ListerPageBtn>
    </ListerItem>
  );
};

export default ListerCard;
