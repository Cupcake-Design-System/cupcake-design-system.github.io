---
layout: docs-fullwidth
title: Borders
description: Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.
group: utilities
---

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
