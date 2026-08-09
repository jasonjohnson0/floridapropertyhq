import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("cities/panama-city", "routes/cities/panama-city.tsx"),
  route("cities/panama-city/directory", "routes/cities/panama-city-directory.tsx"),
  route("cities/marianna", "routes/cities/marianna.tsx"),
  route("cities/marianna/directory", "routes/cities/marianna-directory.tsx"),
  route("resources/buying-a-home", "routes/resources/buying-a-home.tsx"),
  route("resources/selling-a-home", "routes/resources/selling-a-home.tsx"),
  route("resources/homeowners-insurance", "routes/resources/homeowners-insurance.tsx"),
  route("resources/property-management", "routes/resources/property-management.tsx"),
  route("resources/rental-investment", "routes/resources/rental-investment.tsx"),
] satisfies RouteConfig;
