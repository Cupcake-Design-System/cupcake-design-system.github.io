---
title: Switches
description: Switches are a type of selection control, offering a quick way to toggle between two states. Changing a state is immediate and continuous.
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
- Code
- Angular 
- Guidelines
---


<!-- Start Cupcake Code Tab -->
<div id="code" class="docs-tabs-content" markdown="1">

### Switch
The default switch is available in default and Large size.

{% example html %}
<label class="c-switch">
  <input type="checkbox">
  <span class="c-switch-handle"></span>
</label>
{% endexample %}


{% example html %}
<label class="c-switch c-switch-lg">
  <input type="checkbox">
  <span class="c-switch-handle"></span>
</label>
{% endexample %}

<hr>
<br>


**Adding label text.**
{% example html %}
<label class="c-switch">
  <input type="checkbox">
  <span class="c-switch-handle"></span>
  <label class="c-switch-label">Default with label</label>
</label>
{% endexample %}


{% example html %}
<label class="c-switch c-switch-lg">
  <input type="checkbox">
  <span class="c-switch-handle"></span>
  <label class="c-switch-label">Default with label</label>
</label>
{% endexample %}

<hr>
<br>


**Adding disabled to the input.**
{% example html %}
<label class="c-switch">
  <input type="checkbox" disabled>
  <span class="c-switch-handle"></span>
</label>
{% endexample %}

{% example html %}
<label class="c-switch c-switch-lg">
  <input type="checkbox" disabled>
  <span class="c-switch-handle"></span>
</label>
{% endexample %}


<hr>
<br>


**Adding disabled to the input and label - where label text stays normal.**
{% example html %}
<label class="c-switch">
  <input type="checkbox" disabled>
  <span class="c-switch-handle"></span>
  <label class="c-switch-label">Default with switch disabled</label>
</label>
{% endexample %}

{% example html %}
<label class="c-switch c-switch-lg">
  <input type="checkbox" disabled>
  <span class="c-switch-handle"></span>
  <label class="c-switch-label">Large with switch disabled</label>
</label>
{% endexample %}

<hr>
<br>


**Adding disabled to the input and label - where label is disabled as well.**
{% example html %}
<label class="c-switch c-switch-disabled">
  <input type="checkbox" disabled>
  <span class="c-switch-handle"></span>
  <label class="c-switch-label">Default with switch disabled</label>
</label>
{% endexample %}


{% example html %}
<label class="c-switch c-switch-lg c-switch-disabled">
  <input type="checkbox" disabled>
  <span class="c-switch-handle"></span>
  <label class="c-switch-label">Large with switch disabled</label>
</label>
{% endexample %}


<hr>
<br>


**Adding disabled to the input when checked.**
{% example html %}
<label class="c-switch">
  <input type="checkbox" checked disabled>
  <span class="c-switch-handle"></span>
  <label class="c-switch-label">Default with switch selected and disabled</label>
</label>
{% endexample %}


{% example html %}
<label class="c-switch c-switch-lg">
  <input type="checkbox" checked disabled>
  <span class="c-switch-handle"></span>
  <label class="c-switch-label">Large with switch selected and disabled</label>
</label>
{% endexample %}



<hr>
<br>


**Adding disabled to the input and label when checked.**
{% example html %}
<label class="c-switch c-switch-disabled">
  <input type="checkbox" checked disabled>
  <span class="c-switch-handle"></span>
  <label class="c-switch-label">Default with switch and label disabled</label>
</label>
{% endexample %}


{% example html %}
<label class="c-switch c-switch-lg c-switch-disabled">
  <input type="checkbox" checked disabled>
  <span class="c-switch-handle"></span>
  <label class="c-switch-label">Large with switch and label disabled</label>
</label>
{% endexample %}


### Additional
Although not encouraged for general useage - additional colors are available.

{% example html %}
{% for color in page.colors %}
<label class="c-switch c-switch-{{ color }}">
  <input type="checkbox" checked>
  <span class="c-switch-handle"></span>
  <label class="c-switch-label"></label>
</label>
{% endfor %}
{% for color in page.colors %}
<label class="c-switch c-switch-lg c-switch-{{ color }}">
  <input type="checkbox" checked>
  <span class="c-switch-handle"></span>
  <label class="c-switch-label"></label>
</label>
{% endfor %}
{% endexample %}

You can also add text to the large switch size. Again, use carefully - anything other than ON/OFF text is outside of the intended usage.

{% example html %}
{% for color in page.colors %}
<label class="c-switch c-switch-lg c-switch-{{ color }}">
  <input type="checkbox" checked>
  <span class="c-switch-handle"></span>
  <label class="c-switch-label" data-on="On" data-off="Off"></label>
</label>
{% endfor %}
{% endexample %}


</div>
<!-- End Cupcake Code Tab -->

<!-- Start Angular Tab -->
<div id="angular" class="docs-tabs-content" markdown="1">

### Standard Switch
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/ipreo/sprinkles/?path=/story/components-switches--switch&nav=0"></iframe>

</div>
<!-- End Angular Tab -->

<!-- Start Design Guidelines Tab -->
<div id="guidelines" class="docs-tabs-content" markdown="1">

# Overview

**Switches have 4 different states:**

- Active

- Inactive

- Active (disabled)

- Inactive (disabled)

**Types of switches available:**

- Standard version
- Mobile version *The mobile version has a bigger hit area and larger text for better performance on smaller mobile screens.*

<br>

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/switches/new format/switch-types.png" width="400">

<br>

## Usage

- As a selection control in Settings pages

- As a selection control combined with tables, data visualisations, etc.

- As a selection control in tables

<br>

**Combined with labels**

Switches should be combined with accompanying text or a label.

<br>

**Label best practices:**

- Keep label text short and concise

- Always place the label on the right

- Use sentence style capitalisation for label text

- Don't add additional characters or punctuation at the end of each label

- Labels should be vertically centred relative to the switch (see example)

<br>

**Best Practices**

- Always use switches in combination with accompanying text or a label

- Avoid using switches in forms where the settings need to be saved or applied before taking effect

<hr>

## Examples

<br>

**A selection control in Settings pages**

 <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/switches/new format/switches-settings-example.png" width="50%;">

 <br>

 **A selection control combined with tables, data visualisations, etc.**

 <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/switches/new format/switches-controls-example.png" width="50%;">

 <br>

 **A selection control in tables**

  <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/switches/new format/switches-table-example.png" width="50%;">



</div>
<!-- End Design Tab -->
