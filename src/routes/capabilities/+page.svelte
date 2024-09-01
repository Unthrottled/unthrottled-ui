<script>
</script>

<svelte:head>
  <title>Capabilities</title>
  <meta name="description" content="Things I can do"/>
</svelte:head>

<div class="services">
  <h1 class="service-hero-headline">What can I do?</h1>
  <div>
    <p class="subtitle">Here are the things I am really good at:</p>
    <h2>Backend Tech</h2>
    <p>
      Kotlin, Java, SpringBoot, Reactive Programming, PostgreSQL, JWT,
      OpenIDConnect
    </p>
    <h4>DevOps</h4>
    <p>
      Kubernetes, Docker, Amazon Web Services, Linux Server Administration,
      GitLab CI/CD
    </p>
    <h4>Observability</h4>
    <p>
      Prometheus/Grafana Dashboards, JVM Profiling, Wireshark
    </p>
    <hr/>
    <h2>Frontend Tech</h2>
    <p>Typescript, Javascript, React</p>
  </div>
  <p class="more-details">
    <a href="/contact" class="servicesLink">
      <span class="link">Let's get in contact. </span>
    </a>
  </p>
</div>


<style>
  .more-details {
    margin-top: 2rem;
  }

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

  .subtitle {
    margin-bottom: 2rem;
  }

  h2 {
    font-weight: 300;
  }

  h4 {
    font-weight: 300;
    font-size: 1.25rem;
    text-decoration: underline;
  }

  hr {
    margin: 2rem 0;
  }
  .service-hero-headline {
    font-size: 3rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-weight: 300;
    color: #fff;
  }
</style>
