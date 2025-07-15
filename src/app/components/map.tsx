'use client';

import { APIProvider, Map } from "@vis.gl/react-google-maps";
import Marker from "./marker";
import { useRestaurantsFilterContext } from "../contexts/RestaurantsFilterContext";

/**
 * MapContainer component renders the Google Map with restaurant markers.
 * It uses the APIProvider to provide the Google Maps API key and renders markers for each restaurant.
 * @returns A component that renders the restaurant map with markers.
 */
export default function MapContainer() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const defaultCenter = { lat: 38.9579527, lng: -111.8850257 };
  const { filteredRestaurants } = useRestaurantsFilterContext();
  if (!apiKey) {
    throw new Error(
      "Google Maps API key is not defined in environment variables."
    );
  }
  return (
      <APIProvider apiKey={apiKey}>
        <Map defaultCenter={defaultCenter} defaultZoom={10} mapId={"RESTAURANT_MAP"} style={{ width: "100%", height: "400px" }}>
          {filteredRestaurants.map((restaurant) => (
            <Marker key={restaurant.id} restaurant={restaurant} />  
          ))}
        </Map>
      </APIProvider>
  );
}