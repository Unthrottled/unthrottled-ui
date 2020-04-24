<template>
  <Layout>
    <div class="home">
      <Banner />
    </div>
  </Layout>
</template>

<style lang="scss"></style>

<script>
import Banner from "@/components/Banner";
import Component from "vue-class-component";
import Vue from "vue";
import Layout from "@/components/Layout";

@Component({
  components: {
    Layout,
    Banner: Banner
  }
})
export default class Home extends Vue {}
</script>
