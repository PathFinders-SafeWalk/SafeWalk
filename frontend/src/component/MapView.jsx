import { useEffect } from "react";

function MapView() {
  useEffect(() => {
    const tt = window.tt;

    const map = tt.map({
      key: "bDeM29xzsLdXM49sQF1upf3mrNJiuMVU",
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

