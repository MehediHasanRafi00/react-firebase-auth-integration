import React, { use } from "react";
import { AuthContext } from "../Context/Auth/AuthContext";

const Home = () => {
  const authInfo = use(AuthContext);
  console.log(authInfo)
  return <div>home</div>;
};

export default Home;
