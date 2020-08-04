<template>
  <Layout>
    <div
      class="flex items-start latest-work-section overflow-hidden py-10 px-6 min-h-screen relative"
    >
      <div class="hidden md:block powers-img-backdrop-left"></div>
      <div style="z-index: 1;" class="container mx-auto bg-white mt-10 relative">
        <div class="absolute text-gray-600 top-0 left-0 text-base font-htmlCodes">
          <span v-text="`&lt;html&gt;`"></span>
          <br />
          <span class="pl-6" v-text="`&lt;body&gt;`"></span>
        </div>
        <div class="my-10">
          <div class="py-5 md:py-10">
            <div class="flex items-center md:pt-10">
              <div class>
                <div class="bg-text-wrapper relative">
                  <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">Mutant Powers</h1>
                  <div class="text-bg-accent"></div>
                </div>
              </div>
            </div>
            <h3 class="text-lg md:text-2xl mt-2 text-gray-800 font-regular">Experience and Skills</h3>
          </div>

          <div class="mb-8 mt-5">
            <div class="flex flex-wrap-reverse items-end">
              <div class="w-full md:w-3/5">
                <h3 class="text-base md:text-xl font-regular my-4">
                  I’m Navaneeth Vijay — a full stack web developer based in
                  Bengaluru working at
                  <a
                    target="_blank"
                    class="text-primary underline pr-2"
                    href="https://codilar.com/"
                  >Codilar Technologies Pvt. Ltd</a>in Bengaluru. I’ve been developing web applications for more than
                  3 years.
                </h3>
                <h3 class="text-md md:text-xl font-regular my-4">
                  While I binge watch tv series and play
                  <span
                    class="font-medium text-lg md:text-xl"
                  >Dota2</span> on
                  a 'normal' day, I also learn latest tools and technologies
                  which allowed me to accomplish myself as a developer.
                </h3>

                <h3
                  class="text-md md:text-xl font-regular my-4"
                >Also I have a beautiful German shepherd named Bailey 🐕‍🦺.</h3>
                <div>
                  <ul class="mt-8">
                    <li class="mb-4">
                      <div>
                        <p class="text-gray-700 text-base flex items-center font-light">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-map w-4 h-4"
                          >
                            <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                            <line x1="8" y1="2" x2="8" y2="18" />
                            <line x1="16" y1="6" x2="16" y2="22" />
                          </svg>
                          <span class="ml-2">Curently Living in</span>
                        </p>
                        <p>Bengaluru, India</p>
                      </div>
                    </li>
                    <li class="mb-y">
                      <div>
                        <p class="text-gray-700 text-base flex items-center font-light">
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
                            class="feather feather-book w-4 h-4"
                          >
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                            <path
                              d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                            />
                          </svg>

                          <span class="ml-2">Favorite techstack</span>
                        </p>
                        <p>Vuejs, tailwindcss, Laravel</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="w-full md:w-2/5 md:pb-10">
                <div class="relative">
                  <img src="/navaneeth.jpg" class="hero-img-about md:mx-auto" />
                </div>
              </div>
            </div>
          </div>

          <div class="my-20 text-center relative">
            <div class="powers-img-backdrop-left"></div>
            <h3 class="text-3xl md:text-6xl mb-5 md:px-4 font-bold">
              That’s it! Now it’s
              <br />your turn to say hi.
            </h3>
            <p class="text-lg md:text-3xl text-regular text-gray-800 px-4">
              Do you want to work together or talk about an idea? Let's get in
              touch
              <br />then. Just drop me a line!
            </p>
            <div class="mt-5 md:mt-10">
              <span class="font-medium py-1 border-gray-900 border-b text-base text-lg">
                <a href="mailto:sainavaneeth@gmail.com">sainavaneeth@gmail.com</a>
              </span>
            </div>
          </div>
        </div>
        <div class="absolute text-gray-600 bottom-0 left-0 text-base font-htmlCodes">
          <span class="pl-6" v-text="`&lt;/body&gt;`"></span>
          <br />
          <span v-text="`&lt;/html&gt;`"></span>
        </div>
      </div>

      <div class="hidden md:block powers-img-backdrop-right"></div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Navaneeth Vijay | About",
  },
};
</script>
<style lang="scss">
.skills-box {
  width: 120px;
  height: 120px;
  @media (max-width: 1024px) {
    width: calc(25% - 16px);
    height: 80px;
    font-size: 12px;
    .magento {
      @media (max-width: 1024px) {
        width: 30%;
      }
    }
  }
  svg {
    width: 50%;
    @media (max-width: 1024px) {
      width: 40%;
    }
    &.nodejs {
      width: 80%;
    }
  }
}
.skills-box .Laravel {
  fill: #f89593;
}
.skills-box .PHP {
  fill: #a3a8c9;
}
.skills-box .Sass {
  fill: #da8eb6;
}
.hero-img-about {
  max-width: 70%;
}
</style>
