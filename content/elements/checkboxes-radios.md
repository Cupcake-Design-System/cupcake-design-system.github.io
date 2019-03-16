---
title: Checkbox & Radios
layout: docs
description: Use in forms to toggle the state of something on or off.
group: elements
toc: true
colors:
- primary
- success
- warning
- danger
sizes:
- sm
- lg
- xl
---

## Checkbox

Checkboxes are most commonly used to give merchants a way to make a range of selections (zero, one, or multiple).

{% example html %}
<label class="c-checkbox">
    <input type="checkbox" name="radio" checked>
    <i class="c-bg-primary"></i>
    Basic Checkbox
</label>
{% endexample %}

### Color Examples

This is an example of available colors for the **Checkbox** element. 

{% example html %}
{% for color in page.colors %}
<label class="c-checkbox c-m-right-sm">
    <input type="checkbox" name="radio" checked>
    <i class="c-bg-{{ color }}"></i>
    {{ color | capitalize }}
</label>
{% endfor %}
{% endexample %}


### Size Examples

This is an example of available sizes for the **Checkbox** element. 

{% example html %}
{% for size in page.sizes %}
<label class="c-checkbox-{{ size }} c-m-right-sm">
    <input type="checkbox" name="radio" checked>
    <i class="c-bg-primary"></i>
</label>
{% endfor %}
{% endexample %}




## Radio

Use radio buttons to present each item in a list of options where users must make a single selection.

{% example html %}
<label class="c-radio">
    <input type="radio" name="radio" checked>
    <i class="c-bg-primary"></i> 
    Yes
</label>
<label class="c-radio">
    <input type="radio" name="radio">
    <i class="c-bg-primary"></i> 
    No
</label>
{% endexample %}

### Color Examples

This is an example of available colors for the **Radio** element. 

{% example html %}
{% for color in page.colors %}
<label class="c-radio c-m-right-sm">
    <input type="radio" name="radio" checked>
    <i class="c-bg-{{ color }}"></i>
    {{ color | capitalize }}
</label>
{% endfor %}
{% endexample %}


### Size Examples

This is an example of available colors for the **Radio** element. 

{% example html %}
{% for size in page.sizes %}
<label class="c-radio-{{ size }}">
    <input type="radio" name="radio" checked>
    <i class="c-bg-primary"></i>
</label>
{% endfor %}
{% endexample %}