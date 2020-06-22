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
          <ul
            class="flex justify-center flex-wrap text-gray-900 text-md md:text-lg font-mono mt-2"
          >
            <li class="pr-8 pt-2">
              <a
                class="hover:text-primary"
                href="https://instagram.com/navneeth_vijay"
                >Instagram</a
              >
            </li>
            <li class="pr-8 pt-2">
              <a
                class="hover:text-primary"
                href="https://github.com/NavaneethVijay"
                >Github</a
              >
            </li>
            <li class="pr-8 pt-2">
              <a
                class="hover:text-primary"
                href="https://twitter.com/navaneeth_V29"
                >Twitter</a
              >
            </li>
            <li class="pr-8 pt-2">
              <a
                class="hover:text-primary"
                href="https://twitter.com/navaneeth_V29"
                >Codepen</a
              >
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
