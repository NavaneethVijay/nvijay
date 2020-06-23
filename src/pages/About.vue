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
                  <h1 class="text-3xl sm:text-4xl font-semibold ">
                    Mutant Powers
                  </h1>
                  <div class="text-bg-accent"></div>
                </div>
              </div>
            </div>
            <h3 class="text-lg md:text-2xl text-gray-800 font-regular ">
              Experience and Skills
            </h3>
          </div>

          <div class="my-8">
            <h3 class="text-lg md:text-xl font-regular">
              I've been Working as a
              <span class="font-medium text-xl md:text-2xl">
                Magento Frontend Developer </span
              >in Codilar Technologies Pvt. Ltd in Bengaluru for 2 year and
              above with active contributations in development for more than 5
              projects.
            </h3>
            <h3 class="text-lg md:text-xl font-regular my-4">
              While I binge watch tv series and play
              <span class="font-medium text-xl md:text-2xl"> Dota2</span> on a
              'normal' day, I also learned latest tools and technologies which
              allowed me to accomplish myself as a web developer along with
              these following skills and values.
            </h3>
            <h3 class="text-lg md:text-xl font-regular">
              I’m a fast learner, able to pick up new skills and juggle
              different projects and roles with relative ease.
            </h3>
            <div class="mt-8">
              <a
                href="https://witless.netlify.app/"
                class="text-md font-medium text-gray-800 font-medium underline"
                >Download CV</a
              >
            </div>
          </div>
          <h3 class="text-3xl sm:text-4xl font-semibold font-serif mt-20">
            Main Skills and Values
          </h3>
          <div class="pb-10 flex flex-wrap">
            <div class="w-full md:w-1/2">
              <ul class="list-disc pl-4">
                <li class="py-5">
                  <div>
                    <h3 class="font-semibold text-xl md:text-2xl">
                      User experience design (ux)
                    </h3>
                    <h3 class="font-regular text-md md:text-lg text-gray-600">
                      Delight the user and make it work.
                    </h3>
                  </div>
                </li>
                <li class="py-5">
                  <div>
                    <h3 class="font-semibold text-xl md:text-2xl">
                      Web and user interface design
                    </h3>
                    <h3 class="font-regular text-md md:text-lg text-gray-600">
                      Websites, web experiences, ...
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/2">
              <ul class="list-disc pl-4">
                <li class="py-5">
                  <div>
                    <h3 class="font-semibold text-xl md:text-2xl">
                      Good design is good business
                    </h3>
                    <h3 class="font-regular text-md md:text-lg text-gray-600">
                      It’s not only about beauty, it has to work.
                    </h3>
                  </div>
                </li>
                <li class="py-5">
                  <div>
                    <h3 class="font-semibold text-xl md:text-2xl">
                      Keep it simple
                    </h3>
                    <h3 class="font-regular text-md md:text-lg text-gray-600">
                      Why make it complicated?
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="overflow-hidden hidden relative mb-20">
            <div class="bg-purple-100 container mx-auto rounded-lg p-6">
              <div class="w-full">
                <div class="md:pb-5">
                  <div class="flex items-center pt-10">
                    <div class="">
                      <h3 class="text-2xl sm:text-4xl font-semibold ">
                        Arsenal kit
                      </h3>
                    </div>
                    <div class="w-32 headling-line hero-side-bg mx-4 "></div>
                  </div>
                  <ul class="mt-10 text-xl font-medium flex flex-wrap">
                    <li class="pr-10 mb-6">HTML</li>
                    <li class="pr-10 mb-6">CSS</li>
                    <li class="pr-10 mb-6">CSS</li>
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
    title: 'Naveneeth Vijay | About',
  },
}
</script>
