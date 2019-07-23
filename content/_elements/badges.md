---
title: Badges
description: Badges are used to highlight the status of an entity.
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
- Angular
- Guidelines
---

<!-- Start Cupcake Code -->
<div id="code" class="docs-tabs-content" markdown="1">

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


</div>
<!-- End Cupcake Code Tab -->



<!-- Start Angular Code Section -->
<div id="angular" class="docs-tabs-content" markdown="1">

##### Default Badge
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/ipreo/sprinkles/?path=/story/components-badges--default&nav=0"></iframe>

<br>

##### Icon Badge
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/ipreo/sprinkles/?path=/story/components-badges--icon&nav=0"></iframe>


</div>
<!-- End Angular Code Section -->




<!-- Start Design Guidelines Tab -->
<div id="guidelines" class="docs-tabs-content" markdown="1">

## Overview

### Types of badges available:

**1. Status Badges**

<br>

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/badges/new format/StatusBadges.png" width="25%;">

<br>

**2. Numeric Badges**

<br>

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/badges/new format/Numeric Badges.png" width="5%;">

<hr>

## Usage 
- For status information 

- For counts/indication of a running tally 

<hr>

#### Badge Colors

[Cupcake Color Palette](https://ipreo.invisionapp.com/share/P5NNPMKHTR6#/screens/315781489_Color)

<br>

#### Light Color Set
- Only use values 3-5 

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/badges/LightColorSet.png" width="500px;">

#### Dark Color Set**
- Only use values 6-9 

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/badges/DarkColorSet.png" width="500px;">

<hr>
  

## General best practices 
- Always use colors that are not used in brand colors, button colors, and common action colors 

- Always use badges in conjunction with a single item so that there is no ambiguity around which item is indicated 

- Always use either the light color set or dark color set for badges and stick to it

- Always use either the rounded or squared badges and stick to it 


### Best practices with Status Badges 
- Use 1 to 2 word status indicators for status badges 

- Use appropriate size status badge for a specific requirement 

- Try to use a different shape or color value/set to visually differentiate badges from similar visual elements such as tags 

### Best practices with Numeric Badges 

- Use only numbers in numeric badges 


<hr>

## Examples 

<br>

**Status Badges in tables**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/badges/new format/BadgesInTables.png" width="50%;">

<br>

**Status Badges in cards** 

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/badges/new format/BadgesInCards.png" width="50%;">

<br>

   
**Numeric Badges in media list items** 
 
 <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/badges/new format/NumericBadgesMediaLists.png" width="50%;">

</div>
<!-- End Design Tab -->



