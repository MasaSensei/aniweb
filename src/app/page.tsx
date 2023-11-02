"use client";

import { useState, useEffect } from "react";
import Elements from "@/components/elements";
import CardsGrid from "@/components/fragments/CardsGrid/CardsGrid";
import Hero from "@/components/layouts/Hero/Hero";
import Anime from "@/types/anime";
import { getSeasons } from "@/lib/api/anime";
import AnimeList from "@/components/layouts/AnimeList/AnimeList";

export default function Home() {
  return (
    <main>
      <section className="vh-100">
        <Hero />
      </section>
      <AnimeList type="series" />
      <AnimeList type="movie" />
    </main>
  );
}
