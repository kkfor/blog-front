<template>
  <div class="comment">
    <section class="comment-list">
      <div class="header">
        共
        <b>{{ list.data.length }}</b> 条评论
      </div>
      <div 
        v-for="(item, index) in list.data" 
        :key="index" 
        class="item">
        <div class="user">
          <b>{{ item.user.name }}</b>
        </div>
        <div class="content">{{ item.content }}</div>
        <div>回复</div>
      </div>
    </section>
    <section class="comment-form">
      <div class="user">
        <input
          v-model="user.name" 
          class="name" 
          type="text" 
          placeholder="昵称(必填)">
        <input
          v-model="user.email" 
          type="text" 
          placeholder="邮箱(必填,不会公开)">
        <input
          v-model="user.site" 
          type="text" 
          placeholder="网站(选填)">
      </div>
      <div>
        <textarea
          v-model="content" 
          placeholder="写下你的评论..." 
          name 
          rows="5"/>
      </div>
      <div class="tools">
        <span @click="submit">发布</span>
      </div>
    </section>
  </div>
</template>

<script>
import api from "~/api"

export default {
  props: {
    id: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      user: {
        name: null,
        email: null,
        site: null
      },
      content: null
    }
  },
  computed: {
    list() {
      return this.$store.state.comment.list
    }
  },

  mounted() {
    this.loadCommentList()
  },

  methods: {
    // 初始化评论列表
    loadCommentList() {
      this.$store.dispatch("comment/getList", { articleId: this.id })
    },
    // 提交评论
    submit() {
      const obj = {
        articleId: this.id,
        content: this.content,
        user: this.user
      }
      this.$store.dispatch("comment/postItem", obj)
    }
  }
}
</script>

<style lang="scss" scoped>
.comment {
  section {
    padding: 16px;
    margin-bottom: 16px;
    background: #fff;
  }
}
.comment-list {
  .header {
    padding-bottom: 6px;
    border-bottom: 1px solid #ccc;
  }
  .item {
    padding: 16px 0;
    border-bottom: 1px dashed #ccc;
    .content {
      padding: 12px 0;
    }
  }
}
.comment-form {
  .user {
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
</style>
