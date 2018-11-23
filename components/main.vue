<template>
  <main class="container">
    <div class="main-content">
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
  .main-content {
    flex: 1;
    background: #fff;
    padding: 16px;
    margin-right: 16px;
  }
</style>


