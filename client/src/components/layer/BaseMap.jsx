import React from "react";
import { LayersControl, TileLayer } from "react-leaflet";

export const BaseMap = () => {
	return (
		<div>
			<LayersControl position="topright">
				<LayersControl.BaseLayer checked name="OpenStreetMap">
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
				</LayersControl.BaseLayer>
			</LayersControl>
		</div>
	);
};

export default BaseMap;
