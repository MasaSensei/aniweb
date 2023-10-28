interface Anime {
  mal_id: number;
  images: {
    webp: {
      image_url: string;
      large_image_url: string;
    };
    jpg: {
      image_url: string;
      large_image_url: string;
    };
  };
  trailer: {
    url: string;
    embed_url: string;
    images: {
      maximum_image_url: string;
    };
  };
  title: string;
  type: string;
  episodes: number;
  status: string;
  duration: string;
  score: number;
  synopsis: string;
  year: number;
}

export default Anime;
