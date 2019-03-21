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
directions:
- top 
- right
- bottom
- left
- vertical
- horizontal
---

## Flex

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

# Direction

## Horizontal
The browser default horizontal direction for a flex container is `row`.
You may wish to reverse this - or change at the appropriate screen size.

Use `.c-flex-row` to set a horizontal direction (the browser default not needed unless resetting at a different breakpoint), or `.c-flex-row-reverse` to start the horizontal direction from the opposite side.

<div class="docs-snippet">
<div class="c-d-flex c-flex-row c-bg-primary-3 c-text-white c-m-bottom-md">
  <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item 1</div>
  <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item 2</div>
  <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item 3</div>
</div>
<div class="c-d-flex c-flex-row-reverse c-bg-primary-3 c-text-white">
  <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item 1</div>
  <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item 2</div>
  <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item 3</div>
</div>


<div data-example="inline" class="hide-example c-m-top-md">
<div class="c-d-flex c-flex-row">
  <div>Flex item 1</div>
  <div>Flex item 2</div>
  <div>Flex item 3</div>
</div>
<div class="c-d-flex c-flex-row-reverse">
  <div>Flex item 1</div>
  <div>Flex item 2</div>
  <div>Flex item 3</div>
</div>
</div>
</div>

## Vertical
Use `.c-flex-column` to set a vertical direction, or `.c-flex-column-reverse`  to start the vertical direction from the opposite side.

<div class="docs-snippet">
<div class="c-d-flex c-flex-column c-bg-primary-3 c-text-white c-m-bottom-sm">
  <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item 1</div>
  <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item 2</div>
  <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item 3</div>
</div>
<div class="c-d-flex c-flex-column-reverse c-bg-primary-3 c-text-white">
  <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item 1</div>
  <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item 2</div>
  <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item 3</div>
</div>

<div data-example="inline" class="hide-example c-m-top-md">
<div class="c-d-flex c-flex-column">
  <div>Flex item 1</div>
  <div>Flex item 2</div>
  <div>Flex item 3</div>
</div>
<div class="c-d-flex c-flex-column-reverse">
  <div>Flex item 1</div>
  <div>Flex item 2</div>
  <div>Flex item 3</div>
</div>
</div>

</div>



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


# Wrap

Change how flex items wrap in a flex container. Choose from no wrapping at all (the browser default) with `.c-flex-nowrap`, wrapping with `.c-flex-wrap`, or reverse wrapping with `.c-flex-wrap-reverse`.


## Nowrap
<div class="docs-snippet">
  <div class="c-d-flex c-flex-nowrap c-bg-primary-3 c-text-white">
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
  <div class="c-d-flex c-flex-nowrap">
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


## Auto Wrap
<div class="docs-snippet">
  <div class="c-d-flex c-flex-wrap c-bg-primary-3 c-text-white">
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
  <div class="c-d-flex c-flex-wrap">
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


## Wrap Reverse

<div class="docs-snippet">
  <div class="c-d-flex c-flex-wrap-reverse c-bg-primary-3 c-text-white">
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
  <div class="c-d-flex c-flex-wrap-reverse">
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

# Justify
To control the spacing for items on the main axis, use the justify-content utilities. Choose from `start` (browser default), `end`, `center`, `space-between`, or `space-around`.

## Start

<div class="docs-snippet">
  <div class="c-d-flex c-justify-start c-bg-primary-3 c-text-white c-m-bottom-sm">
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>

<div data-example="inline" class="hide-example c-m-top-md">
  <div class="c-d-flex c-justify-start">
    <div>Flex item</div>
    <div>Flex item</div>
    <div>Flex item</div>
  </div>
</div>
</div> 

## End
<div class="docs-snippet">
  <div class="c-d-flex c-justify-end c-bg-primary-3 c-text-white c-m-bottom-sm">
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>

  <div data-example="inline" class="hide-example c-m-top-md">
    <div class="c-d-flex c-justify-end">
      <div>Flex item</div>
      <div>Flex item</div>
      <div>Flex item</div>
    </div>
  </div>
</div>


## Center

<div class="docs-snippet">
  <div class="c-d-flex c-justify-center c-bg-primary-3 c-text-white c-m-bottom-sm">
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>

<div data-example="inline" class="hide-example c-m-top-md">
  <div class="c-d-flex c-justify-center">
    <div>Flex item</div>
    <div>Flex item</div>
    <div>Flex item</div>
  </div>
</div>
</div> 


## Space Between
<div class="docs-snippet">

  <div class="c-d-flex c-justify-space-between c-bg-primary-3 c-text-white c-m-bottom-sm">
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>

<div data-example="inline" class="hide-example c-m-top-md">
  <div class="c-d-flex c-justify-space-between">
    <div>Flex item</div>
    <div>Flex item</div>
    <div>Flex item</div>
  </div>
</div>
</div> 


## Space Around
<div class="docs-snippet">

  <div class="c-d-flex c-justify-space-around c-bg-primary-3 c-text-white c-m-bottom-sm">
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>

