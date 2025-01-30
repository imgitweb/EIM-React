import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SearchBar from "../componant/SearchBar";

const PathToUnicorn = () => {
  const [isActive, setIsActive] = useState(false);

  const ToggleEvent = () => {
    setIsActive(!isActive);
  };
  const navigate = useNavigate();

  const handleCircleClick = (milestone) => {
    if (milestone) {
      // eslint-disable-next-line no-undef
      console.log(milestone);
      navigate("/path-unicorn2", { state: { activeMilestone: milestone } });

      // navigate("/path-unicorn2"); // Use navigate to change the route
    }
  };

  return (
    <div id="main-wrapper" className={isActive ? "show-sidebar" : ""}>
      <LeftSidebar onButtonClick={ToggleEvent} />
      <div className="page-wrapper">
        <Navigation onButtonClick={ToggleEvent} />
        <div className="body-wrapper">
          <div className="container-fluid">
            <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4">
              <div className="card-body px-4 py-3">
                <div className="row align-items-center">
                  <div className="col-9">
                    <h4 className="fw-semibold mb-8">Path To Unicorn</h4>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a
                            className="text-muted text-decoration-none"
                            href="../dark/index.html">
                            Home
                          </a>
                        </li>
                        <li className="breadcrumb-item" aria-current="page">
                          Path To Unicorn
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
            <div className="card path">
              <p>
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 1290.8 595.3"
                  style={{ enableBackground: "new 0 0 1290.8 595.3" }}
                  xmlSpace="preserve">
                  <rect className="st0" width="1290.8" height="595.3" />
                  <g>
                    <g>
                      <line
                        className="st1"
                        x1="1183.8"
                        y1="167.1"
                        x2="1183.8"
                        y2="169.1"
                      />
                      <line
                        className="st2"
                        x1="1183.8"
                        y1="171.8"
                        x2="1183.8"
                        y2="183.4"
                      />
                      <line
                        className="st3"
                        x1="1183.8"
                        y1="184.8"
                        x2="1183.8"
                        y2="280.9"
                      />
                      <line
                        className="st1"
                        x1="1183.8"
                        y1="282.3"
                        x2="1183.8"
                        y2="284.3"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <line
                        className="st1"
                        x1="952.9"
                        y1="292.8"
                        x2="952.9"
                        y2="294.8"
                      />
                      <line
                        className="st2"
                        x1="952.9"
                        y1="297.6"
                        x2="952.9"
                        y2="309.2"
                      />
                      <line
                        className="st3"
                        x1="952.9"
                        y1="310.6"
                        x2="952.9"
                        y2="406.6"
                      />
                      <line
                        className="st1"
                        x1="952.9"
                        y1={408}
                        x2="952.9"
                        y2={410}
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <line
                        className="st1"
                        x1="876.2"
                        y1="172.8"
                        x2="876.2"
                        y2="174.8"
                      />
                      <line
                        className="st2"
                        x1="876.2"
                        y1="177.6"
                        x2="876.2"
                        y2="189.2"
                      />
                      <line
                        className="st3"
                        x1="876.2"
                        y1="190.6"
                        x2="876.2"
                        y2="286.7"
                      />
                      <line
                        className="st1"
                        x1="876.2"
                        y1="288.1"
                        x2="876.2"
                        y2="290.1"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <line
                        className="st1"
                        x1="645.4"
                        y1="297.8"
                        x2="645.4"
                        y2="299.8"
                      />
                      <line
                        className="st2"
                        x1="645.4"
                        y1="302.5"
                        x2="645.4"
                        y2="314.1"
                      />
                      <line
                        className="st3"
                        x1="645.4"
                        y1="315.5"
                        x2="645.4"
                        y2="411.6"
                      />
                      <line
                        className="st1"
                        x1="645.4"
                        y1={413}
                        x2="645.4"
                        y2={415}
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <line
                        className="st1"
                        x1="569.3"
                        y1="168.6"
                        x2="569.3"
                        y2="170.6"
                      />
                      <line
                        className="st2"
                        x1="569.3"
                        y1="173.4"
                        x2="569.3"
                        y2={185}
                      />
                      <line
                        className="st3"
                        x1="569.3"
                        y1="186.3"
                        x2="569.3"
                        y2="282.4"
                      />
                      <line
                        className="st1"
                        x1="569.3"
                        y1="283.8"
                        x2="569.3"
                        y2="285.8"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <line
                        className="st1"
                        x1="339.2"
                        y1="297.8"
                        x2="339.2"
                        y2="299.8"
                      />
                      <line
                        className="st2"
                        x1="339.2"
                        y1="302.5"
                        x2="339.2"
                        y2="314.1"
                      />
                      <line
                        className="st3"
                        x1="339.2"
                        y1="315.5"
                        x2="339.2"
                        y2="411.6"
                      />
                      <line
                        className="st1"
                        x1="339.2"
                        y1={413}
                        x2="339.2"
                        y2={415}
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <line
                        className="st1"
                        x1="262.5"
                        y1="172.8"
                        x2="262.5"
                        y2="174.8"
                      />
                      <line
                        className="st2"
                        x1="262.5"
                        y1="177.6"
                        x2="262.5"
                        y2="189.2"
                      />
                      <line
                        className="st3"
                        x1="262.5"
                        y1="190.6"
                        x2="262.5"
                        y2="286.7"
                      />
                      <line
                        className="st1"
                        x1="262.5"
                        y1="288.1"
                        x2="262.5"
                        y2="290.1"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <line
                        className="st1"
                        x1="185.8"
                        y1="285.7"
                        x2="185.8"
                        y2="287.7"
                      />
                      <line
                        className="st4"
                        x1="185.8"
                        y1="291.2"
                        x2="185.8"
                        y2="305.5"
                      />
                      <line
                        className="st5"
                        x1="185.8"
                        y1="307.2"
                        x2="185.8"
                        y2="353.6"
                      />
                      <line
                        className="st1"
                        x1="185.8"
                        y1="355.3"
                        x2="185.8"
                        y2="357.3"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <line
                        className="st1"
                        x1="415.9"
                        y1="220.2"
                        x2="415.9"
                        y2="222.2"
                      />
                      <line
                        className="st4"
                        x1="415.9"
                        y1="225.7"
                        x2="415.9"
                        y2={240}
                      />
                      <line
                        className="st5"
                        x1="415.9"
                        y1="241.7"
                        x2="415.9"
                        y2="288.1"
                      />
                      <line
                        className="st1"
                        x1="415.9"
                        y1="289.8"
                        x2="415.9"
                        y2="291.8"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <line
                        className="st1"
                        x1="492.6"
                        y1="285.7"
                        x2="492.6"
                        y2="287.7"
                      />
                      <line
                        className="st4"
                        x1="492.6"
                        y1="291.2"
                        x2="492.6"
                        y2="305.5"
                      />
                      <line
                        className="st5"
                        x1="492.6"
                        y1="307.2"
                        x2="492.6"
                        y2="353.6"
                      />
                      <line
                        className="st1"
                        x1="492.6"
                        y1="355.3"
                        x2="492.6"
                        y2="357.3"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <line
                        className="st1"
                        x1="724.1"
                        y1="218.5"
                        x2="724.1"
                        y2="220.5"
                      />
                      <line
                        className="st4"
                        x1="724.1"
                        y1="223.9"
                        x2="724.1"
                        y2="238.3"
                      />
                      <line
                        className="st5"
                        x1="724.1"
                        y1={240}
                        x2="724.1"
                        y2="286.3"
                      />
                      <line
                        className="st1"
                        x1="724.1"
                        y1="288.1"
                        x2="724.1"
                        y2="290.1"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <line
                        className="st1"
                        x1="799.5"
                        y1="285.7"
                        x2="799.5"
                        y2="287.7"
                      />
                      <line
                        className="st4"
                        x1="799.5"
                        y1="291.2"
                        x2="799.5"
                        y2="305.5"
                      />
                      <line
                        className="st5"
                        x1="799.5"
                        y1="307.2"
                        x2="799.5"
                        y2="353.6"
                      />
                      <line
                        className="st1"
                        x1="799.5"
                        y1="355.3"
                        x2="799.5"
                        y2="357.3"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <line
                        className="st1"
                        x1="1029.6"
                        y1="223.5"
                        x2="1029.6"
                        y2="225.5"
                      />
                      <line
                        className="st4"
                        x1="1029.6"
                        y1="228.9"
                        x2="1029.6"
                        y2="243.2"
                      />
                      <line
                        className="st5"
                        x1="1029.6"
                        y1="244.9"
                        x2="1029.6"
                        y2="291.3"
                      />
                      <line
                        className="st1"
                        x1="1029.6"
                        y1={293}
                        x2="1029.6"
                        y2={295}
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <line
                        className="st1"
                        x1="1106.3"
                        y1="292.8"
                        x2="1106.3"
                        y2="294.8"
                      />
                      <line
                        className="st4"
                        x1="1106.3"
                        y1="298.2"
                        x2="1106.3"
                        y2="312.5"
                      />
                      <line
                        className="st5"
                        x1="1106.3"
                        y1="314.3"
                        x2="1106.3"
                        y2="360.6"
                      />
                      <line
                        className="st1"
                        x1="1106.3"
                        y1="362.3"
                        x2="1106.3"
                        y2="364.3"
                      />
                    </g>
                  </g>
                  <g>
                    <polygon
                      className="st6"
                      points="187.8,285.7 182.8,290.8 156.6,290.8 161.6,285.7 156.6,280.7 182.8,280.7 	"></polygon>
                    <polygon
                      className="st6"
                      points="217.1,285.7 212.1,290.8 185.9,290.8 190.9,285.7 185.9,280.7 212.1,280.7 	"></polygon>
                    <polygon
                      className="st6"
                      points="246.4,285.7 241.4,290.8 215.2,290.8 220.2,285.7 215.2,280.7 241.4,280.7 	"></polygon>
                    <polygon
                      className="st6"
                      points="275.7,285.7 270.7,290.8 244.4,290.8 249.5,285.7 244.4,280.7 270.7,280.7 	"></polygon>
                    <polygon
                      className="st6"
                      points="305,285.7 300,290.8 273.7,290.8 278.8,285.7 273.7,280.7 300,280.7 	"></polygon>
                    <polygon
                      className="st6"
                      points="334.3,285.7 329.3,290.8 303,290.8 308,285.7 303,280.7 329.3,280.7 	"></polygon>
                    <polygon
                      className="st6"
                      points="363.6,285.7 358.6,290.8 332.3,290.8 337.3,285.7 332.3,280.7 358.6,280.7 	"></polygon>
                    <polygon
                      className="st6"
                      points="392.9,285.7 387.9,290.8 361.6,290.8 366.6,285.7 361.6,280.7 387.9,280.7 	"></polygon>
                    <polygon
                      className="st6"
                      points="422.2,285.7 417.2,290.8 390.9,290.8 395.9,285.7 390.9,280.7 417.2,280.7 	"></polygon>
                    <polygon
                      className="st6"
                      points="451.5,285.7 446.4,290.8 420.2,290.8 425.2,285.7 420.2,280.7 446.4,280.7 	"></polygon>
                    <polygon
                      className="st6"
                      points="480.7,285.7 475.7,290.8 449.5,290.8 454.5,285.7 449.5,280.7 475.7,280.7 	"></polygon>
                    <polygon
                      className="st6"
                      points="510,285.7 505,290.8 478.8,290.8 483.8,285.7 478.8,280.7 505,280.7 	"></polygon>
                    <polygon
                      className="st6"
                      points="539.3,285.7 534.3,290.8 508.1,290.8 513.1,285.7 508.1,280.7 534.3,280.7 	"></polygon>
                    <polygon
                      className="st6"
                      points="568.6,285.7 563.6,290.8 537.4,290.8 542.4,285.7 537.4,280.7 563.6,280.7 	"></polygon>
                    <polygon
                      className="st6"
                      points="597.9,285.7 592.9,290.8 566.7,290.8 571.7,285.7 566.7,280.7 592.9,280.7 	"></polygon>
                    <polygon
                      className="st6"
                      points="627.2,285.7 622.2,290.8 596,290.8 601,285.7 596,280.7 622.2,280.7 	"></polygon>
                    <polygon
                      className="st6"
                      points="656.5,285.7 651.5,290.8 625.3,290.8 630.3,285.7 625.3,280.7 651.5,280.7 	"></polygon>
                    <polygon
                      className="st6"
                      points="685.8,285.7 680.8,290.8 654.6,290.8 659.6,285.7 654.6,280.7 680.8,280.7 	"></polygon>
                    <polygon
                      className="st6"
                      points="715.1,285.7 710.1,290.8 683.9,290.8 688.9,285.7 683.9,280.7 710.1,280.7 	"></polygon>
                    <polygon
                      className="st6"
                      points="744.4,285.7 739.4,290.8 713.2,290.8 718.2,285.7 713.2,280.7 739.4,280.7 	"></polygon>
                    <polygon
                      className="st6"
                      points="773.7,285.7 768.7,290.8 742.4,290.8 747.5,285.7 742.4,280.7 768.7,280.7 	"></polygon>
                    <polygon
                      className="st6"
                      points="803,285.7 798,290.8 771.7,290.8 776.8,285.7 771.7,280.7 798,280.7 	"></polygon>
                    <polygon
                      className="st6"
                      points="832.3,285.7 827.3,290.8 801,290.8 806,285.7 801,280.7 827.3,280.7 	"></polygon>
                    <polygon
                      className="st6"
                      points="861.6,285.7 856.6,290.8 830.3,290.8 835.3,285.7 830.3,280.7 856.6,280.7 	"></polygon>
                    <polygon
                      className="st6"
                      points="890.9,285.7 885.9,290.8 859.6,290.8 864.6,285.7 859.6,280.7 885.9,280.7 	"></polygon>
                    <polygon
                      className="st6"
                      points="920.2,285.7 915.2,290.8 888.9,290.8 893.9,285.7 888.9,280.7 915.2,280.7 	"></polygon>
                    <polygon
                      className="st6"
                      points="949.5,285.7 944.4,290.8 918.2,290.8 923.2,285.7 918.2,280.7 944.4,280.7 	"></polygon>
                    <polygon
                      className="st6"
                      points="978.7,285.7 973.7,290.8 947.5,290.8 952.5,285.7 947.5,280.7 973.7,280.7 	"></polygon>
                    <polygon
                      className="st6"
                      points="1008,285.7 1003,290.8 976.8,290.8 981.8,285.7 976.8,280.7 1003,280.7 	"></polygon>
                    <polygon
                      className="st6"
                      points="1037.3,285.7 1032.3,290.8 1006.1,290.8 1011.1,285.7 1006.1,280.7 1032.3,280.7 	"
                    />
                    <polygon
                      className="st6"
                      points="1066.6,285.7 1061.6,290.8 1035.4,290.8 1040.4,285.7 1035.4,280.7 1061.6,280.7 	"
                    />
                    <polygon
                      className="st6"
                      points="1095.9,285.7 1090.9,290.8 1064.7,290.8 1069.7,285.7 1064.7,280.7 1090.9,280.7 	"
                    />
                    <polygon
                      className="st6"
                      points="1125.2,285.7 1120.2,290.8 1094,290.8 1099,285.7 1094,280.7 1120.2,280.7 	"></polygon>
                    <polygon
                      className="st6"
                      points="1154.5,285.7 1149.5,290.8 1123.3,290.8 1128.3,285.7 1123.3,280.7 1149.5,280.7 	"
                    />
                    <polygon
                      className="st6"
                      points="1183.8,285.7 1178.8,290.8 1152.6,290.8 1157.6,285.7 1152.6,280.7 1178.8,280.7 	"
                    />
                    <polygon
                      className="st6"
                      points="1213.1,285.7 1208.1,290.8 1181.9,290.8 1186.9,285.7 1181.9,280.7 1208.1,280.7 	"
                    />
                  </g>
                  <circle
                    className="st8"
                    cx="185.81"
                    cy="356.37"
                    r="16.26"
                    onClick={() => handleCircleClick("M1")}
                  />
                  <circle
                    className="st8"
                    cx="339.22"
                    cy="412.37"
                    r="16.26"
                    onClick={() => handleCircleClick("M3")}
                  />
                  <circle
                    className="st9"
                    cx="492.63"
                    cy="356.37"
                    r="16.26"
                    onClick={() => handleCircleClick("M5")}
                  />
                  <circle
                    className="st10"
                    cx="646.05"
                    cy="412.37"
                    r="16.26"
                    onClick={() => handleCircleClick("M7")}
                  />
                  <circle
                    className="st11"
                    cx="799.46"
                    cy="356.37"
                    r="16.26"
                    onClick={() => handleCircleClick("M9")}
                  />
                  <circle
                    className="st12"
                    cx="952.87"
                    cy="412.37"
                    r="16.26"
                    onClick={() => handleCircleClick("M11")}
                  />
                  <circle
                    className="st13"
                    cx="1106.28"
                    cy="356.37"
                    r="16.26"
                    onClick={() => handleCircleClick("M13")}
                  />
                  <circle
                    className="st8"
                    cx="262.52"
                    cy="159.19"
                    r="16.26"
                    onClick={() => handleCircleClick("M2")}
                  />
                  <circle
                    className="st8"
                    cx="415.93"
                    cy="215.19"
                    r="16.26"
                    onClick={() => handleCircleClick("M4")}
                  />
                  <circle
                    className="st10"
                    cx="569.34"
                    cy="159.19"
                    r="16.26"
                    onClick={() => handleCircleClick("M6")}
                  />
                  <circle
                    className="st11"
                    cx="722.75"
                    cy="215.19"
                    r="16.26"
                    onClick={() => handleCircleClick("M8")}
                  />
                  <circle
                    className="st12"
                    cx="876.16"
                    cy="159.19"
                    r="16.26"
                    onClick={() => handleCircleClick("M10")}
                  />
                  <circle
                    className="st13"
                    cx="1029.58"
                    cy="215.19"
                    r="16.26"
                    onClick={() => handleCircleClick("M12")}
                  />
                  <circle
                    className="st13"
                    cx="1182.99"
                    cy="159.19"
                    r="16.26"
                    onClick={() => handleCircleClick("M14")}
                  />
                  <circle className="st1" cx="185.81" cy="285.78" r="15.85" />
                  <circle className="st8" cx="185.81" cy="285.78" r="9.22" />
                  <circle className="st1" cx="262.52" cy="285.78" r="15.85" />
                  <circle className="st8" cx="262.52" cy="285.78" r="9.22" />
                  <circle className="st1" cx="339.22" cy="285.78" r="15.85" />
                  <circle className="st8" cx="339.22" cy="285.78" r="9.22" />
                  <circle className="st1" cx="415.93" cy="285.78" r="15.85" />
                  <circle className="st8" cx="415.93" cy="285.78" r="9.22" />
                  <circle className="st1" cx="492.63" cy="285.78" r="15.85" />
                  <circle className="st9" cx="492.63" cy="285.78" r="9.22" />
                  <circle className="st1" cx="569.34" cy="285.78" r="15.85" />
                  <circle className="st10" cx="569.34" cy="285.78" r="9.22" />
                  <circle className="st1" cx="646.05" cy="285.78" r="15.85" />
                  <circle className="st10" cx="646.05" cy="285.78" r="9.22" />
                  <circle className="st1" cx="722.75" cy="285.78" r="15.85" />
                  <circle className="st11" cx="722.75" cy="285.78" r="9.22" />
                  <circle className="st1" cx="799.46" cy="285.78" r="15.85" />
                  <circle className="st11" cx="799.46" cy="285.78" r="9.22" />
                  <circle className="st1" cx="876.16" cy="285.78" r="15.85" />
                  <circle className="st12" cx="876.16" cy="285.78" r="9.22" />
                  <circle className="st1" cx="952.87" cy="285.78" r="15.85" />
                  <circle className="st12" cx="952.87" cy="285.78" r="9.22" />
                  <circle className="st1" cx="1029.58" cy="285.78" r="15.85" />
                  <circle className="st13" cx="1029.58" cy="285.78" r="9.22" />
                  <circle className="st1" cx="1106.28" cy="285.78" r="15.85" />
                  <circle className="st13" cx="1106.28" cy="285.78" r="9.22" />
                  <circle className="st1" cx="1182.99" cy="285.78" r="15.85" />
                  <circle className="st13" cx="1182.99" cy="285.78" r="9.22" />
                  <circle className="st14" cx="91.68" cy="285.78" r="65.55" />
                  <circle className="st14" cx="1243.54" cy="285.78" r="33.44" />
                  <rect
                    x="1213.1"
                    y="280.7"
                    className="st24"
                    width="54.4"
                    height="16.2"
                  />
                  <text
                    transform="matrix(1 0 0 1 1224.244 290.051)"
                    className="st6 st18 st25">
                    present
                  </text>
                  <rect
                    x="35.6"
                    y="266.7"
                    className="st24"
                    width="112.1"
                    height="48.2"
                  />
                  <text transform="matrix(1 0 0 1 60.1586 280.6347)">
                    <tspan x={0} y={0} className="st21 st18 st19">
                      Node.js
                    </tspan>
                    <tspan x="-14.5" y="21.6" className="st21 st18 st19">
                      Milestones
                    </tspan>
                  </text>
                  <rect
                    x="167.8"
                    y={382}
                    className="st24"
                    width="35.9"
                    height="28.2"
                  />
                  <text
                    transform="matrix(1 0 0 1 174.3905 395.3095)"
                    className="st6 st33 st19">
                    M1
                  </text>
                  <rect
                    x="244.5"
                    y="121.4"
                    className="st24"
                    width="35.9"
                    height="28.2"
                  />
                  <text
                    transform="matrix(1 0 0 1 249.2062 134.729)"
                    className="st6 st33 st19">
                    M2
                  </text>
                  <rect
                    x="321.3"
                    y={434}
                    className="st24"
                    width="35.9"
                    height="28.2"
                  />
                  <text
                    transform="matrix(1 0 0 1 325.561 447.3095)"
                    className="st6 st33 st19">
                    M3
                  </text>
                  <rect
                    x="399.3"
                    y="178.4"
                    className="st24"
                    width="35.9"
                    height="28.2"
                  />
                  <text
                    transform="matrix(1 0 0 1 403.0518 191.7495)"
                    className="st6 st33 st19">
                    M4
                  </text>
                  <rect
                    x="474.7"
                    y={382}
                    className="st24"
                    width="35.9"
                    height="28.2"
                  />
                  <text
                    transform="matrix(1 0 0 1 478.631 395.3095)"
                    className="st6 st33 st19">
                    M5
                  </text>
                  <rect
                    x="551.4"
                    y="121.4"
                    className="st24"
                    width="35.9"
                    height="28.2"
                  />
                  <text
                    transform="matrix(1 0 0 1 555.4716 134.729)"
                    className="st6 st33 st19">
                    M6
                  </text>
                  <rect
                    x="628.1"
                    y={434}
                    className="st24"
                    width="35.9"
                    height="28.2"
                  />
                  <text
                    transform="matrix(1 0 0 1 633.2395 447.3095)"
                    className="st6 st33 st19">
                    M7
                  </text>
                  <rect
                    x="706.2"
                    y="176.4"
                    className="st24"
                    width="35.9"
                    height="28.2"
                  />
                  <text
                    transform="matrix(1 0 0 1 710.1186 189.7495)"
                    className="st6 st33 st19">
                    M8
                  </text>
                  <rect
                    x="781.5"
                    y={382}
                    className="st24"
                    width="35.9"
                    height="28.2"
                  />
                  <text
                    transform="matrix(1 0 0 1 785.8325 395.3095)"
                    className="st6 st33 st19">
                    M9
                  </text>
                  <rect
                    x="858.2"
                    y="121.4"
                    className="st24"
                    width="35.9"
                    height="28.2"
                  />
                  <text
                    transform="matrix(1 0 0 1 858.947 134.729)"
                    className="st6 st33 st19">
                    M10
                  </text>
                  <rect
                    x="934.9"
                    y={434}
                    className="st24"
                    width="35.9"
                    height="28.2"
                  />
                  <text
                    transform="matrix(1 0 0 1 938.2452 447.3095)"
                    className="st6 st33 st19">
                    M11
                  </text>
                  <rect
                    x={1013}
                    y="176.4"
                    className="st24"
                    width="35.9"
                    height="28.2"
                  />
                  <text
                    transform="matrix(1 0 0 1 1014.4489 189.7495)"
                    className="st6 st33 st19">
                    M12
                  </text>
                  <rect
                    x="1088.3"
                    y={382}
                    className="st24"
                    width="35.9"
                    height="28.2"
                  />
                  <text
                    transform="matrix(1 0 0 1 1089.4156 395.3095)"
                    className="st6 st33 st19">
                    M13
                  </text>
                  <rect
                    x={1165}
                    y="121.4"
                    className="st24"
                    width="35.9"
                    height="28.2"
                  />
                  <text
                    transform="matrix(1 0 0 1 1165.5186 134.729)"
                    className="st6 st33 st19">
                    M14
                  </text>
                  {/* Code injected by live-server */}
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
      <SearchBar />
    </div>
  );
};

export default PathToUnicorn;
