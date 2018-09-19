---
layout: docs
title: Flex
description: Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.
group: utilities
toc: true
toc-flavors: false
---

## Flex

These flexbox-based utilities can replace the need for a grid system in many instances, and provide powerful constraint-based micro-layout solutions. 


To set a container to display flex, add the .c-d-flex class.
{% example html %}
<div class="c-d-flex docs- c-p-sm c-bg-success c-text-white">I'm a flexbox container!</div>
{% endexample %}

To set a container to inline-flex, use the class .c-d-inline-flex.
{% example html %}
<div class="c-d-inline-flex docs- c-p-sm c-bg-primary c-text-white">I'm an inline flexbox container!</div>
{% endexample %}


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

{% example html %}
<div class="c-d-flex c-flex-row docs- c-bg-primary-3 c-text-white c-m-bottom-md">
  <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item 1</div>
  <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item 2</div>
  <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item 3</div>
</div>
<div class="c-d-flex c-flex-row-reverse docs- c-bg-primary-3 c-text-white">
  <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item 1</div>
  <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item 2</div>
  <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item 3</div>
</div>
{% endexample %}

## Vertical
Use `.c-flex-column` to set a vertical direction, or `.c-flex-column-reverse`  to start the vertical direction from the opposite side.

{% example html %}
<div class="c-d-flex c-flex-column docs- c-bg-primary-3 c-text-white c-m-bottom-sm">
  <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item 1</div>
  <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item 2</div>
  <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item 3</div>
</div>
<div class="c-d-flex c-flex-column-reverse docs- c-bg-primary-3 c-text-white">
  <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item 1</div>
  <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item 2</div>
  <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item 3</div>
</div>
{% endexample %}


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
{% example html %}
  <div class="c-d-flex c-flex-nowrap docs- c-bg-primary-3 c-text-white">
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
{% endexample %}


## Auto Wrap
{% example html %}
  <div class="c-d-flex c-flex-wrap docs- c-bg-primary-3 c-text-white">
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
{% endexample %}


## Wrap Reverse

{% example html %}
  <div class="c-d-flex c-flex-wrap-reverse docs- c-bg-primary-3 c-text-white">
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
{% endexample %}


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
{% example html %}
  <div class="c-d-flex c-justify-start docs- c-bg-primary-3 c-text-white c-m-bottom-sm">
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
{% endexample %}  

## End
{% example html %}
  <div class="c-d-flex c-justify-end docs- c-bg-primary-3 c-text-white c-m-bottom-sm">
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
{% endexample %}  

## Center
{% example html %}  
  <div class="c-d-flex c-justify-center docs- c-bg-primary-3 c-text-white c-m-bottom-sm">
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
{% endexample %}  

## Space Between
{% example html %}  
  <div class="c-d-flex c-justify-space-between docs- c-bg-primary-3 c-text-white c-m-bottom-sm">
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
{% endexample %}  

## Space Around
{% example html %}  
  <div class="c-d-flex c-justify-space-around docs- c-bg-primary-3 c-text-white">
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
{% endexample %}  


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

{% example html %} 
  <div class="c-d-flex c-align-top docs- c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 100px">
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
{% endexample %}    

## Bottom

{% example html %}  
  <div class="c-d-flex c-align-bottom docs- c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 100px">
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
{% endexample %}    

## Center

{% example html %}    
  <div class="c-d-flex c-align-center docs- c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 100px">
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
{% endexample %}    

## Baseline

{% example html %}    
  <div class="c-d-flex c-align-baseline docs- c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 100px">
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
{% endexample %}    

## Stretch

{% example html %}    
  <div class="c-d-flex c-align-stretch docs- c-bg-primary-3 c-text-white" style="height: 100px">
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
{% endexample %}    

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
{% example html %}  
  <div class="c-d-flex docs- c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 100px">
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-align-self-top docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Aligned flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
{% endexample %}   

## Bottom
{% example html %}    
  <div class="c-d-flex docs- c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 100px">
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-align-self-bottom docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Aligned flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
{% endexample %}   

## Center
{% example html %}    
  <div class="c-d-flex docs- c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 100px">
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-align-self-center docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Aligned flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
{% endexample %}   

## Baseline
{% example html %}    
  <div class="c-d-flex docs- c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 100px">
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-align-self-baseline docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Aligned flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
{% endexample %}   

## Stretch
{% example html %}    
  <div class="c-d-flex docs- c-bg-primary-3 c-text-white" style="height: 100px">
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="c-align-self-stretch docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Aligned flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
{% endexample %} 


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

{% example html %}  
  <div class="c-d-flex c-align-content-start c-flex-wrap docs- c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 200px">
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
{% endexample %}  


## End

{% example html %}  
  <div class="c-d-flex c-align-content-end c-flex-wrap docs- c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 200px">
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
{% endexample %}  



## Center

{% example html %}  
  <div class="c-d-flex c-align-content-center c-flex-wrap docs- c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 200px">
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
{% endexample %}  

## Between

{% example html %}  
  <div class="c-d-flex c-align-content-between c-flex-wrap docs- c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 200px">
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
{% endexample %}  


## Around

{% example html %}  
  <div class="c-d-flex c-align-content-around c-flex-wrap docs- c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 200px">
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
{% endexample %}  


## Stretch

{% example html %}  
  <div class="c-d-flex c-align-content-stretch c-flex-wrap docs- c-bg-primary-3 c-text-white c-m-bottom-sm" style="height: 200px">
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
    <div class="docs- c-p-sm c-bg-primary c-bd c-bd-primary-9">Flex item</div>
  </div>
{% endexample %}  

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
