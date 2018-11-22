<template>
  <div>
    <h1 class="title">{{ art.title }}</h1>
    <div class="meta">
      <span>fdfd</span>
      <span>作者</span>
    </div>
    <div
      class="content"
      v-html="art.content"
    />
  </div>
</template>

<script>
import api from '~/api'

export default {
  data() {
    return {
      art: []
    }
  },
  async asyncData({params}) {
    const id = params.id
    const res = await api.article.getArt(id)
    return {
      art: res.data
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 22px;
}
.meta {
  color: #555;
  margin: 8px 0;
}
.content {
  line-height: 1.8;
}
</style>
