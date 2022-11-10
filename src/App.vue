<template>
  <MenuComponent/>
  <router-view></router-view>
</template>

<script>
import MenuComponent from './../src/components/MenuComponent.vue';

export default {
  name: 'App',
  components: {
    MenuComponent
  }
}
</script>

<style scoped>

</style>
