import { useEffect, useState } from "react";
import LeftSidebar from "../LeftSidebar";
import Navigation from "../Navigation";
import ApexCharts from "apexcharts";

const Market_Research = () => {
  const [isActive, setActive] = useState(false);

  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };

  // Function to generate random data
  const generateRandomData = (size) => {
    let data = [];
    for (let i = 0; i < size; i++) {
      data.push(Math.floor(Math.random() * 100) + 1); // Random number between 1 and 100
    }
    return data;
  };

  useEffect(() => {
    const categories = [
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ];

    // Randomized data for all graphs
    const options = {
      series: [
        {
          name: "TAM",
          data: generateRandomData(9),
        },
      ],
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          borderRadius: 5,
          borderRadiusApplication: "end",
        },
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: categories,
        labels: {
          style: {
            colors: "#FFD700", // Highlight x-axis labels color
          },
        },
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
          colors: ["white"],
        },
        labels: {
          style: {
            colors: "#FFD700", // Highlight y-axis labels color
          },
        },
      },
      fill: {
        opacity: 1,
      },
      tooltipBGColor : "black",
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
      title: {
        text: "TAM",
        align: "center",
        style: {
          color: "#FFD700",
          fontSize: '18px',
          fontWeight: 'bold',
        },
      },

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              type: "bar",
              height: 350,
            },
          },
        },
      ],
    };

    const options1 = {
      series: [
        {
          name: "SAM",
          data: generateRandomData(9),
        },
      ],
      chart: {
        type: "bar",
        height: 350,
      },
      title :{
        text: "SAM", // This will show the title at the top of the chart
        align: "center",
        style: {
          color: "#FFD700", // Customize title color
          fontSize: '18px',
          fontWeight: 'bold',
        },
      },

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          borderRadius: 5,
          borderRadiusApplication: "end",
        },
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: categories,
        labels: {
          style: {
            colors: "#FFD700", // Highlight x-axis labels color
          },
        },
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
          colors: ["white"],
        },
        labels: {
          style: {
            colors: "#FFD700", // Highlight y-axis labels color
          },
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              type: "bar",
              height: 350,
            },
          },
        },
      ],
    };

    const options2 = {
      series: [
        {
          data: generateRandomData(10),
        },
      ],
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: "end",
          horizontal: true,
        },
      },
      title:{
        text :"Size Your Market",
        align: "center",
        style: {
          color: "#FFD700", // Customize title color
          fontSize: '18px',
          fontWeight: 'bold',
        },
      },
      xaxis: {
        categories: [
          "South Korea",
          "Canada",
          "United Kingdom",
          "Netherlands",
          "Italy",
          "France",
          "Japan",
          "United States",
          "China",
          "Germany",
        ],
        labels: {
          style: {
            colors: "#FFD700", // Highlight x-axis labels color
          },
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              type: "bar",
              height: 350,
            },
          },
        },
      ],
    };

    const options3 = {
      series: [44, 55, 41, 17, 15],
      chart: {
        type: "donut",
      },
      title:{
        text: "Audience ", // This will show the title at the top of the chart
        align: "center",
        style: {
          color: "#FFD700", // Customize title color
          fontSize: '18px',
          fontWeight: 'bold',
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "side",
            },
          },
        },
      ],
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    const chart1 = new ApexCharts(document.querySelector("#chart1"), options1);
    const chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
    const chart3 = new ApexCharts(document.querySelector("#chart3"), options2);
    const chart4 = new ApexCharts(document.querySelector("#chart4"), options2);
    const chart5 = new ApexCharts(document.querySelector("#chart5"), options3);
    const chart6 = new ApexCharts(document.querySelector("#chart5"), options3);
    var charts = [chart, chart1, chart2, chart3, chart4, chart5, chart6];
    for (let chart of charts) {
      chart.render();
    }

    // Clean up charts on component unmount
    return () => {
      for (let chart of charts) {
        chart.destroy();
      }
    };
  }, []);

  return (
    <div id="main-wrapper" className={isActive ? "show-sidebar" : ""}>
      {/* Sidebar Start */}
      <LeftSidebar onButtonClick={ToggleEvent} />
      {/* Sidebar End */}
      <div className="page-wrapper">
        <Navigation onButtonClick={ToggleEvent} />
        {/* Page Content */}
        <div className="body-wrapper">
          <div className="container-fluid">
            <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4">
              <div className="card-body px-4 py-3">
                <div className="row align-items-center">
                  <div className="col-9">
                    <h4 className="fw-semibold mb-8">Market Research</h4>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a
                            className="text-muted text-decoration-none"
                            href="#0"
                          >
                            Home
                          </a>
                        </li>
                        <li className="breadcrumb-item" aria-current="page">
                          Market Research
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <div className="col-3">
                    <div className="text-center mb-n5">
                      <img
                        src="./assets/assets/images/breadcrumb/ChatBc.png"
                        alt="modernize-img"
                        className="img-fluid mb-n4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col"
                style={{ height: "500px", width: "500px", color: "white" }}
                id="chart"
              >
              </div>
              <div
                className="col"
                style={{ height: "500px", width: "500px", color: "white" }}
                id="chart1"
              ></div>
            </div>
            <div className="row">
              <div
                className="col"
                style={{ height: "500px", width: "500px", color: "white" }}
                id="chart2"
              ></div>
              <div
                className="col"
                style={{ height: "500px", width: "500px", color: "white" }}
                id="chart3"
              ></div>
            </div>
            <div className="row">
              <div
                className="col"
                style={{ height: "500px", width: "500px", color: "white" }}
                id="chart4"
              ></div>
              <div className="col">
                <div className="row">
                  {/* This will ensure chart5 and chart6 are side by side */}
                  <div
                    className="col-6"
                    style={{ height: "200px", width: "50%", color: "white" }}
                    id="chart5"
                  ></div>
                  <div
                    className="col-6" 
                    style={{ height: "200px", width: "50%", color: "white" }}
                    id="chart6"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market_Research;
