<template>
  <aside>
    <div class="card hot">
      <div class="card-header">mongoose中文文档</div>
      <div class="card-body"/>
    </div>
  </aside>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
aside {
  @media screen and (max-width: 768px) {
    display: none;
  }
  width: 260px;
  margin-right: 16px;
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
</style>
