import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export const MapContent = () => {
	return (
		<div>
			<MapContainer
				style={{ height: "100vh", width: "100vh" }}
				center={[13, 100]}
				zoom={6}
				scrollWheelZoom={false}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[13, 100]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default MapContent;
