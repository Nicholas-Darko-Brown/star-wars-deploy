import { useEffect, useState, useCallback } from "react";
import { Pagination } from "react-bootstrap";
import {
  ListerPageCard,
  ListerPageContainer,
  ListerPageMessages,
} from "./styles";
import ListerCard from "./ListerCard";

const ListerPage = () => {
  const [info, setInfo] = useState([]);
  const [active, setActive] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);

    try {
      const getPeople = await fetch(
        `${process.env.REACT_APP_STAWRS_API}people?page=${active}&limit=10`
      );
      const response = await getPeople.json();
      setInfo(response.results);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }, [active]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isError) return <ListerPageMessages>Error, try again!</ListerPageMessages>;
  if (isLoading)
    return (
      <ListerPageMessages className="spinner-container">
        <div className="loading-spinner"></div>
      </ListerPageMessages>
    );

  return (
    <ListerPageContainer>

      <ListerPageCard>
        {info.map((item) => (
            <ListerCard key={item?.url} item={item} />
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
            return <div key={index}></div>;
          }
        })}
      </Pagination>
    </ListerPageContainer>
  );
};

export default ListerPage;
