---
title: This is page title
layout: docs
description: This description is from the top of the markdown page
group: elements
toc: true
colors:
- primary
- secondary
- success
- danger
sizes:
- xs
- sm
- lg
- xl
---

## Base

This is the introduction to the component. A simple single example.

{% example html %}
<button type="button" class="c-btn c-btn-primary">Button</button>
{% endexample %}

## Color Examples

This is an example of colors for the component. It uses for-loop over the colors array in the head of the markdown file. You can easily add or remove colors there to show whats supported.

{% example html %}
{% for color in page.colors %}
<button type="button" class="c-btn c-btn-{{ color }}">{{ color | capitalize }}</button>
{% endfor %}
{% endexample %}


## Size Examples

This is an example of sizes for the component. It uses for-loop over the size array in the head of the markdown file. You can easily add or remove sizes there to show whats supported.

{% example html %}
{% for size in page.sizes %}
<button type="button" class="c-btn c-btn-primary c-btn-{{ size }}">Primary</button>
{% endfor %}
{% endexample %}


## Disabled state

Make buttons look inactive by adding the `disabled` boolean attribute to any `<button>` element.

{% example html %}
<button type="button" class="c-btn c-btn-primary" disabled>Disabled</button>
{% endexample %}


## Additional Styles/Options

In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the `.c-btn-outline-*` ones to remove all background images and colors on any button.

{% example html %}
{% for color in page.colors %}
<button type="button" class="c-btn c-btn-{{ color }}-outline">{{ color | capitalize }}</button>{% endfor %}
{% endexample %}

{% example html %}
{% for color in page.colors %}
<button type="button" class="c-btn c-btn-{{ color }} c-btn-pill">{{ color | capitalize }}</button>{% endfor %}
{% endexample %}


Create block level buttons—those that span the full width of a parent—by adding `.c-btn-block`.

{% example html %}
<button type="button" class="c-btn c-btn-primary c-btn-lg c-btn-block">Block level button</button>
<button type="button" class="c-btn c-btn-secondary c-btn-lg c-btn-block">Block level button</button>
{% endexample %}