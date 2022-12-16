import { createContext, useContext, useState } from "react";

const UserEmailContext = createContext(null);

export const UserEmailProvider = ({ children }) => {
  const [email, setEmail] = useState("test@email.com");

  const add = (email) => {
    setEmail(email)
  }

  return (
    <UserEmailContext.Provider value={{ email, add }}>
      {children}
    </UserEmailContext.Provider>
  );
};

export const useEmail = () => {
  return useContext(UserEmailContext);
};
