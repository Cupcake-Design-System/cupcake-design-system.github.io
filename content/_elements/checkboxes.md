---
title: Checkboxes
description: Checkboxes allow users to select none, one or multiple options from a pre-defined list of options.
tabs:
- Code
- Angular
- Guidelines
---

<!-- Start Cupcake Code Tab -->
<div id="code" class="docs-tabs-content" markdown="1">

### Checkbox
The default checkbox requires the `<label></label>` tag even if no text is provided.

{% example html %}
<div class="c-checkbox">
	<input type="checkbox" name="check">
	<label></label>
</div>
{% endexample %}

**Adding label text that is not clickable.**
{% example html %}
<div class="c-checkbox">
	<input type="checkbox" name="check">
	<label>Label Text</label>
</div>
{% endexample %}


**To make the full label clickable - supply the input with an id and the label with a a matching for value as shown below.**
{% example html %}
<div class="c-checkbox">
  <input type="checkbox" id="checkbox1" name="check">
  <label for="checkbox1">Default with Label</label>
</div>
{% endexample %}



**Adding disabled to the input.**

{% example html %}
<div class="c-checkbox">
  <input type="checkbox" id="checkbox2" name="check" disabled>
  <label for="checkbox2">This is still a normal label</label>
</div>
{% endexample %}


**Adding disabled to the input and label.**

{% example html %}
<div class="c-checkbox" disabled>
  <input type="checkbox" id="checkbox3" name="checkbox" disabled>
  <label for="checkbox3">This label is disabled</label>
</div>
{% endexample %}


**Adding disabled to a checked input.**

{% example html %}
<div class="c-checkbox">
  <input type="checkbox" id="checkbox4" name="checkbox" checked="checked" disabled>
  <label for="checkbox4">This is still a normal label</label>
</div>
{% endexample %}


**Adding disabled to a checked input and label.**
{% example html %}
<div class="c-checkbox" disabled="">
  <input type="checkbox" id="checkbox5" name="checkbox4" checked="checked" disabled="">
  <label for="checkbox5">This label is disabled</label>
</div>
{% endexample %}

</div>
<!-- End Cupcake Code Tab -->

<!-- Start Angular Code Tab -->
<div id="angular" class="docs-tabs-content" markdown="1">

### Standard Checkbox
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/ipreo/sprinkles/?path=/story/components-forms--checkbox&nav=0"></iframe>

<br>

### Multi Select
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/ipreo/sprinkles/?path=/story/components-selectors--searchselectpanel&nav=0"></iframe>

<br>

### Complex Multi Select
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/ipreo/sprinkles/?path=/story/components-selectors--richmultiselectpanel&nav=0"></iframe>

</div>
<!-- End Angular Code Tab -->

<!-- Start Design Tab -->
<div id="guidelines" class="docs-tabs-content" markdown="1">

# Overview

### States
**Checkboxes have 4 potential states:**

- active

- inactive

- active (disabled)

- inactive (disabled)

### Usage
- multiple selection controls in forms

- standalone checkboxes

- bulk action selectors in tables

### Combined with labels
Checkboxes should be combined with accompanying text or a label.

**Label best practices:**

- Keep label text short and concise

- Always place the label on the right

- Use sentence style capitalisation for label text

- Don't add additional characters or punctuation at the end of each label

- Labels should be vertically centred relative to the checkbox (see example)

<br>

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/checkboxes/new format/checkbox-label-placement@2x.png" width="75%;">

### Best Practices

- Use switches in combination with accompanying text or a label

- Preference should be given to vertical checkbox lists, as it reads better

- Try and keep checkbox lists to 8 or less items

<hr>

## Examples

**A multiple selection list in a form**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/checkboxes/new format/checkbox-multiple-selection-example@2x.png" width="50%;">

<br>

**A used as a standalone checkbox on forms**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/checkboxes/new format/checkbox-standalone-example@2x.png" width="50%;">

<br>

**As selector handle for enabling bulk actions in tables**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/checkboxes/new format/checkbox-bulk-selection-example@2x.png" width="50%;">







</div>
<!-- End Design Tab -->




