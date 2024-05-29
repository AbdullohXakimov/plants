<template>
  <div class="container">
    <div class="flex md:hidden py-5 justify-between relative">
      <div>
        <svg class="absolute left-4 top-[34px]"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.5296 3.2436C6.50469 3.2436 3.24326 6.50244 3.24326 10.5207C3.24326 14.539 6.50469 17.7978 10.5296 17.7978C12.5376 17.7978 14.3546 16.9875 15.6732 15.675C16.9977 14.3566 17.8159 12.5347 17.8159 10.5207C17.8159 6.50244 14.5545 3.2436 10.5296 3.2436ZM1.83301 10.5207C1.83301 5.72204 5.72737 1.83334 10.5296 1.83334C15.3318 1.83334 19.2262 5.72204 19.2262 10.5207C19.2262 12.6706 18.4436 14.6389 17.149 16.1554L19.9595 18.9627C20.2351 19.2379 20.2353 19.6843 19.9601 19.9599C19.6849 20.2354 19.2384 20.2356 18.9629 19.9604L16.1497 17.1505C14.6343 18.4335 12.6719 19.2081 10.5296 19.2081C5.72737 19.2081 1.83301 15.3194 1.83301 10.5207Z"
            fill="#A5A5A5"
          />
        </svg>

        <input
          class="border p-3 pr-28 pl-16"
          type="text"
          placeholder="Find your plants"
        />
      </div>
      <div class="bg-green-400  p-4 px-18 rounded">
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.2144 13.3926H1.28125"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.9375 13.3934C10.9375 15.2651 11.5617 15.8884 13.4325 15.8884C15.3033 15.8884 15.9274 15.2651 15.9274 13.3934C15.9274 11.5218 15.3033 10.8984 13.4325 10.8984C11.5617 10.8984 10.9375 11.5218 10.9375 13.3934Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.99512 3.77801H15.9274"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.27202 3.77677C6.27202 1.90595 5.64786 1.2818 3.77704 1.2818C1.9054 1.2818 1.28125 1.90595 1.28125 3.77677C1.28125 5.64841 1.9054 6.27175 3.77704 6.27175C5.64786 6.27175 6.27202 5.64841 6.27202 3.77677Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <div class="hidden md:flex justify-between items-center py-8 border-b">
      <div class="flex items-center gap-2">
        <img src="../../public/Vector (5).png" alt="" />
        <p class="text-[#46A358] font-bold">GREENSHOP</p>
      </div>
      <div class="md:flex justify-between items-center gap-20">
        <a
          href="#"
          class="font-normal text-[#3D3D3D] hover:text-[#3D3D3D] hover:font-bold"
          >Home</a
        >
        <a href="#" class="text-[#3D3D3D] hover:text-[#3D3D3D] hover:font-bold"
          >Shop</a
        >
        <a href="#" class="text-[#3D3D3D] hover:text-[#3D3D3D] hover:font-bold"
          >Plant Care</a
        >
        <a
          href="#"
          class="font-normal text-[#3D3D3D] hover:text-[#3D3D3D] hover:font-bold"
          >Blogs</a
        >
      </div>
      <div class="flex justify-between items-center gap-6">
        <img src="../../public/loop.png" alt="" />
        <div class="relative pr-2">
          <img src="../../public/korzina.png" alt="" />
          <div
            class="font-serif absolute px-[5px] border-[3px] rounded-full text-[#fff] bg-[#46A358] text-[10px] top-[-4px] right-[-2px]"
          >
            6
          </div>
        </div>
        <button
          class="bg-[#46A358] flex items-center gap-2 px-5 py-2 rounded-[6px]"
          @click="emitLogin"
        >
          <img src="../../public/Logout.png" alt="" />
          <span class="text-[#fff]">Login</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    emitLogin() {
      this.$emit("login");
    },
  },
};
</script>

<style lang="scss" scoped></style>
