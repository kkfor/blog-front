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
          <span class="meta">
            <span
              v-if="item.meta.location && item.meta.location.country && item.meta.location.city"
              class="location"
            >
              <span>{{ item.meta.location.country }}</span>
              <span v-if="item.meta.location.city">-</span>
              <span>{{ item.meta.location.city }}</span>
            </span>
          </span>
        </div>
        <div class="content">
          <div 
            v-if="!!item.pid" 
            class="reply">
            <div class="reply-user">@{{ findReplyParent(item.pid, 1) }}</div>
            <div class="reply-content">{{ findReplyParent(item.pid, 2) }}</div>
          </div>
          <div>{{ item.content }}</div>
        </div>
        <div class="status">
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
          maxlength="12"
          placeholder="昵称(必填)">
        <input 
          v-model="user.email" 
          type="text"
          maxlength="40"
          placeholder="邮箱(必填,不会公开)">
        <input 
          v-model="user.site" 
          type="text"
          maxlength="30"
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
        <div class="reply-content">{{ replyComment.content }}</div>
      </div>
      <div>
        <textarea
          v-model="content"
          maxlength="300"
          placeholder="写下你的评论..."/>
      </div>
      <div class="tools">
        <span @click="submit">发布</span>
      </div>
    </section>
  </div>
</template>

<script>
import api from "~/api";
import { storageUser } from "~/utils/storage";

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
    this.initUser()
    if (!this.list.total) {
      this.loadCommentList()
    }
  },
  destroyed() {
    this.$store.dispatch("comment/clearList")
  },

  methods: {
    initUser() {
      const user = storageUser.get()
      if (user && user.name && user.email) {
        this.user = user
      }
    },
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
      if (!!parent) {
        if (type === 1) {
          return parent.user ? parent.user.name : null
        } else if (type === 2) {
          return parent.content
        }
      }
      return null
    },
    // 提交评论
    submit() {
      if(!this.user.name || /^\s+$/.test(this.user.name)) {
        alert('请输入昵称')
        return
      }
      if(!this.user.email) {
        alert('请输入邮箱')
        return
      }
      if(!this.content || /^\s+$/.test(this.content)) {
        alert('请输入内容')
        return
      }
      if(!/^[a-zA-Z0-9.]+@[a-zA-Z.]+$/.test(this.user.email)) {
        alert('邮箱格式不正确')
        return
      }
      const obj = {
        pid: this.pid,
        article: this.id,
        content: this.content,
        user: this.user,
        meta: {
          ua: navigator.userAgent
        }
      }
      this.content = null
      storageUser.set(this.user)
      this.$store.dispatch("comment/postItem", obj)
    }
  }
};
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
    .user {
      display: flex;
      justify-content: space-between;
    }
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
    .status {
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
  textarea {
    min-height: 100px;
    max-height: 300px;
    resize: vertical;
  }
}
</style>
