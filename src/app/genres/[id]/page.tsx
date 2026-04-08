import { getAnimeByGenre } from "@/services/anime.service";
import AnimeCard from "@/components/AnimeCard";
import Pagination from "@/components/UI/Pagination";

export default async function GenreResultPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { name?: string; page?: string }; // Tambahkan page di type definition
}) {
  // 1. Ambil halaman dari URL, default ke 1 jika tidak ada
  const currentPage = Number(searchParams.page) || 1;
  const genreName = searchParams.name || "Anime List";

  // 2. Panggil service dengan menyertakan currentPage
  const animeData = await getAnimeByGenre(params.id, currentPage);

  return (
    <main className="container mx-auto px-4 pt-28 pb-20">
      {/* Header Section */}
      <div className="mb-10 flex flex-col items-center md:items-start text-center md:text-left">
        <p className="text-onkyo-primary font-bold uppercase tracking-[0.4em] text-xs mb-2">
          Category Filter
        </p>
        <h1 className="text-5xl font-black uppercase italic tracking-tighter">
          {genreName}
        </h1>
        <div className="h-1 w-24 bg-onkyo-primary mt-2 rounded-full shadow-[0_0_10px_#FF007F]" />
      </div>

      {/* Grid List Anime */}
      {animeData.data.length > 0 ? (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {animeData.data.map((anime: any) => (
              <AnimeCard key={anime.mal_id} anime={anime} />
            ))}
          </div>

          {/* 3. Pasang Komponen Pagination sesuai Tema */}
          <Pagination
            currentPage={currentPage}
            hasNextPage={animeData.pagination.has_next_page}
            baseUrl={`/genres/${params.id}`}
            searchParams={{ name: genreName }} // Kirim name agar tidak hilang saat pindah page
          />
        </>
      ) : (
        <div className="text-center py-20 bg-onkyo-nav/50 rounded-3xl border border-dashed border-onkyo-secondary/20">
          <p className="text-onkyo-muted font-bold italic">
            Belum ada anime ditemukan untuk genre ini.
          </p>
        </div>
      )}
    </main>
  );
}
