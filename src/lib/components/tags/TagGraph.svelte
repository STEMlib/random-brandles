<script>
	import { onMount } from 'svelte'
	import { select, hierarchy, cluster, linkHorizontal } from 'd3'

	export let data

	onMount(() => {
		const root = hierarchy({ children: data })
			.sum(() => 1)
			.sort((a, b) => b.value - a.value)

		const clusterLayout = cluster().size([width, height - 100])

		const links = clusterLayout(root).links()

		const svg = select('.graph')

		const link = svg
			.selectAll('.link')
			.data(links)
			.enter()
			.append('path')
			.attr('class', 'link')
			.attr(
				'd',
				linkHorizontal()
					.x((d) => d.y)
					.y((d) => d.x)
			)

		const node = svg
			.selectAll('.node')
			.data(root.descendants())
			.enter()
			.append('circle')
			.attr('class', 'node')
			.attr('cx', (d) => d.y)
			.attr('cy', (d) => d.x)
			.attr('r', 4)
	})
</script>

<svg class="graph" />

<style>
	.graph {
		width: 100%;
		height: 400px;
	}
</style>
