import withAuth from "utils/withAuth";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Shri Aadinath Dham" },
    { name: "description", content: "श्री दिगंबर जैन परवार पंचायत, छिन्दवाड़ा " },
  ];
}

function Home() {
  return <h1>Welcome to React Router!</h1>;
}
 

export default withAuth(Home);