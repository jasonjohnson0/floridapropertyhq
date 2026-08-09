import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("cities/panama-city", "routes/cities/panama-city.tsx"),
  route("cities/marianna", "routes/cities/marianna.tsx"),
] satisfies RouteConfig;
