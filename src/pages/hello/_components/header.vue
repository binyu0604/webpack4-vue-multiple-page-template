<template>
  <div class="page-header">
    <div class="header-inner">
      <router-link to="/home/top"> <img class="logo" src="~assets/image/logo.png" alt="logo" /> </router-link>
      <router-link v-for="item in linkTarget" :key="item" :to="`/home/${item}`">{{item}}</router-link>
      <a class="github" href="https://github.com/jsjzh" target="_blank">jsjzh's github</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "page-header",
  data() {
    return {
      linkTarget: ["top", "new", "show", "ask", "job"]
    };
  }
};
</script>

<style lang="scss" scoped>
.page-header {
  background-color: #f60;
  position: fixed;
  z-index: 999;
  height: 55px;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0px -5px 20px #000;
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
      &.github {
        color: #fff;
        font-size: 0.9em;
        margin: 0;
        float: right;
      }
    }
  }
}
@media (max-width: 600px) {
  .page-header {
    .header-inner {
      a {
        margin-right: 1em;
        &.github {
          display: none;
        }
      }
    }
  }
}
</style>


