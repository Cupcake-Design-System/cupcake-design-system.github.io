---
title: Utilities
description: Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.
group: elements
tabs: 
- Borders
- Display 
- Flex
- Float
- Spacing
tab-class: fullwidth
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

<div id="borders" class="docs-tabs-content" markdown="1">

## Borders
 {% callout warning %}
#### Note: Borders in examples are made larger and more pronounced for demo purposes.
{% endcallout %}

Add classes to an element to remove all borders or some borders.

<div class="docs-example-border-utils">
{% example html %}
<span class="c-bd-0"></span>
<span class="c-bd"></span>
<span class="c-bd-top"></span>
<span class="c-bd-right"></span>
<span class="c-bd-bottom"></span>
<span class="c-bd-left"></span>
{% endexample %}
</div>

## Border color

Change the border color using utilities built on our theme colors.

<div class="docs-example-border-color-utils">
{% example html %}
{% for color in site.data.theme-colors %}
<span class="c-bd c-bd-{{ color.name }}"></span>{% endfor %}
{% endexample %}
</div>

</div>


<div id="display" class="docs-tabs-content" markdown="1">

# Display Properties

Single purpose classes for setting the display of an element at any breakpoint.

*The display property defines box’s display type, which consists of the two basic qualities of how an element generates boxes: the inner display type, which defines the kind of formatting context it generates, dictating how its descendant boxes are laid out. the outer display type, which dictates how the box participates in its parent formatting context.* - css3 Display Module Spec.

## Display Block
Block will inherently set width to 100% of its parent element. It will also cause a line break, even if the declared width doesn’t take up the full width of the parent.

{% example html %}
<span class="c-d-block docs- c-p-sm c-bg-primary c-text-white">c-d-block</span>
{% endexample %}

## Display Inline Block
Inline-block will wrap around content inline. It also allows you to set height and width properties on the element, which display inline does not allow you to do. It does render the white-space between elements, so if you set width: 25% to four elements they will not just render as a 4 column layout by default.

{% example html %}
<span class="c-d-inline-block docs- c-p-sm c-bg-primary c-text-white">c-d-inline-block</span>
<span class="c-d-inline-block docs- c-p-sm c-bg-success c-text-white">c-d-inline-block</span>
<span class="c-d-inline-block docs- c-p-sm c-bg-warning c-text-white">c-d-inline-block</span>
<span class="c-d-inline-block docs- c-p-sm c-bg-danger c-text-white">c-d-inline-block</span>
{% endexample %}


## Display Inline 
Inline doesn’t respect height or width values. It does not render white space between elements.

{% example html %}
<span class="c-d-inline docs- c-p-sm c-bg-primary c-text-white">c-d-inline</span>
<span class="c-d-inline docs- c-p-sm c-bg-success c-text-white">c-d-inline</span>
<span class="c-d-inline docs- c-p-sm c-bg-warning c-text-white">c-d-inline</span>
<span class="c-d-inline docs- c-p-sm c-bg-danger c-text-white">c-d-inline</span>
{% endexample %}


## Display Table 
The display table can be combined with display table-cell to render a table without table markup. This can be useful for vertically aligning content or for auto-calculating a variable number of table cells.

{% example html %}
<div class="c-d-table">
  <span class="c-d-table-cell docs- c-p-sm c-bg-primary c-text-white">display</span>
  <span class="c-d-table-cell docs- c-p-sm c-bg-success c-text-white">table</span>
  <span class="c-d-table-cell docs- c-p-sm c-bg-warning c-text-white">will automatically</span>
  <span class="c-d-table-cell docs- c-p-sm c-bg-danger c-text-white">compute cell width</span>
</div>
{% endexample %}


## Syntax

Display utility classes that apply to all breakpoints, from `sm` to `xl`, have no breakpoint abbreviation in them. These classes start with a `min-width: 0;`. The remaining breakpoints, however, do include a breakpoint abbreviation.

This approach is adapted from Tachyons, Foundation 6 and Bootstrap 4.


As such, the classes are named using the format:

* `.c-d-{value}` for `xs`
* `.c-{breakpoint}-d-{value}` for `sm`, `md`, `lg`, and `xl`.


Supported display values are -

* `none`
* `inline`
* `inline-block`
* `block`
* `table`
* `table-cell`
* `table-row`
* `flex`
* `inline-flex`

The classes effect screen widths within the given breakpoint *or larger*. 

For example, `.c-lg-d-none` sets `display: none;` on both `lg` and `xl` screens.

---

# Advanced Usage

## Hiding Elements

To hide elements simply use the `.c-d-none` class or one of the `.c-{sm,md,lg,xl}-d-none` classes for any responsive screen variation.

| Screen Size        | Class |
| ---                | --- |
| Hidden on all      | `.c-d-none` |
| Hidden only on xs  | `.c-d-none .c-sm-d-block` |
| Hidden only on sm  | `.c-sm-d-none .c-md-d-block` |
| Hidden only on md  | `.c-md-d-none .c-lg-d-block` |
| Hidden only on lg  | `.c-lg-d-none .c-xl-d-block` |
| Hidden only on xl  | `.c-xl-d-none` |
{: .c-table}


## Showing Elements

To show an element only on a given interval of screen sizes you can combine one `.c-*-d-none` class with a `.c-*-d-*` class, for example `.c-d-none .c-md-d-block .c-xl-d-none` will hide the element for all screen sizes except on medium and large devices.

