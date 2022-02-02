const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "9ce5356de3ca0ed7710c7dc13a2f4e7c",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
