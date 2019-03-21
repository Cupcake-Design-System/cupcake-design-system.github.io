---
title: Flex
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
directions-horizontal:
- row 
- row-reverse
directions-vertical:
- column
- column-reverse
wrap:
- wrap 
- no-wrap
- wrap-reverse
align:
- top
- bottom
- baseline
- center
- stretch
align-self:
- top
- bottom
- baseline
- center
- stretch
align-content:
- start
- end
- center
- between
- around
justify:
- start
- end
- center
- space-between
- space-around
tabs:
- Flex
- Direction 
- Wrap
- Justify
- Align Items
- Align Self
- Align Content
---

<div id="flex" class="docs-tabs-content" markdown="1">

## Flex Overview

These flexbox-based utilities can replace the need for a grid system in many instances, and provide powerful constraint-based micro-layout solutions. 

To set a container to display flex, add the .c-d-flex class.
<div class="docs-snippet">
<div class="c-d-flex c-p-sm c-bg-success c-text-white">I'm a flexbox container!</div>

<div data-example="inline" class="hide-example c-m-top-md">
<div class="c-d-flex">I'm a flexbox container!</div>
</div>

</div>

---

To set a container to inline-flex, use the class .c-d-inline-flex.

<div class="docs-snippet">
<div class="c-d-inline-flex c-p-sm c-bg-primary c-text-white">I'm an inline flexbox container!</div>


<div data-example="inline" class="hide-example c-m-top-md">
<div class="c-d-inline-flex">I'm a flexbox container!</div>
</div>

</div>

---

**Inevitably you'll wish to adjust flex at various breakpoints. You can do so with the responsive variations.**

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
        <td><code class="c-text-sm">.c{{ bp.abbr }}-d-flex</code></td>
      {% endfor %}
    </tr>
    <tr>
      {% for bp in site.data.breakpoints %}
        <td><code class="c-text-sm">.c{{ bp.abbr }}-d-inline-flex</code></td>
      {% endfor %}
    </tr>   
  </tbody>
</table>

</div>



<div id="direction" class="docs-tabs-content" markdown="1">

# Direction

## Horizontal
The browser default horizontal direction for a flex container is `row`.
You may wish to reverse this - or change at the appropriate screen size.

Use `.c-flex-row` to set a horizontal direction (the browser default not needed unless resetting at a different breakpoint), or `.c-flex-row-reverse` to start the horizontal direction from the opposite side.


{% for direction in page.directions-horizontal %}
<div class="docs-snippet c-m-bottom-md">
  <div class="c-d-flex c-flex-{{ direction }} c-bg-primary-3 c-text-white c-m-bottom-md">
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item 1</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item 2</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item 3</div>
  </div>

  <div data-example="inline" class="hide-example c-m-top-md">
    <div class="c-d-flex c-flex-{{ direction }}">
      <div>Flex item 1</div>
      <div>Flex item 2</div>
      <div>Flex item 3</div>
    </div>
  </div>
</div>
{% endfor %}



## Vertical
Use `.c-flex-column` to set a vertical direction, or `.c-flex-column-reverse`  to start the vertical direction from the opposite side.

{% for direction in page.directions-vertical %}
<div class="docs-snippet c-m-bottom-md">
  <div class="c-d-flex c-flex-{{ direction }} c-bg-primary-3 c-text-white c-m-bottom-md">
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item 1</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item 2</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item 3</div>
  </div>

  <div data-example="inline" class="hide-example c-m-top-md">
    <div class="c-d-flex c-flex-{{ direction }}">
      <div>Flex item 1</div>
      <div>Flex item 2</div>
      <div>Flex item 3</div>
    </div>
  </div>
</div>
{% endfor %}


**Responsive variations also exist for `flex-direction`.**

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
        <td><code class="c-text-sm">.c{{ bp.abbr }}-flex-row</code></td>
      {% endfor %}
    </tr>
    <tr>
      {% for bp in site.data.breakpoints %}
        <td><code class="c-text-sm">.c{{ bp.abbr }}-flex-row-reverse</code></td>
      {% endfor %}
    </tr>
    <tr>
      {% for bp in site.data.breakpoints %}
      <td><code class="c-text-sm">.c{{ bp.abbr }}-flex-column</code></td>
      {% endfor %}  
    </tr>
    <tr>
      {% for bp in site.data.breakpoints %}
      <td><code class="c-text-sm">.c{{ bp.abbr }}-flex-column-reverse</code></td>
      {% endfor %}  
    </tr>       
  </tbody>
