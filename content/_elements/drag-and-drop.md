---
title: Drag and Drop
description: Drag and drop is the action of selecting an element, moving it, and then placing it into the defined area.
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

<!-- Start Design Tab -->
<div id="design" class="docs-tabs-content" markdown="1">

# Overview

**Types of drag and drop:**

- Drag and drop with cards
- Drag and drop with list items
- Drag and drop with widgets

**Drag and drop must haves:**

- All components that the user is able to drag and drop must have grips on the left side to indicate 
- All components that the user is able to drag and drop must have 50% opacity applied when the user is dragging it to the drop zone
- All drop zones should have some sort of indication (blue box or list indication)

<hr>
  
  <!-- Start Drag and Drop with Cards Section -->
  <div class="c-header-md">Drag and Drop with cards</div>
  Drag and drop can be used to easily reorder movable cards to the user's liking. 

  <!-- Start Examples of Use Row -->
  <div class="c-header-sm">Examples of Use</div>

  <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/drag-and-drop/nameoffile.png" width="50%">
  <!-- End Examples of Use Row -->
  <!-- END Drag and Drop with Cards Section -->

  <hr>

   <!-- Start Drag and Drop with List Items Section -->
  <div class="c-header-md">Drag and Drop with list items</div>
  Drag and drop can be used to easily reorder list items to the user's liking. 

  <!-- Start Examples of Use Row -->
  <div class="c-header-sm">Examples of Use</div>

  <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/drag-and-drop/nameoffile.png" width="50%;">
  <!-- End Examples of Use Row -->
  <!-- END Drag and Drop with List Items Section -->

<hr>

  <!-- Start Drag and Drop with Widgets Section -->
  <div class="c-header-md">Drag and Drop with widgets</div>
  Drag and drop can be used to easily perform a function with a widget, such as a file upload. 

  <!-- Start Examples of Use Row -->
  <div class="c-header-sm">Examples of Use</div>

  <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/drag-and-drop/nameoffile.png" width="50%;">
  <!-- End Examples of Use Row -->
  <!-- END Drag and Drop with Widgets Section -->




</div>
<!-- End Design Tab -->

<!-- Start Cupcake Code Tab -->
<div id="code" class="docs-tabs-content" markdown="1">

## Checkbox
Tooltips are floating labels that briefly explain the function of a user interface element.

{% example html %}
<label class="c-checkbox">
    <input type="checkbox" name="radio" checked>
    <i class="c-bg-primary"></i>
    Basic Checkbox
</label>
{% endexample %}

## Color Examples

{% example html %}
<label class="c-checkbox c-m-right-sm">
    <input type="checkbox" name="radio" checked>
    <i class="c-bg-primary"></i>
    Primary
</label>

<label class="c-checkbox c-m-right-sm">
    <input type="checkbox" name="radio" checked>
    <i class="c-bg-success"></i>
    Success
</label>

<label class="c-checkbox c-m-right-sm">
    <input type="checkbox" name="radio" checked>
    <i class="c-bg-warning"></i>
    Warning
</label>

<label class="c-checkbox c-m-right-sm">
    <input type="checkbox" name="radio" checked>
    <i class="c-bg-danger"></i>
    Danger
</label>
{% endexample %}

## Size Examples

{% example html %}
<label class="c-checkbox-sm c-m-right-sm">
    <input type="checkbox" name="radio" checked>
    <i class="c-bg-primary"></i>
</label>

<label class="c-checkbox-lg c-m-right-sm">
    <input type="checkbox" name="radio" checked>
    <i class="c-bg-primary"></i>
</label>

<label class="c-checkbox-xl c-m-right-sm">
    <input type="checkbox" name="radio" checked>
    <i class="c-bg-primary"></i>
</label>
{% endexample %}

## Radio Buttons
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
<!-- End Cupcake Code Tab -->

<!-- Start Angular Code Tab -->
<div id="angular" class="docs-tabs-content" markdown="1">

### Storybook iframe
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/josh-easter/storybook-demo/?path=/story/basic-elements--avatar&full=0&addons=1&stories=0&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs&nav=0"></iframe>

</div>
<!-- End Angular Code Tab -->


