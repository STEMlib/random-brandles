<script lang="ts">
	import Main from '$lib/components/Main.svelte'
	// import TagGraph from '$lib/components/tags/TagGraph.svelte'
	// const folderPath = '$lib/content/posts'
	// const metadataTags = getMetadataTags(folderPath)
</script>

<svelte:head>
	<title>Random Brandles</title>
	<meta property="og:title" content="Brandon Touchet" />
	<meta
		data-key="description"
		property="og:description"
		name="description"
		content="physicist, athlete, musician, Cajun"
	/>
	<meta
		property="og:image"
		content="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=3273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	/>
	<meta
		name="twitter:image"
		content="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=3273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	/>
</svelte:head>

<Main>
	<div class="intro">
		<div class="intro__headline">
			<!-- <TagGraph data={metadataTags} /> -->
		</div>
	</div>
</Main>

<style lang="scss">
	@for $i from 1 through 4 {
		.intro .intro__headline > *:nth-child(#{$i}) {
			animation-delay: 0.2 + ($i * 0.14s);
		}
		.intro .intro__headline ul li:nth-child(#{$i}) {
			animation-delay: 0.8 + ($i * 0.1s);
		}
	}

	.intro {
		width: 100%;
		position: relative;
		margin-top: var(--wholeNote);

		.intro__headline > *,
		.intro__headline ul li {
			opacity: 0;
			transform: translateY(16px);
			animation: fade_in_intro 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;

			.reduce-motion & {
				transform: translateY(0);
			}
		}

		@media (min-width: vars.$xl) {
			display: grid; //TODO: leftover from old design. Probably not needed unless I decide to put stuff in that narrow right column again.
			grid-template-columns: 48rem 1fr;
			gap: 0 calc(var(--wholeNote) * 2);
		}

		h2,
		.subhead {
			font-size: 2.5rem;
			font-size: clamp(1.8rem, calc(1rem + 3vw), 3.5rem);
			margin-bottom: var(--halfNote);
			font-weight: normal;
			max-width: 17em;

			strong {
				background: var(--gold);
				color: var(--black);
			}

			&::before {
				display: none;
			}
		}

		.subhead {
			font-size: clamp(1.2rem, calc(0.6rem + 2vw), 1.8rem);
			margin-top: 0;
			margin-bottom: var(--halfNote);
			color: var(--darkGray);
			line-height: 1.4;
			max-width: 23em;

			.dark & {
				color: var(--ink);
			}

			a {
				text-decoration: underline;
			}
		}

		blockquote {
			max-width: 38em;

			p {
				font-size: 1.75em;
			}

			footer {
				font-size: 1.25em;
			}
		}

		p {
			max-width: 38em;
		}

		ul {
			margin-top: var(--halfNote);
			margin-bottom: 0;
		}
	}

	@keyframes fade_in_intro {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	:global(html:not(.light) .intro .subhead) {
		@media (prefers-color-scheme: dark) {
			color: var(--ink) !important;
		}
	}
</style>
