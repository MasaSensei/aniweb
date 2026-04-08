import { getTopAnime } from "@/services/anime.service";
import AnimeCard from "@/components/AnimeCard";
import Pagination from "@/components/UI/Pagination";
import { Trophy } from "lucide-react";

export default async function TopAnimePage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const response = await getTopAnime(currentPage);
  const animeList = response.data;
  const pagination = response.pagination;

  return (
    <main className="container mx-auto px-4 pt-28 pb-20">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-16 relative">
        <div className="absolute -top-10 text-[120px] font-black text-onkyo-primary/5 select-none tracking-tighter italic">
          RANKING
        </div>

        <div className="flex items-center gap-3 mb-2 bg-onkyo-primary/10 px-4 py-1 rounded-full border border-onkyo-primary/20">
          <Trophy size={16} className="text-onkyo-primary" />
          <span className="text-onkyo-primary font-black text-[10px] uppercase tracking-widest">
            World Most Popular
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-center">
          Top <span className="text-onkyo-primary">Anime</span>
        </h1>
        <div className="w-24 h-1.5 bg-onkyo-primary mt-4 rounded-full shadow-[0_0_20px_#FF007F]" />
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 relative z-10">
        {animeList.map((anime: any, index: number) => (
          <div key={anime.mal_id} className="relative group">
            {/* Rank Badge Floating */}
            <div className="absolute -top-3 -left-3 z-20 w-10 h-10 bg-onkyo-nav border-2 border-onkyo-primary rounded-lg flex items-center justify-center font-black italic text-onkyo-text shadow-lg group-hover:scale-110 transition-transform">
              {(currentPage - 1) * 25 + (index + 1)}
            </div>
            <AnimeCard anime={anime} />
          </div>
        ))}
      </div>

      {/* Pagination Terintegrasi */}
      <Pagination
        currentPage={currentPage}
        hasNextPage={pagination.has_next_page}
        baseUrl="/top"
      />
    </main>
  );
}