</table>

---

</div>

<div id="wrap" class="docs-tabs-content" markdown="1">

Change how flex items wrap in a flex container. Choose from no wrapping at all (the browser default) with `.c-flex-nowrap`, wrapping with `.c-flex-wrap`, or reverse wrapping with `.c-flex-wrap-reverse`.


{% for item in page.wrap %}
## {{ item | capitalize }}

<div class="docs-snippet c-m-bottom-md">

  <div class="c-d-flex c-flex-{{ item }} c-bg-primary-3 c-text-white">
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>

  <div data-example="inline" class="hide-example c-m-top-md">
    <div class="c-d-flex c-flex-{{ item }}">
      <div>Flex item</div>
      <div>Flex item</div>
      <div>Flex item</div>
      <div>Flex item</div>
      <div>Flex item</div>
      <div>Flex item</div>
      <div>Flex item</div>
      <div>Flex item</div>
      <div>Flex item</div>
      <div>Flex item</div>
      <div>Flex item</div>
      <div>Flex item</div>
      <div>Flex item</div>
      <div>Flex item</div>
      <div>Flex item</div>
    </div>
  </div>

</div>
{% endfor %}


**Responsive variations also exist for `c-flex-wrap`.**

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
        <td><code class="c-text-sm">.c{{ bp.abbr }}-flex-nowrap</code></td>
      {% endfor %}
    </tr>
    <tr>
      {% for bp in site.data.breakpoints %}
      <td><code class="c-text-sm">.c{{ bp.abbr }}-flex-wrap</code></td>
      {% endfor %}  
    </tr>
    <tr>
      {% for bp in site.data.breakpoints %}
      <td><code class="c-text-sm">.c{{ bp.abbr }}-flex-wrap-reverse</code></td>
      {% endfor %}  
    </tr>       
  </tbody>
</table>

---

</div>

<div id="justify" class="docs-tabs-content" markdown="1">

# Justify
To control the spacing for items on the main axis, use the justify-content utilities. Choose from `start` (browser default), `end`, `center`, `space-between`, or `space-around`.

{% for item in page.justify %}
### {{ item | capitalize }}

<div class="docs-snippet c-m-bottom-md">

  <div class="c-d-flex c-flex-{{ item }} c-bg-primary-3 c-text-white">
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>

  <div data-example="inline" class="hide-example c-m-top-md">
    <div class="c-d-flex c-flex-{{ item }}">
      <div>Flex item</div>
      <div>Flex item</div>
      <div>Flex item</div>
    </div>
  </div>

</div>
{% endfor %}



</div>


<div id="align-items" class="docs-tabs-content" markdown="1">

# Align items

To align items along the cross-axis, use the align-content utilities. Choose from `top`, `bottom`, `center`, `baseline`, or `stretch` (browser default).


{% for item in page.align %}
### {{ item | capitalize }}

<div class="docs-snippet c-m-bottom-md">

  <div class="c-d-flex c-align-{{ item }} c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 100px">
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>

  <div data-example="inline" class="hide-example c-m-top-md">
  <div class="c-d-flex c-align-{{ item }} c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 100px">
      <div>Flex item</div>
      <div>Flex item</div>
      <div>Flex item</div>
    </div>
  </div>

</div>
{% endfor %}
  

**Responsive variations also exist for `align`.**

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
        <td><code class="c-text-sm">.c{{ bp.abbr }}-align-start</code></td>
      {% endfor %}
    </tr>
    <tr>
      {% for bp in site.data.breakpoints %}
      <td><code class="c-text-sm">.c{{ bp.abbr }}-align-end</code></td>
      {% endfor %}  
    </tr>
    <tr>
      {% for bp in site.data.breakpoints %}
      <td><code class="c-text-sm">.c{{ bp.abbr }}-align-center</code></td>
      {% endfor %}  
    </tr>
    <tr>
      {% for bp in site.data.breakpoints %}
      <td><code class="c-text-sm">.c{{ bp.abbr }}-align-baseline</code></td>
      {% endfor %}  
    </tr>
    <tr>
      {% for bp in site.data.breakpoints %}
      <td><code class="c-text-sm">.c{{ bp.abbr }}-align-stretch</code></td>
      {% endfor %}  
    </tr>        
  </tbody>
</table>

---

