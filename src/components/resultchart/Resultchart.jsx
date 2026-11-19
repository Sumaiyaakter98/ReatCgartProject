import React from "react";
import { Line, LineChart, XAxis, YAxis, Tooltip, Legend } from "recharts";

const resultData = [
  {
    student_id: 1,
    name: "Alice",
    physics: 85,
    chemistry: 90,
    math: 88,
  },
  {
    student_id: 2,
    name: "Bob",
    physics: 78,
    chemistry: 82,
    math: 91,
  },
  {
    student_id: 3,
    name: "Charlie",
    physics: 92,
    chemistry: 87,
    math: 95,
  },
  {
    student_id: 4,
    name: "Diana",
    physics: 74,
    chemistry: 79,
    math: 84,
  },
  {
    student_id: 5,
    name: "Ethan",
    physics: 89,
    chemistry: 85,
    math: 80,
  },
  {
    student_id: 6,
    name: "Fiona",
    physics: 95,
    chemistry: 93,
    math: 97,
  },
  {
    student_id: 7,
    name: "George",
    physics: 68,
    chemistry: 72,
    math: 75,
  },
  {
    student_id: 8,
    name: "Hannah",
    physics: 81,
    chemistry: 88,
    math: 86,
  },
  {
    student_id: 9,
    name: "Ivan",
    physics: 76,
    chemistry: 74,
    math: 89,
  },
  {
    student_id: 10,
    name: "Julia",
    physics: 90,
    chemistry: 91,
    math: 92,
  },
];

const Resultchart = () => {
  return (
    <div>
      <h3>Student Marks Chart</h3>
      <LineChart width={600} height={350} data={resultData}>
        <XAxis dataKey="name" />
        <YAxis domain={[0, 100]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="math" stroke="#2563eb" />
        <Line type="monotone" dataKey="chemistry" stroke="red" />
        <Line type="monotone" dataKey="physics" stroke="green" />
      </LineChart>
    </div>
  );
};

export default Resultchart;