export async function getDataAnime(query: string) {
  try {
    const url = `https://api.jikan.moe/v4/${query}/anime`;
    const res = await fetch(url);

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
export async function getAnimes(page: number) {
  try {
    const url = `https://api.jikan.moe/v4/anime?sfw&page=${page}`;
    const res = await fetch(url);

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

export async function getSeasons(
  query: string,
  season: string = ""
): Promise<any> {
  try {
    const url = `https://api.jikan.moe/v4/seasons/${query}${
      season ? "/" + season : ""
    }`;
    const res = await fetch(url);

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

export async function getGenres() {
  try {
    const url = `https://api.jikan.moe/v4/genres/anime`;
    const res = await fetch(url);

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
