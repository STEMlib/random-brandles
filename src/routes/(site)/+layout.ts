import type { PageData } from './$types'

export const prerender = true
// const res = await fetch(`/api/posts/all`)

export const load = ({ url }: {url: URL}): PageData => {
	const path: string = url.pathname

	return {
		path
	}
}

// const tagGraphData = (allPosts: Post[]) => {
	// 	// Group the posts by category
	// 	const groupedPosts = d3.group(allPosts, (d) => d.categories);
	  
	// 	// Get the unique categories
	// 	const categories = Array.from(groupedPosts.keys());
	  
	// 	// Create an array of objects with category and count
	// 	const data = categories.map((category) => ({
	// 	  category,
	// 	  count: groupedPosts.get(category)?.length || 0,
	// 	}));
	  
	// 	// Set up the dimensions of the graph
	// 	const width = 500;
	// 	const height = 500;
	// 	const margin = { top: 20, right: 20, bottom: 30, left: 40 };
	  
	// 	// Create the SVG container
	// 	const svg = d3
	// 	  .select('#graph-container') // Replace 'graph-container' with the ID of the container element in your Svelte component
	// 	  .append('svg')
	// 	  .attr('width', width)
	// 	  .attr('height', height);
	  
	// 	// Set up the scales
	// 	const xScale = d3
	// 	  .scaleBand()
	// 	  .domain(categories)
	// 	  .range([margin.left, width - margin.right])
	// 	  .padding(0.1);
	  
	// 	const yScale = d3
	// 	  .scaleLinear()
	// 	  .domain([0, d3.max(data, (d) => d.count)])
	// 	  .range([height - margin.bottom, margin.top]);
	  
	// 	// Create the bars
	// 	svg
	// 	  .selectAll('rect')
	// 	  .data(data)
	// 	  .enter()
	// 	  .append('rect')
	// 	  .attr('x', (d) => xScale(d.category))
	// 	  .attr('y', (d) => yScale(d.count))
	// 	  .attr('width', xScale.bandwidth())
	// 	  .attr('height', (d) => height - margin.bottom - yScale(d.count))
	// 	  .attr('fill', 'steelblue');
	  
	// 	// Add labels to the bars
	// 	svg
	// 	  .selectAll('text')
	// 	  .data(data)
	// 	  .enter()
	// 	  .append('text')
	// 	  .text((d) => d.count)
	// 	  .attr('x', (d) => xScale(d.category) + xScale.bandwidth() / 2)
	// 	  .attr('y', (d) => yScale(d.count) - 5)
	// 	  .attr('text-anchor', 'middle')
	// 	  .attr('fill', 'white');

	// 	return data;
	//   };