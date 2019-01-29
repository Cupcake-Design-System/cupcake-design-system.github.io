---
title: Switches 2.0
layout: docs
description: Switches are a quick way to to toggle between two states. Changing a state is immediate and continuous.
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

# Components

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

# Style Guide/Usage

## Usage
##### Switches are typically used in the following 3 ways:

* As a control used in Settings pages
* As a control used with tables, data visualisations, etc.
* As a control used in tables

## Switch States
##### Switches have 4 different states:
 * Active
 * Inactive
 * Active (disabled)
 * Inactive (disabled)

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


## Types of Switches

 * Standard version
 * Mobile version
 
 The mobile version has a bigger hit area and larger text for better performance on smaller mobile screens.

 ![Switches Versions](\assets\img\switches-versions.PNG "Switches Versions")

## General Do's and Dont's

### Basic Switch Hygiene
![Switch Hygiene Do's and Don'ts](\assets\img\switch-hygiene-dos-donts.PNG "Switch Hygiene Do's and Don'ts")

<hr>

### Controls used in Settings pages
* Switches are typically used on Settings screens to affect system or user account specific settings.
* When switches are used in Settings pages, there should not be a requirement to apply the settings via a form.

##### Example of use
![Switch Example Setting](\assets\img\switch-example-settings.PNG "Switch Example Setting")

#### Do's and Don'ts
##### Placement relative to labels

![Switch Placement Relative to Labels](\assets\img\switch-placement-labels-dos-donts.PNG "Switch Placement Relative to Lables")

##### Label alignment relative to switches

![Label alignment relative to switches](\assets\img\switches-label-alignment-dos-donts.PNG "Label alignment relative to switches")

##### Settings vs Forms

![Settings vs Forms](\assets\img\switches-settings-vs-forms-dos-donts.PNG "Settings vs Forms")

<hr>

### Controls used with tables, data visualizations, etc.
Switches are often used as controls with tables and data visualisations to affect the information the user can view and interact with.

##### Example of use
![Switch Table Example](\assets\img\switch-table-example.PNG "Switch Table Example")

#### Do's and Don'ts
##### Placement as table control

![Switch Placement as Table Control](\assets\img\switch-placement-table-dos-donts.PNG "Switch Placement as Table Control")

##### Placement of label relative to switch

![Switch Placement Label](\assets\img\switch-placement-label.PNG "Switch Placement Label")

##### Vertical alignment of text relative to switch

![Switch Text Alignment](\assets\img\switch-text-alignment.PNG "Switch Text Alignment")

##### Label language

![Switch Label Language](\assets\img\switch-label-language.PNG "Switch Label Language")

##### Label length

![Switch Label Length](\assets\img\switches-label-length.PNG "Switch Label Language")

##### Table controls vs. form controls

![Switch Label Language](\assets\img\switch-table-control-vs-form-control.PNG "Switch Label Length")

<hr>

### Controls used inside a table
Switches are often used as settings controls within tables to apply or disable immediate and continuous changes. 

##### Example of use
![Switch Inside Table Example](\assets\img\switch-inside-table-example.PNG "Switch Inside Table Example")

#### Do's and Don'ts
##### Alignment inside a table cell

![Switch Alignment Table Cell Dos Donts](\assets\img\switch-alignment-table-cell-dos-donts.PNG "Switch Alignment Table Cell Dos Donts")

##### Tables vs Forms

![Switch Inside Tables vs Forms](\assets\img\switches-inside-tables-vs-forms.PNG "Switch Inside Tables vs Forms")


