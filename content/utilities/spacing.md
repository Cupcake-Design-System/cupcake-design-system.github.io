---
layout: docs
title: Spacing
description: Adjust whitespace with horizontal and vertical spacing helpers.
group: utilities
toc: true
toc-flavors: false
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


