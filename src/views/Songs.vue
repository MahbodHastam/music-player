<template>
  <div id="songs-list">
    <ul>
      <loading v-if="loading" />
      <song
        v-else
        v-for="song in this.$store.state.songs"
        :key="song.title"
        :song="song"
      />
    </ul>
  </div>
</template>

<script>
import Song from '@/components/Song.vue'
import Loading from '../components/Loading.vue'

export default {
  name: 'Songs',
  components: {
    Song,
    Loading
  },
  data: function () {
    return {
      loading: false
    }
  },
  computed: {
    /* songs: function () {
      const songs = store.dispath('getSongsList')
      console.log(songs)
      return songs
    } */
  },
  created () {
    this.loading = true
    // eslint-disable-next-line no-return-assign
    this.$store.dispatch('getSongsList').then(() => this.loading = false)
  }
}
</script>

<style lang="scss">
#songs-list {
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: start;
  align-items: center;
  padding: 0 .5em;
  overflow-y: auto;

  ul {
    width: 100%;
    padding: 0;
  }
}

.song-item {
  list-style: none;
  width: 100%;
  background: rgba(#f1f1f1, .02);
  border-radius: .6rem;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: rgba(#f1f1f1, .05);
  }

  .song-title {
    margin: 0;
    padding-top: 10px;
    padding-left: 10px;
  }

  .song-author {
    margin: .5em;
    padding-left: 10px;
    padding-bottom: 10px;
  }
}
</style>
