import React, { useEffect, useState } from "react";

const Fatch_Data_API = () => {
  const [apiData, setApiData] = useState();
  useEffect(() => {
    const fetchDataAPI = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await api.json();
      setApiData(data);
      console.log("My Data=", data);
    };
    fetchDataAPI();
  }, []);

  return (
    <div>
      {apiData.map((data) => (
        <div
          key={data.id}
          style={{
            backgroundColor: "gray",
            margin: "10px",
            border: "2px solid yellow",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3> {data.titel} </h3>
        </div>
      ))}
    </div>
  );
};

export default Fatch_Data_API;
