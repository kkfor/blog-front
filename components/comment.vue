<template>
  <div class="comment">
    <!-- 评论列表 -->
    <section class="comment-list">
      <div class="header">
        共
        <b>{{ list.total }}</b> 条评论
      </div>
      <div 
        v-for="(item, index) in list.data" 
        :key="index" 
        class="item">
        <div class="user">
          <b>{{ item.user.name }}</b>
        </div>
        <div class="content">
          <div 
            v-if="!!item.pid" 
            class="reply">
            <div class="reply-user">@{{ findReplyParent(item.pid, 1) }}</div>
            <div class="reply-content">{{ findReplyParent(item.pid, 2) }}</div>
          </div>
          <div>
            {{ item.content }}
          </div>
        </div>
        <div class="meta">
          <span 
            class="reply" 
            @click="reply(item._id)">回复</span>
          <span>{{ item.createdAt | timeAgo }}</span>
        </div>
      </div>
    </section>
    <!-- 评论框 -->
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
      <div
        v-if="!!pid"
        class="reply">
        <div class="reply-user">
          <span>回复: @{{ replyComment.user.name }}</span>
          <span 
            class="cancel-reply" 
            @click="cancelReply">取消回复</span>
        </div>
        <div class="reply-content">
          {{ replyComment.content }}
        </div>
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
      pid: null,
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
    },
    replyComment() {
      return this.list.data.find(comment => Object.is(comment._id, this.pid))
    }
  },

  mounted() {
    if (!this.list.total) {
      this.loadCommentList()
    }
  },
  destroyed() {
    this.$store.dispatch('comment/clearList')
  },

  methods: {
    // 初始化评论列表
    loadCommentList() {
      this.$store.dispatch("comment/getList", { article: this.id })
    },
    // 回复
    reply(pid) {
      this.pid = pid
    },
    // 取消回复
    cancelReply() {
      this.pid = null
    },
    // 找到回复来源 type: 1 name | 2 内容
    findReplyParent(id, type) {
      const parent = this.list.data.find(comment => Object.is(comment._id, id))
      if(!!parent) {
        if(type === 1) {
          return parent.user ? parent.user.name : null
        } else if (type === 2) {
          return parent.content
        }
      }
      return null
    },
    // 提交评论
    submit() {
      const obj = {
        pid: this.pid,
        article: this.id,
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
    padding: 16px 2px;
    border-bottom: 1px dashed #ccc;
    .content {
      padding: 12px 0;
      .reply {
        padding: 8px 8px 12px;
        border-left: 3px solid #e2e2e2;
        margin-bottom: 8px;
        .reply-user {
          font-style: italic;
          margin-bottom: 8px;
          color: #777;
        }
      }
    }
    .meta {
      .reply {
        padding-right: 8px;
        cursor: pointer;
      }
      display: flex;
      justify-content: space-between;
      font-size: 12px;
    }
  }
}
.comment-form {
  .user {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
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
  .reply {
    margin-bottom: 16px;
    .reply-user {
      display: flex;
      margin-bottom: 12px;
      span {
        &:first-child {
          margin-right: 12px;
          flex: 1;
        }
        &.cancel-reply {
          cursor: pointer;
        }
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background: #f2f2f2;
      }
    }
    .reply-content {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background: #f2f2f2;
    }
  }
  .tools {
    padding: 4px 4px 0;
    text-align: right;
  }
}
</style>
