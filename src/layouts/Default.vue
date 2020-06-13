<template>
  <div class="layout min-h-screen">
    <div class="container mx-auto relative fixed top-0">
      <header class="py-6 header flex justify-between w-full">
        <div>
          <router-link class="font-medium text-xl" to="/"
            >Navaneeth Vijay</router-link
          >
        </div>
        <div class="menu-icon">
          <div
            class="w-6 h-6 text-white bg-red-100 cursor-pointer"
            @click="showMenu = !showMenu"
          ></div>
        </div>
      </header>
    </div>
    <div v-if="showMenu">
      <div :class="{ showMenu: showMenu }">
        <div
          class="h-screen overflow-hidden bg-primary fixed top-0 w-full menu-slide"
        ></div>
        <div
          class="h-screen overflow-hidden bg-indigo-900 fixed top-0 w-full menu-slide"
        ></div>
        <div
          class="h-screen overflow-hidden bg-purple-100 fixed top-0 w-full menu-slide"
        ></div>
        <div
          class="h-screen overflow-hidden bg-white fixed top-0 w-full menu-slide flex items-center justify-center text-primary"
        >
          <div class="container mx-auto">
            <ul class=" text-4xl my-8">
              <li class="pr-8 my-6">
                <router-link to="/">Home</router-link>
              </li>
              <li class="pr-8 my-6">
                <router-link to="/about">About Me</router-link>
              </li>
              <li class="pr-8 my-6">
                <router-link to="/projects">Projects</router-link>
              </li>
              <li class="pr-8 my-6">
                <router-link to="/contact">Contact</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div><slot /></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    }
  },
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.menu-slide {
  opacity: 0;
  visibility: hidden;
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  transform: translateX(100%);
}
.showMenu {
  .menu-slide {
    animation-name: slideInto;
    animation-duration: 1s;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
    animation-direction: alternate;
    visibility: visible;
    opacity: 1;
    z-index: 2;

    &:nth-child(2) {
      animation-delay: 0.5s;
    }
    &:nth-child(3) {
      animation-delay: 0.8s;
    }
    &:nth-child(4) {
      animation-delay: 1s;
    }
  }
}

@keyframes slideInto {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

header {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
}
.headling-line {
  height: 3px;
}
.text-accent-color {
  color: rgba(72, 48, 230, 0.1);
}
.text-accent-bg {
  background-color: rgba(72, 48, 230, 0.1);
}
.text-bg-accent {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 38%;
  background-color: rgba(72, 48, 230, 0.1);
  -webkit-transform-origin: 50% 100%;
  -ms-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
}
.vertical-rl {
  writing-mode: vertical-rl;
  color: #0074d9;
  display: inline-block;
}

.hero-side-bg {
  background-color: #36117e;
}
.h-inherit {
  height: inherit;
}
.hero-img {
  position: relative;
  z-index: 1;
  max-height: 640px;
  @media (max-width: 767px) {
    width: 70%;
    margin-left: auto;
  }
}
.hero-img-backdrop {
  position: absolute;
  left: -80px;
  top: 80px;
  right: 80px;
  bottom: -80px;
  z-index: 0;
  display: block;
  background-image: url('https://assets.website-files.com/5d419732b8b3b47636fc4c66/5d41adf5f65670135f80e148_Pattern%20Dot.svg');
  background-position: 0% 0%;
  background-size: 20px;
  opacity: 0.3;

  @media (max-width: 767px) {
    left: 40px;
    top: 40px;
    right: 40px;
    bottom: -40px;
    background-size: 16px;
  }
}
.powers-img-backdrop-left {
  position: absolute;
  left: 0;
  top: 25%;
  background-image: url('https://assets.website-files.com/5d419732b8b3b47636fc4c66/5d41adf5f65670135f80e148_Pattern%20Dot.svg');
  width: 10%;
  height: 20%;
  opacity: 0.3;
}
.powers-img-backdrop-right {
  position: absolute;
  right: 0;
  bottom: 25%;
  background-image: url('https://assets.website-files.com/5d419732b8b3b47636fc4c66/5d41adf5f65670135f80e148_Pattern%20Dot.svg');
  width: 30%;
  height: 30%;
  opacity: 0.3;
}
</style>
