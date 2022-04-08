import React from "react";
import BingMapsReact from "bingmaps-react";

export default function BingMap() {
  return (
    <BingMapsReact
      bingMapsKey="AplBR8_93bUCnHM4pKXehrcNDMa1UfwB2KnY7ayFy-QUyPvT9kzABDVYemeQYE8Z"
      height="500px"
      mapOptions={{
        navigationBarMode: "square",
      }}
      width="500px"
      viewOptions={{
        center: { latitude: 42.360081, longitude: -71.058884 },
        mapTypeId: "grayscale",
      }}
    />
  );
}




