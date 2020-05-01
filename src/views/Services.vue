<template>
  <Layout>
    <div class="services">
      <div class="service-hero-headline">
        Give your ideas life.
      </div>
      <div>
        <p>
          Software makes the modern world and your product tick.
        </p>
        <p>
          Whether you need something new or work done to an existing product,
          then I have a solution for you. If it is on a computer, then I might
          be part of that solution.
        </p>
      </div>
    </div>
  </Layout>
</template>

<style lang="scss">
.services {
  margin: auto;
  max-width: 550px;
}

.service-hero-headline {
  font-size: 3rem;
  margin-top: 2rem;
  font-weight: 400;
  color: #fff;
}
</style>

<script>
import Layout from "../components/Layout";
export default {
  name: "Home",
  components: { Layout }
};
</script>
