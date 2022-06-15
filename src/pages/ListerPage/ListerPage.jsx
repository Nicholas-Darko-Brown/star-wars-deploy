import { useEffect, useState, useCallback } from "react";
import { Pagination } from "react-bootstrap";
import {
  ListerPageCard,
  ListerPageContainer,
  ListerPageInput,
  ListerPageMessages,
} from "./styles";
import ListerCard from "./ListerCard";

const ListerPage = () => {
  const [info, setInfo] = useState([]);
  const [active, setActive] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [query, setQuery] = useState("");

  const fetchData = useCallback(

    async () => {
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
    },

    [active],
  )




  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isError) return <ListerPageMessages>Error, try again!</ListerPageMessages>;
  if (isLoading) return <ListerPageMessages className="spinner-container"><div className="loading-spinner"></div></ListerPageMessages>;

  return (
    <ListerPageContainer>
      <ListerPageInput
        type="search"
        placeholder="Search by name..."
        className="me-2"
        aria-label="Search"
        autoFocus
        onChange={(e) => setQuery(e.target.value)}
      />

      <ListerPageCard>
        {info
          .filter((item) => {
            if (query === "") return item;

            if (item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())) return item;

            return false
          })
          .map((item) => (
            <ListerCard key={item?.uid} item={item} />
          ))}
      </ListerPageCard>

      <Pagination
        size="sm"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "25px auto 40px auto",
        }}
      >
        {new Array(10).fill(0).map((_, index) => {
          if (index !== 0) {
            return (
              <Pagination.Item
                key={index}
                active={index === active}
                onClick={() => {
                  setActive(index);
                }}
              >
                {index}
              </Pagination.Item>

            );
          } else {
            return <></>
          }
        })}
      </Pagination>
    </ListerPageContainer>
  );
};

export default ListerPage;