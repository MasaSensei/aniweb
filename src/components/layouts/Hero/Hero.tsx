"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { getSeasons } from "@/lib/api/anime";
import Anime from "@/types/anime";
import Elements from "@/components/elements";
import Styles from "@/components/layouts/Hero/Hero.module.css";

const Hero = () => {
  const [animeData, setAnimeData] = useState<Anime[]>([]);
  const [query, setQuery] = useState("upcoming");
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
        : animeData.slice(0, 25).map((anime, index) => {
            if (anime.synopsis !== null) {
              // Memisahkan teks synopsis menjadi kalimat-kalimat
              const sentences: string[] = anime.synopsis.split("\n\n");
              // Mengambil satu atau dua kalimat pertama
              const firstParagraph: string = sentences.slice(0, 2).join("\n\n");
              if (
                anime.trailer.images.maximum_image_url !== null &&
                anime.trailer.images.maximum_image_url !==
                  "https://img.youtube.com/vi/Q4lKtBRWjwI/maxresdefault.jpg"
              ) {
                return (
                  <SwiperSlide key={index}>
                    {anime.trailer.images.maximum_image_url !== null && (
                      <section
                        className="w-100 container-fluid d-flex align-items-center vh-100"
                        style={{
                          backgroundImage: `url(${anime.trailer.images.maximum_image_url})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center center",
                        }}
                      >
                        <div className="col-lg-6 col-12 px-auto px-lg-0 text-lg-start text-center d-flex align-items-lg-center position-absolute flex-column text-light justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
                          <div
                            className="container overflow-y-hidden"
                            style={{ zIndex: 1 }}
                          >
                            <h1 className="fs-1 fw-bold">{anime.title}</h1>
                            <p
                              className="display-6 overflow-y-hidden"
                              style={{ height: "230px", fontSize: "20px" }}
                            >
                              {firstParagraph}
                            </p>
                            <Elements.Button
                              className="ms-4"
                              variant="light"
                              size="lg"
                              onClick={() =>
                                window.open(anime.trailer.embed_url, "_blank")
                              }
                            >
                              Watch Trailer
                            </Elements.Button>
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
                    )}
                  </SwiperSlide>
                );
              }
            }
          })}
    </Swiper>
  );
};

export default Hero;
