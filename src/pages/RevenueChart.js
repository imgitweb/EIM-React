import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const RevenueChart = () => {
  const theme = localStorage.getItem("theme") || "light";
  const [chartData, setChartData] = useState({
    columnData: generateMinuteWiseTimeSeries(
      new Date("12/12/2016 00:20:00").getTime(),
      12,
      {
        min: 10,
        max: 110,
      }
    ),
    lineData1: generateMinuteWiseTimeSeries(
      new Date("12/12/2016 00:20:00").getTime(),
      12,
      {
        min: 30,
        max: 110,
      }
    ),
    lineData2: generateMinuteWiseTimeSeries(
      new Date("12/12/2016 00:20:00").getTime(),
      12,
      {
        min: 30,
        max: 110,
      }
    ),
    circleData: [71, 63],
    progress1: 44,
    progress2: 80,
    progress3: 74,
  });

  function getRandom() {
    const i = Math.floor(Math.random() * 100);
    return (Math.sin(i / 3) * (i / 3) + i / 3 + 1) * 6;
  }

  function getRangeRandom(yrange) {
    return (
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    );
  }

  function generateMinuteWiseTimeSeries(baseval, count, yrange) {
    let i = 0;
    const series = [];
    while (i < count) {
      const x = baseval;
      const y = (Math.sin(i / 3) * (i / 3) + i / 3 + 1) * 6;
      series.push([x, y]);
      baseval += 300000;
      i++;
    }
    return series;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData((prevState) => {
        const newColumnData = [...prevState.columnData];
        newColumnData.shift();
        newColumnData.push([
          newColumnData[newColumnData.length - 1][0] + 300000,
          getRandom(),
        ]);

        const newLineData1 = [...prevState.lineData1];
        newLineData1.shift();
        newLineData1.push([
          newLineData1[newLineData1.length - 1][0] + 300000,
          getRandom(),
        ]);

        const newLineData2 = [...prevState.lineData2];
        newLineData2.shift();
        newLineData2.push([
          newLineData2[newLineData2.length - 1][0] + 300000,
          getRandom(),
        ]);

        return {
          ...prevState,
          columnData: newColumnData,
          lineData1: newLineData1,
          lineData2: newLineData2,
          circleData: [
            getRangeRandom({ min: 10, max: 100 }),
            getRangeRandom({ min: 10, max: 100 }),
          ],
          progress1: getRangeRandom({ min: 10, max: 100 }),
          progress2: getRangeRandom({ min: 10, max: 100 }),
          progress3: getRangeRandom({ min: 10, max: 100 }),
        };
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

const columnOptions = {
  chart: {
    height: 350,
    type: "bar",
   
    animations: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "45%",
      distributed: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 0,
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0.5,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 0.8,
      stops: [0, 100],
    },
  },
  xaxis: {
    type: "datetime",
    range: 2700000,
    labels: {
      style: {
        colors: theme === "dark" ? "#FFFFFF" : "#202936", // 👈 bright x-axis labels
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: theme === "dark" ? "#FFFFFF" : "#202936", // 👈 bright y-axis labels
      },
    },
  },
  legend: {
    labels: {
      colors: theme === "dark" ? "#FFFFFF" : "#202936", // 👈 bright legend labels
    },
  },
  title: {
    text: "Load Average",
    align: "left",
    style: {
      fontSize: "12px",
      color:theme === "dark" ? "#FFFFFF" : "#202936", // 👈 bright title
    },
  },
};

  const lineOptions = {
    chart: {
      height: 350,
      type: "line",
      stacked: true,
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
      dropShadow: {
        enabled: true,
        opacity: 0.6,
        blur: 5,
        left: -7,
        top: 22,
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,

    },
    stroke: {
      curve: "straight",
      width: 5,
    },
    grid: {
      padding: {
        left: 0,
        right: 0,
      },
    },
    markers: {
      size: 0,
      hover: {
        size: 0,
      },

    },
    xaxis: {
      type: "datetime",
      range: 2700000,
      labels: {
        style: {
          colors: theme === "dark" ? "#FFFFFF" : "#202936", // 👈 bright x-axis labels
        },
      },
    },  
    yaxis: {
      labels: {
        style: {
          colors: theme === "dark" ? "#FFFFFF" : "#202936", // 👈 bright y-axis labels
        },
      },
    },
    title: {
      text: "Processes",
      align: "left",
      style: {
        fontSize: "12px",
        color: theme === "dark" ? "#FFFFFF" : "#202936", // 👈 bright title
      },
    },
    legend: {
      show: true,
      floating: true,
      horizontalAlign: "left",
      position: "top",
      offsetY: -28,
      offsetX: 60,
      labels: {
        colors: theme === "dark" ? "#FFFFFF" : "#202936", // 👈 bright legend labels
      },
    },
  };

  const circleOptions = {
    chart: {
      type: "radialBar",
      height: 320,
      offsetY: -30,
      offsetX: 20,
    },
    plotOptions: {
      radialBar: {
        size: undefined,
        inverseOrder: false,
        hollow: {
          margin: 5,
          size: "48%",
          background: "transparent",
        },
        track: {
          show: true,
          background: "#40475D",
          strokeWidth: "10%",
          opacity: 1,
          margin: 3,
        },
      },
    },
    labels: ["Revenue Distribution", "Revenue Distribution"],
    legend: {
      show: true,

      position: "left",
      offsetX: -30,
      offsetY: 10,
      formatter: function (val, opts) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex] + "%";
      },
      labels: {
        colors: theme === "dark" ? "#FFFFFF" : "#202936", // 👈 bright legend labels
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],

      },
    },
  };

const progressOptions = {
    chart: {
      height: 70,
      type: "bar",
      stacked: true,
      sparkline: {
        enabled: true,

      },
      
    },
    plotOptions: {

      bar: {
        horizontal: true,
        barHeight: "20%",
        borderRadius: 5,
        colors: {
          backgroundBarColors: ["#40475D"],
          
        },
      },

    },
    stroke: {
      width: 0,


    },
    xaxis: {
      max: 100,
      labels: {

        style: {
          colors: theme === "dark" ? "#FFFFFF" : "#202936", // 👈 bright x-axis labels
        },
      },
    },
    tooltip: {
      enabled: false,

    },
  };

  


  return (
    <div className="content-area">
      <div className="container-flui">
        <div className="man">
          <div className="row mt-4">
            <div className="col-md-5">
                <div
              style={{
                backgroundColor:  theme === "dark" ? "#262D47" : "#EBF3FE",
               color: theme === "dark" ? "#EBF3FE" : "#000",
              }}
               className="p-6 py-4 ">
                <ReactApexChart
                  options={columnOptions}
                  series={[
                    { name: "Load Average", data: chartData.columnData },
                  ]}
                  type="bar"
                  height={350}
                />
              </div>
            </div>
            <div className="col-md-7">
                <div
              style={{
                backgroundColor:  theme === "dark" ? "#262D47" : "#EBF3FE",
               color: theme === "dark" ? "#EBF3FE" : "#000",
              }}
               className="p-6 py-4 ">
                <ReactApexChart
                  options={lineOptions}
                  series={[
                    { name: "Running", data: chartData.lineData1 },
                    { name: "Waiting", data: chartData.lineData2 },
                  ]}
                  type="line"
                  height={350}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div
              style={{
                backgroundColor:  theme === "dark" ? "#262D47" : "#EBF3FE",
               color: theme === "dark" ? "#EBF3FE" : "#000",
              }}
               className="p-6 py-4 mt-4 ">
                <ReactApexChart
                  options={circleOptions}
                  series={chartData.circleData}
                  type="radialBar"
                  height={320}
                />
              </div>
            </div>
            <div className="col-md-7">
               <div
              style={{
                backgroundColor:  theme === "dark" ? "#262D47" : "#EBF3FE",
               color: theme === "dark" ? "#EBF3FE" : "#000",
              }}
               className="p-6 py-4 mt-4">
                <div className="mt-4">
                  <ReactApexChart
                    options={{
                      ...progressOptions,
                      colors: ["#FCCF31"],
                      title: {
                        text: "Process 1",
                        floating: true,
                        offsetX: -10,
                        offsetY: 5,
                          style: {
          color: theme === "dark" ? "#FFFFFF" : "#000000", // 👈 dynamic title color
          fontSize: "12px",
        },
                      },
                    }}
                    series={[
                      { name: "Process 1", data: [chartData.progress1] },
                    ]}
                    type="bar"
                    height={70}
                  />
                </div>
                   <div
              style={{
                backgroundColor:  theme === "dark" ? "#262D47" : "#EBF3FE",
               color: theme === "dark" ? "#EBF3FE" : "#000",
              }}
               className="p-6 py-4 ">
                  <ReactApexChart
                    options={{
                      ...progressOptions,
                      colors: ["#17ead9"],
                      title: {
                        text: "Process 2",
                        floating: true,
                        offsetX: -10,
                        offsetY: 5,
                          style: {
          color: theme === "dark" ? "#FFFFFF" : "#000000", // 👈 dynamic title color
          fontSize: "12px",
        },
                      },
                    }}
                    series={[
                      { name: "Process 2", data: [chartData.progress2] },
                    ]}
                    type="bar"
                    height={70}
                  />
                </div>
                  <div
              style={{
                backgroundColor:  theme === "dark" ? "#262D47" : "#EBF3FE",
               color: theme === "dark" ? "#EBF3FE" : "#000",
              }}
               className="p-6 py-4 ">
                  <ReactApexChart
                    options={{
                      ...progressOptions,
                      colors: ["#f02fc2"],
                      title: {
                        text: "Process 3",
                        floating: true,
                        offsetX: -10,
                        offsetY: 5,
                          style: {
          color: theme === "dark" ? "#FFFFFF" : "#000000", // 👈 dynamic title color
          fontSize: "12px",
        },
                      },
                    }}
                    series={[
                      { name: "Process 3", data: [chartData.progress3] },
                    ]}
                    type="bar"
                    height={70}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
