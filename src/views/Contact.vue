<template>
  <Layout>
    <div class="more">
      <h1 class="more-hero-headline">Where To Find Me</h1>
      <div class="more-details">
        <div class="principal">
          <h3>Email</h3>
          <p>
            <a class="dashboardLink" href="mailto:alexsimons9999@gmail.com"
              >alexsimons9999@gmail.com</a
            >
          </p>
        </div>
        <div class="principal">
          <h3>Social Sites</h3>
          <p>
            <a
              class="dashboardLink"
              href="https://www.linkedin.com/in/alex-simons-1a459610a/"
              >LinkedIn</a
            >
          </p>
          <p>
            <a class="dashboardLink" href="https://github.com/Unthrottled"
              >GitHub</a>
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style lang="scss">
.more-hero-headline {
  font-size: 3rem;
  margin-top: 2rem;
  font-weight: 300;
  color: #fff;
}

h3 {
  margin-bottom: 0rem;
}

.principal {
  margin-bottom: 2.5rem;
}

.social-links {
  margin: 2rem 0;
  display: flex;
  justify-content: space-evenly;
}

.social-button {
  max-height: 100px;
}

.dashboardLink {
  font-size: 1.5rem;
  text-decoration: none;
  color: #e8ad4f;
  word-break: break-all;
}

.more {
  margin: auto;
  max-width: 550px;
}

.more-details {
  line-height: 1.5rem;
}
</style>

<script>
import Layout from "../components/Layout";
export default {
  name: "Home",
  components: { Layout },
};
</script>
