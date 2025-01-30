import React, { useEffect } from "react";
import ApexCharts from "apexcharts";
import dayjs from "dayjs";
// import quarter from "dayjs/plugin/quarter";

const RevenueChart1 = () => {
  useEffect(() => {
    var options = {
      series: [44, 55, 41, 17, 15],
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    return () => {
      chart.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col"
            style={{ height: "500px", width: "500px", color: "white" }}
            id="chart"></div>
          <div
            className="col"
            style={{ height: "500px", width: "500px", color: "white" }}
            id="chart"></div>
        </div>
      </div>
    </>
  );
};

export default RevenueChart1;
