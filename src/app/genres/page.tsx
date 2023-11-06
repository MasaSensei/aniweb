"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getGenres } from "@/lib/api/anime";
import { Genres } from "@/types/genres";

const Genres = () => {
  const [genresData, setGenresData] = useState<Genres[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGenres()
      .then((data) => {
        const filteredGenres = data.data.filter(
          (genre: Genres) =>
            genre.name !== "Hentai" &&
            genre.name !== "Magical Sex Shift" &&
            genre.name !== "Crossdressing" &&
            genre.name !== "Adult Cast"
        );
        setGenresData(filteredGenres);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="w-full col-12">
          <div className="d-block" role="main">
            <div className="border bg-light py-5 px-4 border-1 border-primary">
              <article className="m-0">
                <header className="pb-0 border-bottom-0 mt-0">
                  <h1 className="mb-5 text-dark fs-1 fw-bold">Genres</h1>
                </header>
                <div className="content">
                  <div className="genres">
                    <ul className="row">
                      {isLoading
                        ? "loading"
                        : genresData.map((genre, index) => (
                            <li className="col-lg-2" key={index}>
                              <Link
                                className="text-decoration-none d-block text-danger"
                                href={`/genres/${genre.name}`}
                                target={"_blank"}
                              >
                                {genre.name}
                              </Link>
                            </li>
                          ))}
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genres;
