<template>
  <div class="project-item px-6 h-full pb-10">
    <div>
      <div class="w-full h-full mt-4 md:mt-0 md:py-6">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(image, j) in project.images" :key="j">
            <g-image class="mx-auto rounded-lg" style="width: 100%" :src="image" />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="w-full">
        <div>
          <h3 class="text-xl sm:text-2xl font-medium overflow-hidden mt-2">
            <span>{{ project.title }}</span>
          </h3>
          <h3 class="text-md md:text-lg text-gray-800">{{ project.description }}</h3>
          <!-- <p class="font-mono mt-4">
              <span
                v-for="(tag, i) in project.tags"
                :key="i"
                class="border text-xs border-gray-600 text-gray-600 rounded py-1 px-2 mr-2"
                >{{ tag }}</span
              >
          </p>-->
          <div class="mt-4">
            <a
              :href="project.link"
              class="text-md font-medium text-gray-800 font-medium hover:underline"
            >
              {{ project.link }}
              <svg
                class="icon inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                height="25"
                width="25"
                stroke="currentColor"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
              >
                <path stroke="currentColor" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
export default {
  name: "ProjectItem",
  props: {
    project: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
        // Some Swiper option/callback...
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
};
</script>
