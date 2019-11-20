<template>
  <aside>
    <div id="side_ad"></div>
    <div class="card hot">
      <div class="card-header">热门文章</div>
      <div class="card-body">
        <ul>
          <li
            v-for="(item, index) in hotList"
            :key="index">
            <i>{{ index+1 }}</i>
            <nuxt-link
              :to="`/article/${item._id}`"
              :title="item.title">{{ item.title }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <div
      v-if="!!tagList.length" 
      class="card tag">
      <div class="card-header">标签</div>
      <div class="card-body">
        <nuxt-link
          v-for="(item, index) in tagList"
          :to="`/tag/${item.slug}`"
          :key="index"
        >{{ item.name }} [{{ item.count }}] </nuxt-link>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  computed: {
    hotList() {
      return this.$store.state.article.hot
    },
    tagList() {
      return this.$store.state.tag.list
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
.card {
  overflow: hidden;
  background: #fff;
  padding: 0 16px;
  margin-bottom: 16px;
  .card-header {
    padding: 12px 0 8px 0;
    border-bottom: 1px dashed #eee;
  }
  .card-body {
    padding: 12px 0 10px;
  }
}
.hot {
  margin-top: 16px;
  ul {
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
.tag {
  .card-body {
    display: flex;
    flex-wrap: wrap;
    margin-right: -8px;
    a {
      padding: 3px 6px;
      border: 1px solid #eee;
      border-radius: 4px;
      margin-right: 8px;
      margin-bottom: 8px;
      &:hover {
        background: #ddd;
      }
    }
  }
}
</style>
