<template>
  <Layout>
    <div class="services">
      <div class="service-hero-headline">
        What can I do?
      </div>
      <div>
        <p class="service-description">
          Let's try something a little different. Rather than reading an
          exhaustive list of all of my abilities, why not have a little bit of
          fun?
        </p>
        <p class="service-description">
          Below is my interactive skill tree that you can explore!
        </p>
        <p>
          You can click each node to expand the branch. Nodes can be dragged.
          You also can pan/zoom around the tree
        </p>
        <SkillTree />
      </div>
    </div>
  </Layout>
</template>

<style lang="scss">
.services {
  margin: auto;
  max-width: 550px;
}

.servicesLink {
  font-size: 1.5rem;
  text-decoration: none;
  color: #e8ad4f;
}

.service-description {
  font-size: 1.25rem;
  line-height: 1.5rem;
}

.service-hero-headline {
  font-size: 3rem;
  margin-top: 2rem;
  font-weight: 300;
  color: #fff;
}
</style>

<script>
import Layout from "../components/Layout";
import SkillTree from "../components/SkillTree";
export default {
  name: "Home",
  components: { SkillTree, Layout }
};
</script>
