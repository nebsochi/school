import { createContext, useState } from "react";

export const SignUpContext = createContext();

export const SignUpProvider = (props) => {
  const [schoolType, setSchoolType] = useState(true);
  const [schoolPopulation, setSchoolPopulation] = useState(false);
  const [contactInfo, setContactInfo] = useState(false);

  const setSchool = (val) => {
    setSchoolType(val);
  };

  const setPopulatn = (val) => {
    setSchoolPopulation(val);
  };

  const setContactInformation = (val) => {
    setContactInfo(val);
  };

  const contextValue = {
    value: {
      schoolType,
      schoolPopulation,
      contactInfo,
    },
    actions: {
      setSchool,
      setPopulatn,
      setContactInformation,
    },
  };
  console.log(contextValue);
  return (
    <SignUpContext.Provider value={{ contextValue }}>
      {props.children}
    </SignUpContext.Provider>
  );
};
