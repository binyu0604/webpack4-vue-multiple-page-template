<template>
  <div class="page-container">
    <slot></slot>
  </div>

</template>

<script>
export default {
  name: "page-container"
};
</script>

<style lang="scss" scoped>
.page-container {
  max-width: 800px;
  margin: 65px auto 0 auto;
  position: relative;
}
</style>


