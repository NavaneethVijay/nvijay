<template>
  <Layout>
    <div
      class="flex min-h-screen items-center justify-left overflow-hidden relative py-10"
    >
      <div class="container mx-auto mt-10  relative">
        <div
          class="absolute text-gray-600 top-0 left-0 text-base font-htmlCodes"
        >
          <span v-text="`&lt;html&gt;`"></span> <br />
          <span class="pl-6" v-text="`&lt;body&gt;`"> </span>
        </div>
        <div class="py-8">
          <div class="py-10">
            <div class="flex items-center md:pt-10">
              <div>
                <div class="bg-text-wrapper relative">
                  <h1
                    class="text-3xl sm:text-5xl font-bold font-serif tracking-wide	 "
                  >
                    Accomplished Projects
                  </h1>
                  <div class="text-bg-accent"></div>
                </div>
                <h3
                  class="text-lg md:text-2xl mt-2 text-gray-800 font-regular "
                >
                  Open Source and client projects
                </h3>
              </div>
            </div>
          </div>
          <div class="pb-20">
            <div class="project-wrapper my-5 md:my-10">
              <div class="pb-5 md:py-10">
                <h3 class="text-3xl text-gray-900 font-bold ">
                  Open source projects
                </h3>
              </div>
              <div v-for="(project, index) in projects" :key="index">
                <ProjectItem :project="project" />
              </div>
              <div>
                <div class="py-10">
                  <h4 class="text-lg md:text-2xl mt-2 text-gray-900 font-bold ">
                    Packages and libraries
                  </h4>
                </div>
                <div class="flex">
                  <div class="w-1/3">
                    <div class=" p-6 mr-2 border rounded-lg">
                      <h3 class="font-bold text-lg">Full Array Search</h3>
                      <p class="text-md">Lorem ipsum dolor sit</p>
                      <a
                        href="https://github.com/NavaneethVijay/fullarray-search"
                        class="text-md font-medium text-gray-800 font-medium hover:underline mt-2 block"
                        >View →</a
                      >
                    </div>
                  </div>
                  <div class="w-1/3">
                    <div class=" p-6 mr-2 border rounded-lg">
                      <h3 class="font-bold text-lg">Frozen Cookies</h3>
                      <p class="text-md">Lorem ipsum dolor sit</p>
                      <a
                        href="https://github.com/NavaneethVijay/fullarray-search"
                        class="text-md font-medium text-gray-800 font-medium hover:underline mt-2 block"
                        >View →</a
                      >
                    </div>
                  </div>
                  <div class="w-1/3">
                    <div class=" p-6 mr-2 border rounded-lg">
                      <h3 class="font-bold text-lg">Voute Maker</h3>
                      <p class="text-md">Lorem ipsum dolor sit</p>
                      <a
                        href="https://github.com/NavaneethVijay/fullarray-search"
                        class="text-md font-medium text-gray-800 font-medium hover:underline mt-2 block"
                        >View →</a
                      >
                    </div>
                  </div>
                </div>

                <div class="mt-20">
                  <div class="pb-5 md:py-10">
                    <h3 class="text-3xl text-gray-900 font-bold ">
                      Client Projects
                    </h3>
                  </div>
                  <div v-for="(project, index) in clientProjects" :key="index">
                    <ProjectItem :project="project" />
                  </div>
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
    </div>
  </Layout>
</template>
<script>
import ProjectItem from '@/components/Projects/ProjectItem'
export default {
  components: {
    ProjectItem,
  },
  data() {
    return {
      projects: [
        {
          title: 'Witless Todo',
          description:
            "Whether you're planning a holiday, creating a shopping list or managing multiple work projects.",
          tags: ['Nuxtjs', 'FirebaseAuth', 'Firestore'],
          link: 'https://witless.netlify.app',
          bgColor: 'bg-orange-100',
        },
        {
          title: 'Shordyurl',
          description: 'Simple and fast URL shortener!',
          tags: ['MongoDb', 'ExpressJs', 'TailwindCSS'],
          link: 'https://shordyurl.herokuapp.com',
          bgColor: 'bg-teal-100',
        },
      ],
      clientProjects: [
        {
          title: 'FI8',
          description:
            'Breaking the ordinary and mixing up the workout routine is easy at FI8.',
          tags: ['HTML', 'Jquery', 'Sass'],
          link: 'https://www.fi8healthandfitness.com',
          bgColor: 'bg-blue-200',
        },
      ],
    }
  },
}
</script>
