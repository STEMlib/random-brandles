<script lang="ts">
	import CodePenLink from '$lib/components/CodePenLink.svelte'
	import Main from '$lib/components/Main.svelte'
</script>

<svelte:head>
	<title>Random Brandles | Projects</title>
	<meta data-key="description" name="description" content="A sampling of apps and code projects." />
	<meta property="og:image" content="https://randombrandles.com/images/site-image.png" />
	<meta name="twitter:image" content="https://randombrandles.com/images/site-image.png" />
</svelte:head>

<Main>
	<div class="projects compressed-content double-wide">
		<article>
			<div class="sticky">
				<h2>Featured project: Dunbar's Problem</h2>

				<p>
					Robin Dunbar extrapolated the number of deep, meaningful relationships that the average
					human can maintain. He estimated humans can maintain approximately 150 loving
					relationships. Whether that is the exact number of not
				</p>
				<p>
					Quina was released December 2020 as a progressive web app and on the Google Play store.
					Version 2.0 was released in spring 2022 (with an overhauled game board, a daily puzzle
					mode, and new achievements). Version 2.0 was also released on the iOS App Store.
				</p>
			</div>
		</article>
	</div>
</Main>

<style lang="scss">
	.projects {
		p {
			max-width: var(--maxWidth);
			// min-width: 12em;
		}

		article {
			display: grid;
			grid-template-columns: 1fr;
			gap: var(--halfNote);
			align-items: start;

			@media (min-width: vars.$sm) {
				grid-template-columns: 2fr 3fr;

				.sticky {
					position: sticky;
					top: var(--halfNote);
				}
			}

			@media (min-width: vars.$lg) {
				grid-template-columns: 2fr 3fr;
			}

			+ article {
				margin-top: 6rem;
			}
		}

		.image-gallery {
			figure {
				margin-top: 0;
			}

			img {
				margin: 0 auto var(--halfNote);
				display: block;
				max-width: unset;
				width: calc(100% + (var(--margin) * 2));
				margin-left: calc(var(--margin) * -1);

				@media (min-width: vars.$sm) {
					max-width: calc(100% + var(--margin));
					width: auto;
					margin-left: 0;
				}
			}
		}
	}
</style>