</div>

<div id="align-self" class="docs-tabs-content" markdown="1">

# Align self

To align flexbox items on an item-by-item basis, use the align-self utilities. Choose from the same options as `align-items`: `top`, `bottom`, `center`, `baseline`, or `stretch` (browser default).


{% for item in page.align-self %}
### {{ item | capitalize }}

<div class="docs-snippet c-m-bottom-md">

  <div class="c-d-flex c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 100px">
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-align-self-{{ item }} c-p-sm c-bg-primary c-bd c-bd-primary-9">Aligned flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>

  <div data-example="inline" class="hide-example c-m-top-md">
    <div class="c-d-flex">
      <div>Flex item</div>
      <div class="c-align-self-{{ item }}">Aligned flex item</div>
      <div>Flex item</div>
    </div>
  </div>

</div>
{% endfor %}


**Responsive variations also exist for `align-self`.**

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
        <td><code class="c-text-sm">.c{{ bp.abbr }}-align-self-start</code></td>
      {% endfor %}
    </tr>
    <tr>
      {% for bp in site.data.breakpoints %}
      <td><code class="c-text-sm">.c{{ bp.abbr }}-align-self-end</code></td>
      {% endfor %}  
    </tr>
    <tr>
      {% for bp in site.data.breakpoints %}
      <td><code class="c-text-sm">.c{{ bp.abbr }}-align-self-center</code></td>
      {% endfor %}  
    </tr>
    <tr>
      {% for bp in site.data.breakpoints %}
      <td><code class="c-text-sm">.c{{ bp.abbr }}-align-self-baseline</code></td>
      {% endfor %}  
    </tr>
    <tr>
      {% for bp in site.data.breakpoints %}
      <td><code class="c-text-sm">.c{{ bp.abbr }}-align-self-stretch</code></td>
      {% endfor %}  
    </tr>        
  </tbody>
</table>


---

</div>



<div id="align-content" class="docs-tabs-content" markdown="1">

# Align Content

To align items together on the cross-axis, use the align-content utilities. Choose from `start` (browser default), `end`, `center`, `between`, `around`, or `stretch`. 

In the demo below, we set the flex to wrap and added enough of flex items to wrap.

{% callout info %}
#### This is for multiple rows only

This property has no effect on single rows of flex items.
{% endcallout %}


{% for item in page.align-content %}
### {{ item | capitalize }}

<div class="docs-snippet c-m-bottom-md">

  <div class="c-d-flex c-align-content-{{ item }} c-flex-wrap c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 200px">
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>

  <div data-example="inline" class="hide-example c-m-top-md">
  <div class="c-d-flex c-align-content-{{ item }}">
    <div>Flex item</div>
    <div>Flex item</div>
    <div>Flex item</div>
    <div>Flex item</div>
    <div>Flex item</div>
    <div>Flex item</div>
    <div>Flex item</div>
    <div>Flex item</div>
    <div>Flex item</div>
    <div>Flex item</div>
    <div>Flex item</div>
    <div>Flex item</div>
    <div>Flex item</div>
    <div>Flex item</div>
    <div>Flex item</div>
  </div>
  </div>

</div>
{% endfor %}

**Responsive variations also exist for `.c-align-content`.**

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
        <td><code class="c-text-sm">.c{{ bp.abbr }}-align-content-start</code></td>
      {% endfor %}
    </tr>
    <tr>
      {% for bp in site.data.breakpoints %}
      <td><code class="c-text-sm">.c{{ bp.abbr }}-align-content-end</code></td>
      {% endfor %}  
    </tr>
    <tr>
      {% for bp in site.data.breakpoints %}
      <td><code class="c-text-sm">.c{{ bp.abbr }}-align-content-center</code></td>
      {% endfor %}  
    </tr>
    <tr>
      {% for bp in site.data.breakpoints %}
      <td><code class="c-text-sm">.c{{ bp.abbr }}-align-content-around</code></td>
      {% endfor %}  
    </tr>
    <tr>
      {% for bp in site.data.breakpoints %}
      <td><code class="c-text-sm">.c{{ bp.abbr }}-align-content-stretch</code></td>
      {% endfor %}  
    </tr>        
  </tbody>
</table>

---
<br>

To learn more about flexbox, see [Using CSS flexible boxes](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) and the [CSS Flexible Box Layout Module Specification](https://www.w3.org/TR/css-flexbox-1/).

</div>