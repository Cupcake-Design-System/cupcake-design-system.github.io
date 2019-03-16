---
title: Forms
layout: docs
description: Forms gather information from users via inputs, such as text boxes, text areas, selects, checkboxes, and radio buttons.
group: elements
toc: true
colors:
- primary
- success
- warning
- error
sizes:
- xs
- sm
- lg
- xl
---

## Form Input

A text field is an input field that a user can type into. It has a range of options and supports several text formats.

{% example html %}
<input class="c-input" type="text" placeholder="Text input">
{% endexample %}

---

## Color Examples

This is an example of available colors for the **{{ page.title }}** element.

- An error state kicks in when the user input is missing or not in the correct format. The user cannot progress past the error state until it has been corrected.

- A warning state kicks in when the user input is in a less desirable format than preferred by the system. The user can still progress past the warning state, but is given the opportunity to course correct to a more desirable format.


{% example html %}
{% for color in page.colors %}
<div class="c-form-group">
  <input class="c-input c-input-{{ color }}" type="text" placeholder="{{ color | capitalize }} input">
</div>
{% endfor %}
{% endexample %}

---

## Size Examples

This is an example of available size's for the **{{ page.title }}** element.

{% example html %}
{% for size in page.sizes %}
<div class="c-form-group">
  <input class="c-input c-input-{{ size }}" type="text" placeholder="{{ size | capitalize }} input">
</div>
{% endfor %}
{% endexample %}

---

## Disabled state

Make buttons look inactive by adding the disabled boolean attribute to any <button> element.

{% example html %}
<input class="c-input" type="text" placeholder="I`m disabled" disabled>
{% endexample %}

---

## Additional Options

### Labels

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

---

### Helper Text

Static always visible
{% example html %}
<div class="c-input-container c-m-bottom-sm">
  <input class="c-input c-input-success" type="text" placeholder="Text input" value="$J-Money$" id="input-helper-1">
  <span class="c-hint c-hint-static c-hint-success">
    <i class="fa fa-check"></i> This username is silly but available!</span>
</div>
{% endexample %}


Text appears on focus.
{% example html %}
<div class="c-input-container c-m-bottom-sm">
  <input class="c-input c-input-error" type="text" placeholder="Click in here to see helper text" value id="input-helper-1">
  <span class="c-hint c-hint-error"><i class="fa fa-check"></i> I animate in when input is focused!</span>
</div>
{% endexample %}

---

### Icons inside inputs

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

---

### Input Add-ons

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
      <i class="c-bg-primary"></i>
    </label>
  </div>
  <div class="c-input-container">
    <input type="text" class="c-input">
  </div>
</div>

<br>

<div class="c-input-group">
  <div class="c-input-addon">
    <label class="c-checkbox">
      <input type="radio" name="radio">
      <i class="c-bg-primary"></i>
    </label>
  </div>
  <div class="c-input-container">
    <input type="text" class="c-input">
  </div>
</div>
{% endexample %}


---

### Add Buttons at any size

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

---

### Elements Inline

{% example html %}
<div class="c-m-bottom-md c-body-text">
	<span>Write some text in the box</span>
  <input placeholder="write here!" type="text" class="c-input c-input-sm c-input-inline">
  <span>Submit when done</span>
  <button class="c-btn c-btn-primary c-btn-sm">Submit</button>
</div>
{% endexample %}

---

## Textarea 

### Default 
{% example html %}
<div class="c-form-group">
  <textarea class="c-input" placeholder="Placeholder Text"></textarea>
</div>
{% endexample %}

### Define Height
You can set the height of the textarea using the rows HTML attribute.
{% example html %}
<div class="c-form-group">
  <textarea class="c-input" placeholder="10 lines of textarea" rows="10"></textarea>
</div>
{% endexample %}


### Textarea Colors
{% example html %}
{% for color in page.colors %}
<div class="c-form-group">
  <textarea class="c-input c-input-{{ color }}" type="text" placeholder="{{ color | capitalize }} input">
</textarea>
</div>
{% endfor %}
{% endexample %}

### Textarea Sizes
{% example html %}
{% for size in page.sizes %}
<div class="c-form-group">
  <textarea class="c-input c-input-{{ size }}" type="text" placeholder="{{ size | capitalize }} input">
</textarea>
</div>
{% endfor %}
{% endexample %}

---

## Select
The browser built-in select dropdown, styled accordingly

### Default Select
{% example html %}
<div class="c-form-group">
<select class="c-input">
  <option>Select dropdown</option>
  <option>With options</option>
</select>
</div>
{% endexample %}

### Select Sizes
{% example html %}
{% for size in page.sizes %}
<div class="c-form-group">
<select class="c-input c-input-{{ size }}">
  <option>Select dropdown</option>
  <option>With options</option>
</select>
</div>
{% endfor %}
{% endexample %}

### Disabled
{% example html %}
<div class="c-form-group">
<select class="c-input" disabled>
  <option>Select dropdown</option>
  <option>With options</option>
</select>
</div>
{% endexample %}

---


## File Upload
Some basic styling for file upload areas.

{% example html %}
<div class="c-file-upload">
  File Upload
  <button class="c-btn c-btn-sm c-btn-primary"> Button </button>
</div>
{% endexample %}

---
## UX Guidance

### Language

{% include guide-img.html img='forms/language'%}


### Visual

{% include guide-img.html img='forms/visual'%}
