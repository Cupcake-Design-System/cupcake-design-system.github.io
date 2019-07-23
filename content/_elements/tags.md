---
title: Tags
description: Tags are used to visually highlight an entity. 
colors:
- primary
- secondary
- success
- warning
- danger
sizes:
- sm
- lg
tabs:
- Code
- Guidelines
---

<!-- Start Cupcake Code -->
<!-- <div id="code" class="docs-tabs-content" markdown="1">

### Base
Badges are typically used to inform the user of status, information, or of an action that’s been taken.

{% example html %}
<div class="c-badge">v.1.0.5</div>
<div class="c-badge c-badge-square">v.1.0.5</div>
{% endexample %}


<hr>
<br>


### Color Examples
Below are the available theme colors for the Badges element.

{% example html %}
  {% for color in page.colors %}
<div class="c-badge c-badge-{{ color }}">Badge</div>
  {% endfor %}
{% endexample %}


### Extended Palette
Badges are also available with the extended color palette.

{% example html %}
  {% for color in site.data.theme-colors-extended %}
<div class="c-badge c-badge-{{ color }}">Badge</div>
  {% endfor %}
{% endexample %}


<hr>
<br>


### Size Examples
In addition to the default size, badges are also available in small and large.

{% example html %}
  {% for size in page.sizes %}
<div class="c-badge c-badge-{{ size }}">Badge</div>
  {% endfor %}
{% endexample %}


<hr>
<br>


### Dismissable
Badges can also be made dismissable.

{% example html %}
<div class="c-badge c-badge-sm c-badge-indigo">
  Value <a href="#" class="c-badge-close"></a>
</div>
<div class="c-badge c-badge-square c-badge-sm c-badge-indigo">
  Value <a href="#" class="c-badge-close"></a>
</div>

<div class="c-badge c-badge-grape">
  Value <a href="#" class="c-badge-close"></a>
</div>
<div class="c-badge c-badge-square c-badge-grape">
  Value <a href="#" class="c-badge-close"></a>
</div>

<div class="c-badge c-badge-lg c-badge-teal">
  Value <a href="#" class="c-badge-close"></a>
</div>

<div class="c-badge c-badge-square c-badge-lg c-badge-teal">
  Value <a href="#" class="c-badge-close"></a>
</div>
{% endexample %}


<hr>
<br>


#### Multiple Modifiers

{% example html %}
<div class="c-badge-group">
<div class="c-badge c-badge-primary">
  <div class="c-avatar c-avatar-success" data-text="AB">
    <img src="https://unsplash.it/200?image=433">
  </div>
  Primary Bear
  <a href="#" class="c-badge-close"></a>
</div>

<div class="c-badge c-badge-square c-badge-primary">
  <div class="c-avatar c-avatar-success" data-text="AB">
    <img src="https://unsplash.it/200?image=433">
  </div>
  Primary Bear
  <a href="#" class="c-badge-close"></a>
</div>

<div class="c-badge c-badge-lg c-badge-primary">
  <div class="c-avatar c-avatar-success" data-text="AB">
    <img src="https://unsplash.it/200?image=433">
  </div>
  Primary Bear
  <a href="#" class="c-badge-close"></a>
</div>

<div class="c-badge c-badge-square c-badge-lg c-badge-primary">
  <div class="c-avatar c-avatar-success" data-text="AB">
    <img src="https://unsplash.it/200?image=433">
  </div>
  Primary Bear
  <a href="#" class="c-badge-close"></a>
</div>

<div class="c-badge c-badge-success">
  <div class="c-avatar c-avatar-success" data-text="AB">
    <img src="https://unsplash.it/200?image=433">
  </div>
  Success Bear
  <a href="#" class="c-badge-close"></a>
</div>

<div class="c-badge c-badge-square c-badge-success">
  <div class="c-avatar c-avatar-success" data-text="AB">
    <img src="https://unsplash.it/200?image=433">
  </div>
  Success Bear
  <a href="#" class="c-badge-close"></a>
</div>

