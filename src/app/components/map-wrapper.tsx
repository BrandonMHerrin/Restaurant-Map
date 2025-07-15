'use client';

import { Restaurant } from "@/generated/prisma";
import { RestaurantsFilterProvider } from "../contexts/RestaurantsFilterContext";
import MapContainer from "./map";
import MapFilter from "./map-filter";

/**
 * MapWrapper component serves as a container for the restaurant map and its filters.
 * It provides the necessary context for filtering restaurants and renders the map and filter components.
 * @param {Restaurant[]} restaurants - The list of restaurants to be displayed on the map. This is passed to the context provider.
 * @returns A component that wraps the restaurant map and filter components.
 */
export default function MapWrapper({restaurants}: {restaurants: Restaurant[]}) {
  
  return (
    <div className="map-wrapper">
      <RestaurantsFilterProvider restaurants={restaurants}>
        <MapFilter />
        <MapContainer />
      </RestaurantsFilterProvider>
    </div>
  );
}