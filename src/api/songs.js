// const _songs = []

export default {
  async getSongs (cb) {
    const res = await fetch('http://localhost:9090/?req=songs-list')
    const songs = res.json()
    cb(songs)
  },
  async getFirstSong (cb) {
    const res = await fetch('http://localhost:9090/?req=one-song')
    const song = await res.json()
    cb(song)
  }
}
