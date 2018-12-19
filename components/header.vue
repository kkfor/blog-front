<template>
  <header>
    <div class="container header">
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
      <div class="search">
        <input
          v-model="keyword"
          placeholder="搜索文章"
          type="text"
          autocomplete="off">
        <span @click="search">搜索</span>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      keyword: ''
    }
  },
  computed: {
    list() {
      return this.$store.state.category.list
    }
  },
  methods: {
    search() {
      this.$router.push(`/search/${this.keyword}`)
      // this.$store.dispatch('article/getSearchList', { keyword: this.keyword })
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

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.search {
  display: flex;
  background: #eee;
  margin-right: 10px;
  input {
    flex: 1;
    background: #eee;
    border: none;
  }
  span {
    padding: 0 8px;
    margin: 8px 0;
    border-left: 1px solid #ccc;
    cursor: pointer;
  }
}
</style>
