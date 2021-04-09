import { createStore } from 'vuex'
import songsApi from '@/api/songs'

export default createStore({
  state: {
    index: 0,
    songs: [],
    song: {},
    isPlaying: false,
    player: new Audio()
  },
  mutations: {
    setSongs (state, songs) {
      state.songs = songs
    },
    setSong (state, song) {
      state.song = song
    },
    setIsPlaying (state, status) {
      state.isPlaying = status
    },
    setPlayerSrc (state, source) {
      state.player.src = source
    },
    playerToggle (state, status) {
      if (status) state.player.play()
      else state.player.pause()
    },
    setIndex (state, newIndex) {
      if (newIndex > (state.songs.length - 1) || newIndex < 0) {
        newIndex = 0
      }
      state.index = newIndex
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
    },
    setIsPlaying ({ commit }, status) {
      commit('setIsPlaying', status)
    },
    setPlayerSrc ({ commit }, source) {
      commit('setPlayerSrc', source)
    },
    playerToggle ({ commit }, status) {
      commit('playerToggle', status)
    },
    setIndex ({ commit }, index) {
      commit('setIndex', index)
    },
    setSong ({ commit }, index) {
      commit('setSong', this.state.songs[index])
    }
  },
  modules: {
  }
})
