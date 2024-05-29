<template>
  <div class="container mx-auto">
    <div class="flex flex-col md:flex-row justify-between bg-[#F5F5F580] mt-3">
      <div class="md:w-2/4 pl-6 md:pl-12 py-10 md:py-20 w-full ">
        <p class="text-[#3D3D3D] font-medium uppercase text-[20px] md:text-[30px]">Welcome to greenshop</p>
        <h1 class="tracking-wide py-3 text-[36px] md:text-[80px] uppercase font-extrabold leading-[40px] md:leading-[80px]">
          Let’s Make a Better <span class="text-[#46A358]">Planet</span>
        </h1>
        <p class="pb-6 md:pb-10 text-[#727272] leading-[24px] tracking-wider">
          We are an online plant shop offering a wide range 
        </p>
        <div>
          <button
            class="ease-linear font-bold rounded-[6px] bg-[#46A358] text-white px-6 md:px-8 py-2 hover:text-[#46A358] hover:bg-white"
          >
            SHOP NOW
          </button>
        </div>
      </div>
      <!-- second div  -->
      <div class="relative flex items-center justify-center md:justify-end pr-0 md:pr-10">
        <img class="absolute bottom-[20px] md:bottom-[37px] left-[20px] md:left-[50px] w-[50px] md:w-[100px]" src="../../public/littleFlower.png" alt="" />
        <img class="w-[200px] md:w-full" src="../../public/bigFlower.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
