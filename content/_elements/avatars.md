---
title: Avatars
description: Avatars are used to represent the user’s identity onscreen with simple visuals/designs or to provide a placeholder identity for users who haven’t uploaded their own personal representation.
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
tabs:
- Design
- Code 
- Angular
---

<div id="design" class="docs-tabs-content" markdown="1">

# Overview

**Types of avatars available:**

- People Version the user version is circular and should only be used for personal users.
- Company Version - The company version is square and should only be used for company users.

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/avatars/Types-of-Avatars.png" width="500px;">

**There are different ways an avatar can be displayed within people  and company versions:**

- First + last name or company initials - The default avatar 
- Placeholder user icon - The default avatar if the user does not provide name
- Image (with and without border) - The avatar displays an image of the user's choice if uploaded

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/avatars/Avatars-MoreTypes.png" width="500px;">

**For the companies that have more than 3 initials, the avatars will appear as the following:**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/avatars/Company3+Initials.png" width="500px;">

<hr>
  
  <!-- Start Do's and Don'ts Section -->
  <div class="c-header-md">Do's and Dont's</div>

  <!-- Start Usage Row -->
  <div class="c-header-xs">Usage</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/avatars/Avatars_Usage_Do'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/avatars/Avatars_Usage_Dont'%}
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Use a circular avatar for a personal user and a square avatar for a company user </span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Use a square avatar for a personal user or a circular avatar for a company user</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Usage Row -->

 <!-- Start Colors Row -->
  <div class="c-header-xs">Colors</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/avatars/Avatars_Colors_Do'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/avatars/Avatars_Colors_Dont'%}
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Use the light colored avatars on dark backgrounds and the dark colored avatars on light backgrounds</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use the dark colored avatars on dark backgrounds or light colored avatars on light backgrounds</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Colors Row -->

  <!-- Start Avatars in Headers Row -->
  <div class="c-header-xs">Avatars in Headers</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/avatars/Avatars_Header_Do'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/avatars/Avatars_Header_Dont'%}
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Use the avatar with an account name</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use an avatar without an account name or vice versa</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Avatars in Headers Row -->

  <!-- Start Avatars in Headers-Account Names Row -->
  <div class="c-header-xs">Avatars in Headers - Account Names</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/avatars/Avatars_AccountName_Do'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/avatars/Avatars_AccountName_Dont'%}
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Use the avatar on the left-hand side of the account name</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use an avatar on the right-hand side of the account name</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Avatars in Headers - Account Names Row -->

  <!-- Start Avatar Sizes in Table Cells Row -->
  <div class="c-header-xs">Avatar Sizes in Table Cells</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/avatars/Avatars_Tables_Do'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/avatars/Avatars_Tables_Dont'%}
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Use "XS" avatars in compact table cells, "SM" avatars in cosy table cells, and default avatars in comfortable table cells</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use any other sizes for avatars in table cells except for "XS" avatars in compact table cells, "SM" avatars in cosy table cells, and default avatars in comfortable table cells</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Avatar Sizes in Table Cells Row -->

  <!-- End Do's and Don'ts Section -->


</div>
<!-- End Design Tab -->


<div id="code" class="docs-tabs-content" markdown="1">

## Base
Avatars are used to show a thumbnail representation of an individual or business in the interface.

If an image is unavailable, up to two letters can be used instead. Text is best applied with a data attribute - data-text=”{value}”.

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
This is an example of available colors for the Avatar element.

{% example html %}
<span class="c-avatar c-avatar-primary" data-text="AB"></span>

<span class="c-avatar c-avatar-secondary" data-text="AB"></span>

<span class="c-avatar c-avatar-success" data-text="AB"></span>

<span class="c-avatar c-avatar-warning" data-text="AB"></span>

<span class="c-avatar c-avatar-danger" data-text="AB"></span>
{% endexample %}

## Size Examples
This is an example of available sizes for the Avatar element.

{% example html %}
<span class="c-avatar c-avatar-primary c-avatar-sm" data-text="AB"></span>
<span class="c-avatar c-avatar-primary c-avatar-md" data-text="AB"></span>
<span class="c-avatar c-avatar-primary c-avatar-lg" data-text="AB"></span>
<span class="c-avatar c-avatar-primary c-avatar-xl" data-text="AB"></span>
{% endexample %}

## Status
In addition you can add a status to the avatar to alert the user. Status is applied with a data attribute - data-status=”{value}”.

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


</div>

<div id="angular" class="docs-tabs-content" markdown="1">

### Storybook iframe
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/josh-easter/storybook-demo/?path=/story/basic-elements--avatar&full=0&addons=1&stories=0&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs"></iframe>

</div>

