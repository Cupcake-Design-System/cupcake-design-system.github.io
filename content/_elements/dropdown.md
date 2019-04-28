---
title: Dropdown
description: Dropdown description here...
tabs:
- Code
- Guidelines
---

<!-- Start Cupcake Code Tab -->
<div id="code" class="docs-tabs-content" markdown="1">

### Basic Dropdown
With simple list items below the toggle

{% example html %}
<div class="c-dropdown">
	<button class="c-btn c-btn-secondary">
		Dropdown
		<i class="fa fa-angle-down" aria-hidden="true"></i>
	</button>
	<div class="c-dropdown-list c-dropdown-list-below">
		<a class="c-dropdown-item" href="#">Item 1</a>
		<a class="c-dropdown-item" href="#">Item 2</a>
		<a class="c-dropdown-item" href="#">Item 3</a>
	</div>
</div>
{% endexample %}



**Adding icons inline**

{% example html %}
<span class="c-dropdown">
<button class="c-btn c-btn-secondary">
	Dropdown 
<i class="fa fa-angle-down" aria-hidden="true"></i>
</button>

<div class="c-dropdown-list c-dropdown-list-below">
	<a class="c-dropdown-item" href="#">
		<span class="c-dropdown-icon fas fa-cut"></span>
		Cut
	</a>
	<a class="c-dropdown-item" href="#">
		<span class="c-dropdown-icon fas fa-copy"></span>
		Copy
	</a>
	<a class="c-dropdown-item" href="#">
		<span class="c-dropdown-icon fas fa-paste"></span>
		Paste
	</a>
</div>
</span>
{% endexample %}



**Adding a heading, divider, and right text options**

{% example html %}
<span class="c-dropdown">
<button class="c-btn c-btn-secondary">
	Dropdown 
<i class="fa fa-angle-down" aria-hidden="true"></i>
</button>

<div class="c-dropdown-list c-dropdown-list-below">
<div class="c-dropdown-heading">Group heading</div>
<div class="c-dropdown-divider"></div>
	<a class="c-dropdown-item" href="#">
		<span class="c-dropdown-icon fas fa-cut"></span>
		Cut
		<span class="c-pull-right c-badge c-badge-sm c-badge-indigo">Right</span>
	</a>
	<a class="c-dropdown-item" href="#">
		<span class="c-dropdown-icon fas fa-copy"></span>
		Copy
	</a>
	<a class="c-dropdown-item" href="#">
		<span class="c-dropdown-icon fas fa-paste"></span>
		Paste
	</a>
</div>
</span>
{% endexample %}



**With text colors**

{% example html %}
<span class="c-dropdown">
<button class="c-btn c-btn-secondary">
	Dropdown 
<i class="fa fa-angle-down" aria-hidden="true"></i>
</button>

<div class="c-dropdown-list c-dropdown-list-below">
	<a class="c-dropdown-item c-text-primary" href="#">
		.c-text-primary
	</a>
	<a class="c-dropdown-item c-text-success" href="#">
		.c-text-success
	</a>
	<a class="c-dropdown-item c-text-warning" href="#">
		.c-text-warning
	</a>
	<a class="c-dropdown-item c-text-danger" href="#">
		.c-text-danger
	</a>
	<a class="c-dropdown-item c-text-muted" href="#">
		.c-text-muted
	</a>
</div>
</span>
{% endexample %}



**With checkboxes**

{% example html %}
<span class="c-dropdown">
<button class="c-btn c-btn-secondary">
	Dropdown 
<i class="fa fa-angle-down" aria-hidden="true"></i>
</button>

