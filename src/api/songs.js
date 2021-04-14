// const _songs = []
const baseUrl = 'https://srv2.myren.xyz/'

export default {
  async getSongs (cb) {
    const res = await fetch(`${baseUrl}?req=songs-list`)
    const songs = res.json()
    cb(songs)
  },
  async getFirstSong (cb) {
    const res = await fetch(`${baseUrl}?req=one-song`)
    const song = await res.json()
    cb(song)
  }
}
