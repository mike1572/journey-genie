
import L, { LatLngExpression } from "leaflet";
//import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import React, {Fragment, useState} from "react";

import {Box, AppBar, Toolbar, Typography} from '@mui/material'
import { cities } from "../cities.d.ts";
import ModalContent from "./ModalContent.jsx";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';


export default function Map () {

    const position= [37.4925,-100];
    const zoom = 4.5;

    const [openDialog, setOpenDialog] = useState(false)
    const [choice, setChoice] = useState('')

    return (
        <Fragment>
            <AppBar position="static" sx={{background:'linear-gradient(to bottom, rgba(61, 57, 57, 1), rgba(61, 57, 57, 0.5))'}} elevation={0}>
                <Toolbar >
                    <TravelExploreIcon/>
                    <Typography variant="h6" sx={{color: 'white', fontWeight: 600, ml: 1}}>
                        JourneyGenie
                    </Typography>
                </Toolbar>
            </AppBar>
        <Box>
        
            <ModalContent open={openDialog} close={() => setOpenDialog(false)} choice={choice} />
            <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} style={{height: '91.5vh'}}>
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
                 
        </Fragment>
    );

}