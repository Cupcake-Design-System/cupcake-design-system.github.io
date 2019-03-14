---
title: Data Visualization
description: Recommendations to create effective visualizations within Ipreo products
group: elements
colors:
- primary
- success
- warning
- danger
tabs: 
- Getting Started
- Comparison 
- Relationship
- Distribution
tab-class: fullwidth
---

<div id="getting-started" class="docs-tabs-content" markdown="1">

### Before you start
A complete understanding of the data you have is crucial before building visualizations. Referring to this guide will help you transform your data and apply appropriate branding properties according to Ipreo Brand Guidelines.
Knowing your Audience
Lean in to the perspective of your audience or more specifically: their persona. What do they already know and what new information do you want them to learn from your visualizations? The foundation of a good visualization are clear objectives!
### Story Telling 
The purpose of visualizations are to tell a story with data so think of the critical points you are trying to emphasize. What supporting information does it require? Do you want to compare information or show trend over time? Note the assumptions you’re making on the user’s part and define the purpose of your story.
### Context at first glance
A common misconception with data visualization is the assumption the audience knows too much. If you adhere to the following guidelines you can ensure your visualization can be understood at least at a high level:
- Title all vsiualizations
- Properly label all axes
- Use the same units throughout
- Do NOT overload data- use whitespace!

### Sketches and Prototyping
Before going through the examples, it may be beneficial to sketch out ideas with pen and paper. Defining different ways to tell your story will help land on the best visualization. From there, simple prototyping with software


{% include guide-img-jpg.html img='dataviz/graph'%}

</div>

<div id="comparison" class="docs-tabs-content" markdown="1">

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
</div>


<div id="relationship" class="docs-tabs-content" markdown="1">

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

</div>


<div id="distribution" class="docs-tabs-content" markdown="1">

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

</div>


