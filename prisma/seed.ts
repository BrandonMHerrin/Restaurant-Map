import { PrismaClient } from "../src/generated/prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create Restaurants
  try {
    await prisma.restaurant.deleteMany(); // Clear existing data
    await prisma.restaurant.createMany({
      data: [
        {
          name: "El Mexicano Restaurant",
          description: "Authentic Mexican cuisine.",
          address: "1535 S State St, Salina, UT 84654",
          phone: "+14355292132",
          cuisineType: "MEXICAN",
          restaurantType: "CASUAL_DINING",
          position: { lat: 38.93715718268938, lng: -111.85321630692472 },
        },
        {
          name: "Subway",
          description: "Freshly made sandwiches and salads.",
          website:
            "https://restaurants.subway.com/united-states/ut/salina/1475-s-state?utm_source=yxt-goog&utm_medium=local&utm_term=acq&utm_content=10341&utm_campaign=evergreen-2020-05-28&utm_id=evergreen-2020-05-28",
          address: "1475 S State St, Salina, UT 84654",
          phone: "+14355298171",
          cuisineType: "AMERICAN",
          restaurantType: "FAST_FOOD",
          position: { lat: 38.93794940782095, lng: -111.85355271762648 },
        },
        {
          name: "Denny's",
          description: "24/7 diner serving breakfast, lunch, and dinner.",
          address: "1602 S State St, Salina, UT 84654",
          phone: "+14355292150",
          website:
            "https://locations.dennys.com/UT/SALINA/246609?utm_source=G&utm_medium=organic&utm_campaign=DAC",
          cuisineType: "AMERICAN",
          restaurantType: "CASUAL_DINING",
          position: { lat: 38.93622467902764, lng: -111.85543870416333 },
        },
        {
          name: "Arby's",
          description: "Fast food chain known for its roast beef sandwiches.",
          address: "1895 S State St, Salina, UT 84654",
          phone: "+14352870464",
          website:
            "https://www.arbys.com/locations/us/ut/salina/1895-south-state-street/store-8458/",
          cuisineType: "AMERICAN",
          restaurantType: "FAST_FOOD",
          position: { lat: 38.93214500671056, lng: -111.85365034226629 },
        },
        {
          name: "Little Caesars Pizza",
          description: "Hot-n-Ready pizzas and Crazy Bread.",
          address: "2055 S State St, Salina, UT 84654",
          phone: "+14352870546",
          cuisineType: "AMERICAN",
          restaurantType: "PIZZERIA",
          position: { lat: 38.93003741328783, lng: -111.85350897678842 },
        },
        {
          name: "Krispy Krunchy Chicken",
          description: "Fried chicken and biscuits.",
          address: "2025 S State St, Salina, UT 84654",
          phone: "+14352870546",
          website:
            "https://locations.krispykrunchy.com/ut/salina/2025-south-state-st",
          cuisineType: "AMERICAN",
          restaurantType: "FAST_FOOD",
          position: { lat: 38.929100305100555, lng: -111.85462764050078 },
        },
        {
          name: "Carl’s Jr.",
          description: "Fast food chain known for its charbroiled burgers.",
          address: "1659 S State St, Salina, UT 84654",
          phone: "+14355292048",
          website: "https://locations.carlsjr.com/ut/salina/1659-s-state-st",
          cuisineType: "AMERICAN",
          restaurantType: "FAST_FOOD",
          position: { lat: 38.93524006515723, lng: -111.85382241134752 },
        },
        {
          name: "Lotsa Motsa Pizza",
          description: "Pizza with a variety of toppings.",
          address: "1417 S State St, Salina, UT 84654",
          phone: "+14355294241",
          website: "https://www.orderlotsamotsapizza.com/?utm_source=gbp",
          cuisineType: "AMERICAN",
          restaurantType: "PIZZERIA",
          position: { lat: 38.938363325019296, lng: -111.85350498326495 },
        },
        {
          name: "Playa Azul Taco Shop",
          description: "Tacos, burritos, and other Mexican dishes.",
          address: "1225 S State St, Salina, UT 84654",
          phone: "+14355299816",
          cuisineType: "MEXICAN",
          restaurantType: "CASUAL_DINING",
          position: { lat: 38.941423018696035, lng: -111.85272053856082 },
        },
        {
          name: "Mom's Cafe",
          description: "Home-style cooking with a variety of American dishes.",
          address: "10 E Main St, Salina, UT 84654",
          phone: "+14355293921",
          cuisineType: "AMERICAN",
          restaurantType: "CASUAL_DINING",
          position: { lat: 38.95748558801871, lng: -111.85979139348488 },
        },
        {
          name: "The Hot Spot",
          description: "Local fast food restaurant.",
          address: "115 W Main St, Salina, UT 84654",
          phone: "+14355293681",
          website: "https://www.facebook.com/hotspotsalina/?fref=ts",
          cuisineType: "AMERICAN",
          restaurantType: "FAST_FOOD",
          position: { lat: 38.95746998097742, lng: -111.8618763968298 },
        },
        {
          name: "Arby's",
          description: "Fast food chain known for its roast beef sandwiches.",
          address: "1425 N Main St, Richfield, UT 84701",
          phone: "+14358966411",
          website:
            "https://locations.arbys.com/ut/richfield/1425-n-main-st.html?utm_source=google%20my%20business&utm_medium=organic&utm_campaign=website%20link",
          cuisineType: "AMERICAN",
          restaurantType: "FAST_FOOD",
          position: { lat: 38.787332077416856, lng: -112.08367681493579 },
        },
        {
          name: "Subway",
          description: "Freshly made sandwiches and salads.",
          address: "1293 N Main St, Richfield, UT 84701",
          phone: "+14358968627",
          website:
            "https://restaurants.subway.com/united-states/ut/richfield/1293-north-main-st?utm_source=yxt-goog&utm_medium=local&utm_term=acq&utm_content=6903&utm_campaign=evergreen-2020&y_source=1_MTQ5MDMxNDMtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
          cuisineType: "AMERICAN",
          restaurantType: "FAST_FOOD",
          position: { lat: 38.78620902686037, lng: -112.084132863237 },
        },
        {
          name: "Pizza Hut",
          description: "Pizza with a variety of toppings.",
          address: "1186 S 100 W A, Richfield, UT 84701",
          phone: "+14358964496",
          website:
            "https://locations.pizzahut.com/ut/richfield/1186-south-100-west?utm_medium=organic&utm_source=local&utm_campaign=googlelistings&utm_content=website&utm_term=315256",
          cuisineType: "AMERICAN",
          restaurantType: "PIZZERIA",
          position: { lat: 38.75188910431196, lng: -112.08594923672533 },
        },
        {
          name: "McDonald's",
          description: "Fast food chain known for its burgers and fries.",
          address: "1000 US-89, Richfield, UT 84701",
          phone: "+14358968285",
          website:
            "https://www.mcdonalds.com/us/en-us/location/UT/RICHFIELD/1000-S-US-HWY-89/6343.html?cid=RF:YXT:GMB::Clicks",
          cuisineType: "AMERICAN",
          restaurantType: "FAST_FOOD",
          position: { lat: 38.753901957300634, lng: -112.086141865349 },
        },
        {
          name: "Sandi's Drive Inn",
          description:
            "Local drive-in restaurant with a variety of American dishes.",
          address: "704 Cove View Rd, Richfield, UT 84701",
          phone: "+14358964223",
          website: "http://sandisdriveinn.eatontheweb.com/",
          cuisineType: "AMERICAN",
          restaurantType: "CASUAL_DINING",
          position: { lat: 38.758472960243296, lng: -112.08521317859318 },
        },
        {
          name: "Bar 86",
          description: "Bar and grill with a variety of American dishes.",
          address: "900 Cove View Rd, Richfield, UT 84701",
          phone: "+14352870786",
          website: "https://www.facebook.com/bareighty6",
          cuisineType: "AMERICAN",
          restaurantType: "BAR",
          position: { lat: 38.75613009148888, lng: -112.08748680125441 },
        },
        {
          name: "SAGEBRUSH GRILL",
          description: "Grill serving a variety of American dishes.",
          address: "1345 S 350 W, Richfield, UT 84701",
          phone: "+14358964444",
          website: "https://sagebrush.top/",
          cuisineType: "AMERICAN",
          restaurantType: "CASUAL_DINING",
          position: { lat: 38.74927669895521, lng: -112.09046916603442 },
        },
        {
          name: "Steve's Steakhouse",
          description: "Steakhouse serving a variety of steak dishes.",
          address: "1170 S College Ave, Richfield, UT 84701",
          phone: "+14358938880",
          website: "https://www.stevessteakhouseut.com/menus/",
          cuisineType: "AMERICAN",
          restaurantType: "FINE_DINING",
          position: { lat: 38.75157865709472, lng: -112.10247116744874 },
        },
        {
          name: "Costa Vida",
          description:
            "Mexican restaurant serving fresh, made-to-order dishes.",
          address: "950 W 1350 S, Richfield, UT 84701",
          phone: "+14358964539",
          website:
            "https://www.costavida.com/locations/us/ut/richfield/950-west-1350-south/?utm_source=G&utm_medium=Local&utm_campaign=Google-Local",
          cuisineType: "MEXICAN",
          restaurantType: "CASUAL_DINING",
          position: { lat: 38.74943154481886, lng: -112.10122967116536 },
        },
        {
          name: "WINGERS Restaurant",
          description:
            "Casual dining restaurant with a variety of American dishes.",
          address: "1080 W 1350 S, Richfield, UT 84701",
          phone: "+14358968595",
          website:
            "https://wingerbros.com/locations/goto/wingers-restaurant-richfield",
          cuisineType: "AMERICAN",
          restaurantType: "CASUAL_DINING",
          position: { lat: 38.74946925004793, lng: -112.10366635102254 },
        },
        {
          name: "Taco Bell",
          description: "Fast food chain known for its Mexican-inspired menu.",
          address: "950 W 1250 S, Richfield, UT 84701",
          phone: "+14358968915",
          website:
            "https://locations.tacobell.com/ut/richfield/950-w--1250-south.html?utm_source=yext&utm_campaign=googlelistings&utm_medium=referral&utm_term=020757&utm_content=website&y_source=1_NjE0MTYzNC03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
          cuisineType: "MEXICAN",
          restaurantType: "FAST_FOOD",
          position: { lat: 38.7506387382828, lng: -112.10169760645802 },
        },
        {
          name: "Wendy's",
          description: "Fast food chain known for its burgers and frosties.",
          address: "1050 W 1250 S, Richfield, UT 84701",
          phone: "+14358969801",
          website:
            "https://locations.wendys.com/united-states/ut/richfield/1050-west-1250-south?utm_source=Yext&utm_medium=Google_My_Business&utm_campaign=Local_Search&utm_content=EN_US",
          cuisineType: "AMERICAN",
          restaurantType: "FAST_FOOD",
          position: { lat: 38.75090233721906, lng: -112.10268178595969 },
        },
      ],
    });
  } catch (error) {
    console.error("Error creating restaurants:", error);
  }
}

main();
