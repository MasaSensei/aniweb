import Elements from "@/components/elements";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="h-screen">
      <h1 className="text-3xl">card</h1>
      <div className="d-flex flex-lg-wrap gap-2">
        <Elements.Card />
      </div>
    </div>
  );
}