<div class="c-dropdown-list c-dropdown-list-below">
	<span class="c-dropdown-item">
		<div class="c-checkbox">
			<input type="checkbox" id="demo" name="radio" checked>
			<label></label>
		</div>
		Checkbox
	</span>
	<span class="c-dropdown-item">
		<div class="c-checkbox">
			<input type="checkbox" id="demo" name="radio">
			<label></label>
		</div>
		Checkbox
	</span>
	<span class="c-dropdown-item">
		<div class="c-checkbox">
			<input type="checkbox" id="demo" name="radio">
			<label></label>
		</div>
		Checkbox
	</span>
</div>
</span>
{% endexample %}



**With selected class**

{% example html %}
<span class="c-dropdown">
<button class="c-btn c-btn-secondary">
	Dropdown 
<i class="fa fa-angle-down" aria-hidden="true"></i>
</button>

<div class="c-dropdown-list c-dropdown-list-below">
	<a class="c-dropdown-item" href="#">
		<span class="c-dropdown-icon fas fa-cut"></span>
		Cut
	</a>
	<a class="c-dropdown-item" href="#">
		<span class="c-dropdown-icon fas fa-copy"></span>
		Copy
	</a>
	<a class="c-dropdown-item c-dropdown-item-selected" href="#">
		<span class="c-dropdown-icon fas fa-paste"></span>
		Paste
	</a>
	<div class="c-dropdown-divider"></div>
	<a class="c-dropdown-item" href="#">
		<span class="c-dropdown-icon fas fa-download"></span>
		Download
	</a>
	<a class="c-dropdown-item" href="#">
		<span class="c-dropdown-icon fas fa-cog"></span>
		Settings
	</a>
</div>
</span>
{% endexample %}

<hr>
<br>

### List Location

{% example html %}
<span class="c-dropdown">
<button class="c-btn c-btn-primary">
    Default (cover) <i class="fa fa-angle-down" aria-hidden="true"></i>
</button>
<ul class="c-dropdown-list">
    <a class="c-dropdown-item" href="#">Option 1</a>
    <a class="c-dropdown-item" href="#">Option 2</a>
    <a class="c-dropdown-item" href="#">Option 3</a>
</ul>
</span>

<span class="c-dropdown">
<button class="c-btn c-btn-primary">
    Dropdown List Below <i class="fas fa-angle-down" aria-hidden="true"></i>
</button>
<div class="c-dropdown-list c-dropdown-list-below">
    <a class="c-dropdown-item" href="#">Option 1</a>
    <a class="c-dropdown-item" href="#">Option 2</a>
    <a class="c-dropdown-item" href="#">Option 3</a>
</div>
</span>

<span class="c-dropdown">
<button class="c-btn c-btn-primary">
    Dropdown List Above <i class="fa fa-angle-down" aria-hidden="true"></i>
</button>
<div class="c-dropdown-list c-dropdown-list-above">
  <a class="c-dropdown-item" href="#">Option 1</a>
  <a class="c-dropdown-item" href="#">Option 2</a>
  <a class="c-dropdown-item" href="#">Option 3</a>
</div>
</span>

<span class="c-dropdown">
<button class="c-btn c-btn-primary">
    Dropdown List right <i class="fa fa-angle-down" aria-hidden="true"></i>
</button>
<div class="c-dropdown-list c-dropdown-list-below c-dropdown-list-right">
  <a class="c-dropdown-item" href="#">Option 1</a>
  <a class="c-dropdown-item" href="#">Option 2</a>
  <a class="c-dropdown-item" href="#">Option 3</a>
</div>
</span>
{% endexample %}


</div>
<!-- End Cupcake Code Tab -->

<!-- Start Angular Code Tab -->
<div id="angular" class="docs-tabs-content" markdown="1">

#### Storybook iframe
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/josh-easter/storybook-demo/?path=/story/basic-elements--avatar&full=0&addons=1&stories=0&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs&nav=0"></iframe>

</div>
<!-- End Angular Code Tab -->


<!-- Start Design Tab -->
<div id="guidelines" class="docs-tabs-content" markdown="1">

# Design Guidelines coming soon...


</div>
<!-- End Design Tab -->




