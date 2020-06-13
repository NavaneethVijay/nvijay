<template>
  <Layout>
    <div
      class="flex min-h-screen items-center justify-left overflow-hidden relative py-10 p-6"
    >
      <div class="container mx-auto mt-10  relative">
        <div
          class="absolute text-gray-600 top-0 left-0 text-sm italic font-mono"
        >
          <span v-text="`&lt;html&gt;`"></span> <br />
          <span class="pl-6" v-text="`&lt;body&gt;`"> </span>
        </div>
        <div>
          <div class="py-10">
            <div class="flex items-center md:pt-10">
              <div class="">
                <div class="bg-text-wrapper relative">
                  <h1 class="text-3xl sm:text-4xl font-semibold ">
                    Accomplished Projects
                  </h1>
                  <div class="text-bg-accent"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="pb-20">
            <div class="project-wrapper my-10">
              <div class="pb-5 md:py-10">
                <h3 class="text-2xl text-gray-800 font-semibold ">
                  Open source projects
                </h3>
              </div>
              <div
                class="project-item flex flex-wrap items-center bg-orange-100 p-6 rounded-lg"
              >
                <div class="w-full md:w-1/2">
                  <h3 class="text-2xl sm:text-4xl font-semibold ">
                    Witless Todo
                  </h3>
                  <h3 class=" text-lg md:text-xl font-regular leading-snug">
                    Whether you're planning a holiday, creating a shopping list
                    or managing multiple work projects.
                  </h3>
                  <p class="mt-4 font-mono">
                    Built using <span class="underline">NuxtJs</span>, Firebase
                    auth, Firestore
                  </p>
                  <div class="mt-8">
                    <a
                      href="https://witless.netlify.app/"
                      class="text-md font-medium text-gray-800 font-medium hover:underline"
                      >https://witless.netlify.app/ →</a
                    >
                  </div>
                </div>
                <div class="w-full md:w-1/2 p-6">
                  <img
                    class="mx-auto"
                    style="max-width: 500px; width: 100%"
                    src="/witless.png"
                  />
                </div>
              </div>
            </div>
            <div class="project-wrapper my-10">
              <div
                class="project-item flex flex-wrap items-center bg-teal-100 p-6 rounded-lg"
              >
                <div class="w-full md:w-1/2">
                  <h3 class="text-2xl sm:text-4xl font-semibold ">
                    Shordyurl
                  </h3>
                  <h3 class=" text-lg md:text-xl font-regular leading-snug">
                    Simple and fast URL shortener!
                  </h3>
                  <p class="mt-4 font-mono">
                    Built using MongoDb, Expressjs, TailwindCss
                  </p>
                  <div class="mt-8">
                    <a
                      href="https://shordyurl.herokuapp.com/"
                      class="text-md font-medium text-gray-800 font-medium hover:underline"
                      >https://shordyurl.herokuapp.com/ →</a
                    >
                  </div>
                </div>
                <div class="w-full md:w-1/2 p-6">
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
        <div
          class="absolute text-gray-600 bottom-0 left-0 text-sm italic font-mono"
        >
          <span class="pl-6" v-text="`&lt;/body&gt;`"> </span> <br />
          <span v-text="`&lt;/html&gt;`"></span>
        </div>
      </div>
    </div>
  </Layout>
</template>
