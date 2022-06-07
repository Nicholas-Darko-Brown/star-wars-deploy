import styled from "styled-components";

export const ListerPageContainer = styled.div`
  margin: 56px 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  border-radius: 5px;
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
  background-color: gray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  border-radius: 5px;
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

  &:hover {
    background-color: rgb(235, 195, 64);
    transition: all 0.3s ease-out;
  }
`;

export const ListerPageInput = styled.input`
  padding: 5px;
  margin: 20px 0;
`;

export const DetailsWrapper = styled.div`
  
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
`;

export const DetailsBtn = styled.button`
  margin: 75px auto 35px 20px;
  border: none;
  background-color: #000000;
  color: white;
  font-weight: 500;
  padding: 5px 20px;
  border-radius: 5px;

  &:hover {
    background-color: rgb(235, 195, 64);
    color: #000000;
    transition: all 0.3s ease-in;
  }
`;

export const DetailsTitle = styled.h2`
  text-decoration: underline;
`
