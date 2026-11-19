import React, { use } from "react";
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const MarksChart = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  const markData = Array.isArray(marksDataRes)
    ? marksDataRes
    : Array.isArray(marksDataRes?.data)
      ? marksDataRes.data
      : [];
  console.log(markData)
  const marksCharData = markData.map((studentData) => {
    const student = {
      id: studentData.student_id,
      name: studentData.name,
      physics: studentData.marks.physics,
      chemistry: studentData.marks.chemistry,
      math: studentData.marks.math,
    };
    const avg = (student.physics + student.chemistry + student.math) / 3;
    student.avg = avg;
    return student;
  });
  console.log(marksCharData);
  return <div>
    <BarChart width={500} height={300} data={marksCharData}>
      
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="avg" fill="#8884d8"  />
      <Bar dataKey="chemistry" fill="#8884d8"  />
    </BarChart>
  </div>;
};

export default MarksChart;
