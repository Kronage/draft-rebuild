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
  },
  getMovieBoxOfficeTotal: (state, getters) => (movieIds) => {
    let playerMovies = getters.getMoviesByIds(movieIds)
    let total = 0
    for (let playerMovie of playerMovies) {
      total += playerMovie.boxOffice
    }
    return total
  }
}