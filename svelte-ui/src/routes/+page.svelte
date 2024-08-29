<script>
</script>

<svelte:head>
	<title>Unthrottled</title>
	<meta name="description" content="Define your own limits." />
</svelte:head>

<section>
	<div class="brandContainer">
		<span style="opacity: 0">and his name is John Cena!</span>
<!--		<Banner :on-animate="onBannerDisplay" />-->
		<transition appear name="fade" v-on:after-enter="excerptShown">
			<div class="stuff-u">
				<div class="bottom-caption">
					<span>Focus</span> on what is important<br />
					and <span>demand excellence</span>.
				</div>
				<div class="bottom-caption">
					<span>Deliver</span> amazing <span>value</span>.
				</div>
				<p class="preachySpeachy">
					Why would you settle for anything less?<br /><br />
					Never let anything prevent you from achieving your goals. What you
					want to do is possible given time, effort, and reason.
				</p>
				<p class="more-details">
					<router-link class="link" to="/capabilities">
						<span class="link"> Learn how I can help. </span>
					</router-link>
				</p>
			</div>
		</transition>
	</div>
</section>

<style>
	.brandContainer {
		margin: auto;
		max-width: 500px;
	}

	.stuff-u {
	}
	.highlight {
		color: #fff;
	}

	.link {
		text-decoration: none;
		color: #e8ad4f;
		font-size: 1.25rem;
	}

	.bottom-caption {
		margin-top: 3rem;
		font-size: 2rem;
	}

	.preachySpeachy {
		margin-top: 3rem;
		font-size: 22px;
		line-height: 2rem;
		font-weight: 400;
		color: #b2b2b4;
		margin-bottom: 2rem;
	}

</style>
