<template>
  <div>
    <page-header/>
    <page-container>
      <ul class="list-container">
        <router-link tag="li" v-for="item in pageData" :key="item.id" :to="`/detail/${item.id}`">
          <span class="score">{{item.score}}</span>
          <span class="type">{{item.type}}</span>
          <span>
            <a>{{item.title}}</a>
            <span class="host"> ({{item.host}})</span>
          </span> <br/>
          <span class="meta">
            <span> by
              <a href="https://github.com/jsjzh" target="_blank">{{item.by}}</a>
            </span>
            <span> {{item.time}} </span>
            <span> |
              <a href="https://github.com/jsjzh" target="_blank">{{item.comment}} comments</a>
            </span>
          </span>
        </router-link>
      </ul>
    </page-container>
  </div>
</template>

<script>
import { getListData } from "@/api";

import pageHeader from "../_components/header";
import pageContainer from "../_components/container";

export default {
  name: "home",
  components: { pageHeader, pageContainer },
  data() {
    return {
      queryData: {
        type: "top",
        count: 20,
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
ul.list-container {
  li {
    background-color: #fff;
    padding: 10px 40px 10px 80px;
    border-bottom: 1px solid #eee;
    position: relative;
    line-height: 20px;
    .score {
      color: #ff6600;
      font-size: 1.1em;
      font-weight: 700;
      position: absolute;
      top: 50%;
      left: 0;
      width: 80px;
      text-align: center;
      margin-top: -10px;
    }
    .type {
      position: absolute;
      right: 10px;
      bottom: 5px;
      color: #f60;
      font-size: 0.8em;
    }
    .meta,
    .host {
      font-size: 0.85em;
      color: #828282;
      a {
        color: #828282;
        text-decoration: underline;
        &:hover {
          color: #ff6600;
        }
      }
    }
  }
}
</style>


