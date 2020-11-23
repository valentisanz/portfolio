<template>
  <div class="tile is-parent">
    <div class="tile is-child box">
      <p class="title">{{ state.name }}</p>
      <p class="usbtitle">{{ state.bio }}</p>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Profile",
  setup() {
    const state = reactive({
      name: "Valenti Sanz",
      bio: "Full Stack Developer",
    });
    return {
      state,
    };
  },
};
</script>

<style>
</style>