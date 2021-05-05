<template>
  <div>
    <Post :instagramData="instagramData" />
  </div>
</template>

<script>
import Post from "./Post";

export default {
  name: "Container",
  components: {
    Post,
  },
  props: {
    instagramData: Array,
  },
};
</script>

<style></style>
