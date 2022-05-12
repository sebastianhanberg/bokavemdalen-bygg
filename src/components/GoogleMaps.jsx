import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import '../styles/map.css'

export default function GoogleMaps() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCclKapkGoby9NPI_6VNDC8hPAVdzZVe58"
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <MapGoogle />;
}

function MapGoogle() {
    const center = useMemo(() => ({ lat: 62.442800, lng: 13.855830 }), []);
    return <GoogleMap zoom={12} center={center} mapContainerClassName="map-container">
        <Marker position={center} />
    </GoogleMap>
}
