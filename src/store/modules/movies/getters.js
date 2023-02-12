export default {
  movies(state) {
    return state.movies
  },
  getMoviesByIds: (state) => (movieIds) => {
    let selectedMovies = []
    for (let movieId of movieIds) {
      let selectedMovie = state.movies.find(movie => movie.id === movieId)
      selectedMovies.push(selectedMovie)
    }
    return selectedMovies
  }
}