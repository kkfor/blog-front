<template>
  <div>
    <ListItem
      v-for="(item, index) in data.arts"
      :key="index" />
  </div>
</template>

<script>
import ListItem from '~/components/listItem'
import api from '~/api'

export default {
  async asyncData () {
    const res = await api.article.getArts()
    return {
      data: res.data
    }
  },
  components: {
    ListItem    
  }
}
</script>

<style lang="scss" scoped>
</style>
