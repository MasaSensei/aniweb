"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

// IMPORT CSS SWIPER (Wajib ada di Client Component ini atau globals.css)
import "swiper/css";
import "swiper/css/pagination";

export default function Hero({ animeList }: { animeList: any[] }) {
  // Filter anime yang tidak punya gambar (opsional tapi aman)
  const validAnime = animeList?.filter(
    (anime) => anime.images?.jpg?.large_image_url,
  );

  if (!validAnime || validAnime.length === 0) return null;

  return (
    // Perbaikan class height: h-[400px] md:h-[600px]
    <section className="relative w-full h-[400px] md:h-[600px] mb-8 group">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        className="h-full rounded-3xl overflow-hidden border border-onkyo-secondary/20"
      >
        {validAnime.slice(0, 5).map((anime) => (
          <SwiperSlide key={anime.mal_id}>
            <div className="relative w-full h-full">
              {/* Gambar Utama */}
              <Image
                src={anime.images.jpg.large_image_url}
                alt={anime.title}
                fill
                priority
                className="object-cover opacity-50"
              />

              {/* Gradient Overlay ala Oshi no Ko */}
              <div className="absolute inset-0 bg-gradient-to-t from-onkyo-bg via-onkyo-bg/40 to-transparent" />

              {/* Konten Teks */}
              <div className="absolute bottom-16 left-8 md:left-16 max-w-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-onkyo-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-[0_0_10px_#FF007F]">
                    Trending
                  </span>
                  <span className="text-onkyo-accent font-bold">
                    ★ {anime.score}
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black mb-4 drop-shadow-lg uppercase italic text-onkyo-text">
                  {anime.title}
                </h1>
                <p className="text-onkyo-muted line-clamp-2 text-sm md:text-base mb-6">
                  {anime.synopsis}
                </p>
                <button className="bg-onkyo-primary text-white hover:bg-white hover:text-onkyo-primary transition-all px-8 py-3 rounded-full font-black uppercase tracking-tighter shadow-lg shadow-onkyo-primary/20">
                  Watch Details
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
