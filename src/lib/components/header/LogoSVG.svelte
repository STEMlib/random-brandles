<script lang="ts">
	export let iconOnly: boolean = false
	export let textColor: string = '#00000'
	export let fontSize: string = '100%'
</script>

<!-- <h1 style="text-decoration-color: {textColor}; color: {textColor}; font-size: {fontSize};">
	<strong>Random</strong><br />
	<strong>Brandles</strong>
</h1> -->

<template>
	<svg
		id="logo-svg"
		width="100%"
		height="100%"
		viewBox="0 0 763 178"
		version="1.1"
		style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
	>
		<g id="artboard">
			<path
				id="bracket-left"
				d="M24.551,31.574l0,120.094l36.029,0l0,24.019l-60.047,0l0,-168.132l60.047,0l0,24.019l-36.029,0Z"
				style="fill:#a7a8aa;"
			/>
		</g>
		{#if !iconOnly}
			<g id="logo-text">
				<strong>Random</strong><br />
				<strong>Brandles</strong>
			</g>
		{/if}
		<g id="artboard">
			<path
				id="bracket-right"
				d="M144.646,175.687l-60.048,0l0,-24.019l36.029,0l0,-120.094l-36.029,0l0,-24.019l60.048,0l0,168.132Z"
				style="fill:#ffd100;"
			/>
		</g>
	</svg>
</template>

<style lang="scss">
	#logo-svg {
		width: auto;

		a:hover &,
		a:focus & {
			#bracket-left {
				transform: translateX(11%);
			}

			#bracket-right {
				transform: translateX(-11%);
			}
		}

		#bracket-left,
		#bracket-right {
			transform: translateX(0);
			transition: transform 0.3s cubic-bezier(1, 0, 0, 1);
		}

		@media (max-width: 23rem) {
			#logo-text {
				display: none;
			}
		}

		text {
			fill: var(--textColor);
			font-size: var(--fontSize);
		}
	}
</style>
