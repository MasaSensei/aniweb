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
