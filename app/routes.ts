import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";
import { BOOKING, DEPOSIT_SLIP, DEVOTEE_CREATE, DEVOTEE_EDIT, DEVOTEE_VIEW, DEVOTEES, GALLERY, HOME, LEDGER, LOGIN, NEWSLETTER, PANCHKALYANK, PAYMENT, PROFILE, REGISTER, VIDEOS } from "./constants";

export default [

  layout("routes/website/WebsiteLayout.tsx", [
    index("routes/website/Homepage.tsx"),
    route(PANCHKALYANK, "routes/website/Panchkalyank.tsx"),
    route(VIDEOS, "routes/website/Videos.tsx"),
    route(NEWSLETTER, "routes/website/Newsletter.tsx"),
    route(GALLERY, "routes/website/Gallery.tsx"),

    route("/newsletter/post", "routes/website/NewsletterPost.tsx"),
    route("/gallery/post", "routes/website/GalleryPost.tsx"),
  ]),

  layout("components/Layout.tsx", [
    route(HOME, "routes/dashboard.tsx"),
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

