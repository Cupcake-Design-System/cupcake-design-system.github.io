---
layout: docs
title: Display property
description: Change or adjust the display value.
group: utilities
toc: true
toc-flavors: false
---

# How it works

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

