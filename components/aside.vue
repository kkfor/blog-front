<template>
  <aside>
    <div class="aside-article">
      <div>热门文章</div>
      <ul>
        <li
          v-for="(item, index) in list"
          :key="index">
          <i>{{ index+1 }}</i>
          <nuxt-link
            :to="`/article/${item._id}`"
            :title="item.title">{{ item.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import api from '@/api'

export default {
  computed: {
    list() {
      return this.$store.state.article.hot
    }
  }
}
</script>

<style lang="scss" scoped>
aside {
  @media screen and (max-width: 768px) {
    display: none;
  }
  width: 260px;
  margin-left: 16px;
}
.aside-article {
  overflow: hidden;
  background: #fff;
  padding: 0 16px;
  > div {
    padding: 12px 0 8px 0;
    border-bottom: 1px dashed #eee;
  }
  ul {
    padding: 6px 0;
    li {
      line-height: 1.6;
      margin-bottom: 10px;
      i {
        display: inline-block;
        width: 24px;
        height: 24px;
        line-height: 24px;
        margin-right: 4px;
        border-radius: 4px;
        text-align: center;
        background: #eee;
      }
    }

  }
}
</style>

