import React, { useState } from "react";
import Layout from "./layout/Layout";


const App = () => {
  const [orderP, setOrderP] = useState({});

  const updateOrder = (e) => {
    setOrderP(e);
  }

  return (
    <>
      <Layout order={orderP} updateOrder={updateOrder} />
    </>
  );
};
export default App;
