import { searchAnime } from "@/services/anime.service";
import AnimeCard from "@/components/AnimeCard";
import Pagination from "@/components/UI/Pagination";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string; page?: string };
}) {
  const query = searchParams.q || "";
  const currentPage = Number(searchParams.page) || 1;

  if (!query) {
    return (
      <main className="container mx-auto px-4 pt-28 text-center">
        <h1 className="text-2xl font-bold italic">
          Masukkan kata kunci pencarian...
        </h1>
      </main>
    );
  }

  const response = await searchAnime(query, currentPage);
  const animeList = response.data;
  const pagination = response.pagination;

  return (
    <main className="container mx-auto px-4 pt-28 pb-20">
      <div className="mb-10">
        <p className="text-onkyo-primary font-bold uppercase tracking-widest text-xs mb-2">
          Search Results for
        </p>
        <h1 className="text-5xl font-black uppercase italic tracking-tighter">
          "{query}"
        </h1>
        <div className="h-1 w-20 bg-onkyo-primary mt-2" />
      </div>

      {animeList.length > 0 ? (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {animeList.map((anime: any) => (
              <AnimeCard key={anime.mal_id} anime={anime} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            hasNextPage={pagination.has_next_page}
            baseUrl="/search"
            searchParams={{ q: query }} // Agar query pencarian tidak hilang saat pindah page
          />
        </>
      ) : (
        <div className="text-center py-20 bg-onkyo-nav/30 rounded-3xl border border-dashed border-onkyo-secondary/20">
          <p className="text-onkyo-muted font-bold italic">
            Tidak ditemukan anime dengan judul "{query}".
          </p>
        </div>
      )}
    </main>
  );
}
