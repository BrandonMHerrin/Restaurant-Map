'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRestaurantsFilterContext } from "../contexts/RestaurantsFilterContext";
import { useState } from "react";
import { Button } from "@/components/ui/button";

/**
 * MapFilter component provides filtering options for the restaurant map.
 * It allows users to filter restaurants by cuisine type and restaurant type.
 * It also provides a reset button to clear all filters.
 * @returns A component that provides filtering options for the restaurant map.
 */
export default function MapFilter() {
  // Access the filter context to get available cuisines and restaurant types
  // and functions to filter and reset filters.
  const { cuisineTypes, restaurantTypes, filterByCuisine, filterByRestaurantType, resetFilters } = useRestaurantsFilterContext();

  // State to manage selected cuisine and restaurant types
  const [selectedCuisineType, setSelectedCuisineType] = useState<string>("");
  const [selectedRestaurantType, setSelectedRestaurantType] = useState<string>("");

  // Handle cuisine selection
  const handleCuisineSelect = (cuisine: string) => {
    console.log(`Selected cuisine: ${cuisine}`);
    setSelectedCuisineType(cuisine);
    // If "all" is selected, reset the filter
    if (cuisine === "all") {
      filterByCuisine(""); 
      return;
    }
    filterByCuisine(cuisine);
  }

  // Handle restaurant type selection
  const handleRestaurantTypeSelect = (type: string) => {
    console.log(`Selected restaurant type: ${type}`);
    setSelectedRestaurantType(type);
    // If "all" is selected, reset the filter
    if (type === "all") {
      filterByRestaurantType(""); 
      return;
    }
    filterByRestaurantType(type);
  };

  // Handle reset filters
  const handleResetFilters = () => {
    console.log("Resetting filters");
    resetFilters();
    setSelectedCuisineType("");
    setSelectedRestaurantType("");
  };

  return (
    <div className="flex gap-4 mb-4">
      {/* Cuisine Type Select Component */}
      <Select value={selectedCuisineType} onValueChange={handleCuisineSelect}>
        <SelectTrigger>
          <SelectValue placeholder="Filter by Cuisine" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Cuisines</SelectItem>
          {cuisineTypes.map((cuisine) => (
            <SelectItem key={cuisine} value={cuisine}>
              {cuisine}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {/* Restaurant Type Select Component */}
      <Select value={selectedRestaurantType} onValueChange={handleRestaurantTypeSelect}>
        <SelectTrigger>
          <SelectValue placeholder="Filter by Restaurant Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          {restaurantTypes.map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {/* Reset Filters Button */}
      <Button onClick={handleResetFilters} className="btn btn-secondary">
        Reset Filters
      </Button>
    </div>
  );
}