'use server';

export async function fetchAll() {
  const data = fetch('https://swapi.info/api/films')
    .then((res) => res.json()) // Parse the JSON content from the API to be consumed
    .catch((error) => console.error(error));

  return data;
}