import { createContext, useContext, useState } from "react";

const DetailContext = createContext();

const Context = ({ children }) => {
  const [people, setPeople] = useState();

  return (
    <DetailContext.Provider
      value={{
        people,
        setPeople,
      }}
    >
      {children}
    </DetailContext.Provider>
  );
};

export const PeopleState = () => {
  return useContext(DetailContext);
};

export default Context;
