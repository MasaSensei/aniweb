import Image from "next/image";
import Link from "next/link"; // Import Link
import { Star, Tv, Clock } from "lucide-react";

export default function AnimeCard({ anime }: { anime: any }) {
  return (
    <Link
      href={`/anime/${anime.mal_id}`}
      className="group bg-onkyo-nav rounded-xl overflow-hidden border border-onkyo-secondary/10 hover:border-onkyo-primary/50 transition-all duration-300 hover:-translate-y-2 shadow-lg block"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={anime.images.webp.large_image_url}
          alt={anime.title}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Rating Badge */}
        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-onkyo-accent p-1.5 rounded-lg flex items-center gap-1 text-xs font-bold border border-onkyo-accent/20">
          <Star size={12} fill="currentColor" />
          {anime.score || "N/A"}
        </div>

        {/* Overlay Hover Effect (Optional: Biar lebih Oshi no Ko) */}
        <div className="absolute inset-0 bg-onkyo-primary/0 group-hover:bg-onkyo-primary/5 transition-colors duration-300" />
      </div>

      <div className="p-4">
        <h3 className="font-bold text-sm text-onkyo-text line-clamp-1 group-hover:text-onkyo-primary transition-colors mb-3">
          {anime.title}
        </h3>

        <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-wider text-onkyo-muted">
          <div className="flex items-center gap-1">
            <Tv size={12} className="text-onkyo-primary" />
            <span>{anime.episodes || "?"} Eps</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={12} className="text-onkyo-primary" />
            {/* Pakai optional chaining biar aman kalau duration-nya null */}
            <span>{anime.duration?.split(" per")[0] || "N/A"}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
