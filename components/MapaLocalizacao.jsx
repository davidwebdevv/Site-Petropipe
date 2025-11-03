import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '0.5rem'
};

//substitua pelas coordenadas desejadas
const center = {
    lat: -23.200704, // latitude do endereço da empresa
    lng: -46.880959, // longitude do endereço da empresa
};

export default function MapaLocalizacao() {
    return (
        <LoadScript googleMapsApiKey="AIzaSyBrR-8UZiVQKFE7uXed1qulXJnbkllhQK8">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center} 
                zoom={17}>
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
}