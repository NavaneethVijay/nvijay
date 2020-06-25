<template>
  <div>
    <div
      :class="project.bgColor"
      class="full-width project-item  px-6 md:py-32 py-20"
    >
      <div class="container mx-auto flex flex-wrap items-center">
        <div class="w-full md:w-1/4">
          <div class="text-center">
            <h3 class="text-2xl sm:text-4xl font-bold overflow-hidden">
              <span> {{ project.title }}</span>
            </h3>
            <h3 class="mt-6 text-lg md:text-xl font-regular leading-snug">
              {{ project.description }}
            </h3>
            <p class="font-mono mt-4">
              <span
                v-for="(tag, i) in project.tags"
                :key="i"
                class="border text-xs border-black rounded py-1 px-2 mr-2"
                >{{ tag }}</span
              >
            </p>
            <div class="mt-8">
              <a
                :href="project.link"
                class="text-md font-medium text-gray-800 font-medium hover:underline"
                >{{ project.link }} →</a
              >
            </div>
          </div>
        </div>
        <div class="w-full md:w-3/4 mt-20 md:mt-0 md:p-6">
          <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(image, j) in project.images" :key="j">
              <img class="mx-auto" style="width: 100%" :src="image" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
export default {
  name: 'ProjectItem',
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
          el: '.swiper-pagination',
          dynamicBullets: true,
        },
        // Some Swiper option/callback...
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
}
</script>
