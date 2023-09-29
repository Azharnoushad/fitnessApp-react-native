import React, { useState, createContext } from "react";

export const FitnessItems = createContext();

export const FitnessContext = ({ children }) => {
  const [completed, setCompleted] = useState([]);
  const [workOut, setWorkOut] = useState(0);
  const [calories, setCalories] = useState(0);
  const [minutes, setMinutes] = useState(0);
  return (
    <FitnessItems.Provider
      value={{
        completed,
        setCompleted,
        workOut,
        setWorkOut,
        calories,
        setCalories,
        minutes,
        setMinutes,
      }}
    >
      {children}
    </FitnessItems.Provider>
  );
};


