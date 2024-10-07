import React, { useEffect, useState } from "react";
import PixabayContext from "./PixabayContext";

const PixabayState = (props) => {
  const [imageData, setImageData] = useState([]);
  const api_key = "46232399-37cf0b8b50b25049be39fe20d";
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://pixabay.com/api/?key=${api_key}&q=london&image_type=photo&pretty=true&per_page=100`
      );
      const data = await api.json();
      setImageData(data.hits);
      console.log(data.hits);
    };
    fetchData();
  }, []);

  const fetchImageByCategory = async (cat) => {
    const api = await fetch(
      `https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true&per_page=100`
    );
    const data = await api.json();
    setImageData(data.hits);
    console.log(data.hits);
  };

  return (
    <PixabayContext.Provider value={{ imageData, fetchImageByCategory }}>
      {props.children}
    </PixabayContext.Provider>
  );
};

export default PixabayState;
