<template>
  <div
    class="post"
    v-for="(instagramDatum, index) in instagramData"
    :key="index"
  >
    <div class="post-header">
      <div
        class="profile"
        :style="{ backgroundImage: `url(${instagramDatum.userImage})` }"
      ></div>
      <span class="profile-name">{{ instagramDatum.name }}</span>
    </div>
    <div
      class="post-body"
      :class="instagramDatum.filter"
      :style="{ backgroundImage: `url(${instagramDatum.postImage})` }"
    ></div>
    <div class="post-content">
      <p>{{ instagramDatum.likes }} Likes</p>
      <p>
        <strong>{{ instagramDatum.name }}</strong>
        {{ instagramDatum.content }}
      </p>
      <p class="date">{{ instagramDatum.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    instagramData: Array,
  },
};
</script>

<style>
.post {
  width: 100%;
  border-top: 1px solid whitesmoke;
  margin-top: 10px;
}
.profile {
  background-image: url("https://placeimg.com/100/100/arch");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://placeimg.com/640/480/animals");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>
