<template>
  <div style="padding : 10px">
    <h4>Followers</h4>
    <input v-model="haha" @input="search" placeholder="🔍" />
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

    function search() {
      return followers.value.filter((follower) => {
        follower.name === event.target.value;
      });
    }

    return { followers, search };
  },
};
</script>

<style></style>
