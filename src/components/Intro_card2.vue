<template>
  <div>
    <div class="bg-[#FBFBFB]" >
    <img class="mx-auto mb-4 py-[42px]":src="item.img" alt="" />
  </div>
  <h3 class="text-[19px] text-[#3D3D3D]">item.name</h3>
  <p class="text-[20px] text-[#46A358] font-bold">item.price</p>
  </div>
</template>

<script>

export default {
  props : {
    item: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped></style>
