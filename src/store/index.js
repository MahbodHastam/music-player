import { createStore } from 'vuex'
import songsApi from '@/api/songs'

export default createStore({
  state: {
    songs: [],
    song: {}
  },
  mutations: {
    setSongs (state, songs) {
      state.songs = songs
    },
    setSong (state, song) {
      state.song = song
    }
  },
  actions: {
    async getSongsList ({ commit }) {
      return new Promise((resolve, reject) => {
        songsApi.getSongs(songs => {
          // commit('setSongs', await songs)
          songs.then(songs => commit('setSongs', songs))
          resolve()
        })
      })
    },
    async getFirstSong ({ commit }) {
      return new Promise((resolve, reject) => {
        songsApi.getFirstSong(song => {
          commit('setSong', song)
          resolve()
        })
      })
    }
  },
  modules: {
  }
})
