---
layout: docs
title: Overview
description: Components and options for laying out your Cupcake project, including wrapping containers, a powerful grid system, a flexible media object, and responsive utility classes.
group: layout
toc: true
toc-flavors: false
---

## Containers

Containers are the most basic layout element in Cupcake and are required when using our default grid system. Choose from a responsive, fixed-width container (meaning its `max-width` changes at each breakpoint) or fluid-width (meaning it's `100%` wide all the time).

 The default container class - **`.c-container`** - is fluid-width. This will fill 100% of available width.

<div class="docs-example-row docs-example-row-flex">
{% example html %}
<div class="c-container docs- c-bg-danger">
  <div class="c-row">
  </div>
</div>
{% endexample %}
</div>


 Using the class - **`.c-container-fixed`** - will give you a responsive container that has a fixed width. The width is responsive and will change based on the breakpoint.

 {% callout info %}
#### Note: You need to resize your screen to see the below.
{% endcallout %}


<div class="docs-example-row docs-example-row-flex">
{% example html %}
<div class="c-container-fixed">
  <div class="c-row">
  </div>
</div>
{% endexample %}
</div>


## Container breakpoints

<table class="c-table c-table-transparent c-table-border-horizontal">
  <thead>
    <tr>
      <th>Screen Width</th>
      <th>
        Min Width: 576px
      </th>
      <th>
        Min Width: 768px
      </th>
      <th>
        Min Width: 992px
      </th>
      <th>
        Min Width: 1200px
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Container Max Width</th>
      <td><code class="c-text-success c-text-bold">540px</code></td>
      <td><code class="c-text-success c-text-bold">720px</code></td>
      <td><code class="c-text-success c-text-bold">960px</code></td>
      <td><code class="c-text-success c-text-bold">1140px</code></td>
    </tr>
  </tbody>
</table>


## Responsive breakpoints

<table class="c-table c-table-transparent c-table-border-horizontal">
  <thead>
    <tr>
      <th></th>
      <th>
        XS &lt; 576px
      </th>
      <th>
        SM &ge; 576px
      </th>
      <th>
        MD &ge; 768px
      </th>
      <th>
        LG &ge; 992px
      </th>
      <th>
        XL &ge; 1200px
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Class prefix</th>
      <td><code class="c-text-success c-text-bold">.c-col-</code></td>
      <td><code class="c-text-success c-text-bold">.c-col-sm-</code></td>
      <td><code class="c-text-success c-text-bold">.c-col-md-</code></td>
      <td><code class="c-text-success c-text-bold">.c-col-lg-</code></td>
      <td><code class="c-text-success c-text-bold">.c-col-xl-</code></td>
    </tr>
  </tbody>
</table>

