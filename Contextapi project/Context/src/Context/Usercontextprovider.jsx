import React, { Children } from "react";
import UserContext from "./Usercontext";

export default function Usercontextprovider() {
  const UserContextProvider = ({ Children }) => {};
  return (
    <div>
      <UserContext.Provider>{Children}</UserContext.Provider>
    </div>
  );
}
