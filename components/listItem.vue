<template>
  <div class="item">
    <h3>{{ item.title }}</h3>
    <div class="description">司法局时空裂缝是否涉及到发送到家乐福圣诞节快乐方式打开了俯拾地芥发送的看法是的发生的考虑福建省地方sdfsdf扫地</div>
    <div class="meta">
      <span>2017.01.01</span>
      <span>admin</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .item {
    border-bottom: 1px dashed #ccc;
    padding-bottom: 16px;
    h3 {
      font-size: 18px;
    }
    .description {
      line-height: 1.6;
      padding: 12px 0;
    }
    .meta {
      font-size: 12px;
      span {
        margin-right: 16px;
      }
    }
  }
</style>
