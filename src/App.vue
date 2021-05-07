<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">Post</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container
    :image="image"
    :upload="upload"
    :step="step"
    :instagramData="instagramData"
    :filter="filter"
    @write="message = $event"
  />
  <button class="more" @click="more">Show more</button>
  <div class="footer">
    <ul class="footer-button-plus">
      <input
        @change="upload"
        multiple
        type="file"
        accept="image/*"
        id="file"
        class="inputfile"
      />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from "./components/Container";
import instagramData from "./instagramData";
import axios from "axios";

export default {
  name: "App",
  components: {
    Container,
  },
  data() {
    return {
      instagramData,
      buttonClick: 0,
      step: 0,
      image: "",
      message: "",
      date: new Date(Date.now()),
      selectedFilter: "",
    };
  },
  mounted() {
    this.emitter.on("filterFunc", (filter) => {
      this.selectedFilter = filter;
    });
  },
  computed: {
    name() {
      return this.$store.state.name;
    },
  },
  methods: {
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.buttonClick}.json`)
        .then((res) => {
          this.instagramData.push(res.data);
          this.buttonClick++;
        })
        .catch((err) => console.log(err));
    },
    upload(e) {
      let file = e.target.files;
      console.log(file[0]);
      let url = URL.createObjectURL(file[0]);
      console.log(url);
      this.image = url;
      this.step++;
    },
    publish() {
      let myData = {
        name: "Wook Lee",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.image,
        likes: 0,
        date: this.date.toDateString(),
        liked: false,
        content: this.message,
        filter: this.selectedFilter,
      };
      instagramData.unshift(myData);
      this.step = 0;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  margin-bottom: 0;
  background-color: whitesmoke;
  padding-bottom: 10px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: whitesmoke;
  margin-top: 2rem;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}

.more {
  margin: 5px auto;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 1px solid whitesmoke;
  padding: 10px;
  text-align: center;
  cursor: pointer;
}

label {
  font-size: 2rem;
  cursor: pointer;
}
</style>
