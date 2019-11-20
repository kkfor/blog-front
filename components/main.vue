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
  padding: 72px 0 60px;
  min-height: 100%;
  margin-bottom: -50px;
}
.main-left {
  flex: 1;
  overflow: hidden;
}
</style>
