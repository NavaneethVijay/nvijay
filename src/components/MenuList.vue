<template>
  <div class="flex">
    <ul
      class="social-menu-slide hidden md:block text-white text-xl font-normal my-8 flex flex-col items-left px-8"
    >
      <li class="pr-8 mt-3 overflow-hidden text-lg opacity-25 font-normal">Social</li>
      <li class="pr-8 my-4 overflow-hidden">
        <a
          class="hover:translate-x-2 inline-block transform transition-all duration-300 ease-in-out"
          href="https://instagram.com/navneeth_vijay"
        >Instagram</a>
      </li>
      <li class="pr-8 my-4 overflow-hidden">
        <a
          class="hover:translate-x-2 inline-block transform transition-all duration-300 ease-in-out"
          href="https://github.com/NavaneethVijay"
        >Github</a>
      </li>
      <li class="pr-8 my-4 overflow-hidden">
        <a
          class="hover:translate-x-2 inline-block transform transition-all duration-300 ease-in-out"
          href="https://twitter.com/navaneeth_V29"
        >Twitter</a>
      </li>
      <li class="pr-8 my-4 overflow-hidden">
        <a
          class="hover:translate-x-2 inline-block transform transition-all duration-300 ease-in-out"
          href="https://codepen.io/NavaneethVijay"
        >Codepen</a>
      </li>
    </ul>
    <ul class="text-3xl md:text-5xl text-white font-medium my-8 flex flex-col items-left px-8">
      <li class="pr-8 mt-3 overflow-hidden text-lg opacity-25 font-normal">
        <svg
          class="feather feather-minus inline-block"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg> Content
      </li>
      <li v-for="(link, i) in menulinks" :key="i" class="pr-8 my-2 overflow-hidden">
        <router-link
          class="inline-block menulink transform transition-all duration-300 ease-in-out"
          :to="link.route"
        >
          {{ link.name }}
          <span
            class="opacity-25 transform scale-50 transition-all duration-300 ease-in-out"
          >
            <svg
              class="icon inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              height="48"
              width="48"
              stroke="currentColor"
              stroke-width="2"
              stroke-linejoin="round"
              stroke-linecap="round"
            >
              <path stroke="currentColor" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
            </svg>
          </span>
        </router-link>
      </li>
      <li class="mt-4 md:mt-20">
        <div>
          <h3 class="pr-8 mt-6 mb-4 overflow-hidden text-lg opacity-25 font-normal">Get in touch</h3>
          <a
            href="mailto:sainavaneeth@gmail.com"
            class="pr-8 mb-3 block overflow-hidden text-lg md:text-xl font-normal underline"
          >sainavaneeth@gmail.com</a>
        </div>
      </li>
      <li>
        <ul class="flex text-white text-lg font-mono my-8">
          <li class="pr-4 md:pr-8">
            <a
              class="hover:opacity-25 inline-block transition-all duration-300 ease-in-out"
              href="https://instagram.com/navneeth_vijay"
            >
              <span class="hidden">instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-instagram w-5 h-5 md:w-6 md:h-6"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </li>
          <li class="pr-4 md:pr-8">
            <a
              class="hover:opacity-25 inline-block transition-all duration-300 ease-in-out"
              href="https://github.com/NavaneethVijay"
            >
              <span class="hidden">github</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-github w-5 h-5 md:w-6 md:h-6"
              >
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                />
              </svg>
            </a>
          </li>
          <li class="pr-4 md:pr-8">
            <a
              class="hover:opacity-25 inline-block transition-all duration-300 ease-in-out"
              href="https://twitter.com/navaneeth_V29"
            >
              <span class="hidden">twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-twitter w-5 h-5 md:w-6 md:h-6"
              >
                <path
                  d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                />
              </svg>
            </a>
          </li>
          <li class="pr-4 md:pr-8">
            <a
              class="hover:opacity-25 inline-block transition-all duration-300 ease-in-out"
              href="https://codepen.io/NavaneethVijay"
            >
              <span class="hidden">codepen</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-codepen w-5 h-5 md:w-6 md:h-6"
              >
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                <line x1="12" y1="22" x2="12" y2="15.5" />
                <polyline points="22 8.5 12 15.5 2 8.5" />
                <polyline points="2 15.5 12 8.5 22 15.5" />
                <line x1="12" y1="2" x2="12" y2="8.5" />
              </svg>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "MenuList",
  data() {
    return {
      menulinks: [
        {
          route: "/",
          name: "Home",
        },
        {
          route: "/about",
          name: "About Me",
        },
        {
          route: "/blog",
          name: "Blog",
        },
        {
          route: "/projects",
          name: "Work & Projects",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.menulink {
  &:hover {
    transform: translateX(1rem);
    span {
      opacity: 1;
      transform: scale(2);
    }
  }
}
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
