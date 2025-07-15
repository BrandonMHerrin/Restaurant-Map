"use client";

import { Restaurant } from "@/generated/prisma";
import { useState, useEffect } from "react";

// Define the interface for the RestaurantsFilterHook
export interface RestaurantsFilterHook {
  filteredRestaurants: Restaurant[]; // Filtered list of restaurants based on the applied filters
  cuisineTypes: string[]; // Distinct cuisine types from the restaurants
  restaurantTypes: string[]; // Distinct restaurant types from the restaurants
  // Functions to filter restaurants
  filterByRestaurantType: (type: string) => void;
  filterByCuisine: (cuisine: string) => void;
  resetFilters: () => void;
}

/**
 * useRestaurantsFilter is a custom hook that provides filtering functionality for restaurants.
 * It allows filtering by cuisine type and restaurant type, and provides the filtered list of restaurants.
 * @param {Restaurant[]} restaurants - The list of restaurants to be filtered.
 * @returns An object containing the filtered restaurants, available cuisine types, restaurant types, and filter functions.
 */
export function useRestaurantsFilter(
  restaurants: Restaurant[]
): RestaurantsFilterHook {
  const [selectedCuisineType, setSelectedCuisineType] = useState<string>("");
  const [selectedRestaurantType, setSelectedRestaurantType] =
    useState<string>("");

  // Extract distinct cuisine types and restaurant types
  const cuisineTypes = Array.from(
    new Set(restaurants.map((r) => r.cuisineType).filter(Boolean))
  );
  const restaurantTypes = Array.from(
    new Set(restaurants.map((r) => r.restaurantType).filter(Boolean))
  );

  // Calculate filtered restaurants based on current filter states
  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesCuisine =
      !selectedCuisineType ||
      restaurant.cuisineType
        .toLowerCase()
        .includes(selectedCuisineType.toLowerCase());

    const matchesType =
      !selectedRestaurantType ||
      restaurant.restaurantType
        .toLowerCase()
        .includes(selectedRestaurantType.toLowerCase());

    return matchesCuisine && matchesType;
  });

  // Function to filter restaurants by restaurant type
  const filterByRestaurantType = (type: string) => {
    setSelectedRestaurantType(type);
    console.log(`Filtered by restaurant type: ${type}`);
  };

  // Function to filter restaurants by cuisine type
  const filterByCuisine = (cuisine: string) => {
    setSelectedCuisineType(cuisine);
    console.log(`Filtered by cuisine: ${cuisine}`);
  };

  // Function to reset all filters
  const resetFilters = () => {
    setSelectedCuisineType("");
    setSelectedRestaurantType("");
    console.log("Filters reset");
  };

  // Log filtered restaurants whenever they change
  useEffect(() => {
    console.log(`Filtered restaurants:`, filteredRestaurants);
  }, [filteredRestaurants]);

  return {
    filteredRestaurants,
    cuisineTypes,
    restaurantTypes,
    filterByRestaurantType,
    filterByCuisine,
    resetFilters,
  };
}
