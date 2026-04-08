import axiosInstance from "@/utils/axios";

export const getTopAnime = async (page: number = 1) => {
  const { data } = await axiosInstance.get(
    `/top/anime?filter=bypopularity&page=${page}`,
  );
  return data;
};

export const getSeasonNow = async () => {
  const { data } = await axiosInstance.get("/seasons/now");
  return data;
};

export const getAnimeByLetter = async (letter: string, page: number = 1) => {
  const { data } = await axiosInstance.get(
    `/anime?letter=${letter}&page=${page}&order_by=title&sort=asc`,
  );
  return data;
};

export const getAnimeDetail = async (id: string) => {
  const { data } = await axiosInstance.get(`/anime/${id}/full`);
  return data;
};

export const getAnimeCharacters = async (id: string) => {
  const { data } = await axiosInstance.get(`/anime/${id}/characters`);
  return data;
};

// Mengambil semua list genre yang tersedia di Jikan
export const getGenres = async () => {
  const { data } = await axiosInstance.get("/genres/anime");
  return data;
};

// Mengambil anime berdasarkan ID genre
export const getAnimeByGenre = async (genreId: string, page: number = 1) => {
  const { data } = await axiosInstance.get(
    `/anime?genres=${genreId}&page=${page}&order_by=score&sort=desc`,
  );
  return data;
};

export const searchAnime = async (query: string, page: number = 1) => {
  const { data } = await axiosInstance.get(`/anime?q=${query}&page=${page}`);
  return data;
};
