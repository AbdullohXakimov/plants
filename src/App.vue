<script>
export default {
  data() {
    return {
      message: "Hello Vue js",
      count: 0,
      name: "",
      users: [],
      image:
        "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    };
  },
  methods: {
    increment() {
      this.count++;
    },

    getInput () {
      this.users.push(this.name)
    }
  },

};
</script>

<template>
  <div>

    <input type="text" v-model="name" />
    <button @click="getInput">Ok</button>
    <ul>
      <li v-for="item in users">{{item}}</li>
    </ul>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>
<style scoped>
.active {
  font-size: 30px;
  color: red;
}
</style>
