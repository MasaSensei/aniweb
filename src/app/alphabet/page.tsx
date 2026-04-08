import AlphabetBar from "@/components/UI/AlphabetBar";
import { getTopAnime } from "@/services/anime.service";
import AnimeCard from "@/components/AnimeCard";

export default async function AlphabetIndexPage() {
  // Sebagai pemanis, kita tampilkan anime terpopuler sebelum user pilih huruf
  const topAnime = await getTopAnime();

  return (
    <main className="container mx-auto px-4 pt-28 pb-20">
      <div className="text-center mb-12">
        <p className="text-onkyo-primary font-bold uppercase tracking-[0.4em] text-xs mb-3 animate-pulse">
          Browse Collection
        </p>
        <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-8">
          A-Z <span className="text-onkyo-primary">List</span>
        </h1>

        {/* Panggil baris huruf yang kita buat tadi */}
        <AlphabetBar />
      </div>

      <section>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold uppercase italic tracking-widest text-onkyo-muted">
            Popular Recommendations
          </h2>
          <div className="h-[1px] flex-1 bg-onkyo-secondary/20" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {topAnime.data.slice(0, 12).map((anime: any) => (
            <AnimeCard key={anime.mal_id} anime={anime} />
          ))}
        </div>
      </section>
    </main>
  );
}
