---
title: Forms
description: Forms gather information from users via inputs, such as text boxes, text areas, selects, checkboxes, and radio buttons.
colors:
- primary
- success
- warning
- error
sizes:
- sm
- lg
tabs:
- Code
- Guidelines
---

<!-- Start Cupcake Code Tab -->
<div id="code" class="docs-tabs-content" markdown="1">


### Form Input

A text field is an input field that a user can type into. It has a range of options and supports several text formats.

{% example html %}
<input class="c-input" type="text" placeholder="Text input">
{% endexample %}

<hr>
<br>

#### Color Examples

This is an example of available colors for the **{{ page.title }}** element.

- An error state kicks in when the user input is missing or not in the correct format. The user cannot progress past the error state until it has been corrected.

- A warning state kicks in when the user input is in a less desirable format than preferred by the system. The user can still progress past the warning state, but is given the opportunity to course correct to a more desirable format.


{% example html %}
{% for color in page.colors %}
<input class="c-input c-input-{{ color }} docs- c-m-sm" type="text" placeholder="{{ color | capitalize }} input">
{% endfor %}
{% endexample %}

<hr>
<br>

#### Size Examples

This is an example of available size's for the **{{ page.title }}** element.

{% example html %}
{% for size in page.sizes %}
<input class="c-input c-input-{{ size }} docs- c-m-sm" type="text" placeholder="{{ size | capitalize }} input">
{% endfor %}
{% endexample %}

<hr>
<br>

#### Disabled state

Make buttons look inactive by adding the disabled boolean attribute to any <button> element.

{% example html %}
<input class="c-input" type="text" placeholder="Disabled Input" disabled>
{% endexample %}

<hr>
<br>


#### Labels

{% example html %}
<div class="c-row">
<div class="c-col-md-2">
  <label for="forms-input-warning" class="c-input-label">Label:  
    <sup class="c-text-danger">*</sup></label>
</div>
<div class="c-col-md-10">
    <input type="text" id="forms-input" placeholder="Text input" class="c-input">
</div>
</div>
{% endexample %}

<hr>
<br>

##### Helper Text

Static always visible

{% example html %}
<div class="c-input-container">
  <input class="c-input c-input-success" type="text" placeholder="Text input" value="$J-Money$" id="input-helper-1">
  <span class="c-hint c-hint-static c-hint-success">
    <i class="fa fa-check"></i> This username is silly but available!</span>
</div>
{% endexample %}


Text appears on focus.
{% example html %}
<div class="c-input-container">
  <input class="c-input c-input-error" type="text" placeholder="Click in here to see helper text" value id="input-helper-1">
  <span class="c-hint c-hint-error"><i class="fas fa-exclamation-circle"></i> I animate in when input is focused!</span>
</div>
{% endexample %}


<hr>
<br>


##### Icons inside inputs

{% example html %}
<div class="c-row">
<div class="c-col-md-2">
  <label for="forms-input-warning" class="c-input-label">Label:  
    <sup class="c-text-danger">*</sup></label>
</div>
<div class="c-col-md-10">
 <div class="c-input-container">
    <input type="text" id="forms-input-warning" placeholder="Warning" class="c-input c-input-warning">
    <i class="fa fa-exclamation-circle c-input-icon"></i>
  </div>
</div>
</div>
{% endexample %}


<hr>
<br>


##### Input Add-ons

{% example html %}
<div class="c-input-group">
  <div class="c-input-addon">@</div>
  <div class="c-input-container">
    <input type="text" class="c-input">
  </div>
</div>

<br>

<div class="c-input-group">
  <div class="c-input-addon">$</div>
  <div class="c-input-container">
    <input type="text" class="c-input">
  </div>
  <div class="c-input-addon">.00</div>
</div>

<br>

<div class="c-input-group">
  <div class="c-input-addon">
    <label class="c-checkbox">
      <input type="checkbox" name="radio" checked>
      <label></label>
    </label>
  </div>
  <div class="c-input-container">
    <input type="text" class="c-input">
  </div>
</div>

<br>

<div class="c-input-group">
  <div class="c-input-addon">
    <label class="c-radio">
      <input type="radio" name="radio">
      <label></label>
    </label>
  </div>
  <div class="c-input-container">
    <input type="text" class="c-input">
  </div>
</div>
{% endexample %}


<hr>
<br>


##### Add Buttons at any size

{% example html %}
{% for size in page.sizes %}
<div class="c-input-group">
  <button class="c-btn c-btn-primary c-btn-{{ size }}">Action</button>
  <div class="c-input-container">
    <input type="text" class="c-input c-input-{{ size }}" placeholder="{{ size }} Input with Button Add-On" id="input-group-1">
  </div>
</div>
<br>
{% endfor %}
{% endexample %}



