<template>
  <div>
    <Intro />
    <Intro2 />
    <div class="container flex justify-end gap-1 my-16">
      <button
        class="border rounded-[4px] border-[#E5E5E5] py-1 px-3 hover:bg-[#46A358] hover:text-white"
      >
        1
      </button>
      <button
        class="border rounded-[4px] border-[#E5E5E5] py-1 px-3 hover:bg-[#46A358] hover:text-white"
      >
        2
      </button>
      <button
        class="border rounded-[4px] border-[#E5E5E5] py-1 px-3 hover:bg-[#46A358] hover:text-white"
      >
        3
      </button>
      <button
        class="border rounded-[4px] border-[#E5E5E5] py-1 px-3 hover:bg-[#46A358] hover:text-white"
      >
        4
      </button>
      <button
        class="border rounded-[4px] border-[#E5E5E5] py-1 px-3 hover:bg-[#46A358] hover:text-white"
      >

      </button>
    </div>
    <AfterIntro />
    <Blog />
    <AuthModal v-if="isModalVisible" @close="closeModal" />
  </div>
</template>

<script>
import Intro from "../components/Intro.vue";
import Intro2 from "../components/Intro2.vue";
import AfterIntro from "../components/AfterIntro.vue";
import Blog from "../components/Blog.vue";
import AuthModal from "../components/AuthModal.vue";

import Footer from "../components/footer.vue";

export default {
  data() {
    return {
      isModalVisible: false,
    };
  },
  components: {
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

<style lang="scss" scoped></style>
