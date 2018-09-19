---
title: Button Group
layout: docs
description: Button groups are used to bunch together buttons with similar actions
group: elements
toc: true
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
---

## Base

Button group displays multiple related actions in a row to help with horizontal arrangement and the spacing of calls to action.

{% example html %}
<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-primary">Default</button>
  <button type="button" class="c-btn c-btn-primary">Group</button>
  <button type="button" class="c-btn c-btn-primary">Buttons</button>
</div>
{% endexample %}

## Color Examples

This is an example of available colors for the **{{ page.title }}** element. 


{% example html %}
{% for color in site.data.theme-colors %}
<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-{{ color }}">{{ color | capitalize }}</button>
  <button type="button" class="c-btn c-btn-{{ color }}">Group</button>
  <button type="button" class="c-btn c-btn-{{ color }}">Buttons</button>
</div>
{% endfor %}
{% endexample %}


## Size Examples

This is an example of available sizes for the **{{ page.title }}** element. 


{% example html %}
<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-primary c-btn-xs">X-Small</button>
  <button type="button" class="c-btn c-btn-primary c-btn-xs">Group</button>
  <button type="button" class="c-btn c-btn-primary c-btn-xs">Buttons</button>
</div>
<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-primary c-btn-sm">Small</button>
  <button type="button" class="c-btn c-btn-primary c-btn-sm">Group</button>
  <button type="button" class="c-btn c-btn-primary c-btn-sm">Buttons</button>
</div>
<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-primary c-btn-lg">Large</button>
  <button type="button" class="c-btn c-btn-primary c-btn-lg">Group</button>
  <button type="button" class="c-btn c-btn-primary c-btn-lg">Buttons</button>
</div>
<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-primary c-btn-xl">X-Large</button>
  <button type="button" class="c-btn c-btn-primary c-btn-xl">Group</button>
  <button type="button" class="c-btn c-btn-primary c-btn-xl">Buttons</button>
</div>
{% endexample %}


## Additional Styles/Options

### Icons

{% example html %}
<div class="c-btn-group">
	<button type="button" class="c-btn c-btn-primary"><i class="fas fa-chart-bar"></i></button>
	<button type="button" class="c-btn c-btn-primary"><i class="fas fa-chart-pie"></i></button>
	<button type="button" class="c-btn c-btn-primary"><i class="fas fa-chart-line"></i></button>
</div>
<div class="c-btn-group">
	<button type="button" class="c-btn c-btn-primary c-btn-box"><i class="fas fa-chart-bar"></i></button>
	<button type="button" class="c-btn c-btn-primary c-btn-box"><i class="fas fa-chart-pie"></i></button>
	<button type="button" class="c-btn c-btn-primary c-btn-box"><i class="fas fa-chart-line"></i></button>
</div>
{% endexample %}

### Vertical 

{% example html %}
<div class="c-btn-group-vertical">
	<button class="c-btn c-btn-primary c-text-left">All</button>
	<button class="c-btn c-btn-primary c-text-left">Published</button>
	<button class="c-btn c-btn-primary c-text-left">Unpublished</button>
	<button class="c-btn c-btn-primary c-text-left">Drafts</button>
</div>
<div class="c-btn-group-vertical">
	<button class="c-btn c-btn-primary-outline c-text-left">All</button>
	<button class="c-btn c-btn-primary-outline c-text-left">Published</button>
	<button class="c-btn c-btn-primary-outline c-text-left">Unpublished</button>
	<button class="c-btn c-btn-primary-outline c-text-left">Drafts</button>
</div>
<div class="c-btn-group-vertical">
	<button class="c-btn c-btn-primary"><i class="fas fa-euro-sign"></i> EUR</button>
	<button class="c-btn c-btn-primary"><i class="fas fa-pound-sign"></i> GBP</button>
	<button class="c-btn c-btn-primary"><i class="fas fa-dollar-sign"></i> USD</button>
	<button class="c-btn c-btn-primary"><i class="fas fa-dollar-sign"></i> USD</button>
</div>
<div class="c-btn-group-vertical">
	<button class="c-btn c-btn-box c-btn-sm c-btn-primary"> <i class="fa fa-exclamation-circle"></i></button>
	<button class="c-btn c-btn-box c-btn-sm c-btn-primary"> <i class="fa fa-exclamation-circle"></i></button>
	<button class="c-btn c-btn-box c-btn-sm c-btn-primary"><i class="fa fa-exclamation-circle"></i></button>
</div>
{% endexample %}

### Pills

{% example html %}
{% for color in site.data.theme-colors %}
<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-pill c-btn-{{ color }}">{{ color | capitalize }}</button>
  <button type="button" class="c-btn c-btn-pill c-btn-{{ color }}">Group</button>
  <button type="button" class="c-btn c-btn-pill c-btn-{{ color }}">Buttons</button>
</div>
{% endfor %}
{% endexample %}

### Outline 

{% example html %}
{% for color in site.data.theme-colors %}
<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-{{ color }}-outline">{{ color | capitalize }}</button>
  <button type="button" class="c-btn c-btn-{{ color }}-outline">Group</button>
  <button type="button" class="c-btn c-btn-{{ color }}-outline">Buttons</button>
</div>
{% endfor %}
{% endexample %}