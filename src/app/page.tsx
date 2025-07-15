import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import { Suspense } from "react";
import MapWrapper from "./components/map-wrapper";
import { Restaurant } from "@/generated/prisma";

export const metadata: Metadata = {
  title: "Restaurant Map App",
  description: "Welcome to the Restaurant Map App",
};

export default async function HomePage() {
  const restaurants: Restaurant[] = await prisma.restaurant.findMany();
  return (
    <Card className="max-w-4xl mx-auto mt-10">
      <CardHeader>
        <h1>Restaurant Map App</h1>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<p>Loading restaurants...</p>}>
          <MapWrapper restaurants={restaurants} />
        </Suspense>
        <p>Welcome to the Restaurant Map App! This map shows restaurants in Salina and Richfield Utah.</p>
      </CardContent>
    </Card>
  );
}