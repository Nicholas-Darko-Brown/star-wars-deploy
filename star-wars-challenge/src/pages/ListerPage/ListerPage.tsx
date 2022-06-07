import { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import {
  ListerPageCard,
  ListerPageContainer,
  ListerPageInput,
  ListerPageMessages,
} from "./styles";
import ListerCard from "./ListerCard";

const ListerPage: React.FC = () => {
  const [info, setInfo] = useState<any[]>([]);
  const [active, setActive] = useState<number>(1);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let search = info.filter((list) =>
      list.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setInfo(search);
  };

  let items = [];
  for (let number = 1; number <= 9; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => {
          setActive(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);

      try {
        const getPeople = await fetch(
          `https://www.swapi.tech/api/people?page=${active}&limit=10`
        );
        const response = await getPeople.json();
        setInfo(response.results);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [active]);

  if (isError) return <ListerPageMessages>Error, try again!</ListerPageMessages>;
  if (isLoading) return <ListerPageMessages>Loading...</ListerPageMessages>;

  return (
    <ListerPageContainer>
      <ListerPageInput
        type="search"
        placeholder="Search by name..."
        className="me-2"
        aria-label="Search"
        onChange={(e) => handleSearch(e)}
      />

      <ListerPageCard>
        {info.map((item) => (
          <ListerCard item={item} />
        ))}
      </ListerPageCard>

      <Pagination
        size="sm"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "25px auto 40px auto"
        }}
      >
        {items}
      </Pagination>
    </ListerPageContainer>
  );
};

export default ListerPage;
