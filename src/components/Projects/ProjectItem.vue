<template>
  <div>
    <div
      :class="project.bgColor"
      class="project-item flex flex-wrap items-center p-6 "
    >
      <div class="w-full md:w-1/4">
        <div class="text-center">
          <h3 class="text-2xl sm:text-4xl font-bold ">
            {{ project.title }}
          </h3>
          <h3 class="my-6 text-lg md:text-xl font-regular leading-snug">
            {{ project.description }}
          </h3>
          <p class="font-mono">
            <span
              v-for="(tag, i) in project.tags"
              :key="i"
              class="underline px-2"
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
      <div class="w-full md:w-3/4 p-6">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide>
            <img
              class="mx-auto"
              style="width: 90%"
              src="https://assets.website-files.com/5ed35623a0977f6f1d47e8d9/5ed3c975ec5df2ed52f9c094_gallery-image-01.jpg"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="mx-auto"
              style=" width: 90%"
              src="https://assets.website-files.com/5ed35623a0977f6f1d47e8d9/5ed3c9947eda2a2d7ecdd362_gallery-image-04.jpg"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="mx-auto"
              style=" width: 90%"
              src="https://assets.website-files.com/5ed35623a0977f6f1d47e8d9/5ed3c33ba553da8565e5cbbf_gallery-image-05.jpg"
            />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
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
