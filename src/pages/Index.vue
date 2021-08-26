<template>
  <Layout>
    <div class="flex items-center justify-left overflow-hidden relative p-4">
      <div class="container py-4 mt-20 md:mt-0 md:p-0 mx-auto relative">
        <Section1 />
        <Section2 />
      </div>
      <div
        class="hidden md:block hero-side-bg w-1/3 h-full absolute right-0 top-0"
      ></div>
    </div>
  </Layout>
</template>

<script>
import Section1 from "../components/homepage/section1.vue";
import Section2 from "../components/homepage/section2.vue";
export default {
  metaInfo: {
    title: "Navaneeth Vijay | Web Developer",
    meta: [
      {
        name: "description",
        content:
          "Navaneeth Vijay, Web developer based in Bengaluru specialising in Responsive Websites using HTML5, CSS3, SVG, Creative JavaScript",
      },
      { name: "author", content: "Navaneeth Vijay" },
    ],
  },
  components: {
    Section1,
    Section2
  },
  data() {
    return {
      typedTexts: ["All", "Some", "Your"],
      completedTypes: [],
      currentTyped: 0,
    };
  },
};
</script>
