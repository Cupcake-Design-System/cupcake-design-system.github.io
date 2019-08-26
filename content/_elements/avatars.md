---
title: Avatars
description: Avatars are used to represent the user’s identity onscreen with simple visuals.
colors:
- primary
- secondary
- success
- warning
- danger
tabs:
- Code
- Angular
- Guidelines
---

<!-- Start Code Tab -->
<div id="code" class="docs-tabs-content" markdown="1">

### Base
Avatars are used to show a thumbnail representation of an individual or business in the interface.

If an image is unavailable, up to two letters can be used instead. Text is best applied with a data attribute - data-text=”{value}”.

Icons can also be used if relevent to the context.

{% example html %}
<span class="c-avatar" >
  <img src="https://unsplash.it/200?image=1027">
</span>
<span class="c-avatar c-avatar-primary">
<i class="fas fa-robot"></i>
</span>
<span class="c-avatar c-avatar-success" data-text="AB"></span>
<div class="c-avatar" data-text="YZ" data-status="success"></div>
{% endexample %}

<hr>
<br>


#### Color Examples
Below are the available theme colors for the Avatar element.

{% example html %}
  {% for color in page.colors %}
<div class="c-avatar c-avatar-{{ color }}"><i class="fas fa-robot"></i></div>
  {% endfor %}
{% endexample %}


#### Extended Palette
Avatar are also available with the extended color palette.

{% example html %}
  {% for color in site.data.theme-colors-extended %}
<div class="c-avatar c-avatar-{{ color }}"><i class="fas fa-robot"></i></div>
  {% endfor %}
{% endexample %}


<hr>
<br>

### Size Examples
In addition to the default size, Avatar are also available in x-small, small, large, & X-Large.

{% example html %}
<span class="c-avatar c-avatar-xs" data-text="A"></span>
<span class="c-avatar c-avatar-sm" data-text="AB"></span>
<span class="c-avatar" data-text="AB"></span>
<span class="c-avatar c-avatar-lg" data-text="AB"></span>
<span class="c-avatar c-avatar-xl" data-text="AB"></span>
{% endexample %}


<hr>
<br>

### Square Examples
Avatars can also be square at any of the available sizes.

{% example html %}
<span class="c-avatar c-avatar-square c-avatar-sm" data-text="AB"></span>
<span class="c-avatar c-avatar-square" data-text="AB"></span>
<span class="c-avatar c-avatar-square c-avatar-lg" data-text="AB"></span>
<span class="c-avatar c-avatar-square c-avatar-xl" data-text="AB"></span>
{% endexample %}

<hr>
<br>

### Status
In addition you can add a status to the avatar to alert the user. Status is applied with a data attribute - data-status=”{value}”.

{% example html %}
<span class="c-avatar" data-status="success">
  <img src="https://unsplash.it/200?image=1011">
</span>
<span class="c-avatar c-avatar-primary" data-status="success">
  <i class="fas fa-star"></i>
</span>
<span class="c-avatar c-avatar-secondary" data-text="CD" data-status="primary"></span>
<span class="c-avatar c-avatar-success" data-text="EF" data-status="danger"></span>
<span class="c-avatar c-avatar-danger" data-text="GH" data-status="warning"></span>
<span class="c-avatar c-avatar-warning" data-text="HI" data-status="success"></span>
{% endexample %}

<hr>
<br>

### Groups
Avatars can also be grouped.

{% example html %}
<div class="c-avatar-group">
  <div class="c-avatar"><i class="fas fa-robot"></i></div>
  <div class="c-avatar c-avatar-primary"><i class="fas fa-robot"></i></div>
  <div class="c-avatar c-avatar-grape"><i class="fas fa-robot"></i></div>
  <div class="c-avatar c-avatar-danger"><i class="fas fa-robot"></i></div>
  <div class="c-avatar c-avatar-warning"><i class="fas fa-robot"></i></div>
  <div class="c-avatar c-avatar-teal"><i class="fas fa-robot"></i></div>
</div>
{% endexample %}


</div>

<!-- Start Angular Code Section -->
<div id="angular" class="docs-tabs-content" markdown="1">

##### Avatar Icon
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/ipreo/sprinkles/?path=/story/components-avatar--icon&nav=0"></iframe>

<br>

##### Avatar Initials
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/ipreo/sprinkles/?path=/story/components-avatar--initials&nav=0"></iframe>

<br>

##### Avatar Image
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/ipreo/sprinkles/?path=/story/components-avatar--image&nav=0"></iframe>


</div>
<!-- End Angular Code Section -->

<!--Start Design Guidelines Tab -->
<div id="guidelines" class="docs-tabs-content" markdown="1">

# Overview

Avatars are used to represent the user’s identity onscreen with simple visuals.

## Usage

- As a user profile icon in the header

- As an icon in a table

- As contact thumbnails

<hr>

## Versions

#### People Version 
The user version is circular and should only be used for individual users.

<br>

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/avatars/new format/AvatarPeopleVersion.png" width="15%;">

<br>

#### Company Version 
The company version is square and should only be used for company users

<br>

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/avatars/new format/AvatarCoVersion.png" width="15%;">

<hr>

## Types

#### Default Avatars 

<br>

**First and last name or company initials**

<br>

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/avatars/new format/AvatarDefault.png" width="50%;">

<br>

**Company initials can vary and will appear as the following:**
<br>

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/avatars/new format/AvatarInitials.png" width="50%;">

<br>

#### Placeholder 
User icon for when the user does not provide name

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/avatars/new format/AvatarPlaceholder.png" width="50%;">

<br>

#### User Supplied Image 
Image of user's choice if uploaded

<br>

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/avatars/new format/AvatarUserImg.png" width="50%;">

<hr>

## Best practices

- Always use a circular avatar for a personal user and a square avatar for a company user

- Always use light colored avatars on dark backgrounds and the dark colored avatars on light backgrounds

- Always use colors that do not conflict with danger, information, and success colors

<hr>


## Examples

<br>

**A user profile icon in the header**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/avatars/new format/AvatarHeaderEX.png" width="50%;">

<br>

**Avatar icons in a table**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/avatars/new format/AvatarTableEX.png" width="50%;">

<br>

**Contact thumbnails**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/avatars/new format/AvatarContactsEX.png" width="50%;">


</div>
<!-- End Design Tab -->




