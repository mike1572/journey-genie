
import L, { LatLngExpression } from "leaflet";
//import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import React, {Fragment, useState} from "react";

import {Box} from '@mui/material'
import { cities } from "../cities.d.ts";
import ModalContent from "./ModalContent.jsx";

export default function Map () {

    const position= [37.4925,-100];
    const zoom = 4.5;

    const [openDialog, setOpenDialog] = useState(false)
    const [choice, setChoice] = useState('')

    return (
        <Box sx={{mt: 7}}>
            <ModalContent open={openDialog} close={() => setOpenDialog(false)} choice={choice} />
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
                            eventHandlers={{
                                click: () => {
                                  setOpenDialog(true)
                                  setChoice(element.city)
                                },
                                mouseover: (event) => event.target.openPopup(),
                                
                            }}
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