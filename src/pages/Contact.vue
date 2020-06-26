<template>
  <div>
    <Layout>
      <div
        class="flex min-h-screen items-center justify-left overflow-hidden relative p-4"
      >
        <div class="container p-4 md:p-0 mx-auto relative mt-20">
          <div
            class="absolute text-gray-600 top-0 left-0 text-base font-htmlCodes"
          >
            <span v-text="`&lt;html&gt;`"> </span> <br />
            <span class="pl-6" v-text="`&lt;body&gt;`"> </span>
          </div>
          <div
            class="flex pb-20 flex-wrap md:flex-no-wrap items-stretch pt-10 md:pt-0"
          >
            <main class="container mx-auto min-h-screen">
              <div class="py-10 px-4 relative">
                <div class="hidden md:block powers-img-backdrop-left"></div>
                <div class="md:pt-10">
                  <div class="max-w-lg">
                    <div class="bg-text-wrapper relative">
                      <h1
                        class="text-3xl sm:text-5xl md:text-6xl font-bold tracking-wide"
                      >
                        Say Hi !
                      </h1>
                      <div class="text-bg-accent"></div>
                    </div>
                    <h3
                      class="text-lg md:text-2xl mt-2 text-gray-800 font-regular"
                    >
                      Do you want to work together or talk about an idea? Let's
                      get in touch then. Just drop me a line!
                    </h3>
                  </div>
                </div>
              </div>
              <!-- component -->
              <form class="w-full max-w-lg px-4 mt-10">
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Name
                    </label>
                    <input
                      class="appearance-none transition ease-out duration-700 block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                      id="nick"
                      type="text"
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      E-mail
                    </label>
                    <input
                      class="appearance-none transition ease-out duration-700 block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                      id="email"
                      type="email"
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Message
                    </label>
                    <textarea
                      class=" no-resize transition ease-out duration-700 appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary h-48 resize-none"
                      id="message"
                    ></textarea>
                  </div>
                </div>
                <div class="md:flex md:items-center">
                  <div class="md:w-1/3">
                    <button
                      class="shadow bg-primary hover:bg-purple-900 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="button"
                    >
                      Send
                    </button>
                  </div>
                  <div class="md:w-2/3"></div>
                </div>
              </form>
            </main>
          </div>
          <div
            class="absolute text-gray-600 bottom-0 left-0 text-base font-htmlCodes pl-4"
          >
            <span class="pl-6" v-text="`&lt;/body&gt;`"> </span> <br />
            <span v-text="`&lt;/html&gt;`"></span>
          </div>
        </div>
      </div>
    </Layout>
  </div>
</template>
<script>
export default {
  name: 'Contact'
}
</script>
