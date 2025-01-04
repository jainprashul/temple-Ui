import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";
import { DEVOTEES, LOGIN, PAYMENT, PROFILE, REGISTER } from "./constants";

export default [
  layout("components/Layout.tsx", [
    index("routes/home.tsx"),
    route(PAYMENT, "routes/payment.tsx"),
    route(DEVOTEES, "routes/devoteeList.tsx"),
    route(PROFILE, "routes/profile/Profile.tsx"),
  ]),
  route(LOGIN, "routes/login.tsx"),
  route(REGISTER, "routes/register.tsx"),

] satisfies RouteConfig;

