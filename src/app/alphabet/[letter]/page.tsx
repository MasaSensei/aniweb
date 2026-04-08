import { getAnimeByLetter } from "@/services/anime.service";
import AnimeCard from "@/components/AnimeCard";
import AlphabetBar from "@/components/UI/AlphabetBar";
import Pagination from "@/components/UI/Pagination";

export default async function AlphabetPage({
  params,
  searchParams,
}: {
  params: { letter: string };
  searchParams: { page?: string };
}) {
  const { letter } = params;
  const currentPage = Number(searchParams.page) || 1;

  // Ambil data dari Jikan
  const response = await getAnimeByLetter(letter, currentPage);
  const animeList = response.data;
  const hasNextPage = response.pagination.has_next_page;

  return (
    <main className="container mx-auto px-4 pt-28">
      {/* Header Halaman */}
      <div className="mb-12 text-center">
        <h1 className="text-6xl font-black italic uppercase tracking-tighter mb-4">
          Letter <span className="text-onkyo-primary">{letter}</span>
        </h1>
        <AlphabetBar selectedLetter={letter} />
      </div>

      {/* Grid Anime */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {animeList.map((anime: any) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>

      {/* Pagination - Panggil Komponen di Sini */}
      <Pagination
        currentPage={currentPage}
        hasNextPage={hasNextPage}
        baseUrl={`/alphabet/${letter}`}
      />
    </main>
  );
}
