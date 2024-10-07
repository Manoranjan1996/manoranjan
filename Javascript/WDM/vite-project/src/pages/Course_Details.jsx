import React from "react";
import { useParams } from "react-router-dom";

const Course_Details = () => {
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
  const { id } = useParams();

  const Course_Details = arr.filter((data) => data.id == id);
  console.log(Course_Details);

  return (
    <div>
      <h1>Course Id={id}</h1>
    </div>
  );
};

export default Course_Details;
