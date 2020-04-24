<template>
  <Layout>
    <div class="home">
      <span style="opacity: 0">and his name is John Cena!</span>
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
