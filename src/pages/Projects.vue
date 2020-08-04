<template>
  <Layout>
    <div class="flex min-h-screen items-center justify-left overflow-hidden relative py-10">
      <div class="container mx-auto mt-10 relative">
        <div class="absolute text-gray-600 top-0 left-0 text-base font-htmlCodes pl-4">
          <span v-text="`&lt;html&gt;`"></span>
          <br />
          <span class="pl-6" v-text="`&lt;body&gt;`"></span>
        </div>
        <div class="py-8">
          <div class="pt-5 pb-5 md:py-10 px-4 relative">
            <div class="hidden md:block powers-img-backdrop-left"></div>
            <div class="flex items-center md:pt-10">
              <div>
                <div class="bg-text-wrapper relative">
                  <h1
                    class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide"
                  >Successful Missions</h1>
                  <div class="text-bg-accent"></div>
                </div>
                <h3
                  class="text-lg md:text-2xl mt-2 text-gray-800 font-regular"
                >Open Source and client projects</h3>
              </div>
            </div>
          </div>
          <div class="pb-20">
            <div class="project-wrapper my-10">
              <div class="px-6 flex items-center">
                <div class="uppercase text-sm text-gray-600 mr-4">self-made work</div>
                <div class="border border-gray-400 w-full flex-1"></div>
              </div>
              <div class="flex flex-wrap">
                <div class="w-full md:w-1/2" v-for="(project, index) in projects" :key="index">
                  <ProjectItem :project="project" />
                </div>
              </div>

              <div>
                <div class="pt-10 md:pt-20 pb-10 px-4">
                  <h3 class="flex items-center text-xl sm:text-2xl font-medium">
                    Open Source
                    <div class="flex ml3 pulse">
                      <svg
                        class="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="red"
                        height="30"
                        width="30"
                        stroke="currentColor"
                        stroke-width="0"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      >
                        <path
                          stroke="currentColor"
                          d="M5.095 4.9c2.076-2.026 4.415-.199 5.743 1.244.52.565 1.546.51 2.029-.087 1.155-1.427 3.27-3.143 5.862-1.156C23.834 8.814 11.912 20 11.912 20S.486 9.401 5.095 4.9z"
                        />
                      </svg>
                    </div>
                  </h3>
                  <h4
                    class="text-md md:text-lg pl-2 md:pl-0 mt-2 text-gray-800 font-regular w-full md:w-1/2"
                  >We all love open source. Giving back to the community in any way is rewarding. Here are a couple of useful tools I've built and released</h4>
                </div>
                <div class="flex flex-wrap px-4 md:px-0">
                  <div class="w-full md:w-1/3">
                    <div
                      class="p-6 mx-2 md:mr-2 mb-2 border rounded-lg md:h-full transition duration-500 ease-in-out hover:shadow-md relative"
                    >
                      <div class="absolute top-0 right-0 opacity-25 pt-10 pr-10">
                        <Github class="w-20 h-20 opacity-25" />
                      </div>
                      <h3 class="font-bold text-lg">Full Array Search</h3>
                      <p class="text-lg mt-2 leading-relaxed">
                        Javascript utility that allows for searching strings in
                        an array based on indexing
                      </p>
                      <a
                        href="https://github.com/NavaneethVijay/fullarray-search"
                        class="text-base font-medium text-gray-800 hover:underline mt-6 block"
                      >
                        Explore on GitHub
                        <svg
                          class="icon inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          height="25"
                          width="25"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        >
                          <path stroke="currentColor" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="w-full md:w-1/3">
                    <div
                      class="p-6 mx-2 md:mr-2 mb-2 border rounded-lg md:h-full transition duration-500 ease-in-out hover:shadow-md relative"
                    >
                      <div class="absolute top-0 right-0 opacity-25 pt-10 pr-10">
                        <Github class="w-20 h-20 opacity-25" />
                      </div>
                      <h3 class="font-bold text-lg">Frozen Cookies</h3>
                      <p class="text-lg mt-2 leading-relaxed">
                        Simple Javascript API for handling browser cookies
                        <a
                          href="https://github.com/NavaneethVijay/frozen-cookies"
                          class="text-base font-medium text-gray-800 hover:underline mt-6 block"
                        >
                          Explore on GitHub
                          <svg
                            class="icon inline-block"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            height="25"
                            width="25"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                          >
                            <path stroke="currentColor" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
                          </svg>
                        </a>
                      </p>
                    </div>
                  </div>
                  <div class="w-full md:w-1/3">
                    <div
                      class="p-6 mx-2 md:mr-2 mb-2 border rounded-lg md:h-full transition duration-500 ease-in-out hover:shadow-md relative"
                    >
                      <div class="absolute top-0 right-0 opacity-25 pt-10 pr-10">
                        <Github class="w-20 h-20 opacity-25" />
                      </div>
                      <h3 class="font-bold text-lg">Voute Maker</h3>
                      <p
                        class="text-lg mt-2 leading-relaxed"
                      >YourQuote like image generator using nodejs</p>
                      <a
                        href="https://github.com/NavaneethVijay/fullarray-search"
                        class="text-base font-medium text-gray-800 hover:underline mt-6 block"
                      >
                        Explore on GitHub
                        <svg
                          class="icon inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          height="25"
                          width="25"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        >
                          <path stroke="currentColor" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute text-gray-600 bottom-0 left-0 text-base font-htmlCodes pl-4">
          <span class="pl-6" v-text="`&lt;/body&gt;`"></span>
          <br />
          <span v-text="`&lt;/html&gt;`"></span>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script>
import ProjectItem from "@/components/Projects/ProjectItem";
import Github from "@/components/Icons/Github";
export default {
  components: {
    ProjectItem,
    Github,
  },
  data() {
    return {
      projects: [
        {
          title: "Liveclass.ai",
          description:
            "Platform for Educators to Create, Market and Sell courses Online.",
          tags: ["webflow"],
          link: "https://www.liveclass.ai",
          bgColor: "bg-purple-100",
          images: ["/projects/liveclass/landing_1.png"],
        },
        {
          title: "Witless Todo",
          description:
            "Whether you're planning a holiday, creating a shopping list or managing multiple work projects.",
          tags: ["Nuxtjs", "FirebaseAuth", "Firestore"],
          link: "https://witless.netlify.app",
          bgColor: "bg-orange-100",
          images: ["/projects/witless/landing_1.png"],
        },
        {
          title: "Shordyurl",
          description: "Simple and fast URL shortener!",
          tags: ["MongoDb", "ExpressJs", "TailwindCSS"],
          link: "https://shordyurl.herokuapp.com",
          bgColor: "bg-teal-100",
          images: ["/projects/shordy/landing_1.png"],
        },
        {
          title: "FI8",
          description:
            "Breaking the ordinary and mixing up the workout routine is easy at FI8.",
          tags: ["HTML", "Jquery", "Sass"],
          link: "https://www.fi8healthandfitness.com",
          bgColor: "bg-purple-100",
          images: ["/projects/fi8/landing_1.png"],
        },
      ],
      clientProjects: [
        {
          title: "FI8",
          description:
            "Breaking the ordinary and mixing up the workout routine is easy at FI8.",
          tags: ["HTML", "Jquery", "Sass"],
          link: "https://www.fi8healthandfitness.com",
          bgColor: "bg-purple-100",
          images: ["/projects/fi8/landing_1.png"],
        },
      ],
    };
  },
};
</script>
<style>
.full-width {
  min-width: 100vw;
  position: relative;
  transform: translateX(-50%);
  left: 50%;
}
</style>
