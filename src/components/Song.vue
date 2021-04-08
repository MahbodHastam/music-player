<template>
  <li class="song-item" :class="{noDetails: !song.details.artist}">
    <h3 class="song-title">{{ song.details.song ?? 'File Name: `' + (song.details.file_name ?? 'Untitled!!!') + '`' }}</h3>
    <h5 v-if="song.details.artist" class="song-author">{{ song.details.artist }}</h5>
    <button class="song-item--play-btn">
      <i class="bx bx-play"></i>
    </button>
  </li>
</template>

<script>
export default {
  name: 'Song',
  props: {
    song: Object
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

.song-item {
  position: relative;

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
