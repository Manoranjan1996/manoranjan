import React from "react";
import Persion from "./Persion";
import { Test } from "./component/Test";
import Product from "./component/Product";
import Persion2 from "./component/Persion2";
import Persion3 from "./component/Persion3";
import Laptop from "./component/Laptop";
import Event from "./component/Event";
import Counter from "./component/Counter";
import ShowProduct from "./component/ShowProduct";
import FilterProduct from "./component/FilterProduct";

const Home = () => {
  return (
    <>
      {/* <Persion /> */}
      <h1>Learning React JSX</h1>
      {/* <Test /> */}
      {/* <Product titel="Galaxy S24 Ultra" brand="Sumsung" price={15000} /> */}
      {/* <Product titel="i phone 15 pro" brand="iphone" price={5000} /> */}
      {/* <Persion2 name="manoj" age="23" salary={23888} />
    <Persion2 name="tapan" age="72" salary={24444} />
    <Persion2 name="radhy" age="56" salary={42344} /> */}

      <div>{/* <Persion3 name="Manoj" age={44} panCard={true} /> */}</div>

      <div>
        {/* <Laptop brandName="HP" model="probook" price={1500} />
      <Laptop brandName="lenovo" model="yoga" price={1400} />
      <Laptop brandName="dell" model="inspiron" price={5500} /> */}
      </div>
      <div>{/* <Event /> */}</div>
      <div>{/* <Counter /> */}</div>
      <div>{/* <ShowProduct /> */}</div>
      <div>
        <FilterProduct />
      </div>
    </>
  );
};

export default Home;
