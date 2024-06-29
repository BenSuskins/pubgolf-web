import { FC } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';
import { walkingRoute } from '@/utils/constants';

// Fix leaflet's default icon issue with Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapComponent: FC<MapComponentProps> = ({ drinks }) => {
    return (
        <MapContainer center={[51.53877, -0.04521]} zoom={14} style={{ width: '100%', height: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Polyline positions={walkingRoute} color="blue" />
            {drinks.map((drink, index) => (
                <Marker key={index} position={[drink.lat, drink.lng]}>
                    <Popup>{drink.pub}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapComponent;