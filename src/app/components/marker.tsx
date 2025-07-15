'use client';

import { Restaurant } from "@/generated/prisma";
import { AdvancedMarker, CollisionBehavior, InfoWindow, useAdvancedMarkerRef } from "@vis.gl/react-google-maps";
import Link from "next/link";
import React, { useCallback } from "react";

// Define a type for the position to ensure it has lat and lng properties
type Position = {
  lat: number;
  lng: number;
}

/**
 * Marker component renders a marker for a restaurant on the map.
 * It uses AdvancedMarker to display the restaurant's position and an InfoWindow for additional information.
 * @param {Restaurant} restaurant - The restaurant data to be displayed on the marker.
 * @returns A component that renders a marker with an info window for the restaurant.
 */
export default function Marker({ restaurant }: { restaurant: Restaurant }) {
  // Extract the position from the restaurant data
  const position = restaurant.position as Position;

  // Use useAdvancedMarkerRef to create a reference for the marker
  // This allows for advanced marker features like collision behavior and info windows.
  const [markerRef, marker] = useAdvancedMarkerRef();

  // State to manage the visibility of the info window
  const [infoWindowShown, setInfoWindowShown] = React.useState(false);

  // Handle marker click to toggle the info window visibility
  const handleMarkerClick = useCallback(() => {
    setInfoWindowShown((isShown) => !isShown);
  }, []);

  // Handle info window close event
  const handleClose = useCallback(() => {
    setInfoWindowShown(false);
  }, []);
  
  // Validate the position to ensure it has lat and lng properties
  // If the position is invalid, log a warning and return null to avoid rendering the marker
  if (!position || typeof position.lat !== 'number' || typeof position.lng !== 'number') {
    console.warn(`Invalid position for restaurant ${restaurant.id}:`, position);
    return null;
  }
  return (
    <>
      <AdvancedMarker
        position={{ lat: position.lat, lng: position.lng }}
        title={restaurant.name}
        collisionBehavior={CollisionBehavior.REQUIRED_AND_HIDES_OPTIONAL}
        onClick={handleMarkerClick}
        ref={markerRef}
      />
      {infoWindowShown && (
        <InfoWindow anchor={marker} onCloseClick={handleClose}>
          <div>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.description}</p>
            <p>Address: {restaurant.address}</p>
            <p>Phone: {restaurant.phone}</p>
            { restaurant.website && (
              <p>
                Website: <Link href={restaurant.website} target="_blank" rel="noopener noreferrer">Website</Link>
              </p>
            )}
          </div>
        </InfoWindow>
      )}
    </>
  );
}