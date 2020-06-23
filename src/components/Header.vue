<template>
  <div>
    <div class="container mx-auto relative fixed top-0">
      <header class="px-6 md:px-0 py-6 header flex justify-between w-full ">
        <div>
          <router-link class="font-bold text-xl" to="/">NV.</router-link>
        </div>

        <div class="menu-icon relative">
          <div
            class="text-white cursor-pointer"
            @click="
              () => {
                if (this.showMenu) {
                  this.closeMenu = true
                  this.showMenu = false
                } else {
                  this.closeMenu = false
                  this.showMenu = true
                }
              }
            "
          >
            <div class="menu-main relative">
              <div :class="{ active: showMenu }" class="menu js-menu">
                <span class="menu__line"></span>
                <span class="menu__line"></span>
                <span class="menu__line"></span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
    <div>
      <div :class="{ showMenu: showMenu, hideMenu: closeMenu }">
        <div
          class="h-screen overflow-hidden bg-primary fixed top-0 w-full menu-slide"
        ></div>
        <div
          class="h-screen overflow-hidden bg-purple-200 fixed top-0 w-full menu-slide"
        ></div>
        <div
          class="h-screen overflow-hidden bg-purple-100 fixed top-0 w-full menu-slide"
        ></div>
        <div
          class="h-screen overflow-hidden bg-white fixed top-0 w-full menu-slide flex items-center justify-center text-primary"
        >
          <div class="container mx-auto">
            <MenuList />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MenuList from '@/components/MenuList'

export default {
  name: 'Header',
  data() {
    return {
      showMenu: false,
      closeMenu: false,
    }
  },
  components: {
    MenuList,
  },
}
</script>
