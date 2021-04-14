<template>
  <li class="song-item" :class="{noDetails: !song.details.artist, isPlaying: index === song_index}">
    <h3 class="song-title">
      {{ song.details.song ?? song.details.file_name ?? 'Untitled!!!' }}
    </h3>
    <h5 v-if="song.details.artist" class="song-author">
      {{ song.details.artist }}
    </h5>
    <button class="song-item--play-btn" @click="play">
      <i class="bx bx-play"></i>
    </button>
  </li>
</template>

<script>
export default {
  name: 'Song',
  props: ['song', 'song_index'],
  computed: {
    index: function () {
      return this.$store.state.index
    }
  },
  methods: {
    play: function () {
      this.$store.dispatch('setPlayerSrc', this.song.url)
      this.$store.dispatch('setIsPlaying', true)
      this.$store.dispatch('playerToggle', true)
      this.$store.dispatch('setIndex', this.song_index)
      this.$store.dispatch('setSong', this.song_index)
    }
  }
}
</script>

<style lang="scss" scoped>
.noDetails {
  padding-top: 10px;
  padding-bottom: 15px;
  font-size: .8em;
  margin-bottom: .5em;
  white-space: normal;
}

@keyframes is-playing-animation {
  0% {
    width: 25%;
    opacity: 0;
  }
  50% {
    opacity: .5;
  }
  100% {
    width: 100%;
    opacity: 0;
  }
}

.song-item {
  position: relative;

  &.isPlaying {
    background: rgba(#b2c5d8, .1);
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 25%;
      height: 100%;
      background: rgba(#42b983, .2);
      border-radius: .6rem;
      opacity: 0;
      animation: is-playing-animation 2s infinite ease;
    }
  }

  &:hover &--play-btn {
    opacity: 1;
    visibility: visible;
    transform: translateY(-50%) scale(1);
  }

  &--play-btn {
    border: none;
    outline: none;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%) scale(.9);
    border-radius: 100rem;
    background: #42b983;
    padding: .3em;
    font-size: 14pt;
    opacity: 0;
    visibility: hidden;
    transition: all .3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-50%) scale(1.2) !important;
    }

    > .bx {
      display: block;
    }
  }
}
</style>
