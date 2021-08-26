<template>
  <div class="h-11/12 flex items-center md:pt-20">
    <div class="w-11/12 md:w-10/12 mx-auto">
      <div
        class="
          absolute
          text-gray-600
          top-0
          md:top-20
          left-0
          text-base
          font-htmlCodes
        "
      >
        <span v-text="getHtml"></span>
        <br />
        <span class="pl-6" v-text="getBody"></span>
      </div>
      <div
        class="flex pb-20 flex-wrap md:flex-no-wrap items-stretch pt-10 md:pt-0"
      >
        <div class="w-full relative h-inherit md:pt-20 md:pb-10 md:p-0">
          <div
            class="
              w-full
              md:w-3/4
              flex flex-col
              h-full
              justify-center
              mt-4
              md:mt-0
            "
          >
            <div class="w-12 h-10">
              <img
                src="/waving.gif"
                alt="hello"
                style="opacity: 1"
                class="image w-12"
              />
            </div>
            <h1
              class="
                text-2xl
                md:text-3xl
                text-gray-800
                font-medium
                leading-10
                tracking-wide
                md:mt-4
                md:w-3/4
              "
            >
              Hey there!,
              <div class="bg-text-wrapper inline-block relative">
                <span> I'm Navaneeth Vijay </span>
                <div class="text-bg-accent"></div>
              </div>
            </h1>
            <div class="mb-6 mt-2 md:mt-0">
              <h2 class="text-4xl sm:text-6xl font-bold md:flex md:flex-wrap">
                <span class="pr-2">I solve</span>
                <span class="pr-2 md:px-2 lowercase text-primary">
                  your
                  <!-- <vue-typed-js
                          class="flex"
                          @onStringTyped="handleTyped"
                          :showCursor="true"
                          :startDelay="200"
                          :backSpeed="150"
                          :backDelay="800"
                          :typeSpeed="300"
                          :strings="typedTexts"
                        >
                          <h1 class="typing"></h1>
                        </vue-typed-js> -->
                  <span class="text-black">problems</span>
                </span>
              </h2>
            </div>
            <h3
              class="
                text-xl
                md:text-2xl
                text-gray-800
                leading-8
                md:leading-10
                md:tracking-wide
                md:mt-4
                md:w-3/4
              "
            >
              <span class="text-gray-900">Full Stack Web Developer</span>, based
              in Bengaluru. <br />
              <span class="inline-block mt-3"
                >I specialize in UI/UX Design, Responsive Web Design, and build
                interactive websites that run across platforms.</span
              >
            </h3>

            <div class="mt-8 md:mt-10">
              <span
                class="
                  font-medium
                  py-1
                  border-gray-900 border-b
                  text-base
                  hover:text-primary
                  md:text-lg
                "
              >
                <a href="mailto:sainavaneeth@gmail.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-send inline-block mr-2"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  sainavaneeth@gmail.com
                </a>
              </span>
            </div>

            <ul class="flex text-gray-900 text-lg font-mono my-8">
              <li class="pr-4 md:pr-8">
                <a
                  class="hover:text-primary"
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
                  class="hover:text-primary"
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
                  class="hover:text-primary"
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
                  class="hover:text-primary"
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
                    <polygon
                      points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"
                    />
                    <line x1="12" y1="22" x2="12" y2="15.5" />
                    <polyline points="22 8.5 12 15.5 2 8.5" />
                    <polyline points="2 15.5 12 8.5 22 15.5" />
                    <line x1="12" y1="2" x2="12" y2="8.5" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="
            absolute
            text-gray-600
            bottom-0
            left-0
            text-base
            font-htmlCodes
          "
        >
          <span class="pl-6" v-text="getBodyClsoe"></span>
          <br />
          <span v-text="getHtmlClose"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getHtml() {
      return "<html>";
    },
    getBody() {
      return "<body>";
    },
    getHtmlClose() {
      return "</html>";
    },
    getBodyClsoe() {
      return "</body>";
    },
  },
};
</script>

<style>
</style>