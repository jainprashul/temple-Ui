import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";
import { BOOKING_CREATE, BOOKING_LIST, DEPOSIT, DEPOSIT_SLIP, DEVOTEE_CREATE, DEVOTEE_EDIT, DEVOTEE_VIEW, DEVOTEES, EXPENSE_LIST, GALLERY, HOME, LEDGER, LOGIN, NEWSLETTER, PANCHKALYANK, PARTICULARS, PARTICULARS_CREATE, PAYMENT, PAYMENT_SLIP, PROFILE, REGISTER, VIDEOS } from "./constants";

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
    route(DEPOSIT, "routes/DepositForm.tsx"),
    route(PAYMENT, "routes/PaymentForm.tsx"),
    route(DEVOTEES, "routes/devotee/devoteeList.tsx"),
    route(DEVOTEE_CREATE, "routes/devotee/Create.tsx"),
    route(DEVOTEE_EDIT, "routes/devotee/Edit.tsx"),
    route(PROFILE, "routes/profile/Profile.tsx"),
    route(DEVOTEE_VIEW, "routes/devotee/DevoteeView.tsx"),
    route(BOOKING_CREATE, "routes/booking/BookingCreate.tsx"),
    route(BOOKING_LIST, "routes/booking/BookingList.tsx"),
    route(LEDGER, "routes/ledger/Ledger.tsx"),
    route(EXPENSE_LIST, "routes/ledger/ExpenseList.tsx"),
    route(PARTICULARS, "routes/items/ParticularsList.tsx"),
    route(PARTICULARS_CREATE, "routes/items/ParticularsCreate.tsx"),
  ]),
  route(DEPOSIT_SLIP, "routes/ledgerPrint.tsx"),
  route(PAYMENT_SLIP, "routes/paymentPrint.tsx"),
  route(LOGIN, "routes/login.tsx"),
  route(REGISTER, "routes/register.tsx"),

] satisfies RouteConfig;

