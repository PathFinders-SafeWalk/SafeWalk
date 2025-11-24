import { useEffect } from "react";

function MapView() {
  useEffect(() => {
    const tt = window.tt;

    const map = tt.map({
      key: "YOUR_TOMTOM_API_KEY",
      container: "map",
      zoom: 12,
      center: [73.8567, 18.5204] // Pune default
    });

    map.addControl(new tt.NavigationControl());
  }, []);

  return (
    <div id="map" className="w-full h-full"></div>
  );
}

export default MapView;

