import styled from "styled-components";
import StarWarsImg from "../../assets/starWars4.webp";

export const ListerPageContainer = styled.div`
  margin: 56px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 92vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)),
    url(${StarWarsImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ListerPageMessages = styled.h1`
  margin-top: 56px;
`;

export const ListerPageCard = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 200px);
  grid-template-rows: repeat(2, 180px);
  gap: 10px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 200px);
    grid-template-rows: repeat(4, 180px);
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 200px);
    grid-template-rows: repeat(5, 180px);
  }

  @media (max-width: 520px) {
    grid-template-columns: repeat(1, 225px);
    grid-template-rows: repeat(10, 180px);
  }
`;

export const ListerItem = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
`;

export const ListerPageBtn = styled.button`
  border: none;
  padding: 5px 0;
  width: 50%;
  border-radius: 5px;
  background-color: #7c7c7c;
  color: white;

  &:hover {
    background-color: rgb(235, 195, 64);
    color: #000000;
    transition: all 0.3s ease-out;
  }
`;

export const DetailsWrapper = styled.div``;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  padding: 0.5rem 0;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 70%;
  }
`;

export const DetailsBtn = styled.button`
  margin: 65px auto 0 20px;
  border: none;
  background-color: #000000;
  color: white;
  font-weight: 500;
  padding: 5px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  &:hover {
    background-color: rgb(235, 195, 64);
    color: #000000;
    transition: all 0.3s ease-in;
  }
`;

export const DetailsTitle = styled.h2`
  text-decoration: underline;
  margin-bottom: 1rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 80px 0;
  max-width: 100%;
`;

export const SearchItemsContainer = styled.div`
  box-shadow: 0px -3px 30px -3px rgba(0, 0, 0, 0.1);
  padding: 0.8rem 1rem;
  border-radius: 10px;
  width: 15.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;

  @media (max-width: 900px) {
    width: 17rem;
  }
  @media (max-width: 400px) {
    width: 14rem;
  }
`;

export const SearchWrapper = styled.div`
  max-width: 68rem;
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 20px auto 0 auto;
  gap: 1rem;
  grid-template-columns: repeat(4, 15.625rem);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 250px);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 280px);
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 280px);
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 225px);
  }
`;

export const SearchItem = styled.h2`
  margin-top: 1.5rem;
`

export const SearchTitle = styled.h1`
    @media (max-width: 400px) {
      display: none;
  }
`