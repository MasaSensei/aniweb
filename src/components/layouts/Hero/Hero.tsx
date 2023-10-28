"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { getSeasons } from "@/lib/api/seasons";
import Anime from "@/types/anime";

const Hero = () => {
  const [animeData, setAnimeData] = useState<Anime[]>([]);
  const [query, setQuery] = useState("now");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSeasons(query)
      .then((data) => {
        // Menentukan tipe data untuk parameter data
        setAnimeData(data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  });
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={1000}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        stopOnLastSlide: false,
      }}
      loop={true}
      onSlideChange={() => {}}
    >
      {isLoading
        ? "loading..."
        : animeData.slice(0, 10).map((anime, index) => {
            // Memisahkan teks synopsis menjadi kalimat-kalimat
            const sentences: string[] = anime.synopsis.split("\n\n");
            // Mengambil satu atau dua kalimat pertama
            const firstParagraph: string = sentences.slice(0, 2).join("\n\n");
            return (
              <SwiperSlide key={index}>
                <section
                  className="w-100 container-fluid d-flex align-items-center vh-100"
                  style={{
                    backgroundImage: `url(${anime.trailer.images.maximum_image_url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                  }}
                >
                  <div className="col-lg-6 d-flex align-items-lg-center position-absolute flex-column text-light justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
                    <div
                      className="container overflow-y-hidden"
                      style={{ zIndex: 1 }}
                    >
                      <h1
                        className="h1 bold"
                        style={{ fontSize: "80px", fontWeight: "bold" }}
                      >
                        {anime.title}
                      </h1>
                      <div className="h-50 overflow-hidden">
                        <p
                          className="display-6 overflow-y-hidden"
                          style={{ height: "230px", fontSize: "20px" }}
                        >
                          {firstParagraph}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-black opacity-75"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  ></div>
                </section>
              </SwiperSlide>
            );
          })}
    </Swiper>
  );
};

export default Hero;