| Screen Size        | Class |
| ---                | --- |
| Visible on all     | `.c-d-block` |
| Visible only on xs | `.c-d-block .c-sm-d-none` |
| Visible only on sm | `.c-d-none .c-sm-d-block .c-md-d-none` |
| Visible only on md | `.c-d-none .c-md-d-block .c-lg-d-none` |
| Visible only on lg | `.c-d-none .c-lg-d-block .c-xl-d-none` |
| Visible only on xl | `.c-d-none .c-xl-d-block` |
{: .c-table}

</div>

<div id="flex" class="docs-tabs-content" markdown="1">

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

</div>


<div id="float" class="docs-tabs-content" markdown="1">


## Overview

These utility classes float an element to the left or right, or disable floating, based on the current viewport size using the [CSS `float` property](https://developer.mozilla.org/en-US/docs/Web/CSS/float). `!important` is included to avoid specificity issues. These use the same viewport breakpoints as our grid system.

## Classes

Toggle a float with a class:

{% example html %}
<div class="c-pull-left docs- c-p-sm c-bg-primary c-text-white">Float left on all viewport sizes</div><br>
<div class="c-pull-right docs- c-p-sm c-bg-primary c-text-white ">Float right on all viewport sizes</div><br>
<div class="c-pull-none docs- c-p-sm c-bg-primary c-text-white c-m-top-lg">Don't float on all viewport sizes</div>
{% endexample %}

## Responsive

Responsive variations also exist for each `float` value.

{% example html %}
<div class="c-sm-pull-left docs- c-p-sm c-bg-primary c-text-white">Float left on viewports sized SM (small) or wider</div><br>
<div class="c-md-pull-left docs- c-p-sm c-bg-primary c-text-white">Float left on viewports sized MD (medium) or wider</div><br>
<div class="c-lg-pull-left docs- c-p-sm c-bg-primary c-text-white">Float left on viewports sized LG (large) or wider</div><br>
<div class="c-xl-pull-left docs- c-p-sm c-bg-primary c-text-white">Float left on viewports sized XL (extra-large) or wider</div><br>
{% endexample %}


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

</div>


<div id="spacing" class="docs-tabs-content" markdown="1">


## How it works

Spacing comes in two flavors. Depending on borders and background colors, the difference between padding and margin can be invisible to the naked eye of the user. But to a developer, they serve different roles. Most codebases lack a ratio based scale and instead are littered with values that are just magic numbers. This is bad.

Good design is based on math. Certain patterns and ratios are so prevelant in nature and music that they can’t be denied as elegant design solutions. Even in the 18th century, pages in books were designed with ratios. In the 21st century, we have gotten away from this on the web, often using magic numbers to match a ‘spec’ that has been produced in a graphics program such as photoshop, illustrator, or sketch. While these programs are useful for sketching ideas, they aren’t 100% accurate in their reflection of how the web works across device sizes or how things get drawn to the screen.


Cupcake features a spacing scale based on powers of two that starts at .25rem (for most devices this will be the equivalent of 4px). You’ll find that when using a well thought out scale - things just line up. It works, with little effort, regardless of your design knowledge or sensibilities.


Spacing indicates margin and padding.

Most components already come with spacing included. These utility classes are for added convenience in laying out components.

Classes prefixed by .c-m- are used for adding margins. 
Classes prefixed in .c-p- are used for adding padding.

The directions available for the spacing classes are top, right, bottom, and left.
You can use the vertical shortcut for both top and bottom and horizontal for both right and left.

Use the xs through xxl scale to choose the size needed.


## Syntax

Spacing utilities that apply to all breakpoints, from `xs` to `xl`, have no breakpoint abbreviation in them. 

The classes are named using the format `{property}{sides}-{size}` for `xs` and `{property}{sides}-{breakpoint}-{size}` for `sm`, `md`, `lg`, and `xl`.


* `c-m` - for classes that set `margin`
* `c-p` - for classes that set `padding`



## Padding


### All
<div class="docs-spacing padding">
  <div>
  {% for size in page.sizes %}
    <div class="c-p-{{ size }}"></div>
  {% endfor %}
  </div>
</div>

### Top
<div class="docs-spacing padding">
  <div>
  {% for size in page.sizes %}
    <div class="c-p-top-{{ size }}"></div>
  {% endfor %}
  </div>
</div>

### Right
<div class="docs-spacing padding">
  <div>
  {% for size in page.sizes %}
    <div class="c-p-right-{{ size }}"></div>
  {% endfor %}
  </div>
</div>


### Bottom
<div class="docs-spacing padding">
  <div>
  {% for size in page.sizes %}
    <div class="c-p-bottom-{{ size }}"></div>
  {% endfor %}
  </div>
</div>


### Left
<div class="docs-spacing padding">
  <div>
  {% for size in page.sizes %}
    <div class="c-p-left-{{ size }}"></div>
  {% endfor %}
  </div>
</div>


### Horizontal
<div class="docs-spacing padding">
  <div>
  {% for size in page.sizes %}
    <div class="c-p-horizontal-{{ size }}"></div>
  {% endfor %}
  </div>
</div>


### Vertical
<div class="docs-spacing padding">
  <div>
  {% for size in page.sizes %}
    <div class="c-p-vertical-{{ size }}"></div>
  {% endfor %}
  </div>
</div>



</div>