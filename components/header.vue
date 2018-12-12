<template>
  <header>
    <div class="container">
      <nav>
        <nuxt-link
          to="/"
          exact>首页</nuxt-link>
        <nuxt-link
          v-for="(item, index) in list"
          :key="index"
          :to="`/${item.url}`" 
        >{{ item.name }}</nuxt-link>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  computed: {
    list(){
      return this.$store.state.category.list
    }
  }
}
</script>
<style lang="scss" scoped>
  header {
    position: fixed;
    height: 56px;
    top: 0;
    left: 0;
    right: 0;
    background: #fff;
    nav {
      a {
        font-size: 16px;
        line-height: 56px;
        padding: 0 12px;
        &:hover {
          color: #111;
        }
      }
    }
  }
</style>
