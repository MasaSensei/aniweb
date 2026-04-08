import { getAnimeDetail, getAnimeCharacters } from "@/services/anime.service";
import Image from "next/image";
import { Star, Clock, Calendar, Film, User } from "lucide-react";

export default async function AnimeDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const anime = await getAnimeDetail(params.id);
  const characters = await getAnimeCharacters(params.id);
  const data = anime.data;

  return (
    <main className="min-h-screen bg-onkyo-bg pb-20">
      {/* Banner Background Blur */}
      <div className="relative w-full h-[40vh] overflow-hidden">
        <Image
          src={data.images.jpg.large_image_url}
          alt={data.title}
          fill
          className="object-cover opacity-20 blur-xl scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-onkyo-bg to-transparent" />
      </div>

      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Kolom Kiri: Poster & Stats */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="sticky top-24">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-onkyo-primary/30 shadow-[0_0_30px_rgba(255,0,127,0.2)]">
                <Image
                  src={data.images.webp.large_image_url}
                  alt={data.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-6 space-y-3">
                <div className="bg-onkyo-nav p-4 rounded-xl border border-onkyo-secondary/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-onkyo-muted text-xs uppercase font-bold">
                      Score
                    </span>
                    <span className="text-onkyo-accent font-black flex items-center gap-1">
                      <Star size={16} fill="currentColor" />{" "}
                      {data.score || "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-onkyo-muted text-xs uppercase font-bold">
                      Rank
                    </span>
                    <span className="text-onkyo-text font-bold">
                      #{data.rank}
                    </span>
                  </div>
                </div>
                <button className="w-full bg-onkyo-primary hover:bg-white hover:text-onkyo-primary transition-all py-3 rounded-xl font-black uppercase tracking-widest shadow-lg shadow-onkyo-primary/20">
                  Add to Watchlist
                </button>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Info Detail */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-black italic uppercase text-onkyo-text mb-2">
              {data.title}
            </h1>
            <h2 className="text-onkyo-primary text-xl font-bold mb-6 opacity-80">
              {data.title_japanese}
            </h2>

            {/* Quick Info Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-onkyo-secondary/30 text-onkyo-text px-4 py-1.5 rounded-full text-xs font-bold border border-onkyo-secondary/50 flex items-center gap-2">
                <Film size={14} className="text-onkyo-primary" /> {data.type}
              </span>
              <span className="bg-onkyo-secondary/30 text-onkyo-text px-4 py-1.5 rounded-full text-xs font-bold border border-onkyo-secondary/50 flex items-center gap-2">
                <Clock size={14} className="text-onkyo-primary" />{" "}
                {data.duration}
              </span>
              <span className="bg-onkyo-secondary/30 text-onkyo-text px-4 py-1.5 rounded-full text-xs font-bold border border-onkyo-secondary/50 flex items-center gap-2">
                <Calendar size={14} className="text-onkyo-primary" />{" "}
                {data.season} {data.year}
              </span>
            </div>

            {/* Synopsis */}
            <div className="mb-10">
              <h3 className="text-onkyo-primary font-black text-lg mb-3 uppercase tracking-tighter italic border-b-2 border-onkyo-primary w-fit">
                Synopsis
              </h3>
              <p className="text-onkyo-muted leading-relaxed text-sm md:text-base">
                {data.synopsis}
              </p>
            </div>

            {/* Genres */}
            <div className="mb-10">
              <h3 className="text-onkyo-text font-bold mb-3">Genres</h3>
              <div className="flex flex-wrap gap-2">
                {data.genres.map((genre: any) => (
                  <span
                    key={genre.mal_id}
                    className="border border-onkyo-primary/50 text-onkyo-primary px-3 py-1 rounded-md text-[10px] uppercase font-black hover:bg-onkyo-primary hover:text-white transition-colors cursor-pointer"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Characters Section */}
            <div>
              <h3 className="text-onkyo-primary font-black text-lg mb-6 uppercase tracking-tighter italic border-b-2 border-onkyo-primary w-fit">
                Characters
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {characters.data.slice(0, 8).map((char: any) => (
                  <div
                    key={char.character.mal_id}
                    className="flex gap-3 bg-onkyo-nav p-2 rounded-lg border border-onkyo-secondary/10 hover:border-onkyo-primary/30 transition-all"
                  >
                    <div className="relative w-12 h-16 rounded overflow-hidden flex-shrink-0">
                      <Image
                        src={char.character.images.webp.image_url}
                        alt={char.character.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center overflow-hidden">
                      <p className="text-xs font-bold text-onkyo-text truncate">
                        {char.character.name}
                      </p>
                      <p className="text-[10px] text-onkyo-muted truncate">
                        {char.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
