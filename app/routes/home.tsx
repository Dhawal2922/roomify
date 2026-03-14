import Navbar from "components/Navbar ";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold text-indigo-500">Home</h1>
    </>
  );
}
