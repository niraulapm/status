import React, { useState, useEffect } from "react";


import axios from "axios";
import MiblNavBar from "./MiblNavbar";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/data.json")
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
      .catch(err => console.log(err))
  }, []);
  return (
    <>
      <MiblNavBar data={data} />

    </>
  );
}

export default App;
