import React, { useState } from "react";
import { useQuery } from "react-query";
import { ListerPageCard } from "../ListerPage/styles";

import Person from "./Person";

////////////  async function of fetching data of people from api  //////////

const fetchPeople = async (page) => {
  const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  return res.json();
};

const People = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  //////////////   useQuery to get data of people asynchronously by providing config (like: staleTime and cacheTime)  ////////////

  const { data, status, isPreviousData } = useQuery(
    ["people", page],
    () => fetchPeople(page),
    { keepPreviousData: true },
    {
      onSuccess: () => console.log("People Data feched successfully"),
      onError: () => console.log("Error while fetching data of People"),
    }
  );

  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <div> Error fetching data</div>;

  return (
    <div style={{ margin: "90px 0" }}>
      <h2>People</h2>

      <input
        type="search"
        autoFocus
        onChange={(e) => setQuery(e.target.value)}
      />

      <div>
        <div className="pagination">
          <button
            className="pagination__left"
            onClick={() => setPage((old) => Math.min(old - 1, old))}
            disabled={page === 1}
          >
            Previous
          </button>
          <span>{page}</span>
          <button
            className="pagination__right"
            onClick={() => {
              if (!isPreviousData) {
                setPage((old) => old + 1);
              }
            }}
            disabled={!data.next}
          >
            Next
          </button>
        </div>

        <ListerPageCard>
          {data.results
            .filter((person) => {
              if (query === "") return person;

              if (
                person.name
                  .toLocaleLowerCase()
                  .includes(query.toLocaleLowerCase())
              )
                return person;

              return false;
            })
            .map((person) => (
              <Person key={person.url} person={person} />
            ))}
        </ListerPageCard>
      </div>
    </div>
  );
};

export default People;
