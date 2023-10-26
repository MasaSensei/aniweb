"use client";

import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import Anime from "@/components/types/Anime";

const CardElements = () => {
  const [animeData, setAnimeData] = useState<Anime[]>([]); // Tentukan tipe data Anime[]

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData()
      .then((data) => {
        setAnimeData(data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

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

async function getData() {
  try {
    const res = await fetch("https://api.jikan.moe/v4/anime?limit=10");
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default CardElements;
