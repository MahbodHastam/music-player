<template>
  <ul id="nav">
    <li><router-link to="/">
      <i class="bx bx-home"></i> Home
    </router-link></li>
    <li><router-link to="/songs">
      <i class="bx bxs-playlist"></i> Songs List
    </router-link></li>
  </ul>
  <transition name="slide-fade">
    <router-view/>
  </transition>
  <div class="playbar">
    <button id="prev" @click="prev" class="btn"><i class="bx bx-skip-previous"></i></button>
    <button id="play" v-show="!isPlaying" @click="play" class="btn"><i class="bx bx-play"></i></button>
    <button id="pause" v-show="isPlaying" @click="pause" class="btn"><i class="bx bx-pause"></i></button>
    <button id="next" @click="next" class="btn"><i class="bx bx-skip-next"></i></button>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    isPlaying: function () {
      return this.$store.state.isPlaying
    }
  },
  methods: {
    toggle: function (status = true) {
      this.$store.dispatch('setIsPlaying', status)
      this.$store.dispatch('playerToggle', status)
    },
    play: function () {
      if (!this.$store.state.player.src) {
        this.$store.dispatch('setPlayerSrc', this.$store.state.song.url)
      }
      this.toggle()
    },
    pause: function () {
      this.toggle(false)
    },
    prev: function () {
      this.$store.dispatch('setIndex', this.$store.state.index - 1)
      this.$store.dispatch('setSong', this.$store.state.index)
      this.$store.dispatch('setPlayerSrc', this.$store.state.songs[this.$store.state.index].url)
      this.toggle()
    },
    next: function () {
      this.$store.dispatch('setIndex', this.$store.state.index + 1)
      this.$store.dispatch('setSong', this.$store.state.index)
      this.$store.dispatch('setPlayerSrc', this.$store.state.songs[this.$store.state.index].url)
      this.toggle()
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/base.scss';

#nav {
  height: 30px;
  width: 100%;
  border-bottom: 1px solid rgba(178, 197, 216, .112);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  padding: 0;
  margin: 0;

  li {
    display: inline-block;
  }

  a {
    font-weight: bold;
    color: #b2c5d8;
    padding: .5em;
    padding-bottom: calc(.5em - 5px);
    transition: all .3s ease;
    border-bottom: 1px solid transparent;
    font-size: 1em;
    vertical-align: middle;
    display: inline-block;

    &.router-link-exact-active {
      color: #42b983;
      border-bottom: 1px solid #42b983;
    }
  }
}

.slide-fade-enter-active {
  transition: all .3s ease-out;
  transform: scale(1) translateY(0);
}

.slide-fade-leave-active {
  // transition: all .8s cubic-bezier(1, 0.5, 0.8, 1);
  transition: all .8s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  // transform: translateX(20px);
  transform: scale(.9) translateY(50px);
  opacity: 0;
}
</style>
