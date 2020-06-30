<template>
  <div>
    <ul class=" text-4xl font-semibold my-8 flex flex-col items-center">
      <li class="pr-8 my-6 overflow-hidden">
        <router-link to="/">Home</router-link>
      </li>
      <li class="pr-8 my-6 overflow-hidden">
        <router-link to="/about">About Me</router-link>
      </li>
      <li class="pr-8 my-6 overflow-hidden">
        <router-link to="/blog">Blog</router-link>
      </li>
      <li class="pr-8 my-6 overflow-hidden">
        <router-link to="/projects">Projects</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'MenuList'
}
</script>
