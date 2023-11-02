"use client";

import React from "react"; // Impor React
import { useState, useEffect } from "react";
import Anime from "@/types/anime";
import Elements from "@/components/elements";
import { getAnimes } from "@/lib/api/anime";
import styles from "./AnimeList.module.css";

// Fungsi pembatas permintaan
async function throttleRequest(callback: () => Promise<void>, delay: number) {
  await new Promise((resolve) => setTimeout(resolve, delay));
  await callback();
}

interface AnimeListProps {
  type: string;
}

const AnimeList: React.FC<AnimeListProps> = ({ type }) => {
  const [data, setData] = useState<Anime[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const maxDataCount = 100; // Maksimal data yang ingin diambil
  const cacheKey = `animeCache-${type}`;

  // Fungsi fetchData yang akan digunakan dalam useEffect
  const fetchData = async () => {
    try {
      // Cek apakah data sudah ada di cache
      const cachedData = localStorage.getItem(cacheKey);

      if (cachedData) {
        setData(JSON.parse(cachedData));
        setIsLoading(false);
        return;
      }

      const totalPages = 600;
      const typeData: Anime[] = [];

      for (let page = 551; page <= totalPages; page++) {
        if (typeData.length >= maxDataCount) {
          // Jika jumlah data yang sudah diambil mencapai maksimal, hentikan pengambilan data untuk tipe ini
          break;
        }

        // Lakukan pengambilan data dengan pembatasan permintaan menggunakan throttleRequest
        await throttleRequest(async () => {
          const data = await getAnimes(page);

          // Loop melalui data untuk setiap halaman
          data.data.forEach((anime: Anime) => {
            if (anime.score !== null && anime.score >= 6) {
              if (
                (type === "movie" && anime.type === "Movie") ||
                (type !== "movie" && anime.type === "TV")
              ) {
                typeData.push(anime);
              }
            }
          });

          // Tambahkan penundaan antara halaman
          await new Promise((resolve) => setTimeout(resolve, 100));
        }, 333); // 333 ms (3 permintaan per detik)

        // Simpan data ke cache lokal
        localStorage.setItem(cacheKey, JSON.stringify(typeData));
        setData(typeData);
      }

      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [type]);

  return (
    <div className="container-fluid">
      <Elements.Heading>
        {type === "movie" ? "Movie" : "Series"}
      </Elements.Heading>
      <div className={`${styles.banner} row`}>
        {isLoading
          ? "Loading..."
          : data.slice(0, 8).map((anime, index) => (
              <div className="col-lg-3 col-6 py-3" key={index}>
                <Elements.Card
                  image={anime.images.webp.large_image_url}
                  judul={anime.title}
                  link={`/series/${anime.mal_id}`}
                  rating={anime.score}
                />
              </div>
            ))}
      </div>
    </div>
  );
};

export default AnimeList;
