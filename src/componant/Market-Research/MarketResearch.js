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

    // Define the chart options for each chart
    const options = [
      {
        series: [
          { name: "TAM", data: generateRandomData(9) },
          { name: "SAM", data: generateRandomData(9) },
        ],
        chart: { type: "bar", height: 250 }, // Reduced height
        xaxis: {
          categories: categories,
          labels: { style: { colors: "white" } },
        },
        yaxis: { labels: { style: { colors: "white" } } },
      },
      {
        series: [{ name: "SAM", data: generateRandomData(9) }],
        chart: { type: "bar", height: 250 }, // Reduced height
        xaxis: {
          categories: categories,
          labels: { style: { colors: "white" } },
        },
        yaxis: { labels: { style: { colors: "white" } } },
      },
      {
        series: [{ data: generateRandomData(10) }],
        chart: { type: "bar", height: 350 },
        plotOptions: {
          bar: {
            horizontal: true,
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
              colors: "white",
              // fontSize: '14px',
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: "white",
            },
          },
        },
      },
      {
        series: [44, 55, 41, 17, 15],
        chart: { type: "donut", height: 250 },
        labels: ["18-24", "25-34", "35-44", "45-54", "55-64"],
      },
    ];

    const charts = options.map((option, index) => {
      const chart = new ApexCharts(
        document.querySelector(`#chart${index + 1}`),
        option
      );
      chart.render();
      return chart;
    });

    // Clean up charts on component unmount
    return () => {
      charts.forEach((chart) => chart.destroy());
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
          </div>

          {/* Tab Navigation */}
          <div className="container-fluid">
            <ul
              className="nav nav-pills user-profile-tab justify-content-end mt-2 bg-primary-subtle rounded-2 rounded-top-2"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active hstack gap-2 rounded-0 py-6"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="true"
                >
                  <i className="ti ti-trending-up fs-5"></i>
                  <span className="d-none d-md-block">Size your market</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link hstack gap-2 rounded-0 py-6"
                  id="pills-followers-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-followers"
                  type="button"
                  role="tab"
                  aria-controls="pills-followers"
                  aria-selected="false"
                >
                  <i className="ti ti-flask fs-5"></i>
                  <span className="d-none d-md-block">
                    Research the competition
                  </span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link hstack gap-2 rounded-0 py-6"
                  id="pills-friends-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-friends"
                  type="button"
                  role="tab"
                  aria-controls="pills-friends"
                  aria-selected="false"
                >
                  <i className="ti ti-globe fs-5"></i>
                  <span className="d-none d-md-block">
                    Discover what marketing channels work
                  </span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link hstack gap-2 rounded-0 py-6"
                  id="pills-gallery-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-gallery"
                  type="button"
                  role="tab"
                  aria-controls="pills-gallery"
                  aria-selected="false"
                >
                  <i className="ti ti-analyze fs-5"></i>
                  <span className="d-none d-md-block">
                    Analyze audience demographics
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Tab Content */}
          <div className="body-wrapper">
            <div className="container-fluid">
              <div className="tab-content mt-3" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <div id="chart1" className="chart-container"></div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-followers"
                  role="tabpanel"
                  aria-labelledby="pills-followers-tab"
                >
                  <div id="chart2" className="chart-container"></div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-friends"
                  role="tabpanel"
                  aria-labelledby="pills-friends-tab"
                >
                  <div id="chart3" className="chart-container"></div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-gallery"
                  role="tabpanel"
                  aria-labelledby="pills-gallery-tab"
                >
                  <div id="chart4" className="chart-container"></div>
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
