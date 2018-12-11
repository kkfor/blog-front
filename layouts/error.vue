<template>
  <div class="not">
    <div>404</div>
    <div class="back">
      <nuxt-link to="/" >返回首页</nuxt-link>
    </div>
  </div>
</template>
<script>

export default {
  layout: 'empty'

}
</script>
<style lang="scss" scoped>
.not {
  color: #888;
  font-size: 100px;
  text-align: center;
  margin-top: 120px;
  .back {
    font-size: 20px;
  }
  a {
    color: inherit;
  }
}
</style>