<div data-example="inline" class="hide-example c-m-top-md">
  <div class="c-d-flex c-justify-space-around">
    <div>Flex item</div>
    <div>Flex item</div>
    <div>Flex item</div>
  </div>
</div>
</div> 


**Responsive variations also exist for `c-justify-content`.**

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
        <td><code class="c-text-sm">.c{{ bp.abbr }}-justify-start</code></td>
      {% endfor %}
    </tr>
    <tr>
      {% for bp in site.data.breakpoints %}
      <td><code class="c-text-sm">.c{{ bp.abbr }}-justify-end</code></td>
      {% endfor %}  
    </tr>
    <tr>
      {% for bp in site.data.breakpoints %}
      <td><code class="c-text-sm">.c{{ bp.abbr }}-justify-center</code></td>
      {% endfor %}  
    </tr>
    <tr>
      {% for bp in site.data.breakpoints %}
      <td><code class="c-text-sm">.c{{ bp.abbr }}-justify-space-between</code></td>
      {% endfor %}  
    </tr>
    <tr>
      {% for bp in site.data.breakpoints %}
      <td><code class="c-text-sm">.c{{ bp.abbr }}-justify-space-around</code></td>
      {% endfor %}  
    </tr>        
  </tbody>
</table>

---

# Align items

To align items along the cross-axis, use the align-content utilities. Choose from `top`, `bottom`, `center`, `baseline`, or `stretch` (browser default).

## Top

<div data-example> 
  <div class="c-d-flex c-align-top c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 100px">
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
</div>    

## Bottom

<div data-example>  
  <div class="c-d-flex c-align-bottom c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 100px">
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
</div>    

## Center

<div data-example>    
  <div class="c-d-flex c-align-center c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 100px">
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
</div>    

## Baseline

<div data-example>    
  <div class="c-d-flex c-align-baseline c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 100px">
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
</div>    

## Stretch

<div data-example>    
  <div class="c-d-flex c-align-stretch c-bg-primary-3 c-text-white" style="height: 100px">
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
</div>    

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


# Align self

To align flexbox items on an item-by-item basis, use the align-self utilities. Choose from the same options as `align-items`: `start`, `end`, `center`, `baseline`, or `stretch` (browser default).


## Top
<div data-example>  
  <div class="c-d-flex c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 100px">
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-align-self-top c-p-sm c-bg-primary c-bd c-bd-primary-9">Aligned flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
</div>   

## Bottom
<div data-example>    
  <div class="c-d-flex c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 100px">
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-align-self-bottom c-p-sm c-bg-primary c-bd c-bd-primary-9">Aligned flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
</div>   

## Center
<div data-example>    
  <div class="c-d-flex c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 100px">
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-align-self-center c-p-sm c-bg-primary c-bd c-bd-primary-9">Aligned flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
</div>   

## Baseline
<div data-example>    
  <div class="c-d-flex c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 100px">
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-align-self-baseline c-p-sm c-bg-primary c-bd c-bd-primary-9">Aligned flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
</div>   

## Stretch
<div data-example>    
  <div class="c-d-flex c-bg-primary-3 c-text-white" style="height: 100px">
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-align-self-stretch c-p-sm c-bg-primary c-bd c-bd-primary-9">Aligned flex item</div>
    <div class="c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
</div> 


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


# Align Content

To align items together on the cross-axis, use the align-content utilities. Choose from `start` (browser default), `end`, `center`, `between`, `around`, or `stretch`. 

In the demo below, we set the flex to wrap and added enough of flex items to wrap.

{% callout info %}
#### This is for multiple rows only

This property has no effect on single rows of flex items.
{% endcallout %}

## Start

<div data-example>  
  <div class="c-d-flex c-align-content-start c-flex-wrap c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 200px">
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
</div>  


## End

<div data-example>  
  <div class="c-d-flex c-align-content-end c-flex-wrap c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 200px">
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
</div>  



## Center

<div data-example>  
  <div class="c-d-flex c-align-content-center c-flex-wrap c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 200px">
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
</div>  

## Between

<div data-example>  
  <div class="c-d-flex c-align-content-between c-flex-wrap c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 200px">
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
</div>  


## Around

<div data-example>  
  <div class="c-d-flex c-align-content-around c-flex-wrap c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 200px">
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
</div>  


## Stretch

<div data-example>  
  <div class="c-d-flex c-align-content-stretch c-flex-wrap c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 200px">
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
</div>  

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


## Overview

These utility classes float an element to the left or right, or disable floating, based on the current viewport size using the [CSS `float` property](https://developer.mozilla.org/en-US/docs/Web/CSS/float). `!important` is included to avoid specificity issues. These use the same viewport breakpoints as our grid system.

## Classes

Toggle a float with a class:

<div data-example>
<div class="c-pull-left c-p-sm c-bg-primary c-text-white">Float left on all viewport sizes</div><br>
<div class="c-pull-right c-p-sm c-bg-primary c-text-white ">Float right on all viewport sizes</div><br>
<div class="c-pull-none c-p-sm c-bg-primary c-text-white c-m-top-lg">Don't float on all viewport sizes</div>
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
