---
title: Avatar
layout: docs
description: An avatar represents an object or entity
group: elements
toc: true
sizes:
- sm
- md
- lg
- xl
---

## Base

Avatars are used to show a thumbnail representation of an individual or business in the interface. 

If an image is unavailable, up to two letters can be used instead. Text is best applied with a data attribute - **data-text="{value}"**.

Icons can also be used if relevent to the context.

{% example html %}
<span class="c-avatar" >
  <img src="https://unsplash.it/200?image=1027">
</span>
<span class="c-avatar c-avatar-primary">
<i class="fas fa-cloud-download"></i>
</span>
<span class="c-avatar c-avatar-secondary" data-text="AB"></span>
{% endexample %}

## Color Examples

This is an example of available colors for the **{{ page.title }}** element. 

{% example html %}
{% for color in site.data.theme-colors %}
<span class="c-avatar c-avatar-{{ color }}" data-text="AB"></span>
{% endfor %}
{% endexample %}


## Size Examples

This is an example of available sizes for the **{{ page.title }}** element. 

{% example html %}
{% for size in page.sizes %}
<span class="c-avatar c-avatar-primary c-avatar-{{ size }}" data-text="AB"></span>{% endfor %}
{% endexample %}


## Status

In addition you can add a status to the avatar to alert the user. Status is applied with a data attribute - **data-status="{value}"**. 

{% example html %}
<span class="c-avatar" data-status="success">
  <img src="https://unsplash.it/200?image=1011">
</span>
<span class="c-avatar c-avatar-primary" data-status="success">
  <i class="fas fa-cloud-download"></i>
</span>
<span class="c-avatar c-avatar-secondary" data-text="CD" data-status="primary"></span>
<span class="c-avatar c-avatar-success" data-text="EF" data-status="danger"></span>
<span class="c-avatar c-avatar-danger" data-text="GH" data-status="warning"></span>
<span class="c-avatar c-avatar-warning" data-text="HI" data-status="success"></span>
{% endexample %}