"use client";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import "leaflet/dist/leaflet.css";
import type { LatLngExpression } from "leaflet";

const Map = () => {
    const center: LatLngExpression = [6.358141558514143, 5.73528689415746];
  return (
    <div className="w-full overflow-hidden">
      <MapContainer
        className="w-full h-120 z-10 "
        center={center}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[6.358141558514143, 5.73528689415746]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
