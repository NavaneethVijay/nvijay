<template>
  <Layout>
    <div
      class="flex min-h-screen items-center justify-left overflow-hidden relative p-4"
    >
      <div class="container p-4 md:p-0 mx-auto relative">
        <div class="absolute text-gray-600 top-0 left-0 text-sm">
          <span v-text="getHtml"> </span> <br />
          <span class="pl-6" v-text="getBody"> </span>
        </div>
        <div class="flex pb-20 flex-wrap md:flex-no-wrap items-stretch">
          <div class="w-full md:w-3/5 relative h-inherit md:pt-20 pb-10 md:p-0">
            <div
              class="w-fll md:w-3/4 flex flex-col h-full justify-center pt-10"
            >
              <img src="/waving.gif" style="opacity: 1;" class="image w-12" />
              <h1 class=" text-3xl sm:text-5xl font-bold text-primary">
                Hey There!
              </h1>
              <h1 class=" text-3xl sm:text-5xl font-semibold ">
                I'm Navaneeth Vijay,
              </h1>
              <div class="bg-text-wrapper relative">
                <h1 class=" text-3xl sm:text-5xl font-semibold ">
                  Full Stack Web Developer
                </h1>
                <div class="text-bg-accent"></div>
              </div>
              <div class="my-12">
                <h3 class=" text-lg md:text-2xl font-regular leading-snug">
                  I'm a full stack web developer based on Bengaluru. I build
                  interactive websites that run across platforms & devices but
                  enough about me, how can I help you?
                </h3>
                <div class="mt-8">
                  <span class="font-medium py-1 border-gray-900 border-b-2 "
                    ><a href="mailto:sainavaneeth@gmail.com"
                      >sainavaneeth@gmail.com</a
                    ></span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-2/5 pb-10">
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
          <div class="absolute text-gray-600 bottom-0 left-0 text-sm">
            <span class="pl-6" v-text="getBodyClsoe"> </span> <br />
            <span v-text="getHtmlClose"> </span>
          </div>
        </div>
      </div>
      <div
        class="hidden md:block  hero-side-bg w-1/3 h-full absolute right-0 top-0"
      ></div>
    </div>
    <div class="flex items-start latest-work-section overflow-hidden  relative">
      <div class="powers-img-backdrop-left"></div>
      <div style="z-index: 1;" class="container mx-auto bg-white px-4 py-10">
        <div class="py-10">
          <div class="flex items-center pt-10">
            <div class="">
              <h1 class="text-3xl sm:text-4xl font-semibold ">
                Mutant Powers
              </h1>
            </div>
            <div class="w-32 headling-line hero-side-bg mx-4 "></div>
          </div>
          <h3 class="text-md md:text-2xl text-gray-800 font-regular ">
            Experience and Skills
          </h3>
        </div>
        <div class="py-10 flex flex-wrap">
          <div class="w-full md:w-1/2">
            <ul class="text-xl ">
              <li class="py-5">
                <div>
                  <h3 class="font-semibold text-xl md:text-2xl">
                    User experience design (ux)
                  </h3>
                  <h3 class="font-regular text-lg text-gray-600">
                    Delight the user and make it work.
                  </h3>
                </div>
              </li>
              <li class="py-5">
                <div>
                  <h3 class="font-semibold text-xl md:text-2xl">
                    Web and user interface design
                  </h3>
                  <h3 class="font-regular text-lg text-gray-600">
                    Websites, web experiences, ...
                  </h3>
                </div>
              </li>
            </ul>
          </div>
          <div class="w-full md:w-1/2">
            <ul class="text-xl ">
              <li class="py-5">
                <div>
                  <h3 class="font-semibold text-xl md:text-2xl">
                    Good design is good business
                  </h3>
                  <h3 class="font-regular text-lg text-gray-600">
                    It’s not only about beauty, it has to work.
                  </h3>
                </div>
              </li>
              <li class="py-5">
                <div>
                  <h3 class="font-semibold text-xl md:text-2xl">
                    Keep it simple
                  </h3>
                  <h3 class="font-regular text-lg text-gray-600">
                    Why make it complicated?
                  </h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="powers-img-backdrop-right"></div>
    </div>
    <div class="overflow-hidden relative">
      <div class="bg-purple-100 container mx-auto rounded-lg p-6">
        <div class="w-full">
          <div class="pb-5">
            <div class="flex items-center pt-10">
              <div class="">
                <h3 class="text-2xl sm:text-4xl font-semibold ">
                  My Arsenal kit
                </h3>
              </div>
              <div class="w-32 headling-line hero-side-bg mx-4 "></div>
            </div>
            <ul class="mt-10 text-xl font-medium flex flex-wrap">
              <li class="pr-10 mb-6">Vue.js</li>
              <li class="pr-10 mb-6 ">Typescript</li>
              <li class="pr-10 mb-6 ">Magento 2</li>
              <li class="pr-10 mb-6">Laravel</li>
              <li class="pr-10 mb-6">MySQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex min-h-screen items-center justify-left overflow-hidden relative p-4"
    >
      <div class="container mx-auto">
        <div>
          <div class="py-10">
            <div class="flex items-center pt-10">
              <div class="">
                <h1 class="text-2xl sm:text-4xl font-semibold ">
                  My Work
                </h1>
              </div>
              <div class="w-32 headling-line hero-side-bg mx-4 "></div>
            </div>
            <h3 class="text-md md:text-2xl text-gray-800 font-regular ">
              Open source enthusiast
            </h3>
          </div>
          <div>
            <div class="project-wrapper">
              <div
                class="project-item flex flex-wrap items-center bg-red-100 p-6 rounded-lg"
              >
                <div class="w-full md:w-1/4">
                  <h3 class="text-2xl sm:text-4xl font-semibold ">
                    Witless
                  </h3>
                  <h3 class=" text-lg md:text-xl font-regular leading-snug">
                    Whether you're planning a holiday, creating a shopping list
                    or managing multiple work projects.
                  </h3>
                  <div class="mt-8">
                    <a
                      href="https://witless.netlify.app/"
                      class="text-md font-medium text-gray-800 font-medium hover:underline"
                      >Visit website →</a
                    >
                  </div>
                </div>
                <div class="w-full md:w-3/4 p-6">
                  <img
                    class="mx-auto"
                    style="max-width: 500px; width: 100%"
                    src="/witless.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    getHtmlClose() {
      return '</html>'
    },
    getBodyClsoe() {
      return '</body>'
    },
  },
}
</script>
<style lang="scss">
.latest-work-section {
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
