---
title: Badges
description: Badges are used to provide emphasis on a characteristic of an element, such as updated content and/or the number of unread messages,and generally cannot be interacted with.
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
- Code
- Angular 
- Guidelines
---

<div id="code" class="docs-tabs-content" markdown="1">

## Base
Badges are typically used to inform the user of status, information, or of an action that’s been taken.

{% example html %}
<div class="c-badge">v.1.0.5</div>
<div class="c-badge c-badge-rounded">v.1.0.5</div>
{% endexample %}

## Color Examples
This is an example of available colors for the Badges element.

{% example html %}
<div class="c-badge c-badge-primary">Primary</div>

<div class="c-badge c-badge-secondary">Secondary</div>

<div class="c-badge c-badge-success">Success</div>

<div class="c-badge c-badge-warning">Warning</div>

<div class="c-badge c-badge-danger">Danger</div>
{% endexample %}

## Size Examples
This is an example of available sizes for the Badges element.

{% example html %}
<div class="c-badge c-badge-secondary c-badge-sm">Small</div>
<div class="c-badge c-badge-secondary c-badge">Default</div>
<div class="c-badge c-badge-secondary c-badge-lg">Large</div>
<div class="c-badge c-badge-secondary c-badge-xl">X-Large</div>
{% endexample %}

## Additional Styles/Options

{% example html %}
<div class="c-badge c-badge-secondary c-badge-sm">Information <i class="fal fa-anchor"></i></div>
<div class="c-badge c-badge-secondary c-badge">Information <i class="fal fa-anchor"></i></div>
<div class="c-badge c-badge-secondary c-badge-lg">Information <i class="fal fa-anchor"></i></div>
<div class="c-badge c-badge-secondary c-badge-xl">Information <i class="fal fa-anchor"></i></div>
{% endexample %}

### Multiple Modifiers

{% example html %}
<div class="c-badge c-badge-rounded c-badge-primary"><i class="fa fa-info-circle" aria-hidden="true"></i> Rounded Icon</div>
<div class="c-badge c-badge-rounded c-badge-success-outline"><i class="fa fa-info-circle" aria-hidden="true"></i> Rounded Outline</div>
<div class="c-badge c-badge-danger-outline">Outline</div>
<div class="c-badge c-badge-warning-outline"><i class="fa fa-info-circle" aria-hidden="true"></i> Outline Icon</div>
<div class="c-badge c-badge-rounded c-badge-primary-outline c-badge-xl"><i class="fa fa-info-circle" aria-hidden="true"></i> Rounded XL</div>
{% endexample %}

### Inline Status

{% example html %}
<div class="c-body-text-xl"> 
  Information 
  <span class="c-badge c-badge-rounded c-badge-primary c-badge-top">8</span>
</div>
{% endexample %}

### Empty Status Badges

{% example html %}
<div class="c-badge c-badge-rounded c-badge-sm c-badge-primary"></div>

<div class="c-badge c-badge-rounded c-badge-sm c-badge-secondary"></div>

<div class="c-badge c-badge-rounded c-badge-sm c-badge-success"></div>

<div class="c-badge c-badge-rounded c-badge-sm c-badge-warning"></div>

<div class="c-badge c-badge-rounded c-badge-sm c-badge-danger"></div>



<div class="c-badge c-badge-rounded c-badge-primary"></div>

<div class="c-badge c-badge-rounded c-badge-secondary"></div>

<div class="c-badge c-badge-rounded c-badge-success"></div>

<div class="c-badge c-badge-rounded c-badge-warning"></div>

<div class="c-badge c-badge-rounded c-badge-danger"></div>


<div class="c-badge c-badge-rounded c-badge-lg c-badge-primary"></div>

<div class="c-badge c-badge-rounded c-badge-lg c-badge-secondary"></div>

<div class="c-badge c-badge-rounded c-badge-lg c-badge-success"></div>

<div class="c-badge c-badge-rounded c-badge-lg c-badge-warning"></div>

<div class="c-badge c-badge-rounded c-badge-lg c-badge-danger"></div>
{% endexample %}


</div>
<!-- End Code Tab -->

<!-- Start Angular Tab -->
<div id="angular" class="docs-tabs-content" markdown="1">

## Standard Button
<iframe title="storybook" width="100%" height="500px" src=""></iframe>

</div>
<!-- End Angular Tab -->

