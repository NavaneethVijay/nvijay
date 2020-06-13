<template>
  <Layout>
    <div
      class="flex min-h-screen items-center justify-left overflow-hidden relative p-4"
    >
      <div class="container p-4 md:p-0 mx-auto relative mt-20">
        <div
          class="absolute text-gray-600 top-0 left-0 text-sm italic font-mono"
        >
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
                <h3 class=" text-lg md:text-2xl font-regular leading-relaxed">
                  I'm a full stack web developer based in Bengaluru. I build
                  interactive websites that run across platforms & devices but
                  enough about me, how can I help you?
                </h3>
                <ul class="flex text-gray-900 text-lg font-mono my-8">
                  <li class="pr-8"><a href="#">Instagram</a></li>
                  <li class="pr-8"><a href="#">Github</a></li>
                  <li class="pr-8"><a href="#">Twitter</a></li>
                </ul>
                <div>
                  <span class="font-medium py-1 border-gray-900 border-b-2 "
                    ><a href="mailto:sainavaneeth@gmail.com">
                      sainavaneeth@gmail.com</a
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
          <div
            class="absolute text-gray-600 bottom-0 left-0 text-sm italic font-mono"
          >
            <span class="pl-6" v-text="getBodyClsoe"> </span> <br />
            <span v-text="getHtmlClose"> </span>
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
    getHtmlClose() {
      return '</html>'
    },
    getBodyClsoe() {
      return '</body>'
    },
  },
}
</script>