{% example html %}
{% for size in page.sizes %}
<div class="c-input-group">
  <div class="c-input-container">
    <input type="text" class="c-input c-input-{{ size }}" placeholder="{{ size }} Input with Button Add-On">
  </div>
  <button class="c-btn c-btn-primary c-btn-{{ size }}">Action</button>
  <button class="c-btn c-btn-primary c-btn-{{ size }} c-btn-box"><i class="fa fa-caret-down"></i></button>
</div>
<br>
{% endfor %}
{% endexample %}


<hr>
<br>


##### Elements Inline

{% example html %}
<div class="c-m-bottom-md c-text-md">
  <span class="c-m-right-sm c-text-md c-text-bold">Begin</span>
  <button class="c-btn c-btn-primary c-btn-sm">Primary Button</button>
  <span class="c-m-horizontal-sm c-text-lg">More Text</span>
  <input placeholder="placeholder text" type="text" class="c-input c-input-sm c-input-inline">
  <span class="c-m-horizontal-sm c-text-lg">Everything aligns nicely here!</span>
  <button class="c-btn c-btn-secondary c-btn-sm">user <i class="fa fa-user"></i></button>
</div>
{% endexample %}

{% example html %}
<div class="c-m-bottom-md">
  <span class="c-m-right-sm c-text-lg c-text-bold">Begin</span>
  <button class="c-btn c-btn-success">Success Button</button>
  <span class="c-m-horizontal-sm c-text-lg">More Text</span>
  <input type="text" placeholder="placeholder text" class="c-input c-input-inline">
  <span class="c-m-horizontal-sm c-text-lg">Everything aligns nicely here!</span>
  <button class="c-btn c-btn-success">
    <i class="fa fa-star"></i> Info
  </button>
</div>
{% endexample %}

{% example html %}
<form class="c-form-inline">
  <label class="c-input-label" for="size-input-2">Danger Label: <sup class="c-text-danger">*</sup></label>
  <input class="c-input c-input-error c-m-horizontal-md" type="text" id="size-input-2" placeholder="Normal input">
  <span class="c-hint c-hint-error c-hint-static"><i class="fa fa-check"></i> I'm static!</span>
  <button type="button" class="c-btn c-btn-secondary c-m-horizontal-md">Button</button>
</form>
{% endexample %}


<hr>
<br>


#### Textarea 
{% example html %}
<div class="c-form-group">
  <textarea class="c-input" placeholder="Placeholder Text"></textarea>
</div>
{% endexample %}

##### Define Height
You can set the height of the textarea using the rows HTML attribute.
{% example html %}
<div class="c-form-group">
  <textarea class="c-input" placeholder="10 lines of textarea" rows="10"></textarea>
</div>
{% endexample %}


##### Textarea Colors
{% example html %}
{% for color in page.colors %}
<textarea class="c-input c-input-{{ color }} docs- c-m-bottom-sm" type="text" placeholder="{{ color | capitalize }} input">
</textarea>
{% endfor %}
{% endexample %}

##### Textarea Sizes
{% example html %}
{% for size in page.sizes %}
<textarea class="c-input c-input-{{ size }} docs- c-m-bottom-sm" type="text" placeholder="{{ size | capitalize }} input">
</textarea>
{% endfor %}
{% endexample %}

<hr>
<br>

#### Select
The browser built-in select dropdown, styled accordingly

{% example html %}
<select class="c-input docs- c-m-sm">
  <option>Select dropdown</option>
  <option>With options</option>
</select>
{% endexample %}

**Select Sizes**
{% example html %}
{% for size in page.sizes %}
<select class="c-input c-input-{{ size }} docs- c-m-sm">
  <option>Select dropdown</option>
  <option>With options</option>
</select>
{% endfor %}
{% endexample %}

**Disabled**
{% example html %}
<select class="c-input" disabled>
  <option>Select dropdown</option>
  <option>With options</option>
</select>
{% endexample %}

<hr>
<br>


#### File Upload
Some basic styling for file upload areas.

{% example html %}
<div class="c-file-upload">
  File Upload
  <button class="c-btn c-btn-sm c-btn-primary"> Button </button>
</div>
{% endexample %}

---

</div>
<!-- End Cupcake Code Tab -->


<!-- Start Angular Code Tab -->
<div id="angular" class="docs-tabs-content" markdown="1">

##### Storybook iframe
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/josh-easter/storybook-demo/?path=/story/basic-elements--avatar&full=0&addons=1&stories=0&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs&nav=0"></iframe>

</div>
<!-- End Angular Code Tab -->

<!-- Start Design Guidelines Tab -->
<div id="guidelines" class="docs-tabs-content" markdown="1">

# Overview

##### Language

{% include guide-img.html img='elements/forms/language'%}


##### Visual

{% include guide-img.html img='elements/forms/visual'%}

</div>
<!-- End Design Guidelines Tab -->

