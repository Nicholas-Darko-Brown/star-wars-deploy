import styled from "styled-components";
import StarWarsImg from "../../assets/starWars4.webp"

export const ListerPageContainer = styled.div`
  margin: 56px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 92vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)), url(${StarWarsImg});
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
    grid-template-columns: repeat(1, 250px);
    grid-template-rows: repeat(10, 180px);
  }
`;

export const ListerItem = styled.h5`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.1);
`;

export const ListerContent = styled.p`
  font-weight: 400;
  font-size: 16px;
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

export const ListerPageInput = styled.input`
  padding: 5px 10px;
  margin: 20px 0;
  outline: 0;
  border: 3px solid black;
  border-radius: 5px;

  &:focus {
    border: 3px solid green;
  }
`;

export const DetailsWrapper = styled.div`
  
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  padding: 0.5rem 0;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0px 0px 15px -3px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    width: 70%;
  }
`;

export const DetailsBtn = styled.button`
  margin: 75px auto 35px 20px;
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
`
