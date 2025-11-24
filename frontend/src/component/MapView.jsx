import { useEffect } from "react";

function MapView() {
  useEffect(() => {
    const tt = window.tt;

    const map = tt.map({
      key: "YOUR_TOMTOM_API_KEY",
      container: "map",
      center: [73.8567, 18.5204], // Pune default
      zoom: 12,
    });

    map.addControl(new tt.NavigationControl());
  }, []);

  return (
    <div id="map" className="h-full w-full"></div>
  );
}

export default MapView;
