import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function RouteWatcher() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      const reloaded = sessionStorage.getItem("dashboardReloaded");

      if (!reloaded) {
        sessionStorage.setItem("dashboardReloaded", "true");
        window.location.reload();
      }
    } else {
      // Clear flag when leaving dashboard
      sessionStorage.removeItem("dashboardReloaded");
    }
  }, [location.pathname]);

  return null; // This component only watches route changes
}

export default RouteWatcher;