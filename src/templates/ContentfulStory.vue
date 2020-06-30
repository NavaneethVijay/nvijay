<template>
  <Layout>
    <div v-if="$page" class="min-h-screen">
      <main class="py-10 journal-container mx-auto px-4 mt-10">
        <div class="journal-header">
          <h1 v-html="$page.post.title" class="journal-title" />
          <div class="journal-meta">
            <div class="journal-author flex flex-col items-start">
              <span class="label text-base font-medium">Author</span>
              <span class="author-name text-md">Navaneeth Vijay</span>
            </div>
            <div class="journal-date flex flex-col items-start">
              <span class="label text-base font-medium">Published</span>
              <div class="text-md" v-text="$page.post.date" />
            </div>
            <!-- <div class="journal-time flex flex-col items-start">
              <span class="label text-base font-medium">Time</span>
              <span class="text-md">2 min read</span>
            </div> -->
          </div>
        </div>
        <div>
          <div
            class="text-lg mt-5 font-regular leading-loose nv-blog__content"
            v-html="$page.post.summary"
          ></div>
          <div>
            <img
              class="my-5 rounded"
              :src="$page.post.image.file.url"
              alt="tile"
            />
          </div>
          <div
            class="text-lg mt-5 font-regular leading-loose nv-blog__content"
            v-html="$page.post.content"
          ></div>
        </div>
      </main>
    </div>
  </Layout>
</template>

<page-query>
  query Post($path: String!) {
    post: contentfulStory(path: $path) {
        title
        image{
          title
          file{
            url
          }
        }
        date (format: "D. MMMM YYYY")
        summary(html:true)
        content(html:true)
    }
  }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page ? this.$page.post.title : 'Navaneeth Vijay'
    }
  }
}
</script>
<style lang="scss">
::selection {
  background: #e0ddff;
}
::-moz-selection {
  background: #e0ddff;
}
.nv-blog__content {
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 500;
    margin: 1.2rem 0;
  }
  h1 {
    font-size: 1.8rem;
  }
  h2 {
    font-size: 1.6rem;
  }
  h3 {
    font-size: 1.4rem;
  }
  ol,
  ul {
    list-style-type: initial;
    padding-left: 20px;
  }
  blockquote {
    padding-left: 0.875rem;
    font-style: normal;
    opacity: 0.8;
    margin: 10px 0;
    border-left: 6px solid rgb(229, 235, 237);
  }
  a {
    color: #36117e;
    font-weight: 500;
    text-decoration: underline;
  }
}
</style>
<style scoped>
.journal-container {
  max-width: 840px;
}
.journal-header {
  padding: 2rem 0 4rem 0;
}
.journal-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
  font-weight: bold;
}
.journal-meta {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.journal-meta > div {
  margin-right: 4rem;
}
.journal-meta > div:last-of-type {
  margin: 0;
}
</style>
