---
title: Switches
layout: docs
description: Switches afford a choice between one of two opposing states or options.
group: elements
toc: true
colors:
- primary
- success
- warning
- danger
sizes:
- xs
- sm
- lg
---

## Base

Default switches support on/off text or blank depending on the design.

{% example html %}
<label class="c-switch c-switch-primary">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label"></span>
    <span class="c-switch-handle"></span>
</label>
<label class="c-switch c-switch-primary">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label" data-on="On" data-off="Off"></span>
    <span class="c-switch-handle"></span>
</label>
{% endexample %}

## Color Examples

This is an example of available colors for the **{{ page.title }}** element.


{% example html %}
{% for color in page.colors %}
<label class="c-switch c-switch-{{ color }}">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label" data-on="On" data-off="Off"></span>
    <span class="c-switch-handle"></span>
</label>
{% endfor %}
{% endexample %}


## Size Examples

This is an example of available size's for the **{{ page.title }}** element.


{% example html %}
<label class="c-switch c-switch-primary c-switch-xs">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label"></span>
    <span class="c-switch-handle"></span>
</label>
<label class="c-switch c-switch-primary c-switch-sm">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label"></span>
    <span class="c-switch-handle"></span>
</label>
<label class="c-switch c-switch-primary">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label"></span>
    <span class="c-switch-handle"></span>
</label>
<label class="c-switch c-switch-primary c-switch-lg">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label"></span>
    <span class="c-switch-handle"></span>
</label>
{% endexample %}


## Disabled state

Make switches inactive.

{% example html %}
<label class="c-switch c-switch-disabled c-switch-sm">
    <input type="checkbox" class="c-switch-input">
    <span class="c-switch-label" data-on="On" data-off="Off"></span>
    <span class="c-switch-handle"></span>
</label>
<label class="c-switch c-switch-disabled">
    <input type="checkbox" class="c-switch-input">
    <span class="c-switch-label" data-on="On" data-off="Off"></span>
    <span class="c-switch-handle"></span>
</label>
<label class="c-switch c-switch-disabled c-switch-lg">
    <input type="checkbox" class="c-switch-input">
    <span class="c-switch-label" data-on="On" data-off="Off"></span>
    <span class="c-switch-handle"></span>
</label>
{% endexample %}


## Additional Styles/Options


### Material
{% example html %}
<label class="c-switch-material c-switch-primary c-switch-xs">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label"></span>
    <span class="c-switch-handle"></span>
</label>
<label class="c-switch-material c-switch-primary c-switch-sm">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label"></span>
    <span class="c-switch-handle"></span>
</label>
<label class="c-switch-material c-switch-primary">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label"></span>
    <span class="c-switch-handle"></span>
</label>
<label class="c-switch-material c-switch-primary c-switch-lg">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label"></span>
    <span class="c-switch-handle"></span>
</label>
{% endexample %}

### Square
{% example html %}
<label class="c-switch-square c-switch-primary">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label" data-on="On" data-off="Off"></span>
    <span class="c-switch-handle"></span>
</label>
<label class="c-switch-square c-switch-success">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label" data-on="On" data-off="Off"></span>
    <span class="c-switch-handle"></span>
</label>
<label class="c-switch-square c-switch-warning">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label" data-on="On" data-off="Off"></span>
    <span class="c-switch-handle"></span>
</label>
<label class="c-switch-square c-switch-danger">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label" data-on="On" data-off="Off"></span>
    <span class="c-switch-handle"></span>
</label>
<label class="c-switch-square c-switch-disabled">
    <input type="checkbox" class="c-switch-input">
    <span class="c-switch-label" data-on="On" data-off="Off"></span>
    <span class="c-switch-handle"></span>
</label>
{% endexample %}