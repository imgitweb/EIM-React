// src/components/BarChart.jsx
import React from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {
  const series = [
    {
      name: "Tesla Model S",
      data: [540, 430, 320, 780, 540, 430, 340, 410, 560, 600, 740, 880],
    },
    {
      name: "BMW 5 Series",
      data: [420, 300, 280, 580, 480, 370, 310, 360, 480, 520, 660, 690],
    },
  ];

  const options = {
    chart: { type: "bar", height: 300 },
    colors: ["#00BFFF", "#FF5B7F"],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "60%",
      },
    },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 2, colors: ["transparent"] },
    xaxis: {
      categories: [
        "Jan", "Feb", "Mar", "Apr", "Mai", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
      ],
    },
    fill: { opacity: 1 },
    tooltip: {
      y: { formatter: (val) => `${val}` },
    },
    legend: {
      position: "bottom",
    },
  };

  return <ReactApexChart options={options} series={series} type="bar" height={300} />;
};

export default BarChart;
