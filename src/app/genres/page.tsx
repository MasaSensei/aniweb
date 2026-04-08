import { getGenres } from "@/services/anime.service";
import Link from "next/link";
import { Tag } from "lucide-react";

export default async function GenresPage() {
  const genres = await getGenres();

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="flex items-center gap-4 mb-10">
        <h1 className="text-4xl font-black uppercase italic tracking-tighter">
          Browse by <span className="text-onkyo-primary">Genre</span>
        </h1>
        <div className="h-[2px] flex-1 bg-onkyo-secondary/20" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {genres.data.map((genre: any) => (
          <Link
            key={genre.mal_id}
            href={`/genres/${genre.mal_id}?name=${genre.name}`}
            className="group relative bg-onkyo-nav border border-onkyo-secondary/20 p-6 rounded-2xl overflow-hidden hover:border-onkyo-primary/50 transition-all hover:-translate-y-1 shadow-lg"
          >
            {/* Background Glow Effect */}
            <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-onkyo-primary/10 rounded-full blur-2xl group-hover:bg-onkyo-primary/20 transition-all" />

            <Tag
              className="text-onkyo-primary mb-3 group-hover:rotate-12 transition-transform"
              size={20}
            />
            <h3 className="font-bold text-onkyo-text group-hover:text-onkyo-primary transition-colors">
              {genre.name}
            </h3>
            <p className="text-[10px] text-onkyo-muted uppercase tracking-widest mt-1">
              {genre.count} Titles
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
