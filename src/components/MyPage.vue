<template>
  <div style="padding : 10px">
    <h4>Followers</h4>
    <input placeholder="🔍" />
    <div
      class="post-header"
      v-for="(follower, index) in followers"
      :key="index"
    >
      <div
        class="profile"
        :style="`background-image: url(${follower.image})`"
      ></div>
      <span class="profile-name">{{ follower.name }}</span>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  name: "MyPage",
  setup() {
    let followers = ref([]);

    onMounted(() => {
      axios.get("/followers.json").then((res) => {
        followers.value = res.data;
      });
    });

    return { followers };
  },
};
</script>

<style></style>
