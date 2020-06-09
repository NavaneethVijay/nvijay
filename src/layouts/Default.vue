<template>
  <div class="layout min-h-screen">
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<style lang="scss">
body {
  background: url('/bgpattern.svg');
  color: #fff;
  background-size: cover;
}
</style>
