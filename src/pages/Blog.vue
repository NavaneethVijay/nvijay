<template>
  <Layout class="bg-white">
    <div class="min-h-screen px-6 pt-10">
      <div
        class="max-w-xl md:max-w-3xl xl:max-w-4xl mx-auto text-center md:px-6 py-10 md:py-32  border-b"
      >
        <h1 class="text-3xl md:text-5xl font-sans font-bold mb-1">
          <g-link to="/" class="text-black">Navaneeth Vijay</g-link>
        </h1>
        <h3
          class="text-lg md:text-xl text-gray-600 font-regular leading-relaxed"
        >
          I'm a full stack web developer based in Bengaluru. I build interactive
          websites that run across platforms & devices.
        </h3>
        <div class="mt-10">
          <ul class="flex justify-center text-gray-900 text-lg font-mono mt-8">
            <li class="pr-8">
              <a
                class="hover:text-primary"
                href="https://instagram.com/navneeth_vijay"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-instagram"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path
                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                  ></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg
              ></a>
            </li>
            <li class="pr-8">
              <a
                class="hover:text-primary"
                href="https://github.com/NavaneethVijay"
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
                  class="feather feather-github"
                >
                  <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  ></path>
                </svg>
              </a>
            </li>
            <li class="pr-8">
              <a
                class="hover:text-primary"
                href="https://twitter.com/navaneeth_V29"
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
                  class="feather feather-twitter"
                >
                  <path
                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                  ></path></svg
              ></a>
            </li>
            <li class="pr-8">
              <a
                class="hover:text-primary"
                href="https://twitter.com/navaneeth_V29"
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
                  class="feather feather-codepen"
                >
                  <polygon
                    points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"
                  ></polygon>
                  <line x1="12" y1="22" x2="12" y2="15.5"></line>
                  <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                  <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                  <line x1="12" y1="2" x2="12" y2="8.5"></line></svg
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <section>
        <div
          class="transition duration-500 ease-in-out md:hover:bg-purple-100 cursor-pointer"
          v-for="edge in $page.posts.edges"
          :key="edge.node.id"
        >
          <div
            class="transition duration-500 ease-in-out flex justify-center  container mx-auto py-20 transform md:hover:translate-x-24 "
          >
            <div>
              <h2 class="text-4xl font-bold mb-5">{{ edge.node.title }}</h2>
              <p class="text-primary font-medium">{{ edge.node.date }}</p>
              <div
                class="text-lg mt-5 font-regular"
                v-html="edge.node.summary"
              ></div>
              <div class="mt-2">
                <a
                  href="https://tailwindui.com/?utm_source=tailwindcss&amp;utm_medium=sidebar-widget"
                  class="text-sm text-gray-800 font-medium hover:underline"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>
<script>
import VueMarkdown from 'vue-markdown'
export default {
  components: {
    VueMarkdown,
  },
}
</script>

<page-query>
  query {
    posts: allContentfulStory(sortBy:"publishDate" order:DESC) {
      edges {
        node {
          id
          title
          date(format: "YYYY/MM/DD")
          content(html:true)
          summary(html:true)
        }
      }
    }
  }
</page-query>
