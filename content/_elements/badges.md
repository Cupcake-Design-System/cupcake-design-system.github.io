---
title: Badges
description: Badges are used to provide emphasis on a characteristic of an element, such as updated content and/or the number of unread messages,and generally cannot be interacted with.
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
<!-- End Code Tab -->

<!-- Start Angular Tab -->
<div id="angular" class="docs-tabs-content" markdown="1">

### Standard Button
<iframe title="storybook" width="100%" height="500px" src=""></iframe>

</div>
<!-- End Angular Tab -->

<!-- Start Design Guidelines Tab -->
<div id="guidelines" class="docs-tabs-content" markdown="1">

## Overview

**Types of badges available:**

- Status Badges
- Numeric Badges

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/badges/Badges_Types.png" width="500px;">

<hr>

#### Badge Colors
Cupcake Color Palette: https://ipreo.invisionapp.com/share/P5NNPMKHTR6#/screens/315781489_Color

**Light Color Set**
- Only use values 3-5 

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/badges/LightColorSet.png" width="500px;">

**Dark Color Set**
- Only use values 6-9 

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/badges/DarkColorSet.png" width="500px;">

<hr>
  
  <!-- Start Status Badges Row -->
#### Status Badges
  - Status badges are used to indicate the status of an entity.
  <!-- Start Status Badges Do's and Don'ts Section -->
  **Do's and Dont's**

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
#### Numeric Badges
   - Numeric badges are used to indicate a running tally/count of an entity. 

  <!-- Start Numeric Badges Do's and Don'ts Section -->
**Do's and Dont's**

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