<!-- Start Design Guidelines Tab -->
<div id="guidelines" class="docs-tabs-content" markdown="1">

# Overview

**Types of badges available:**

- Status Badges
- Numeric Badges

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/badges/Badges_Types.png" width="500px;">

### Badge Colors
Cupcake Color Palette: https://ipreo.invisionapp.com/share/P5NNPMKHTR6#/screens/315781489_Color

##### Light Color Set
- Only use values 3-5 

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/badges/LightColorSet.png" width="500px;">

##### Dark Color Set
- Only use values 6-9 

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/badges/DarkColorSet.png" width="500px;">

<hr>
  
  <!-- Start Status Badges Row -->
  <div class="c-header-md">Status Badges</div>
   - Status badges are used to indicate the status of an entity.
  <!-- Start Status Badges Do's and Don'ts Section -->
  <div class="c-header-sm c-m-top-sm c-m-bottom-sm">Do's and Dont's</div>

  <!-- Start Status Badge Color Use Row -->
  <div class="c-header-xs">Status Badge Color Use</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/badges/StatusBadge_ColorUse_Do'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/badges/StatusBadge_ColorUse_Dont'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Use colors that are not used in brand colors, button colors, and common action colors</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use brand colors, button colors, and common action colors (danger, warning, etc.)</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Status Badge Color Use Row -->

 <!-- Start Status Badge Light vs Dark Color Sets Row -->
  <div class="c-header-xs">Status Badge Colors</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/badges/StatusBadges_LightVSDarkColors_Do'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/badges/StatusBadges_LightVSDarkColors_Dont'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Use either the light color set or dark color set for badges and stick to it </span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't mix-and-match light and dark color sets</span>
        </div>
      </div>
      </div>
    </div>
 <!-- End Status Badge Light vs Dark Color Sets Row -->

  <!-- Start Status Badge Use Row -->
  <div class="c-header-xs">Status Badge Use</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/badges/StatusBadges_BadgeUse_Do'%} 
    </div>
    <div class="c-col">
   {% include guide-img.html img='elements/badges/StatusBadges_BadgeUse_Dont'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Use either the rounded or squared badges and stick to it</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't mix-and-match rounded and squared badges</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Badge Use Row -->

  <!-- Start Status Badge Content Row -->
  <div class="c-header-xs">Status Badge Content</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/badges/StatusBadges_Content_Do'%} 
    </div>
    <div class="c-col">
   {% include guide-img.html img='elements/badges/StatusBadges_Content_Dont'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Use 1 to 2 word status indicators for status badges</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use more than 2 words</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Status Badge Content Row -->

  <!-- Start Scaling in Table Cells Row -->
  <div class="c-header-xs">Scaling Status Badges in Table Cells</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/badges/StatusBadges_TableScaling_Do'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/badges/StatusBadges_TableScaling_Dont'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Use only small and default status badges in table cells</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use large status badges in table cells</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use badges that are larger than the height of the table cell because it will affect the height of the table cell</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Scaling in Table Cells Row -->
  <!-- End Status Badges Do's and Don'ts Section -->

<hr>

  <!-- Start Numeric Badges Row -->
  <div class="c-header-md">Numeric Badges</div>
   - Numeric badges are used to indicate a running tally/count of an entity. 

  <!-- Start Numeric Badges Do's and Don'ts Section -->
  <div class="c-header-sm c-m-top-sm c-m-bottom-sm">Do's and Dont's</div>

 <!-- Start Light vs Dark Color Sets Row -->
  <div class="c-header-xs">Numeric Badges Light vs Dark Color Set</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/badges/NumericBadges_LightVSDarkColors_Do'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/badges/NumericBadges_LightVSDarkColors_Dont'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Use either the light color set or dark color set to combine with either light set or dark set of status badges and stick to it </span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't mix-and-match light and dark color sets</span>
        </div>
      </div>
      </div>
    </div>
 <!-- End Light vs Dark Color Sets Row -->

  <!-- Start Numeric Badge Content Row -->
  <div class="c-header-xs">Numeric Badge Content</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/badges/NumericBadges_Content_Do'%} 
    </div>
    <div class="c-col">
   {% include guide-img.html img='elements/badges/NumericBadges_Content_Dont'%}  
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Use only numbers in numeric badges</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use text in numeric badges</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Numeric Badge Content Row -->
  <!-- End Numeric Badges Do's and Don'ts Section -->

</div>
<!-- End Design Tab -->



