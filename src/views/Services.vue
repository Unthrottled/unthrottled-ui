<template>
  <Layout>
    <div class="services">
      <div class="service-hero-headline">
        Give your ideas life.
      </div>
      <div>
        <p class="service-description">
          Whether you need something new or work done to an existing product. I
          have a solution for you. If involves a computer then I may be part of
          that solution. When you are ready to put your business in capable
          hands, look no further.
        </p>

        <p>
          To see if we right fit for each other, contact Alex Simons via:
        </p>
        <a class="servicesLink" href="mailto:contact@unthrottled.io"
          >contact@unthrottled.io</a
        >
        <p class="service-description">
          If you already know what you are looking for already feel free to
          explore my skill tree.
        </p>
        <p>
          You can click each node to expand the branch.
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
