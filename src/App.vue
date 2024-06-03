<template>
  <Header @login="openModal" />
  <router-view></router-view>
    <Footer></Footer>

</template>

<script>
import Header from "./components/Header.vue";
import Intro from "./components/Intro.vue";
import Intro2 from "./components/Intro2.vue";
import AfterIntro from "./components/AfterIntro.vue";
import Blog from "./components/Blog.vue";
import AuthModal from "./components/AuthModal.vue";
import Footer from "./components/footer.vue";


export default {
  data() {
    return {
      isModalVisible: false,
    };
  },
  components: {
    Header,
    Intro,
    Intro2,
    AfterIntro,
    Blog,
    AuthModal,
    Footer
  },
  methods: {
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style scoped></style>
