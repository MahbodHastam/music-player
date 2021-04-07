<template>
  <ul id="nav">
    <li><router-link to="/">
      <i class="bx bx-home"></i> Home
    </router-link></li>
    <li><router-link to="/about">
      <i class="bx bxs-playlist"></i> Songs List
    </router-link></li>
  </ul>
  <router-view/>
  <div class="playbar">
    <button id="prev" class="btn"><i class="bx bx-skip-previous"></i></button>
    <button id="play" class="btn"><i class="bx bx-play"></i></button>
    <button id="pause" class="btn"><i class="bx bx-pause"></i></button>
    <button id="next" class="btn"><i class="bx bx-skip-next"></i></button>
  </div>
</template>

<script>

export default {
  name: 'App'
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
</style>
