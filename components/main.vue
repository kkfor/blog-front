<template>
  <main class="container">
    <div class="main-left">
      <slot />
    </div>
    <Aside />
  </main>
</template>

<script>
import Aside from './aside'
export default {
  components: {
    Aside
  }
}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  margin-top: 56px;
  padding: 16px 0;
}
.main-left {
  flex: 1;
  overflow: hidden;
}
</style>
