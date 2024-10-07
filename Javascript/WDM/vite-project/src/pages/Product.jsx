import React from "react";

const Product = () => {
  const arr = [
    {
      id: "MARN001",
      course_name: "MERN_Stack",
      price: 10000,
      duration: "5month",
    },
    {
      id: "JAVA002",
      course_name: "Java_full_stack",
      price: 15000,
      duration: "12month",
    },
    {
      id: "PY0102",
      course_name: "pythan_full_stack",
      price: 2000,
      duration: "15month",
    },
    {
      id: "REACT99",
      course_name: "React_Course",
      price: 27000,
      duration: "20month",
    },
  ];
  return (
    <div>
      <ul>
        {arr.map((data) => (
          <div key={data.id}>
            <li>
              <link to={`/courses/:id ${data.id} `}>{data.course_name}</link>
              {""}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Product;
