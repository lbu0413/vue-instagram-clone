<template>
  <div>
    <Post />
    <Post />
    <Post />
  </div>
</template>

<script>
import Post from "./Post";

export default {
  name: "Container",
  components: {
    Post,
  },
};
</script>

<style></style>
