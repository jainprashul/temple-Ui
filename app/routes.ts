import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";
import { BOOKING, DEPOSIT_SLIP, DEVOTEE_CREATE, DEVOTEE_EDIT, DEVOTEE_VIEW, DEVOTEES, LEDGER, LOGIN, PAYMENT, PROFILE, REGISTER } from "./constants";

export default [
  layout("components/Layout.tsx", [
    index("routes/home.tsx"),
    route(PAYMENT, "routes/payment.tsx"),
    route(DEVOTEES, "routes/devotee/devoteeList.tsx"),
    route(DEVOTEE_CREATE, "routes/devotee/Create.tsx"),
    route(DEVOTEE_EDIT, "routes/devotee/Edit.tsx"),
    route(PROFILE, "routes/profile/Profile.tsx"),
    route(DEVOTEE_VIEW, "routes/devotee/DevoteeView.tsx"),
    route(BOOKING, "routes/booking.tsx"),
    route(LEDGER, "routes/ledger/Ledger.tsx"),
  ]),
  route(DEPOSIT_SLIP, "routes/ledgerPrint.tsx"),
  route(LOGIN, "routes/login.tsx"),
  route(REGISTER, "routes/register.tsx"),

] satisfies RouteConfig;

