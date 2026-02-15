import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import { api } from "api";

const COLORS = ["#6366f1", "#8b5cf6", "#facc15", "#f87171"];

const DonutChart = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api
      .get("/books")
      .then((res) => {
        setBooks(res.data.books);
      })
      .catch((err) => {
        console.error("Faild to Fetch Categories Data => ", err);
      });
  }, []);

  const CategoriesCounts = () => {
    let codingCount = 0,
      horrorCount = 0,
      historyCount = 0,
      RomanticCount = 0;

    const categoriesNames = books.flatMap((book) =>
      book.categories.map((c) => c.name),
    );

    for (let i = 0; i < categoriesNames.length; i++) {
      if (categoriesNames[i] === "Coding") codingCount++;
      if (categoriesNames[i] === "Horror") horrorCount++;
      if (categoriesNames[i] === "History") historyCount++;
      if (categoriesNames[i] === "Romantic") RomanticCount++;
    }

    return {
      coding: codingCount,
      horror: horrorCount,
      history: historyCount,
      romantic: RomanticCount,
    };
  };

  const categoriesData = CategoriesCounts();

  const data = [
    { name: "Coding", value: categoriesData.coding },
    { name: "Horror", value: categoriesData.horror },
    { name: "History", value: categoriesData.history },
    { name: "Romantic", value: categoriesData.romantic },
  ];

  return (
    <div style={{ width: 300, height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Legend
            layout="vertical"
            verticalAlign="middle"
            align="right"
            style={{ margin: "20px" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonutChart;
