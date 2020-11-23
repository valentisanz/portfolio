<template>
  <div id="app">
    <div class="tile is-ancestor">
      <div class="tile is-4 is-vertical is-parent">
        <div class="tile is-child box">
          <p class="title">JavaScript</p>
          <progress class="progress is-success" value="60" max="100">
            60%
          </progress>
        </div>
        <div class="tile is-child box">
          <p class="title">JavaScript</p>
          <progress class="progress is-success" value="60" max="100">
            60%
          </progress>
        </div>
      </div>
      <Profile />

      <div class="tile is-4 is-vertical is-parent">
        <div class="tile is-child box">
          <p class="title">One</p>
        </div>
        <div class="tile is-child box">
          <p class="title">Two</p>
          <p class="subtitle">el pepe</p>
        </div>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-12">
        <article class="tile is-child box">
          <p class="title">Main column</p>
          <p class="subtitle">With some content</p>
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
        </article>
      </div>
    </div>
    <footer class="footer">
      <p class="has-text-centered"><strong>Valenti Sanz</strong> 2020</p>
    </footer>
  </div>
</template>

<script>
import Profile from "./components/Profile";
export default {
  name: "App",
  components: { Profile },
};
</script>

<style lang='scss'>
</style>
