<template>
  <div>
    <page-header />
    <page-container>
      <div class="detail-container">
        <div class="post-header">
          <img class="user-logo" src="~assets/image/logo.png" alt="头像">
          <div>
            <span>{{pageData.author}}</span>
            <br />
            <span>{{pageData.time}}</span>
          </div>
        </div>
        <div class="post-title">{{pageData.title}}</div>

        <div class="post-content">{{pageData.detail}}</div>
      </div>
    </page-container>
  </div>
</template>

<script>
import { getDetailData } from "@/api";
import pageHeader from "../_components/header";
import pageContainer from "../_components/container";

export default {
  name: "detail",
  components: { pageHeader, pageContainer },
  data() {
    return {
      queryData: {
        id: this.$route.params.id
      },
      pageData: {}
    };
  },
  mounted() {
    this.getPageData();
  },
  methods: {
    async getPageData() {
      this.pageData = await getDetailData(this.queryData);
    }
  }
};
</script>


<style lang="scss">
.detail-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 0 20px;
  .post-header {
    padding: 20px 0;
    display: flex;
    align-items: center;
    .user-logo {
      width: 40px;
      height: 40px;
      margin-right: 20px;
    }
  }
  .post-title {
    font-size: 2em;
    text-align: center;
    margin: 20px 0;
  }
  .post-content {
    font-size: 1.2em;
  }
}
</style>


