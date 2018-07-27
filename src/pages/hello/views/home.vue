<template>
  <div>
    <div class="page-header">
      <div class="header-inner">
        <router-link to="/"> <img class="logo" src="~assets/image/logo.png" alt="logo" /> </router-link>
        <router-link v-for="item in linkTarget" :key="item" :to="`/home/${item}`">{{item}}</router-link>
        <a class="github" href="https://github.com/jsjzh" target="_blank">jsjzh's github</a>
      </div>
    </div>
    <div class="page-container">
      
      <!-- <transition name="fade" mode="out-in">
        <router-view class="view" />
      </transition> -->
    </div>
  </div>
</template>

<script>
import { getListData } from "@/api";

export default {
  name: "home",
  components: {},
  data() {
    return {
      linkTarget: ["top", "new", "show", "ask", "job"],
      queryData: {
        type: "top",
        count: 10,
        page: 1,
        start: 0
      },
      pageData: []
    };
  },
  mounted() {
    let params = this.$route.params;
    this.queryData.type = params.type;
    this.getPageData();
  },
  watch: {
    $route(to, from) {
      let oldParams = from.params;
      let newParams = to.params;
      if (oldParams.type !== newParams.type) {
        this.queryData.type = newParams.type;
        this.initQueryData();
        this.getPageData();
      }
    }
  },
  methods: {
    async getPageData() {
      this.pageData = await getListData(this.queryData);
      console.log(this.pageData);
    },
    initQueryData() {
      this.queryData.count = 10;
      this.queryData.page = 1;
      this.queryData.start = 0;
    }
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
      &.github {
        color: #fff;
        font-size: 0.9em;
        margin: 0;
        float: right;
      }
    }
  }
}
</style>

<style lang="sass">
.page-container {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  padding-top: 45px;
}
</style>


