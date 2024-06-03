<template>
  <div class="container">
    <div class="flex m-10">
      <router-link to="/">Home</router-link>
      <span>/</span>
      <router-link to="/shop/:img/:name/:price">Shop</router-link>
    </div>

    <div class="flex gap-20">
      <div>
        <img class="w-[260px]" src="../../public/littleFlower.png" alt="" />
        <img class="w-[260px]" src="../../public/littleFlower.png" alt="" />
        <img class="w-[260px]" src="../../public/littleFlower.png" alt="" />
        <img class="w-[260px]" src="../../public/littleFlower.png" alt="" />
      </div>
      <div class="bg-[#FBFBFB]">
        <img
          class="mx-auto mb-4 w-[1000px]"
          :src="route.params.img"
          alt="some"
        />
      </div>

      <div class="">
        <div class="border-b-2 pb-3 mb-3">
          <h2 class="text-[32px] font-bold">Barberton Daisy</h2>
          <p class="text-[#46A358] text-[26px] font-bold">{{ route.params.price }}</p>
        </div>
        <h3 class="text-[22px] font-semibold">Short description:</h3>
        <p class="text-[#727272] tracking-wider text-[18px]">
          The ceramic cylinder planters come with a wooden stand to help elevate
          your plants off the ground. The ceramic cylinder planters come with a
          wooden stand to help elevate your plants off the ground.
        </p>
        <h3 class="text-[22px] font-semibold pb-1">Size:</h3>
        <div class="my-2">
          <span
            class="cursor-pointer rounded-[35px] mx-1 border-gray-100 border px-[14px] py-2"
            >S</span
          >
          <span
            class="cursor-pointer rounded-[35px] mx-1 border-gray-100 border px-3 py-2"
            >M</span
          >
          <span
            class="cursor-pointer rounded-[35px] mx-1 border-gray-100 border px-[14px] py-2"
            >L</span
          >
          <span
            class="cursor-pointer rounded-[35px] mx-1 border-gray-100 border px-[11px] py-2"
            >XL</span
          >
        </div>
        <div class="flex items-center my-6">
          <span
            class="cursor-pointer rounded-[35px] mx-1 border-gray-100 border px-[14px] py-2"
            >-</span
          >
          <span class="px-3">1</span>
          <span
            class="cursor-pointer rounded-[35px] mx-1 border-gray-100 border px-[12px] py-2"
            >+</span
          >
          <button class="text-[#46A358] border rounded-[6px] px-10 py-2 ml-4">
            Buy now
          </button>
          <button class="text-[#46A358] border rounded-[6px] px-10 py-2 ml-4">
            Add to card
          </button>
          <button class="text-[#46A358] border rounded-[6px] px-3 py-2 ml-4">
            M
          </button>
        </div>
        <div>
          <div class="sku">
            <span>SKU: </span>
            <span>1995751877966</span>
          </div>
          <div class="categories">
            <span>categories: </span>
            <span>Potter Plants</span>
          </div>
          <div class="tags">
            <span>Tags: </span>
            <span>Home, Garden, Plants</span>
          </div>
        </div>
        <div>
          <p>Share these products: M M M M</p>
        </div>
      </div>
    </div>

    <div class="flex mt-20 mb-10 gap-10 border-b-2 p-3">
      <p>Product Description</p>
      <p>Reviews (19)</p>
    </div>
    <div>
      <p class="text-[18px] text-[#727272]">
        The ceramic cylinder planters come with a wooden stand to help elevate
        your plants off the ground. The ceramic cylinder planters come with a
        wooden stand to help elevate your plants off the ground. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est
        tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare
        lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing
        cursus eu, suscipit id nulla.
      </p>
      <p class="text-[18px] text-[#727272] my-5">
        Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat
        sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce
        ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate,
        sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et
        placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis
        mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam
        gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic
        cylinder planters come with a wooden stand to help elevate your plants
        off the ground.
      </p>
    </div>
    <div class="mt-5" >
      <h3 class="text-[22px]">Living room:</h3>
      <p class="text-[18px] text-[#727272] my-3">
        The ceramic cylinder planters come with a wooden stand to help elevate
        your plants off the ground. The ceramic cylinder planters come with a
        wooden stand to help elevate your plants off the ground. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
    <div class="my-5">
      <h3 class="text-[22px]">Living room:</h3>
      <p class="text-[18px] text-[#727272] my-3">
        The ceramic cylinder planters come with a wooden stand to help elevate
        your plants off the ground. The ceramic cylinder planters come with a
        wooden stand to help elevate your plants off the ground. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
    <div>
      <h3 class="text-[22px]">Living room:</h3>
      <p class="text-[18px] text-[#727272] my-3">
        The ceramic cylinder planters come with a wooden stand to help elevate
        your plants off the ground. The ceramic cylinder planters come with a
        wooden stand to help elevate your plants off the ground. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>

    <div class="my-20 pb-2 border-b-2 border-[#dfffe680] " >
        <h3 class="text-[#46A358] text-[28px]" >Related products: </h3>
    </div>
    <!-- <ReletedProducts/> -->
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
// import ReletedProducts from '../components/releted-products.vue';

const route = useRoute()
</script>

<style lang="scss" scoped></style>
