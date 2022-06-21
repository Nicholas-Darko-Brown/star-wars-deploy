import React, { useState } from "react";
import { Button, Form, Pagination } from "react-bootstrap";
import useSWR from "swr";
import { ListerPageMessages, SearchContainer, SearchItem, SearchItemsContainer, SearchTitle, SearchWrapper } from "../ListerPage/styles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const SearchBox = () => {
  const [name, setName] = useState();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(1);
  const [searchItem, setSearchItem] = useState(true)

  const { data, error } = useSWR(
    `${process.env.REACT_APP_STAWRS_API}people/?search=${name}&page=${active}`,
    fetcher
  );

  const handleSearchInput = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(query);
    setSearchItem(false)
  };

  if(!data) return <ListerPageMessages className="spinner-container">
  <div className="loading-spinner"></div>
</ListerPageMessages>
  if(error) return <ListerPageMessages>Error, try again!</ListerPageMessages>;

  console.log(data);

  return (
    <SearchContainer>
      <SearchTitle>Search Characters by name...</SearchTitle>

      <Form className="d-flex" onSubmit={handleSubmit}>
        <Form.Control
          type="search"
          placeholder="Search by name..."
          className="me-2"
          aria-label="Search"
          onChange={handleSearchInput}
          value={query}
        />
        <Button variant="success" onClick={handleSubmit} className="search-text">Search</Button>
      </Form>

      {searchItem ? <SearchItem>No searched items</SearchItem>: 

      <SearchWrapper className="search-wrapper">
      {data.results &&
        data.results.map((item) => (
          <SearchItemsContainer key={item.url}>
            <span> <span className="search-keys">Name:</span>  {item.name}</span>
            <span> <span className="search-keys">Gender:</span>  {item.gender}</span>
            <span> <span className="search-keys">Birth year:</span>  {item.birth_year}</span>
            <span> <span className="search-keys">Eye color:</span>  {item.eye_color}</span>
            <span> <span className="search-keys">Hair color:</span>  {item.hair_color}</span>
            <span> <span className="search-keys">Height:</span>  {item.height}</span>
            <span> <span className="search-keys">Mass:</span>  {item.mass}</span>
            <span> <span className="search-keys">Skin color:</span>  {item.skin_color}</span>
          </SearchItemsContainer>
        ))}
      </SearchWrapper>
}

      <Pagination
        size="sm"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "25px auto 40px auto",
        }}
      >
        {new Array(Math.ceil(data.count / 10) + 1).fill(0).map((_, index) => {
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
    </SearchContainer>
  );
};

export default SearchBox;
