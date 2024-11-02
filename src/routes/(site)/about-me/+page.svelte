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
		<blockquote>
			<p>
				We all fear death and question our place in the universe. The artist's job is not to succumb
				to despair, but to find an antidote for the emptiness of existence.
			</p>
			<footer>—Gertrude Stein, <cite>Midnight in Paris</cite></footer>
		</blockquote>

		<p>
			This website serves as a reminder to my own antidote--<strong
				>solving Dunbar's Problem.</strong
			>... but how did we get here?
		</p>

		<p>My earliets memories are of me grappling with the big existential questions of life:</p>
		<ul>
			<li>Who are we?</li>
			<li>Why are we here?</li>
			<li>How did we get here?</li>
			<li>What are we supposed to do?</li>
		</ul>

		<p>
			Trying to answer these big questions of life led me to astronomy. Astronomy led me to quantum
			mechanics. Quantum Mechanics led me to cosmology. Cosmology led me to the electron self-energy
			paradox. And the electron self-energy paradox led me to Dunbar's Problem.
		</p>

		<p>
			Dunbar's Problem is humanity's limitation in trust which dictates the interaction between two
			people.
		</p>
	</div>
</Main>

<style lang="scss">
	.writing {
		h2 {
			margin-bottom: var(--quarterNote);
		}

		blockquote {
			color: var(--green);
		}

		hr {
			margin: var(--quarterNote) 0 var(--dottedHalfNote);
		}

		.subhead {
			font-size: 1.1rem;
			font-style: italic;
			margin: 0;
		}

		p {
			strong {
				background: var(--gold);
				color: var(--black);
			}
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
