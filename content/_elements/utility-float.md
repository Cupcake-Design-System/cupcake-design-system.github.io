---
title: Float
description: Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.
category: CSS Utilities
sizes:
- 0 
- xs
- sm
- md
- lg
- xl
- xxl
directions:
- top 
- right
- bottom
- left
- vertical
- horizontal
---

## Overview

These utility classes float an element to the left or right, or disable floating, based on the current viewport size using the [CSS `float` property](https://developer.mozilla.org/en-US/docs/Web/CSS/float). `!important` is included to avoid specificity issues. These use the same viewport breakpoints as our grid system.

## Classes

Toggle a float with a class:

<div data-example>
<div class="c-pull-left c-text-white">Float left on all viewport sizes</div><br>
<div class="c-pull-right">Float right on all viewport sizes</div><br>
<div class="c-pull-none c-m-top-lg">Don't float on all viewport sizes</div>
</div>

## Responsive

Responsive variations also exist for each `float` value.

<div data-example>
<div class="c-sm-pull-left c-p-sm c-bg-primary c-text-white">Float left on viewports sized SM (small) or wider</div><br>
<div class="c-md-pull-left c-p-sm c-bg-primary c-text-white">Float left on viewports sized MD (medium) or wider</div><br>
<div class="c-lg-pull-left c-p-sm c-bg-primary c-text-white">Float left on viewports sized LG (large) or wider</div><br>
<div class="c-xl-pull-left c-p-sm c-bg-primary c-text-white">Float left on viewports sized XL (extra-large) or wider</div><br>
</div>


Here are all the support classes:

<table class="c-table c-table-transparent">
  <thead>
    <tr>
    {% for bp in site.data.breakpoints %}
      <th>Min-Width: {{ bp.min-width }}</th>
    {% endfor %}
    </tr>
  </thead>
  <tbody>
    <tr>
      {% for bp in site.data.breakpoints %}
        <td><code class="c-text-sm">.c{{ bp.abbr }}-pull-left</code></td>
      {% endfor %}
    </tr>
    <tr>
      {% for bp in site.data.breakpoints %}
      <td><code class="c-text-sm">.c{{ bp.abbr }}-pull-right</code></td>
      {% endfor %}  
    </tr>
    <tr>
      {% for bp in site.data.breakpoints %}
      <td><code class="c-text-sm">.c{{ bp.abbr }}-pull-none</code></td>
      {% endfor %}  
    </tr>  
  </tbody>
</table>
