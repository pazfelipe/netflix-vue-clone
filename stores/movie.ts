import { defineStore } from "pinia"

export const useMovieStore = defineStore("movie", {
  state: () => ({
    _movie: "",
    _showFullVideo: false
  }),
  getters: {
    movie: state => state._movie,
    showFullVideo: state => state._showFullVideo
  },
  actions: {
    setMovie(movie: string) {
      this._movie = movie
    },
    setShowFullVideo(showFullVideo: boolean) {
      this._showFullVideo = showFullVideo
    }
  }
})
