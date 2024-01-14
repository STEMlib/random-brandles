<div class="waves-container">
	<svg
		class="waves"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		viewBox="0 24 150 28"
		preserveAspectRatio="none"
		shape-rendering="auto"
	>
		<defs>
			<path
				id="gentle-wave"
				d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
			/>
		</defs>
		<g class="parallax">
			<use xlink:href="#gentle-wave" x="11" y="6" fill="rgba(43,29,44,.5)" />
			<use xlink:href="#gentle-wave" x="22" y="9" fill="rgba(130,169,81,.75)" />
			<use xlink:href="#gentle-wave" x="33" y="1" fill="rgba(247,239,138,.5)" />
		</g>
	</svg>
</div>

<style lang="scss">
	@import 'src/lib/assets/scss/_breakpoints.scss';
	.waves-container {
		background: linear-gradient(60deg, var(--black) 0%, var(--gold) 100%);
		position: absolute;
		width: 100%;
		// height: min(65vh, 50px);

		@include for-phone-only {
			height: min(75vh, 400px);
		}
	}

	.waves {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 15vh;
		/*Fix for safari gap*/
		min-height: 10px;
		max-height: 25px;
	}

	/* Animation */
	.parallax > use {
		@media screen and (prefers-reduced-motion: no-preference) {
			animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
		}
	}
	.parallax > use:nth-child(1) {
		animation-delay: -2s;
		animation-duration: 7s;
	}
	.parallax > use:nth-child(2) {
		animation-delay: -3s;
		animation-duration: 10s;
	}
	.parallax > use:nth-child(3) {
		animation-delay: -4s;
		animation-duration: 13s;
	}
	.parallax > use:nth-child(4) {
		animation-delay: -5s;
		animation-duration: 20s;
	}
	@keyframes move-forever {
		0% {
			transform: translate3d(-90px, 0, 0);
		}
		100% {
			transform: translate3d(85px, 0, 0);
		}
	}
</style>
