---
layout: docs
title: Grid system
description: Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system and dozens of predefined classes.
group: layout
toc: true
toc-flavors: false
---

## How it works

Cupcake's grid system uses a series of containers, rows, and columns to layout and align content. It's built with [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) and is fully responsive. Below is an example and an in-depth look at how the grid comes together.

**New to or unfamiliar with flexbox?** [Read this CSS Tricks flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background) for background, terminology, guidelines, and code snippets.

## Row 
By Default rows are flex enabled. They have a -15px margin to offset and align correctly inside containers.

<div class="docs-example-row docs-example-row-flex">
{% example html %}
<div class="c-row">
  <div class="c-col">First c-col</div>
  <div class="c-col">Second c-col</div>
  <div class="c-col">Third c-col</div>
  <div class="c-col">Fourth c-col</div>
</div>
{% endexample %}
</div>



## Row Modifiers
By Default columns are flex enabled and will stretch to fit the row.
Adding row modifiers can change the flex behavior, alignment, and wrapping.

<div class="docs-example-row docs-example-row-flex">
{% example html %}
<div class="c-row">
  <div class="c-col">
    1a
    <br> 1b
    <br> 1c
  </div>
  <div class="c-col">
    2a
  </div>
  <div class="c-col">
    3a
    <br> 3b
  </div>
  <div class="c-col">
    4a
  </div>
</div>
{% endexample %}
</div>


### Unstretch

<div class="docs-example-row docs-example-row-flex">
{% example html %}
<div class="c-row c-row-content-unstretch">
  <div class="c-col">
    1a
    <br> 1b
    <br> 1c
  </div>
  <div class="c-col">
    2a
  </div>
  <div class="c-col">
    3a
    <br> 3b
  </div>
  <div class="c-col">
    4a
  </div>
</div>
{% endexample %}
</div>

### Align Start

<div class="docs-example-row docs-example-row-flex">
{% example html %}
<div class="c-row c-row-align-start">
  <div class="c-col">
    1a
    <br> 1b
    <br> 1c
  </div>
  <div class="c-col">
    2a
  </div>
  <div class="c-col">
    3a
    <br> 3b
  </div>
  <div class="c-col">
    4a
  </div>
</div>
{% endexample %}
</div>

### Align End
<div class="docs-example-row docs-example-row-flex">
{% example html %}
<div class="c-row c-row-align-end">
  <div class="c-col">
    1a
    <br> 1b
    <br> 1c
  </div>
  <div class="c-col">
    2a
  </div>
  <div class="c-col">
    3a
    <br> 3b
  </div>
  <div class="c-col">
    4a
  </div>
</div>
{% endexample %}
</div>

### Align Center
<div class="docs-example-row docs-example-row-flex">
{% example html %}
<div class="c-row c-row-align-center">
  <div class="c-col">
    1a
    <br> 1b
    <br> 1c
  </div>
  <div class="c-col">
    2a
  </div>
  <div class="c-col">
    3a
    <br> 3b
  </div>
  <div class="c-col">
    4a
  </div>
</div>
{% endexample %}
</div>

### Align Stretch
<div class="docs-example-row docs-example-row-flex">
{% example html %}
<div class="c-row c-row-align-stretch">
  <div class="c-col">
    1a
    <br> 1b
    <br> 1c
  </div>
  <div class="c-col">
    2a
  </div>
  <div class="c-col">
    3a
    <br> 3b
  </div>
  <div class="c-col">
    4a
  </div>
</div>
{% endexample %}
</div>

### Collapsed
Adding **`.c-row-collapsed`** will remove the default padding on a column.

<div class="docs-example-row docs-example-row-flex">
{% example html %}
<div class="c-row c-row-collapsed">
  <div class="c-col">First c-col</div>
  <div class="c-col">Second c-col</div>
  <div class="c-col">Third c-col</div>
  <div class="c-col">Fourth c-col</div>
</div>
{% endexample %}
</div>

### Wrap
Columns within a row can be forced to wrap to a new or previous line when there is not enough space to house all the content.

