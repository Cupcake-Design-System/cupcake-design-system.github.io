---
title: Switches
description: Switches are a quick way to to toggle between two states. Changing a state is immediate and continuous.
colors:
- primary
- success
- warning
- danger
sizes:
- xs
- sm
- lg
tabs:
- Design
- Code 
- Angular
---

<div id="design" class="docs-tabs-content" markdown="1">

# Overview

**Switches are typically used in the following 3 ways:**

* As a control used in Settings pages
* As a control used with tables, data visualisations, etc.
* As a control used in tables

### Switch States
**Switches have 4 different states:**
 * Active
 * Inactive
 * Active (disabled)
 * Inactive (disabled)

### Types of Switches
 * Standard version
 * Mobile version
 
 The mobile version has a bigger hit area and larger text for better performance on smaller mobile screens.

{% include guide-img.html img='elements/switches/switches-versions'%}

### General Do's and Dont's

##### Basic Switch Hygiene
{% include guide-img.html img='elements/switches/switch-hygiene-dos-donts'%}

<hr>

## Controls used in Settings pages
* Switches are typically used on Settings screens to affect system or user account specific settings.
* When switches are used in Settings pages, there should not be a requirement to apply the settings via a form.

#### Example of use
{% include guide-img.html img='elements/switches/switch-example-settings'%}

#### Do's and Don'ts
##### Placement relative to labels
{% include guide-img.html img='elements/switches/switch-placement-labels-dos-donts'%} 

##### Label alignment relative to switches
{% include guide-img.html img='elements/switches/switches-label-alignment-dos-donts'%} 

##### Settings vs Forms

{% include guide-img.html img='elements/switches/switches-settings-vs-forms-dos-donts'%} 

<hr>

## Controls used with tables, data visualizations, etc.
Switches are often used as controls with tables and data visualisations to affect the information the user can view and interact with.

#### Example of use
{% include guide-img.html img='elements/switches/switch-table-example' %}

#### Do's and Don'ts
##### Placement as table control

{% include guide-img.html img='elements/switches/switch-placement-table-dos-donts' %}

##### Placement of label relative to switch

{% include guide-img.html img='elements/switches/switch-placement-label' %}

##### Vertical alignment of text relative to switch

{% include guide-img.html img='elements/switches/switch-text-alignment' %}

##### Label language

{% include guide-img.html img='elements/switches/switch-label-language' %}

##### Label length

{% include guide-img.html img='elements/switches/switches-label-length' %}

##### Table controls vs. form controls

{% include guide-img.html img='elements/switches/switch-table-control-vs-form-control' %}

<hr>

## Controls used inside a table
Switches are often used as settings controls within tables to apply or disable immediate and continuous changes. 

#### Example of use
{% include guide-img.html img='elements/switches/switch-inside-table-example' %}

#### Do's and Don'ts
##### Alignment inside a table cell
{% include guide-img.html img='elements/switches/switch-alignment-table-cell-dos-donts' %}

##### Tables vs Forms

{% include guide-img.html img='elements/switches/switches-inside-tables-vs-forms' %}

</div>


<div id="code" class="docs-tabs-content" markdown="1">

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

<hr>

## Switch States

{% example html %}
<label class="c-switch c-switch-primary">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label"></span>
    <span class="c-switch-handle"></span>
</label>
<label class="c-switch c-switch-primary">
    <input type="checkbox" class="c-switch-input">
    <span class="c-switch-label"></span>
    <span class="c-switch-handle"></span>
</label>
<label class="c-switch c-switch-disabled">
    <input type="checkbox" class="c-switch-input">
    <span class="c-switch-label"></span>
    <span class="c-switch-handle"></span>
</label>
{% endexample %}


</div>

<div id="angular" class="docs-tabs-content" markdown="1">

### Switches
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/ipreo/sprinkles/?path=/story/components--switch"></iframe>

</div>