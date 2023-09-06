import React from "react";
import Chart from "react-google-charts";

const PieChart = ({ data }) => {
  const chartData = Object.entries(
    data.reduce(
      (acc, item) => {
        acc[item.status] ? (acc[item.status] += 1) : (acc[item.status] = 1);
        return acc;
      },
      { Status: "Total" }
    )
  );
  const options = {
    title: "Status Chart",
    is3D: true,
  };

  return (
    <Chart
      chartType="PieChart"
      options={options}
      data={chartData}
      className="piechart-container"
    />
  );
};

export default PieChart;
