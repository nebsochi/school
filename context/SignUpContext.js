import { createContext, useState } from "react";

export const SignUpContext = createContext();

export const SignUpProvider = (props) => {
  const [schoolType, setSchoolType] = useState(true);
  const [schoolPopulation, setSchoolPopulation] = useState(false);
  const [contactInfo, setContactInfo] = useState(false);
  const [schoolInfo, setSchoolInfo] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [data, setData] = useState({
    name: "",
    username: "",
    education_level: "",
    students_range: "",
    address: "",
    licensed: "",
    email: "",
    phone: "",
    password: "",
  });

  const setSchool = (val) => {
    setSchoolType(val);
  };

  const setPopulatn = (val) => {
    setSchoolPopulation(val);
  };

  const setContactInformation = (val) => {
    setContactInfo(val);
  };

  const setSchInformation = (val) => {
    setSchoolInfo(val);
  };

  const setSignUpScrn = (val) => {
    setSignUp(val);
  };

  const contextValue = {
    value: {
      data,
      schoolType,
      schoolPopulation,
      contactInfo,
      schoolInfo,
      signUp,
    },
    actions: {
      setSchool,
      setPopulatn,
      setContactInformation,
      setSchInformation,
      setSignUpScrn,
      setData,
    },
  };

  return (
    <SignUpContext.Provider value={{ contextValue }}>
      {props.children}
    </SignUpContext.Provider>
  );
};