Wrapping Columns will take up an equal amount of horizontal space per line, unless defined otherwise.

Please resize your browser to a small width to see this effect.

<div class="docs-example-row">
{% example html %}
<div class="c-row c-row-wrap">
  <div class="c-col">1</div>
  <div class="c-col">2</div>
  <div class="c-col">3</div>
  <div class="c-col">4</div>
  <div class="c-col">5</div>
  <div class="c-col">6</div>
  <div class="c-col">7</div>
  <div class="c-col">8</div>
  <div class="c-col">9</div>
  <div class="c-col">10</div>
  <div class="c-col">11</div>
  <div class="c-col">12</div>
</div>
{% endexample %}
</div>

<div class="docs-example-row">
{% example html %}
<div class="c-row c-row-wrap-reverse">
  <div class="c-col">1</div>
  <div class="c-col">2</div>
  <div class="c-col">3</div>
  <div class="c-col">4</div>
  <div class="c-col">5</div>
  <div class="c-col">6</div>
  <div class="c-col">7</div>
  <div class="c-col">8</div>
  <div class="c-col">9</div>
  <div class="c-col">10</div>
  <div class="c-col">11</div>
  <div class="c-col">12</div>
</div>
{% endexample %}
</div>


## Columns
To build a grid, just:

1. Add a **.c-row** container
2. Add as many **.c-col** elements as you want
Each column will have an equal width, no matter the number of columns.

### Auto-layout columns

Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like .c-col-sm-4.

<div class="docs-example-row">
{% example html %}
<div class="c-row">
  <div class="c-col-sm-4">
    .c-col-sm-4
  </div>
  <div class="c-col-sm-4">
    .c-col-sm-4
  </div>
  <div class="c-col-sm-4">
    .c-col-sm-4
  </div>
</div>
{% endexample %}
</div>


### Vertical columns

Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like .c-col-sm-4.

<div class="docs-example-row">
{% example html %}
<div class="c-row c-row-vertical">
  <div class="c-col">1</div>
  <div class="c-col">2</div>
  <div class="c-col">3</div>
  <div class="c-col">4</div>
</div>
{% endexample %}
</div>


<div class="docs-example-row">
{% example html %}
<div class="c-row">
  <div class="c-col">
    First Column
  </div>
  <div class="c-col">
    Second Column
  </div>
  <div class="c-col">
    Third Column
  </div>
  <div class="c-col">
    Fourth Column
  </div>
</div>
{% endexample %}
</div>

### Column Sizes 
<div class="docs-example-row">
{% example html %}
  <div class="c-row">
    <div class="c-col-md-8">
      .c-col-md-8
    </div>
    <div class="c-col">
      Auto
    </div>
    <div class="c-col">
      Auto
    </div>
  </div>
  <div class="c-row">
    <div class="c-col-md-6">
      .c-col-md-8
    </div>
    <div class="c-col">
      Auto
    </div>
    <div class="c-col">
      Auto
    </div>
    <div class="c-col">
      Auto
    </div>    
  </div>
    <div class="c-row">
    <div class="c-col">
      Auto
    </div>
    <div class="c-col">
      Auto
    </div>
    <div class="c-col">
      Auto
    </div>
    <div class="c-col-md-9">
      .c-col-md-9
    </div>    
  </div> 
  {% endexample %} 
</div>

