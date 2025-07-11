import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const QuizResultChart = ({ score, total }) => {
  const percentage = Math.round((score / total) * 100);

  const chartOptions = {
    chart: { type: "radialBar", sparkline: { enabled: true } },
    plotOptions: {
      radialBar: {
        hollow: { size: "60%" },
        dataLabels: {
          show: true,
          name: { show: false },
          value: {
            fontSize: "24px",
            fontWeight: "bold",
            formatter: () => `${percentage}%`,
          },
        },
      },
    },
    colors: [percentage >= 80 ? "#28a745" : "#ffc107"],
    labels: ["Score"],
  };

  const chartSeries = [percentage];


  const [chartWidth, setChartWidth] = useState(190);

useEffect(() => {
  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 576) {
      setChartWidth(250);
    } else if (width < 768) {
      setChartWidth(220);
    } else {
      setChartWidth(200);
    }
  };

  handleResize(); // Set initial width
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);





  return (
    <div
    style={{
      backgroundColor: "#f8f9fa",
      borderRadius: "1rem",
    }}
    className="shadow-sm p-4  rounded-4 text-center">
      <h6 className="mb-3">Performance</h6>
      <Chart options={chartOptions} series={chartSeries} type="radialBar" height={120} width={chartWidth} />
    </div>
  );
};

export default QuizResultChart;
