export async function getSeasons(query: string) {
  try {
    const url = `https://api.jikan.moe/v4/seasons/${query}`;
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
