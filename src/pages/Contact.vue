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
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                class="w-full max-w-lg px-4 mt-10"
              >
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Name
                    </label>
                    <input
                      name="name"
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
                      name="email"
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
                      name="message"
                      class=" no-resize transition ease-out duration-700 appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary h-48 resize-none"
                      id="message"
                    ></textarea>
                  </div>
                </div>
                <div class="md:flex md:items-center">
                  <div class="md:w-1/3">
                    <button
                      class="shadow flex items-start bg-primary hover:bg-purple-900 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="button"
                    >
                      <span class="pr-2">Let's Talk</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="23"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-coffee"
                      >
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                        <path
                          d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"
                        ></path>
                        <line x1="6" y1="1" x2="6" y2="4"></line>
                        <line x1="10" y1="1" x2="10" y2="4"></line>
                        <line x1="14" y1="1" x2="14" y2="4"></line>
                      </svg>
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
  name: 'Contact',
}
</script>
