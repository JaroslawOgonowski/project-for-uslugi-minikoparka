import React from 'react';
import { MapContainer, TileLayer, Circle } from 'react-leaflet';
import "./map.css"

function Map() {
    const position = [52.0556528, 20.4361464]
    return (
        <>
            <MapContainer center={position} zoom={window.innerWidth>1700? 12 : 9} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Circle center={[52.0556528, 20.4361464]} radius={19000} fillColor="#006eff" fillOpacity={0.35} color="#0000FF" />
            </MapContainer>
        </>
    )
}

export default Map;