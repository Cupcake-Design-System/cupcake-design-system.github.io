---
title: Radio Buttons
description: Radio buttons allow users to select a single option from a list of predefined options.
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
tabs:
- Design
- Code 
- Angular
---

<div id="design" class="docs-tabs-content" markdown="1">

## Overview
Radio buttons are recommended for use when:

- A limited number of options are available
- There is a recommended default value
- Users need to see and compare options
- One value is required to proceed

{% include guide-img.html img='elements/radio-buttons/'%} 

#### States:

- active
- inactive
- active (disabled)
- inactive (disabled)

<hr>

#### Do's and Dont's

##### Label length

{% include guide-img.html img='elements/radio-buttons/'%} 

##### Capitalizing labels

{% include guide-img.html img='elements/radio-buttons/'%} 

##### Label format

{% include guide-img.html img='elements/radio-buttons/'%}

##### Radio button to label placement

{% include guide-img.html img='elements/radio-buttons/'%} 

##### Default selected values

{% include guide-img.html img='elements/radio-buttons/'%} 

<hr>

### Radio buttons in forms
Radio buttons are typically used in forms as:

- Horizontal list groups
- Vertical list groups

### Horizontal list groups
Typically used in forms where up to 3 listed options are displayed. Used where space is restricted. Labels should be short and concise.

{% include guide-img.html img='elements/radio-buttons/'%} 

#### Do's and Dont's - Horizontal list groups

##### Number of items
{% include guide-img.html img='elements/radio-buttons/'%} 

##### Label vs. radio placement
{% include guide-img.html img='elements/radio-buttons/'%} 

##### List item spacing
{% include guide-img.html img='elements/radio-buttons/'%} 

##### Provide an escape hatch
{% include guide-img.html img='elements/radio-buttons/'%} 


### Vertical list groups
The most common way to display a radio list group in a form.

{% include guide-img.html img='elements/radio-buttons/'%} 

#### Do's and Dont's - Vertical list groups

##### Number of items
{% include guide-img.html img='elements/radio-buttons/'%} 

##### Provide an escape hatch
{% include guide-img.html img='elements/radio-buttons/'%} 

##### List item spacing
{% include guide-img.html img='elements/radio-buttons/'%} 

</div>

<div id="code" class="docs-tabs-content" markdown="1">

## Base
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

## Color Examples
This is an example of available colors for the Radio element.

{% example html %}
<label class="c-radio c-m-right-sm">
    <input type="radio" name="radio" checked>
    <i class="c-bg-primary"></i>
    Primary
</label>

<label class="c-radio c-m-right-sm">
    <input type="radio" name="radio" checked>
    <i class="c-bg-success"></i>
    Success
</label>

<label class="c-radio c-m-right-sm">
    <input type="radio" name="radio" checked>
    <i class="c-bg-warning"></i>
    Warning
</label>

<label class="c-radio c-m-right-sm">
    <input type="radio" name="radio" checked>
    <i class="c-bg-danger"></i>
    Danger
</label>
{% endexample %}

## Size Examples
This is an example of available colors for the Radio element.

{% example html %}
<label class="c-radio-sm">
    <input type="radio" name="radio" checked>
    <i class="c-bg-primary"></i>
</label>

<label class="c-radio-lg">
    <input type="radio" name="radio" checked>
    <i class="c-bg-primary"></i>
</label>

<label class="c-radio-xl">
    <input type="radio" name="radio" checked>
    <i class="c-bg-primary"></i>
</label>
{% endexample %}

</div>

<div id="angular" class="docs-tabs-content" markdown="1">

### Storybook iframe
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/josh-easter/storybook-demo/?path=/story/basic-elements--avatar&full=0&addons=1&stories=0&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs"></iframe>

</div>

