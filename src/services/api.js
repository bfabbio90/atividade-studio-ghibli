export const BASE_URL = 'https://ghibliapi.vercel.app/films';

export async function getAllAnimations() {
  const response = await fetch(BASE_URL);
  return response.json();
}

export async function getAnimationById(id) {
  const response = await fetch(`${BASE_URL}/${id}`);
  return response.json();
}
