import placeholder from "../film-poster-placeholder.jpg";

export function getMovieImg(patch, width) {
  return patch 
  ? `https://image.tmdb.org/t/p/w${width}${patch}` 
  : placeholder;
}
