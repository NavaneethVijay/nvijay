<template>
  <div class="flex">
    <ul
      class="social-menu-slide hidden md:block text-gray-900 text-xl font-normal my-8 flex flex-col items-left px-8"
    >
      <li class="pr-8 mt-3 overflow-hidden text-lg text-gray-500 font-normal">
        Social
      </li>
      <li class="pr-8 my-4 overflow-hidden">
        <a
          class="hover:text-primary"
          href="https://instagram.com/navneeth_vijay"
        >
          Instagram
        </a>
      </li>
      <li class="pr-8 my-4 overflow-hidden">
        <a class="hover:text-primary" href="https://github.com/NavaneethVijay">
          Github
        </a>
      </li>
      <li class="pr-8 my-4 overflow-hidden">
        <a class="hover:text-primary" href="https://twitter.com/navaneeth_V29">
          Twitter
        </a>
      </li>
      <li class="pr-8 my-4 overflow-hidden">
        <a class="hover:text-primary" href="https://codepen.io/NavaneethVijay">
          Codepen
        </a>
      </li>
    </ul>
    <ul
      class=" text-3xl md:text-5xl text-gray-900 font-medium my-8 flex flex-col items-left px-8"
    >
      <li class="pr-8 mt-3 overflow-hidden text-lg text-gray-500 font-normal">
        Menu
      </li>
      <li class="pr-8 my-2 overflow-hidden">
        <router-link class="hover:text-primary" to="/">Home</router-link>
      </li>
      <li class="pr-8 my-2 overflow-hidden">
        <router-link class="hover:text-primary" to="/about"
          >About me</router-link
        >
      </li>
      <li class="pr-8 my-2 overflow-hidden">
        <router-link class="hover:text-primary" to="/blog">Blog</router-link>
      </li>
      <li class="pr-8 my-2 overflow-hidden">
        <router-link class="hover:text-primary underline" to="/projects"
          >Open source</router-link
        >
      </li>
      <li class="mt-4 md:mt-20">
        <div>
          <h3
            class="pr-8 mt-6 overflow-hidden text-lg text-gray-500 font-normal"
          >
            Get in touch
          </h3>
          <p
            class="pr-8 mb-3 overflow-hidden text-lg md:text-xl font-normal  underline "
          >
            sainavaneeth@gmail.com
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'MenuList'
}
</script>
<style lang="scss">
.social-menu-slide {
  transform: translateX(90%);
  overflow: hidden;
  animation-name: slideInMenu;
  animation-duration: 0.8s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;
}
@keyframes slideInMenu {
  from {
    transform: translateX(90%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.hideMenu {
  .social-menu-slide {
    transform: translateX(0);
    overflow: hidden;
    animation-name: slideOutMenu;
    animation-duration: 1s;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
    opacity: 1;
  }
}
@keyframes slideOutMenu {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(90%);
    opacity: 0;
  }
}
</style>
