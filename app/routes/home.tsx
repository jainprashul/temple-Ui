import type { Route } from "./+types/dashboard";
import Homepage from "./website/Homepage";
export function meta(_: Route.MetaArgs) {
  return [
    { title: "Shri Aadinath Dham" },
    { name: "description", content: "श्री दिगंबर जैन परवार पंचायत, छिन्दवाड़ा " },
  ];
}

function Home() {
  return <>
  <Homepage />
  </>
}


export default Home;


