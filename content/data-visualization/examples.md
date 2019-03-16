---
title: Examples
layout: docs
description: General guidelines for data visualization
group: data-visualization
toc: true
toc-flavors: false
colors:
- primary
- success
- warning
- danger
---

{% include guide-img-jpg.html img='dataviz/graph'%}

### Comparison Graph Types
Comparison graphs and data visualizations are the most common method of analysis. Implied by the name, these visualizations can easily compare values between 2 or more data points. These include bar charts, column graphs, and time trends. 
Comparison graphs would be used to answer these questions:
- Which value between 2 or more data points is higher/lower?
- Does the user need to quickly find and read key values from a list (i.e. cost per quarter)?
- Does the user need to see categories ranked (i.e. products from most to least profitable)?
- What trends over time does the data suggest (gaps, spikes, outliers)?

<div class="c-row">
  <div class="c-col-12 c-col-lg-2">
{% include guide-img-jpg.html img='dataviz/Bar-Chart'%} 
  </div>
	  <div class="c-col-12 c-col-lg-2">
{% include guide-img-jpg.html img='dataviz/Radial-Bar-Chart'%}
  </div>
	  <div class="c-col-12 c-col-lg-2">
{% include guide-img-jpg.html img='dataviz/Column-Chart'%}
  </div>
	  <div class="c-col-12 c-col-lg-2">
{% include guide-img-jpg.html img='dataviz/Line-Chart'%}
  </div>
  	  <div class="c-col-12 c-col-lg-2">
{% include guide-img-jpg.html img='dataviz/Column-Histogram'%}
  </div>
  	  <div class="c-col-12 c-col-lg-2">
{% include guide-img-jpg.html img='dataviz/Choropleth-Map'%}
  </div>
</div>

### Relationship Types
Relationship graphs, implied by the name, show specific relationships, correlation, or connections between 2 or more variables. On a high level, these charts demonstrate how a variable such as price does or does not affect another variable such as demand and whether that relationship is positive or negative. These visualizations can be given another dimenstion with bubble charts that show the scale of the relationship or plots over time. Chart types include scatter plots, bubble, line, and table. 
Relationship graphs could answer:
- Does variable a depend on variable b?
- Is there a positive or negative relationship between my two variables?
- Does the user need to see 3 to 4 dimensions of analysis: correlation, clusters, outliers, timeline?

<div class="c-row">
  <div class="c-col-12 c-col-lg-4">
{% include guide-img-jpg.html img='dataviz/Scatter-Chart'%} 
  </div>
	  <div class="c-col-12 c-col-lg-4">
{% include guide-img-jpg.html img='dataviz/Bubble-Chart'%}
  </div>
	  <div class="c-col-12 c-col-lg-4">
{% include guide-img-jpg.html img='dataviz/Network-Graph'%}
  </div>
</div>

### Distribution Graph Types
 Distribution analaysis visualizes data to see what data deviates from the norm and can also be used geographically to demonstrate data over a map. Charts used in this category include histograms, line and area charts, scatter plots, data tables, and map charts.
 Distribution graphs can answer:
 - What correlation between a cause and effect of a variable?
 - Does my user need to spot bugs or constraints in their system?
 - Does my consumer need a visual for a variable such as profits over different categories such as clients?

 <div class="c-row">
  <div class="c-col-12 c-col-lg-3">
{% include guide-img-jpg.html img='dataviz/Column-Histogram'%} 
  </div>
	  <div class="c-col-12 c-col-lg-3">
{% include guide-img-jpg.html img='dataviz/Line-Histogram'%}
  </div>
	  <div class="c-col-12 c-col-lg-3">
{% include guide-img-jpg.html img='dataviz/Heatmap-Chart'%}
  </div>
	  <div class="c-col-12 c-col-lg-3">
{% include guide-img-jpg.html img='dataviz/Scatter-Chart'%}
  </div>
</div>

### Composition Types
Composition graphs are used to show trends in desnse sets of data. This type should be used to show how individual parts make up a whole to show the significance of each part in regards to the total value. Charts in this type include scatter plots, bubble, node graphs, pie charts, and stacked area graphs.
Composition graphs can answer:
- How does this category of data affect my overall data set?

When using stacked or waterfall graphs make sure to emphasize the intent and data the visualization is depicting as these often can be misunderstood.

<div class="c-row">
  <div class="c-col-12 c-col-lg-2">
{% include guide-img-jpg.html img='dataviz/Stacked-100-Column-Chart'%} 
  </div>
	  <div class="c-col-12 c-col-lg-2">
{% include guide-img-jpg.html img='dataviz/Stacked-Area-Chart'%}
  </div>
	  <div class="c-col-12 c-col-lg-2">
{% include guide-img-jpg.html img='dataviz/Stacked-100-Area-Chart'%}
  </div>
  	  <div class="c-col-12 c-col-lg-2">
{% include guide-img-jpg.html img='dataviz/Pie-Chart'%}
  </div>
  	  <div class="c-col-12 c-col-lg-2">
{% include guide-img-jpg.html img='dataviz/Waterfall-Chart'%}
  </div>
  <div class="c-col-12 c-col-lg-2">
{% include guide-img-jpg.html img='dataviz/Tree-Map-Chart'%}
  </div>
</div>