<div class="c-badge c-badge-lg c-badge-success">
  <div class="c-avatar c-avatar-success" data-text="AB">
    <img src="https://unsplash.it/200?image=433">
  </div>
  Success Bear
  <a href="#" class="c-badge-close"></a>
</div>


<div class="c-badge c-badge-square c-badge-lg c-badge-success">
  <div class="c-avatar c-avatar-success" data-text="AB">
    <img src="https://unsplash.it/200?image=433">
  </div>
  Success Bear
  <a href="#" class="c-badge-close"></a>
</div>

<br>
<br>

<div class="c-badge c-badge-lg c-badge-orange-light">
    <div class="c-avatar c-avatar-orange">
        <i class="fab fa-amazon"></i>
    </div>
    Amazon
    <a href="#" class="c-badge-close"></a>
  </div>

<div class="c-badge c-badge-lg c-badge-success-light">
  <div class="c-avatar c-avatar-success">
      <i class="fab fa-apple"></i>
  </div>
  Apple
  <a href="#" class="c-badge-close"></a>
</div>

<div class="c-badge c-badge-square c-badge-lg c-badge-pink">
  <div class="c-avatar c-avatar-success" data-text="AB">
      <img src="https://unsplash.it/200?image=433">
  </div>
  Pink Bear Large Square - with long title
  <a href="#" class="c-badge-close"></a>
</div>

<div class="c-badge c-badge-square c-badge-lg c-badge-teal">
  <div class="c-avatar c-avatar-success" data-text="AB">
      <img src="https://unsplash.it/200?image=433">
  </div>
  Teal Bear Large Square - with long title
  <a href="#" class="c-badge-close"></a>
</div>
</div>
{% endexample %}


<hr>
<br>

#### Inline Status

{% example html %}
<div class="c-body-text-xl"> 
  Information 
  <span class="c-badge c-badge-sm c-badge-primary c-badge-top">8</span>
</div>
{% endexample %}

<hr>
<br>


#### Empty Status Badges
A badge with no content can be used to add visual attention to an element. 

{% example html %}
  {% for color in page.colors %}
<div class="c-badge c-badge-{{ color }}"></div>
  {% endfor %}
  {% for color in site.data.theme-colors-extended %}
<div class="c-badge c-badge-{{ color }}"></div>
  {% endfor %}
{% endexample %}


</div> -->
<!-- End Cupcake Code Tab -->

<!-- Start Angular Tab -->
<div id="angular" class="docs-tabs-content" markdown="1">

### Standard Button
<iframe title="storybook" width="100%" height="500px" src=""></iframe>

</div>
<!-- End Angular Tab -->


<!-- Start Design Guidelines Tab -->
<div id="guidelines" class="docs-tabs-content" markdown="1">

# Overview

- Tags are used to visually highlight an entity. 
- To highlight status information and/or counts of an entity, use badges. 

### Types

<br>

**1. Standard Tags**

<br>

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/tags/ContactTags.png" width="50%">

<br>

**2. Contact Tags**

<br>

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/tags/StandardTags.png" width="50%;">

<hr>

### Tag Colors

[Cupcake Color Palette](https://ipreo.invisionapp.com/share/P5NNPMKHTR6#/screens/315781489_Color)

**Light Color Set**
- Only use values 3-5 

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/badges/LightColorSet.png" width="500px;">

**Dark Color Set**
- Only use values 6-9 

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/badges/DarkColorSet.png" width="500px;">

### Usage
- Standard Tags can be used as an identifier or reference to an object, such as filters
- Contact Tags can be used for adding or removing contacts

### Best practices
- Use colors that are not used in brand colors, button colors, and common action colors
- Use either the light color set or dark color set and stick to it for all tags
- Use either the rounded or squared tags and stick to it
- Only use up to 30 characters in tags and the rest will be truncated
- Try to use a different shape or color value/set to visually differentiate tags from similar visual elements such as badges


## Examples

**Tags as filters**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/tags/TagsFilters.png" width="50%;">

<br>

**Tags in a table**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/tags/TagsInTables.png" width="50%;">


</div>
<!-- End Design Tab -->



