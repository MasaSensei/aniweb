import { getTopAnime, getSeasonNow } from "@/services/anime.service";
import Hero from "@/components/Hero";
import AnimeCard from "@/components/AnimeCard";

export const revalidate = 3600; // ISR: Update tiap 1 jam

export default async function Page() {
  const [topResponse, seasonResponse] = await Promise.all([
    getTopAnime(),
    getSeasonNow(),
  ]);

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <Hero animeList={topResponse.data} />

      {/* Season Now Section */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-black italic uppercase tracking-tighter border-b-4 border-onkyo-primary">
            Season <span className="text-onkyo-primary">Now</span>
          </h2>
          <div className="h-[2px] flex-1 bg-onkyo-secondary/20" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {seasonResponse.data.map((anime: any) => (
            <AnimeCard key={anime.mal_id} anime={anime} />
          ))}
        </div>
      </section>
    </main>
  );
}
