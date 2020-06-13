<template>
  <div class="layout min-h-screen overflow-x-hidden">
    <div class="container mx-auto relative fixed top-0">
      <header class="px-6 md:px-0 py-6 header flex justify-between w-full ">
        <div>
          <router-link class="font-medium text-xl" to="/">NV</router-link>
        </div>
        <span
          v-if="!showMenu"
          class="absolute text-sm clickhere pt-2 pr-6 md:pr-4 italic"
          >Click here

          <img class="ml-2 w-4 h-4" src="/increase.svg" />
        </span>
        <div class="menu-icon relative">
          <div
            class="w-6 h-6 text-white cursor-pointer"
            @click="
              () => {
                if (this.showMenu) {
                  this.closeMenu = true
                  this.showMenu = false
                } else {
                  this.closeMenu = false
                  this.showMenu = true
                }
              }
            "
          >
            <img
              v-if="showMenu"
              src="https://img.icons8.com/ios-glyphs/30/000000/multiply.png"
            />
            <svg
              class="text-black"
              v-if="!showMenu"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100%"
              height="100%"
              viewBox="0 0 172 172"
              style=" fill:#000000;"
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style="mix-blend-mode: normal"
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill="currentColor">
                  <path
                    d="M0,25.8v17.2h172v-17.2zM0,77.4v17.2h172v-17.2zM0,129v17.2h172v-17.2z"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </header>
    </div>
    <div>
      <div :class="{ showMenu: showMenu, hideMenu: closeMenu }">
        <div
          class="h-screen overflow-hidden bg-primary fixed top-0 w-full menu-slide"
        ></div>
        <div
          class="h-screen overflow-hidden bg-purple-200 fixed top-0 w-full menu-slide"
        ></div>
        <div
          class="h-screen overflow-hidden bg-purple-100 fixed top-0 w-full menu-slide"
        ></div>
        <div
          class="h-screen overflow-hidden bg-white fixed top-0 w-full menu-slide flex items-center justify-center text-primary"
        >
          <div class="container mx-auto">
            <ul class=" text-4xl font-semibold my-8 flex flex-col items-center">
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
    <transition name="slide-fade" appear>
      <main>
        <!-- a wrapper for slot is needed -->
        <slot />
        <!-- the content -->
      </main>
    </transition>
    <footer class="bg-gray-50 border-t py-5">
      <div class="container mx-auto">
        <div
          class="flex flex-wrap justify-center md:justify-between items-center"
        >
          <div>
            <span class="font-bold text-lg md:text-xl">Navaneeth Vijay</span>
          </div>
          <div>
            <ul class="flex text-gray-900 text-md md:text-lg font-mono mt-2">
              <li class="pr-8">
                <a
                  class="hover:text-primary"
                  href="https://instagram.com/navneeth_vijay"
                  >Instagram</a
                >
              </li>
              <li class="pr-8">
                <a
                  class="hover:text-primary"
                  href="https://github.com/NavaneethVijay"
                  >Github</a
                >
              </li>
              <li class="pr-8">
                <a
                  class="hover:text-primary"
                  href="https://twitter.com/navaneeth_V29"
                  >Twitter</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
      closeMenu: false,
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
.clickhere {
  top: 50px;
  right: 0;
  display: flex;
  img {
    //  / transform: rotate(-90deg);
  }
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.6s ease;
}
.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.menu-slide {
  visibility: hidden;
  opacity: 0;
  z-index: 2;
  transform: translateX(100%);
}
.hideMenu {
  .menu-slide {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    animation-name: slideOut;
    animation-duration: 0.5s;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
    visibility: visible;
    transform: translateX(0);
    opacity: 1;
    z-index: 2;

    &:nth-child(4) {
      animation-delay: 0.5s;
    }

    &:nth-child(3) {
      animation-delay: 0.8s;
    }
    &:nth-child(2) {
      animation-delay: 1.2s;
    }
    &:nth-child(1) {
      animation-delay: 1.5s;
    }
  }
}
.showMenu {
  .menu-slide {
    animation-name: slideInto;
    animation-duration: 0.8s;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
    visibility: visible;
    opacity: 1;
    z-index: 2;

    &:nth-child(1) {
      animation-delay: 0.5s;
    }

    &:nth-child(2) {
      animation-delay: 0.8s;
    }
    &:nth-child(3) {
      animation-delay: 1.2s;
    }
    &:nth-child(4) {
      animation-delay: 1.5s;
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
@keyframes slideOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
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
