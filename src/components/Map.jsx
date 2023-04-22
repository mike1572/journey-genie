
import L, { LatLngExpression } from "leaflet";
//import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import React, {Fragment} from "react";

import {Box} from '@mui/material'
import { cities } from "../cities.d.ts";

export default function Map () {

    const position= [37.4925,-100];
    const zoom = 4.5;

    return (
        <Box sx={{mt: 7}}>
            <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} style={{height: '92vh'}}>
                <TileLayer
                    attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    cities.map((element, i) => (
                        <Marker 
                            key={i}
                            position={element.coordinate} 
                            riseOnHover={true}
                        >
                            <Popup>
                                {element.city} 
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </Box>
    );

}