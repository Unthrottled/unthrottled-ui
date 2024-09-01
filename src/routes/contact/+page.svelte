<script>
</script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Let's get in touch" />
</svelte:head>

<div class="more">
	<h1 class="more-hero-headline">Contact Me</h1>
	<div class="more-details">
		<div class="principal">
			<h3>Alex Keith Simons</h3>
			<p>
				<a class="dashboardLink" href="mailto:alex@unthrottled.io">alex@unthrottled.io</a>
			</p>
			<img src="/avatar_256.png" alt="Me" class="avatar" />
		</div>
	</div>
</div>

<style>
	.more-hero-headline {
		font-size: 3rem;
		margin-top: 2rem;
		font-weight: 300;
		color: #fff;
	}

	.avatar {
		margin-top: 2rem;
	}

	h3 {
		margin-bottom: 0;
	}

	.principal {
		margin-bottom: 2.5rem;
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
