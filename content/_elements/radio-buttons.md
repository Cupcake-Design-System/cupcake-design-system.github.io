---
title: Radio Buttons
description: Radio buttons allow users to select a single option from a list of predefined options.
tabs:
- Code
- Angular 
- Guidelines
---

<!-- Start Cupcake Code Tab -->
<div id="code" class="docs-tabs-content" markdown="1">

### Radio Button
The default radio requires the `<label></label>` tag even if no text is provided.

{% example html %}
<div class="c-radio">
	<input type="radio" name="check">
	<label></label>
</div>
{% endexample %}

**Adding label text that is not clickable.**
{% example html %}
<div class="c-radio">
	<input type="radio" name="check">
	<label>Label Text</label>
</div>
{% endexample %}


**To make the full label clickable - supply the input with an id and the label with a a matching for value as shown below.**
{% example html %}
<div class="c-radio">
  <input type="radio" id="radio1" name="check">
  <label for="radio1">Default with Label</label>
</div>
{% endexample %}



**Adding disabled to the input.**
{% example html %}
<div class="c-radio">
  <input type="radio" id="radio2" name="check" disabled>
  <label for="radio2">This is still a normal label</label>
</div>
{% endexample %}


**Adding disabled to the input and label.**
{% example html %}
<div class="c-radio" disabled>
  <input type="radio" id="radio3" name="radio" disabled>
  <label for="radio3">This label is disabled</label>
</div>
{% endexample %}


**Adding disabled to a toggled input.**
{% example html %}
<div class="c-radio">
  <input type="radio" id="radio4" name="radio" checked="checked" disabled>
  <label for="radio4">This is still a normal label</label>
</div>
{% endexample %}


**Adding disabled to a toggled input and label.**
{% example html %}
<div class="c-radio" disabled="">
  <input type="radio" id="radio5" name="radio4" checked="checked" disabled="">
  <label for="radio5">This label is disabled</label>
</div>
{% endexample %}


</div>
<!-- End Cupcake Code Tab -->

<!-- Start Angular Tab -->
<div id="angular" class="docs-tabs-content" markdown="1">

<div class="c-alert c-alert-warning">
  <i class="fa fa-exclamation-circle c-alert-icon" aria-hidden="true"></i>
    <div class="c-alert-content"><strong>
    Users must be permissioned to IHS Markit GitLab in order to view angular components.  
    <a href="https://confluence.ihsmarkit.com/pages/viewpage.action?spaceKey=DT&title=GitLab+-+Access">Gain access here</a>
      </strong>
    </div>
</div>

<iframe title="storybook" width="100%" height="500px" src="http://cupcake-sprinkles.surge.sh/"></iframe>

</div>
<!-- End Angular Tab -->

<!-- Start Design Guidelines Section -->
<div id="guidelines" class="docs-tabs-content" markdown="1">

# Overview

### States
Radio buttons have 4 potential states:

- active

- inactive

- active (disabled)

- inactive (disabled)

### Usage
Radio buttons are used primarily in forms:

- where a single option must be selected

- where there is a recommended or default value

### Combined with labels
Radio buttons should be combined with accompanying text or a label.

**Label best practices:**

- Keep label text short and concise

- Always place the label on the right

- Use sentence style capitalisation for label text

- Don't add additional characters or punctuation at the end of each label

- Labels should be vertically centred relative to the checkbox (see example)

<br>

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/radio-buttons/new-format/radio-label-placement@2x.png" width="520px">

<br>

### Best practices
- Use radio buttons in combination with accompanying text or a label

- Preference should be given to vertical radio button lists, as it reads better

- Horizontal list groups should be limited and not allowed to wrap

- Try and keep radio button lists to 8 or less items

- Show default or recommended values as pre-selected

<hr>

## Examples

**A radio group used in a vertical list format in a form**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/radio-buttons/new-format/radio-vertical-group-example@2x.png" width="520px">

<br>

**A radio group with a recommended value selected by default**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/radio-buttons/new-format/radio-default-value-example@2x.png" width="520px">

<br>

**A radio group used in a horizontal list format in a form**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/radio-buttons/new-format/radio-horisontal-group-example@2x.png" width="520px">

</div>
<!-- End Design Section -->



