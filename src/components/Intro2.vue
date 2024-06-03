<template>
  <div class="container mx-auto mt-14 px-4 md:px-0">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
      <!-- first grid -->
      <div class="col-span-1 bg-[#FBFBFB] p-5">
        <h3 class="pt-5 pb-2 font-bold text-[#3D3D3D] text-[18px]">Categories</h3>
        <ul>
          <li v-for="item in plantCategories" :key="item.name" class="flex justify-between px-4 py-2 border-b border-gray-200">
            <span class="text-[#3D3D3D]">{{ item.name }}</span>
            <span class="text-[#3D3D3D]">{{ item.amount }}</span>
          </li>
        </ul>

        <h3 class="pt-5 font-bold text-[#3D3D3D] text-[18px]">Price Range</h3>
        <input class="block w-full mx-auto my-5" type="range" />
        <div class="px-4">
          <span class="text-[#5f5f5f] font-bold">Price:</span>
          <span class="text-[#46A358]"> $39 - $1230</span>
        </div>
        <button class="block w-full mx-auto my-5 ease-linear font-bold rounded-[6px] bg-[#46A358] text-white px-8 py-2 hover:text-[#46A358] hover:bg-white">
          Filter
        </button>

        <h3 class="pt-5 font-bold text-[#3D3D3D] text-[18px]">Size</h3>
        <ul>
          <li v-for="item in plantSizes" :key="item.name" class="flex justify-between px-4 py-2 border-b border-gray-200">
            <span class="text-[#3D3D3D]">{{ item.name }}</span>
            <span class="text-[#3D3D3D]">{{ item.amount }}</span>
          </li>
        </ul>
        <div class="bg-[#46A3581A] mt-5">
          <img class="mx-auto" src="../../public/Super_Sale.png" alt="Super Sale" />
          <h3 class="text-center font-bold text-[23px] text-[#3D3D3D]">UP TO 75% OFF</h3>
          <img class="mx-auto" src="../../public/floww.png" alt="Flower" />
        </div>
      </div>
      <!-- second grid -->
      <div class="col-span-3">
        <div class="flex flex-wrap justify-between mb-5">
          <div class="flex gap-5 flex-wrap">
            <a class="text-[18px] text-[#3D3D3D] hover:text-[#46A358] hover:font-bold hover:border-b-4 border-[#46A358]" href="#">All plants</a>
            <a class="text-[18px] text-[#3D3D3D] hover:text-[#46A358] hover:font-bold hover:border-b-4 border-[#46A358]" href="#">New Arrivals</a>
            <a class="text-[18px] text-[#3D3D3D] hover:text-[#46A358] hover:font-bold hover:border-b-4 border-[#46A358]" href="#">Sale</a>
          </div>
          <div class="flex gap-2 items-center text-[#3D3D3D] text-[18px]">
            <p>Sort by:</p>
            <p>Default sorting</p>

          </div>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <template v-for="(item, index) in intro2Div2" :key="index">
            <Intro_card2 :item="item" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Intro_card2 from "./Intro_card2.vue";

export default {
  data() {
    return {
      plantCategories: [
        { name: "House Plants", amount: "(33)" },
        { name: "Potter Plants", amount: "(12)" },
        { name: "Seeds", amount: "(65)" },
        { name: "Small Plants", amount: "(39)" },
        { name: "Big Plants", amount: "(23)" },
        { name: "Succulents", amount: "(17)" },
        { name: "Terrariums", amount: "(19)" },
        { name: "Gardening", amount: "(13)" },
        { name: "Accessories", amount: "(18)" },
      ],
      plantSizes: [
        { name: "Small", amount: "(119)" },
        { name: "Medium", amount: "(86)" },
        { name: "Large", amount: "(78)" },
      ],
      intro2Div2: [
        { img: "/image8.png", name: "Barberton Daisy", price: "$119.00" },
        { img: "/image8.png", name: "Barberton Daisy", price: "$119.00" },
        { img: "/image8.png", name: "Barberton Daisy", price: "$119.00" },
        { img: "/image8.png", name: "Barberton Daisy", price: "$112.00" },
        { img: "/image8.png", name: "Barberton Daisy", price: "$119.00" },
        { img: "/image8.png", name: "Barberton Daisy", price: "$19.00" },
        { img: "/image8.png", name: "Barberton Daisy", price: "$111.00" },
        { img: "/image8.png", name: "Barberton Daisy", price: "$119.00" },
        { img: "/image8.png", name: "Barberton Daisy", price: "$119.00" },
      ],
    };
  },
  components: {
    Intro_card2,
  },
};
</script>

<style lang="scss" scoped></style>
