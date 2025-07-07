import React from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = () => {
  const series = [40, 20, 40];
  const options = {
    labels: ["Open", "Bounce", "Unsubscribe"],
    colors: ["#00BFFF", "#FF6347", "#FFA500"],
    legend: { position: "bottom" },
  };

  return <ReactApexChart options={options} series={series} type="pie" height={300} />;
};

export default PieChart;
