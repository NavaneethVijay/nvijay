<template>
  <Layout>
    <div
      class="flex items-start  latest-work-section overflow-hidden py-10 px-6  min-h-screen relative"
    >
      <div class="hidden md:block powers-img-backdrop-left"></div>
      <div
        style="z-index: 1;"
        class="container mx-auto bg-white mt-10 relative"
      >
        <div
          class="absolute text-gray-600 top-0 left-0 text-base font-htmlCodes"
        >
          <span v-text="`&lt;html&gt;`"></span> <br />
          <span class="pl-6" v-text="`&lt;body&gt;`"> </span>
        </div>
        <div class="my-10">
          <div class="py-5 md:py-10">
            <div class="flex items-center md:pt-10">
              <div class="">
                <div class="bg-text-wrapper relative">
                  <h1
                    class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide"
                  >
                    Mutant Powers
                  </h1>
                  <div class="text-bg-accent"></div>
                </div>
              </div>
            </div>
            <h3 class="text-lg md:text-2xl mt-2 text-gray-800 font-regular">
              Experience and Skills
            </h3>
          </div>

          <div class="mb-8 mt-5">
            <div class="flex flex-wrap-reverse items-center">
              

              <div class="w-full md:w-3/5">
                <h3 class="text-md md:text-2xl font-regular my-4">
                  I’m Navaneeth Vijay — a full stack web developer based in
                  Bengaluru. I’ve been developing web applications for more than
                  3 years.
                </h3>
                <h3 class="text-md md:text-2xl font-regular my-4">
                  While I binge watch tv series and play
                  <span class="font-medium text-lg md:text-xl"> Dota2</span> on
                  a 'normal' day, I also learn latest tools and technologies
                  which allowed me to accomplish myself as a developer.
                </h3>
                <div>
                  <ul class="mt-8">
                    <li class="mb-4">
                      <div>
                        <p
                          class="text-gray-700 text-base flex items-center font-light"
                        >
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
                            <polygon
                              points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"
                            ></polygon>
                            <line x1="8" y1="2" x2="8" y2="18"></line>
                            <line x1="16" y1="6" x2="16" y2="22"></line></svg
                          ><span class="ml-2">Curently Living in</span>
                        </p>
                        <p>Bengaluru, India</p>
                      </div>
                    </li>
                    <li class="mb-y">
                      <div>
                        <p
                          class="text-gray-700 text-base flex items-center font-light"
                        >
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
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                            <path
                              d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                            ></path>
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

            <!-- <div class="mt-8">
              <a
                href="https://witless.netlify.app/"
                class="text-xl font-medium text-gray-800 font-bold underline"
                >Download CV</a
              >
            </div>
            <div>
              <g-link
                to="/contact"
                class="mt-5 shadow bg-primary hover:bg-purple-900 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-10 rounded"
                type="button"
              >
                Say Hi !
              </g-link>
            </div> -->
          </div>

          <div class="mt-20">
            <div class="pb-5 md:px-0 md:py-10">
              <h3 class="text-2xl md:text-4xl font-semibold mb-4 ">
                Work Experience
              </h3>
              <div>
                <h3 class="text-md md:text-2xl font-regular">
                  I've been Working as a
                  <span class="font-medium text-md md:text-2xl">
                    Magento Frontend Developer </span
                  >in Codilar Technologies Pvt. Ltd in Bengaluru for 2 year and
                  above with active contributations in development of more than
                  five
                  <span class="text-primary font-medium">e-commerce</span>
                  projects.
                </h3>
              </div>
            </div>
            <div>
              <div class="md:pr-6 py-5 md:py-10 rounded ">
                <div class="flex items-center">
                  <img
                    class="w-12 h-12 cover"
                    src="https://pbs.twimg.com/profile_images/822422940377554944/Hk7sgQ96_400x400.jpg"
                  />
                  <div class="pl-4 relative">
                    <h5 class="font-medium text-base md:text-xl">
                      Magento Frontend Developer
                    </h5>
                    <p class="text-sm md:text-base">
                      Codilar Technologies Pvt. Ltd
                    </p>
                    <p class="text-sm text-gray-700">June 2018 - Current</p>
                    <div class="absolute bottom-0 right-0 opacity-25">
                      <span class="font-bold text-3xl font-serif opacity-25"
                        >02</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="md:pr-6 py-5 md:py-10 rounded ">
                <div class="flex items-center">
                  <div class="w-16 h-16 cover bg-gray-200 rounded-full" />
                  <div class="pl-4 relative">
                    <h5 class="font-medium text-lg md:text-xl">
                      Freelance Graphic Designer
                    </h5>
                    <p class="text-sm md:text-base">
                      Self Employed
                    </p>
                    <p class="text-sm text-gray-700">Feb 2017 - June 2018</p>
                    <div class="absolute bottom-0 right-0 opacity-25">
                      <span class="font-bold text-3xl font-serif opacity-25"
                        >01</span
                      >
                    </div>
                  </div>
                </div>
              </div> -->
            </div>
          </div>

          <div class="mt-10 md:mt-0">
            <div class="md:px-0 md:pt-10">
              <h3 class="text-2xl md:text-4xl font-semibold mb-4 ">
                Education
              </h3>
            </div>
            <div>
              <div class="md:pr-6 pb-2 md:pb-5 rounded ">
                <div class="flex items-start">
                  <div class="relative">
                    <h5 class="font-medium text-base md:text-xl">
                      B.Tech in Engineering (ISE)
                    </h5>
                    <p class="text-sm md:text-base">
                      BNM Institute of Technology
                    </p>
                    <p class="text-sm text-gray-700">2014 - 2018</p>
                    <div class="absolute bottom-0 right-0 opacity-25">
                      <span class="font-bold text-3xl font-serif opacity-25"
                        >04</span
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div class="md:pr-6 py-5 md:py-10 rounded ">
                <div class="flex items-start">
                  <div class="relative">
                    <h5 class="font-medium text-base md:text-xl">
                      Pre University of Karnataka
                    </h5>
                    <p class="text-sm md:text-base">
                      Christ University, Bengaluru
                    </p>
                    <p class="text-sm text-gray-700">2012 - 2014</p>
                    <div class="absolute bottom-0 right-0 opacity-25">
                      <span class="font-bold text-3xl font-serif opacity-25"
                        >02</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="my-20 text-center relative">
            <div class="powers-img-backdrop-left"></div>
            <h3 class="text-3xl md:text-6xl mb-5 md:px-4 font-bold">
              That’s it! Now it’s <br />
              your turn to say hi.
            </h3>
            <p class="text-lg md:text-3xl text-regular text-gray-800 px-4">
              Do you want to work together or talk about an idea? Let's get in
              touch <br />
              then. Just drop me a line!
            </p>
            <div class="mt-5 md:mt-10">
              <span
                class="font-medium py-1 border-gray-900 border-b text-base text-lg"
                ><a href="mailto:sainavaneeth@gmail.com">
                  sainavaneeth@gmail.com</a
                ></span
              >
            </div>
          </div>
        </div>
        <div
          class="absolute text-gray-600 bottom-0 left-0 text-base font-htmlCodes"
        >
          <span class="pl-6" v-text="`&lt;/body&gt;`"> </span> <br />
          <span v-text="`&lt;/html&gt;`"></span>
        </div>
      </div>

      <div class="hidden md:block  powers-img-backdrop-right"></div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Navaneeth Vijay | About'
  }
}
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
.hero-img-about{
  max-width: 70%;
}
</style>
