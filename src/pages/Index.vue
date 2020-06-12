<template>
  <Layout>
    <div
      class="flex min-h-screen items-center justify-left overflow-hidden p-6 relative"
    >
      <div class="container mx-auto">
        <div class="flex flex-wrap md:flex-no-wrap items-stretch">
          <div class="w-full md:w-3/5 relative h-inherit py-20 md:p-0">
            <div class="absolute text-gray-600 top-0 left-0 text-sm">
              <span v-text="getHtml"> </span> <br />
              <span class="pl-6" v-text="getBody"> </span>
            </div>
            <div class="w-fll md:w-3/4 flex flex-col h-full justify-center">
              <h1 class=" text-3xl sm:text-5xl font-semibold ">
                Navaneeth Vijay
              </h1>
              <div class="bg-text-wrapper relative">
                <h1 class=" text-3xl sm:text-5xl font-semibold ">
                  Full Stack Web Developer
                </h1>
                <div class="text-bg-accent"></div>
              </div>
              <div class="mt-4">
                <h3 class=" text-lg md:text-2xl font-regular leading-snug">
                  Hi, my name is Navaneeth Vijay and I'm a full stack web
                  developer based on Bengaluru. I build interactive websites
                  that run across platforms & devices.
                </h3>
              </div>
            </div>
            <div class="absolute text-gray-600 bottom-0 left-0 text-sm">
              <span class="pl-6" v-text="getBody"> </span> <br />
              <span v-text="getHtml"> </span>
            </div>
          </div>
          <div class="w-full md:w-2/5">
            <div class="relative">
              <img
                src="/navaneeth.jpeg"
                class="hero-img"
                style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
              />
              <div
                class="hero-img-backdrop"
                style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 0.5;"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="hidden md:block  hero-side-bg w-1/3 h-full absolute right-0 top-0"
      ></div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Navaneeth | Web developer',
  },
  computed: {
    getHtml() {
      return '<html>'
    },
    getBody() {
      return '<body>'
    },
  },
}
</script>
<style lang="scss">
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
</style>
