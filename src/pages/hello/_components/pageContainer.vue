<template>
  <div class="page-container">
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "page-container",
  data() {
    return {
      pageName: "page-container"
    };
  }
};
</script>

<style lang="scss" scoped>
</style>


