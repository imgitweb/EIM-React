import React, { useState } from "react";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function MetaVerse() {
  const [isActive, setActive] = useState(false);

  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };

  const { unityProvider, addEventListener, removeEventListener, sendMessage } =
    useUnityContext({
      loaderUrl: "./../../unity/Build/GIS_office.loader.js",
      dataUrl: "./../../unity/Build/GIS_office.data.unityweb",
      frameworkUrl: "./../../unity/Build/GIS_office.framework.js.unityweb",
      codeUrl: "./../../unity/Build/GIS_office.wasm.unityweb",
    });

  sendMessage(
    "ReactUnityCommunicationManager",
    "GetReactData",
    JSON.stringify({
      event: "startup",
      data: {
        id: localStorage.getItem("token"),
      },
    })
  );

  return (
    <div>
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
                      <h4 className="fw-semibold mb-8">Meta Verse</h4>
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
                            Meta Verse
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
              <div className="card">
                <div className="card-body">
                  <Unity
                    unityProvider={unityProvider}
                    style={{ width: "100%", height: "calc(100vh - 0px)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <SerchBar />
      </div>
      <div className="dark-transparent sidebartoggler" />
    </div>
  );
}
