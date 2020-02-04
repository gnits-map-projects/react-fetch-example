import React, { useState, useEffect } from "react";

const Planets = () => {
  const [starships, setPlanets] = useState({});

  useEffect(() => {
    const fetchBook = () =>
      fetch("https://api.myjson.com/bins/sqydi")
        .then(res => res.json())
        .then(res => setPlanets(res));
    fetchBook();
  }, []);

  return (
    <div style={{background: "#ebebeb", marginTop: "2%", marginLeft: "2%"}}>
      <span>Manufacturer Name ={JSON.stringify(starships.manufacturer)}</span>
      <hr />
    </div>
  );
};
export default Planets;
