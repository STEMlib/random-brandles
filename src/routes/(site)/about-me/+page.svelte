<script lang="ts">
	import { EXTERNAL_POSTS } from '$lib/data/external_posts'
	import { talks } from '$lib/data/talks'
	import Main from '$lib/components/Main.svelte'
</script>

<svelte:head>
	<title>Brandon Touchet | About me</title>
	<meta
		data-key="description"
		name="description"
		content="A bit about my personal life and work history."
	/>
</svelte:head>

<Main>
	<div class="compressed-content writing">
		<img class="profile-pic" src="/images/bio-photo.jpg" alt="My name is Brandon Touchet ..." />
		<h2>Who I am</h2>

		<p>I'm not defined by my accomplishments...</p>

		<p>But maybe my habits ...</p>

		<h2 id="writing">Writing</h2>
		<p class="subhead">Articles written for other publications</p>
		<hr />

		<ul>
			{#each EXTERNAL_POSTS as post}
				<li>
					<b>
						{#if post.slug}
							<a href={post.slug} rel="external">
								{post.title}
							</a>
						{:else}
							{post.title}
						{/if}
					</b>
					<br />
					<i>{post.subtitle}</i>
				</li>
			{/each}
		</ul>
	</div>
</Main>

<style lang="scss">
	.writing {
		h2 {
			margin-bottom: var(--quarterNote);
		}

		hr {
			margin: var(--quarterNote) 0 var(--dottedHalfNote);
		}

		.subhead {
			font-size: 1.1rem;
			font-style: italic;
			margin: 0;
		}

		.profile-pic {
			aspect-ratio: 1 / 1;
			object-fit: cover;
			border-radius: 10rem;
			margin: 4.5rem 0 var(--quarterNote) var(--quarterNote);
			shape-outside: circle(6rem);
			float: right;
			max-width: 30vw;

			@media (min-width: vars.$xxs) {
				max-width: 12rem;
				shape-outside: circle(8rem);
			}
		}
	}
</style>
