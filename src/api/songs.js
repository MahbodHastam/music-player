// const _songs = []
const base_url = "https://srv2.myren.xyz/"

export default {
  async getSongs (cb) {
    const res = await fetch(`${base_url}?req=songs-list`)
    const songs = res.json()
    cb(songs)
  },
  async getFirstSong (cb) {
    const res = await fetch(`${base_url}?req=one-song`)
    const song = await res.json()
    cb(song)
  }
}
