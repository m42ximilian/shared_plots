function processData(data){
	// Create SVG element
	var mySVG = d3.select("body")
					.append("svg")
					.attr("width", 500)
					.attr("height", 500)
					.style("background", "lightgrey");

	// Create circles from data
	mySVG.selectAll("circle")
		.data(data)
		.join("circle")
		.attr("cx", d => d.Xi)
		.attr("cy", d => d.Yi)
		.attr("r", 5)
		.attr("fill", d => d.color)

	// Transition for all bubbles
		.transition()
		.duration(5000)
		.attr("cx", d => d.Xf)
		.attr("cy", d => d.Yf);

	mySVG.selectAll('circle').on('mouseover', function(){
		d3.select(this).transition().attr('r', 20);
	})

	mySVG.selectAll('circle').on('mouseout', function(){
		d3.select(this).transition().attr('r', 5);
	})
}
	/* 	
	// Transition for red bubbles
    mySVG.selectAll("circle")
        .filter(d => d.color === "red")
        .transition().duration(3000)
        .attr("cx", d => d.Xf)
        .attr("cy", d => d.Yf);

    // Transition for blue bubbles
    mySVG.selectAll("circle")
        .filter(d => d.color === "blue")
        .transition().duration(3000)
        .attr("cx", d => d.Xf)
        .attr("cy", d => d.Yf);

    // Transition for green bubbles
    mySVG.selectAll("circle")
        .filter(d => d.color === "green")
        .transition().duration(3000)
        .attr("cx", d => d.Xf)
        .attr("cy", d => d.Yf);
	} */

d3.csv("https://raw.githubusercontent.com/chumo/Data2Serve/master/transition_clusters.csv", d3.autoType)
	.then(processData)