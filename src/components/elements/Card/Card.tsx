"use client";

import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSearch } from "@/lib/context/SearchContext";
import { getData } from "@/lib/api/search";
import Anime from "@/components/types/anime";

const CardElements = () => {
  const { searchQuery } = useSearch();
  const [animeData, setAnimeData] = useState<Anime[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData(searchQuery)
      .then((data) => {
        // Menentukan tipe data untuk parameter data
        setAnimeData(data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, [searchQuery]);

  return (
    <>
      {isLoading
        ? "Loading..."
        : animeData.map((anime, index) => (
            <Card key={index} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={anime.images.webp.image_url} />
              <Card.Body>
                <Card.Title>{anime.title}</Card.Title>
                <Card.Text>{anime.synopsis}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          ))}
    </>
  );
};

export default CardElements;
