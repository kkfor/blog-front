<template>
  <div>
    <Article :arts="data.arts" />
  </div>
</template>

<script>
import api from "~/api";
import Article from "~/components/article";

export default {
  components: {
    Article
  },
  async asyncData({ params }) {
    const res = await api.article.getArts(params);
    return {
      data: res.data
    };
  }
};
</script>

<style lang="scss" scoped>
</style>