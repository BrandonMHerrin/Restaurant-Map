'use client';

import { Restaurant } from "@/generated/prisma";
import React, { createContext, ReactNode, useContext } from "react";
import { RestaurantsFilterHook, useRestaurantsFilter } from "../hooks/useRestaurantsFilter";

// Define the type for the context props
interface RestaurantsFilterContextProps {
  children: ReactNode;
  restaurants: Restaurant[];
}

// Create a context for the RestaurantsFilter
// This will hold the filtering functions and state
const RestaurantsFilterContext = createContext<RestaurantsFilterHook | undefined>(undefined);

/**
 * RestaurantsFilterProvider component provides the context for filtering restaurants.
 * It wraps the children components and provides access to filtering functions and state.
 * @param {ReactNode} children - The child components that will have access to the filter context.
 * @param {Restaurant[]} restaurants - The list of restaurants to be filtered.
 * @returns A provider component that wraps the restaurant filter context.
 */
export function RestaurantsFilterProvider({ children, restaurants }: RestaurantsFilterContextProps) {
  const filterHook = useRestaurantsFilter(restaurants);

  return (
    <RestaurantsFilterContext value={filterHook}>
      {children}
    </RestaurantsFilterContext>
  );
}

/**
 * useRestaurantsFilterContext is a custom hook that provides access to the RestaurantsFilterContext.
 * It throws an error if used outside of the RestaurantsFilterProvider.
 * @returns The context value containing filtering functions and state.
 */
export function useRestaurantsFilterContext(): RestaurantsFilterHook {
  const context = useContext(RestaurantsFilterContext);
  if (!context) {
    throw new Error("useRestaurantsFilterContext must be used within a RestaurantsFilterProvider");
  }
  return context;
}