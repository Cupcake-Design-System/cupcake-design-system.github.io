---
title: Forms
description: Forms gather information from users via inputs, such as text boxes, text areas, selects, checkboxes, and radio buttons.
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
tabs:
- Design
- Code 
---

<div id="design" class="docs-tabs-content" markdown="1">

## UX Guidance

### Language

{% include guide-img.html img='elements/forms/language'%}


### Visual

{% include guide-img.html img='elements/forms/visual'%}

</div>

<div id="code" class="docs-tabs-content" markdown="1">

## Form Input

A text field is an input field that a user can type into. It has a range of options and supports several text formats.

<div data-example>
<input class="c-input" type="text" placeholder="Text input">
</div>

---

## Color Examples

This is an example of available colors for the **{{ page.title }}** element.

- An error state kicks in when the user input is missing or not in the correct format. The user cannot progress past the error state until it has been corrected.

- A warning state kicks in when the user input is in a less desirable format than preferred by the system. The user can still progress past the warning state, but is given the opportunity to course correct to a more desirable format.


<div data-example>
{% for color in page.colors %}
<div class="c-form-group">
  <input class="c-input c-input-{{ color }}" type="text" placeholder="{{ color | capitalize }} input">
</div>
{% endfor %}
</div>

---

## Size Examples

This is an example of available size's for the **{{ page.title }}** element.

<div data-example>
{% for size in page.sizes %}
<div class="c-form-group">
  <input class="c-input c-input-{{ size }}" type="text" placeholder="{{ size | capitalize }} input">
</div>
{% endfor %}
</div>

---

## Disabled state

Make buttons look inactive by adding the disabled boolean attribute to any <button> element.

<div data-example>
<input class="c-input" type="text" placeholder="I`m disabled" disabled>
</div>

---

## Additional Options

### Labels

<div data-example>
<div class="c-row">
<div class="c-col-md-2">
  <label for="forms-input-warning" class="c-input-label">Label:  
    <sup class="c-text-danger">*</sup></label>
</div>
<div class="c-col-md-10">
    <input type="text" id="forms-input" placeholder="Text input" class="c-input">
</div>
</div>
</div>

---

### Helper Text

Static always visible
<div data-example>
<div class="c-input-container c-m-bottom-sm">
  <input class="c-input c-input-success" type="text" placeholder="Text input" value="$J-Money$" id="input-helper-1">
  <span class="c-hint c-hint-static c-hint-success">
    <i class="fa fa-check"></i> This username is silly but available!</span>
</div>
</div>


Text appears on focus.
<div data-example>
<div class="c-input-container c-m-bottom-sm">
  <input class="c-input c-input-error" type="text" placeholder="Click in here to see helper text" value id="input-helper-1">
  <span class="c-hint c-hint-error"><i class="fa fa-check"></i> I animate in when input is focused!</span>
</div>
</div>

---

### Icons inside inputs

<div data-example>
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
</div>

---

### Input Add-ons

<div data-example>
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
</div>


---

### Add Buttons at any size

<div data-example>
{% for size in page.sizes %}
<div class="c-input-group">
  <button class="c-btn c-btn-primary c-btn-{{ size }}">Action</button>
  <div class="c-input-container">
    <input type="text" class="c-input c-input-{{ size }}" placeholder="{{ size }} Input with Button Add-On" id="input-group-1">
  </div>
</div>
<br>
{% endfor %}
</div>



<div data-example>
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
</div>

---

### Elements Inline

<div data-example>
<div class="c-m-bottom-md c-body-text">
	<span>Write some text in the box</span>
  <input placeholder="write here!" type="text" class="c-input c-input-sm c-input-inline">
  <span>Submit when done</span>
  <button class="c-btn c-btn-primary c-btn-sm">Submit</button>
</div>
</div>

---

## Textarea 

### Default 
<div data-example>
<div class="c-form-group">
  <textarea class="c-input" placeholder="Placeholder Text"></textarea>
</div>
</div>

### Define Height
You can set the height of the textarea using the rows HTML attribute.
<div data-example>
<div class="c-form-group">
  <textarea class="c-input" placeholder="10 lines of textarea" rows="10"></textarea>
</div>
</div>


### Textarea Colors
<div data-example>
{% for color in page.colors %}
<div class="c-form-group">
  <textarea class="c-input c-input-{{ color }}" type="text" placeholder="{{ color | capitalize }} input">
</textarea>
</div>
{% endfor %}
</div>

### Textarea Sizes
<div data-example>
{% for size in page.sizes %}
<div class="c-form-group">
  <textarea class="c-input c-input-{{ size }}" type="text" placeholder="{{ size | capitalize }} input">
</textarea>
</div>
{% endfor %}
</div>

---

## Select
The browser built-in select dropdown, styled accordingly

### Default Select
<div data-example>
<div class="c-form-group">
<select class="c-input">
  <option>Select dropdown</option>
  <option>With options</option>
</select>
</div>
</div>

### Select Sizes
<div data-example>
{% for size in page.sizes %}
<div class="c-form-group">
<select class="c-input c-input-{{ size }}">
  <option>Select dropdown</option>
  <option>With options</option>
</select>
</div>
{% endfor %}
</div>

### Disabled
<div data-example>
<div class="c-form-group">
<select class="c-input" disabled>
  <option>Select dropdown</option>
  <option>With options</option>
</select>
</div>
</div>

---


## File Upload
Some basic styling for file upload areas.

<div data-example>
<div class="c-file-upload">
  File Upload
  <button class="c-btn c-btn-sm c-btn-primary"> Button </button>
</div>
</div>

---

</div>