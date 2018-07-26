<template>
  <div class="page-header">
    <div class="header-inner">
      <router-link to="/">
        <img class="logo" src="~assets/image/logo.png" alt="logo" />
      </router-link>
      <router-link to="/top">
        Top
      </router-link>
      <router-link to="/new">
        New
      </router-link>
      <router-link to="/show">
        Show
      </router-link>
      <router-link to="/ask">
        Ask
      </router-link>
      <router-link to="/job">
        Job
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "page-header",
  data() {
    return {
      pageName: "page-header"
    };
  }
};
</script>

<style lang="scss">
.page-header {
  background-color: #f60;
  position: fixed;
  z-index: 999;
  height: 55px;
  top: 0;
  left: 0;
  right: 0;
  .header-inner {
    max-width: 800px;
    margin: 0 auto;
    padding: 15px 5px;
    a {
      color: hsla(0, 0%, 100%, 0.8);
      line-height: 24px;
      transition: color 0.15s ease;
      display: inline-block;
      vertical-align: middle;
      font-weight: 300;
      letter-spacing: 0.075em;
      margin-right: 1.8em;
      &:hover {
        color: #fff;
      }
      &.router-link-active {
        color: #fff;
        font-weight: 400;
      }
      &:nth-child(6) {
        margin-right: 0;
      }
      .logo {
        width: 24px;
        margin-right: 10px;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
}
</style>



