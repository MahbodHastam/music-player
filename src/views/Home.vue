<template>
  <span v-if="loading">Loading...</span>
  <div v-else class="content">
    <div class="song-cover">
      <img class="song-cover" :src="this.$store.state.song.details.album_cover">
      <img class="song-cover" :src="this.$store.state.song.details.album_cover">
    </div>
    <h1 class="song-title">{{ this.$store.state.song.details.song ?? this.$store.state.song.details.file_name }}</h1>
    <h3 class="song-author">{{ this.$store.state.song.details.artist ?? '' }}</h3>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  data: function () {
    return {
      loading: true
    }
  },
  computed: {
    song: function () {
      return this.$store.state.song
    }
  },
  mounted () {
    if (!this.$store.state.song.details) {
      this.$store.dispatch('getFirstSong').then(() => {
        this.loading = false
      })
    } else {
      this.song = this.$store.state.song
      this.loading = false
    }
  }
}
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.song-cover {
  display: flex;
  position: relative;
  width: 40%;

  img {
    width: 100%;
    border-radius: 1.6rem;
  }

  &:nth-child(2) {
    position: absolute;
    opacity: .3;
    transform: scale(.8);
    filter: blur(20px);
    bottom: -35px;
  }
}
</style>
