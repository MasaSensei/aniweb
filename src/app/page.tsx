import Elements from "@/components/elements";
import Hero from "@/components/layouts/Hero/Hero";
import { SearchProvider } from "@/lib/context/SearchContext";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section className="vh-100">
        <Hero />
      </section>
      <div className="d-flex flex-wrap justify-content-between gap-2 container-fluid">
        <h1 className="h1 text-center">Aniweb</h1>
        <Elements.Heading />
        <Elements.Card />
      </div>
    </main>
  );
}
