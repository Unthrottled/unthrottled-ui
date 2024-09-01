<script>
</script>

<svelte:head>
	<title>Capabilities</title>
	<meta name="description" content="Things I can do" />
</svelte:head>

<div class="services">
	<h1 class="service-hero-headline">A Backend Developer</h1>
	<div>
		<h2>Tech</h2>
		<p>
			Typescript, Node, Kotlin, Java, SpringBoot, Functional Programming, PostgreSQL, OpenIDConnect
		</p>
		<h2>DevOps</h2>
		<p>Kubernetes, Docker, Amazon Web Services, Linux Server Administration, GitLab CI/CD</p>
		<h2>Observability</h2>
		<p>Prometheus/Grafana Dashboards, JVM Profiling, Wireshark</p>
	</div>
	<p class="more-details">
		<a href="/contact" class="servicesLink">
			<span class="link">Let's get in contact. </span>
		</a>
	</p>
</div>

<style>
	.more-details {
		margin-top: 3rem;
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

	h2 {
		font-weight: 300;
	}

	.service-hero-headline {
		font-size: 3rem;
		margin-top: 2rem;
		margin-bottom: 2rem;
		font-weight: 300;
		color: #fff;
	}
</style>
