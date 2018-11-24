<template>
  <div class="left-content">
    <section class="article">
      <h1 class="title">{{ art.title }}</h1>
      <div class="meta">
        <span>fdfd</span>
        <span>作者</span>
      </div>
      <div
        class="content"
        v-html="art.content"
      />
    </section>
    <section class="comment">
      <div class="author">
        <input
          class="name"
          type="text"
          placeholder="昵称(必填)"
        >
        <input
          type="text"
          placeholder="邮箱(必填,不会公开)"
        >
        <input
          type="text"
          placeholder="网站(选填)"
        >
      </div>
      <div>
        <textarea
          placeholder="写下你的评论..."
          name="" 
          rows="5"
        />
      </div>
      <div class="tools">
        <span>发布</span>
      </div>
    </section>
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
.left-content {
  section {
    padding: 16px;
    margin-bottom: 16px;
    background: #fff;
  }
  .aritcle {
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
  }
  .comment {
    .author {
      display: flex;
      justify-content: space-between;
      padding-bottom: 12px;
      input {
        &.name {
          max-width: 150px;
        }
        flex: 1;
        line-height: 2;
        margin-right: 16px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .tools {
      padding: 4px 4px 0;
      text-align: right;
    }
  }
}
</style>
