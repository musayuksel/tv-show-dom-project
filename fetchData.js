export default async function fetchData(
  url = "https://api.tvmaze.com/shows/82/episodes"
) {
  const response = await fetch(url);
  if (response.status === 404) {
    throw new Error("This Show Ended !!!");
  }
  const data = await response.json();
  return data;
}
