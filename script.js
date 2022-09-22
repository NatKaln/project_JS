const numberOfFilms = +prompt("Скільки фільмів ви уже переглянули?");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};
const a = prompt("Один із останніх переглянутих фільмів, "),
  b = prompt("На скільки ви його оціните?,"),
  c = prompt("Один із останніх переглянутих фільмів,  "),
  d = prompt("На скільки ви його оціните?,");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