### Order
The order of Columns in a c-row section can be altered by adding a .c-col-order-{#} class to the Columns. In the example below the HTML elements exist in alphabetical order, but the classes re-order them without altering the HTML order.

<div class="docs-example-row">
{% example html %}
<div class="c-row">
  <div class="c-col c-col-order-4">1</div>
  <div class="c-col c-col-order-1">2</div>
  <div class="c-col c-col-order-start">3</div>
  <div class="c-col c-col-order-2">4</div>
</div>
{% endexample %}
</div>

### Offset
While you can use empty c-row (like <div class="c-col"></div>) to create horizontal space around .c-col elements, you can also use offset modifiers.


<div class="docs-example-row">
{% example html %}
<div class="c-row">
  <div class="c-col-sm-6 c-col-sm-offset-3">
    .c-col-sm-6 .c-col-sm-offset-3
  </div>
</div>
<div class="c-row">
  <div class="c-col-sm-4 c-col-sm-offset-8">
    .c-col-sm-4 .c-col-sm-offset-8
  </div>
</div>
<div class="c-row">
  <div class="c-col-sm-11 c-col-sm-offset-1">
    .c-col-sm-11 .c-col-sm-offset-1
  </div>
</div>
{% endexample %}
</div>


### Breakpoint Sizes
You can define a c-col size for each viewport size.


<div class="docs-example-row">
{% example html %}
<div class="c-row">
  <div class="c-col-12 c-col-sm-6 c-col-md-3">
  .c-col-12 .c-col-sm-6 .c-col-md-3
  </div>
  <div class="c-col">
  </div>
  <div class="c-col">
  </div>
  <div class="c-col">
  </div>
</div>
{% endexample %}
</div>


### Column Alignment
Sometimes changing the alignment of all Columns within a c-row section is overkill and aligning a specific c-col might be preferable. In this case a .c-col-align-start, .c-col-align-end, .c-col-align-center, .c-col-align-stretch or .c-col-align-baseline class can be applied to a .c-col element.

This will only alter the alignment of the specific Columns. All Columns without an alignment class will stretch and have the same height/width as other Columns in the c-row section.

Please note that the .c-col-align-baseline class has to be applied to at least two .c-col elements within a .c-row section for this property to have effect.

<div class="docs-example-row docs-example-row-flex">
{% example html %}
<div class="c-row">
  <div class="c-col">Default(Stretch)</div>
  <div class="c-col c-col-align-start">Align Start</div>
  <div class="c-col c-col-align-center">Align Center</div>
  <div class="c-col c-col-align-end">Align End</div>
</div>
{% endexample %}
</div>

### Column Shrink
If you want a c-col to only take the space it needs, use the .c-col-shrink modifier. The other c-col(s) will fill up the remaining space.

<div class="docs-example-row docs-example-row-flex">
{% example html %}
<div class="c-row">
      <div class="c-col c-col-shrink">
        .c-col-shrink
      </div>
      <div class="c-col">
        Flexible column
      </div>
    </div>
{% endexample %}
</div>

### Column Collapsed
Sometimes it might be preferable to disable the gutters of a specific c-col instead of all Columns. This can be achieved by adding the .c-col-collapsed class to a .c-col element. Please note that this ONLY WORKS when combined with a specific .c-col-{number} class. Otherwise the other Columns will take up the newly freed up space created by the lack of gutters on the c-col.

<div class="docs-example-row docs-example-row-flex">
{% example html %}
<div class="c-row">
  <div class="c-col-3">
  Normal
  </div>
  <div class="c-col-3 c-col-collapsed">
  Collapsed
  </div>
  <div class="c-col-3 c-col-collapsed">
  Collapsed
  </div>
  <div class="c-col-3">
  Normal
  </div>
</div>
{% endexample %}
</div>


### Nesting
<div class="docs-example-row">
{% example html %}
<div class="c-row">
  <div class="c-col-sm-12">
    Level 1: .col-sm-9
    <div class="c-row">
      <div class="c-col-8 c-col-sm-6">
        Level 2: .col-8 .col-sm-6
      </div>
      <div class="c-col-4 c-col-sm-6">
        Level 2: .col-4 .col-sm-6
      </div>
    </div>
  </div>
</div>
{% endexample %}
</div>


### Variable width content
<div class="docs-example-row">
{% example html %}
<div class="c-container">
  <div class="c-row c-justify-center">
    <div class="c-col-2">
      1 of 3
    </div>
    <div class="c-col-auto">
      Variable width content
    </div>
    <div class="c-col-2">
      3 of 3
    </div>
  </div>
  <div class="c-row">
    <div class="c-col">
      1 of 3
    </div>
    <div class="c-col-md-auto">
      Variable width content
    </div>
    <div class="c-col-2">
      3 of 3
    </div>
  </div>
</div>
{% endexample %}
</div>