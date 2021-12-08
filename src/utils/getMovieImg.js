import placeholder from "../film-poster-placeholder.jpg";

export function getMovieImg(patch, width) {
  return patch 
  ? `${patch}` 
  : placeholder;
}
