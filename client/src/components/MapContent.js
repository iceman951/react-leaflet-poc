import React from 'react'
import { MapContainer, TileLayer} from 'react-leaflet'

const MapContent = () => {
  return (
    <div>
      <MapContainer
        style={{ height: '100vh', width: '100vh' }}
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  )
}

export default MapContent
