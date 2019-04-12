---
title: Alerts
description: Alerts are used to communicate errors, warnings, confirmation messages and critical information that can affect the user experience.
colors:
- primary
- success
- warning
- danger
tabs: 
- Design
- Code
- Angular
---


<div id="design" class="docs-tabs-content" markdown="1">

# Overview

**Types of alerts available:**

- Banner alert
- Box alert
- Toast alert
- Icon alert
- Modal alert (see Modal Dialogue)

<hr>

 <!-- Start Banner Alert Row -->
  <div class="c-header-md c-m-top-sm c-m-bottom-sm">Banner Alerts</div>
  Banner alerts are used to communicate critical status information that is being communicated by the system.

  <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/alerts/banner-alert/banner-alert-4.png" width="100%;">

   <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/alerts/banner-alert/banner-alert-3.png" width="100%;">

- Banner alerts slide in from the top of the browser and remain there until the condition (for it's activation) clears or it is dismissed.

- Banner alerts can be persistent or dismissible.

- Persistent banner alerts can be hidden. When a banner is hidden it will not show for the duration of a user session, but will reappear when the user logs in again, provided the condition (for it's activation) is still valid.

<div class="c-header-xs">Banner Alert Placement</div>

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/alerts/banner-alert/banner-alert-1.png" width="50%;">

<div class="c-header-xs">Banner Alert Color Options</div>
Page status alerts fall into three categories:

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/alerts/alert-colors/banner-alert-colors.png" width="75%;">

**What banner alerts communicate:**
- System unavailable
- Upcoming system maintenance or upgrade
- Browser related issues

**What banner alerts must not communicate:**
- Feedback on actions the user has performed
- Alerts relating to specific pages or components

<!-- Start Dos and Donts - Banner Alerts -->
<div class="c-header-sm c-m-top-sm c-m-bottom-sm">Do's and Dont's</div>
<!-- Start Multiple Banner Alers Row -->
  <div class="c-header-xs">Multiple banner alerts</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/alerts/banner-alert/banner-alert-do'%}
    </div>
    <div class="c-col">
   {% include guide-img.html img='elements/alerts/banner-alert/banner-alert-dont'%}
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do show the most relevant banner alert only</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't stack multiple banner alerts</span>
        </div>
      </div>
      </div>
    </div>
<!-- End Multiple Banner Alerts Row -->
<!-- END Banner Alert Row -->

<hr>

 <!-- Start Box Alert Row -->
  <div class="c-header-md c-m-top-sm c-m-bottom-sm">Box Alerts</div>
  Box alerts communicate the status of a page or component.

  <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/alerts/box-alert/page-alert-4.png" width="100%;">
    
<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/alerts/box-alert/page-alert-2.png" width="100%;">

- Box alerts can be either persistent or dismissible.

- Box alerts appear in the topmost position of the content area of a page or component. This alert inserts itself into the content area and pushes the content down the page, remaining in that position until the condition (for it's activation) clears or it is dismissed.

<div class="c-header-xs">Box alert placement</div>

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/alerts/box-alert/page-alert-1.png" width="50%;">

<div class="c-header-xs">Box alert placement in content area of page</div>

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/alerts/box-alert/component-alert-1.png" width="50%;">

<div class="c-header-xs">Box Alert Color Options</div>
Page status alerts fall into three categories:

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/alerts/alert-colors/box-alert-colors.png" width="75%;">

**What box alerts communicate:**
- Page or component status
- Validation status

**What box alerts must not communicate:**
- System status or maintenance
- Feedback on actions the user has performed

<!-- Start Dos and Donts - Box Alerts -->
<div class="c-header-sm c-m-top-sm c-m-bottom-sm">Do's and Dont's</div>
<!-- Start Box Alerts - Dos and Donts Row -->
  <div class="c-header-xs">Box Alerts</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/alerts/box-alert/page-alert-multiple-do'%}
    </div>
    <div class="c-col">
   {% include guide-img.html img='elements/alerts/box-alert/page-alert-multiple-dont'%}
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do limit box alerts to two per page or component</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do remember that users have a limited capacity to process alert messaging. Too many alerts will affect the user experience negatively and mess up the UI.</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't stack more than two banners on any page</span>
        </div>
      </div>
      </div>
    </div>
<!-- End Box Alerts - Dos and Donts Row -->

<!-- Start Stacking order - Dos and Donts Row -->
  <div class="c-header-xs">Stacking Order</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/alerts/box-alert/page-alert-order-do'%}
    </div>
    <div class="c-col">
   {% include guide-img.html img='elements/alerts/box-alert/page-alert-order-dont'%}
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do stack alerts in order of newest at the top, irrespective of priority</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't stack the newest alert under the alert already present</span>
        </div>
      </div>
      </div>
    </div>
<!-- End Stacking Order - Dos and Donts Row -->
<!-- END Box Alert Row -->

<hr>

 <!-- Start Toast Alert Row -->
<div class="c-header-md c-m-top-sm c-m-bottom-sm">Toast alerts</div>
Toast alerts serve as a feedback & confirmation mechanism after the user performs an action.

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/alerts/toast-alert/toast-alert-3.png" width="50%;">

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/alerts/toast-alert/toast-alert-4.png" width="50%;">

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/alerts/toast-alert/toast-alert-2.png" width="50%;">

- Toast alerts slide in from the top right corner of the browser, overlaying the content. It's position is fixed ie. is not affected by scrolling.

- Toast alerts are both dismissible and will auto-clear when its time duration has ended.

<div class="c-header-xs">Toast alert placement</div>

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/alerts/toast-alert/toast-alert-1.png" width="50%;">

<div class="c-header-xs">Toast Alert Color Options</div>
Toast alerts fall into three categories:

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/alerts/alert-colors/toast-alert-colors.png" width="50%;">

**What toast alerts must communicate:**

- Informational - when a user completes an action, but there is some additional info to be aware of
- Success - when a user completes an action
- Errors - when a user completes an action but system-related issues prevent that action from being executed

**What toast alerts must not communicate:**

- Issues related to system status or maintenance
- Alerts relating to specific pages or components

<!-- Start Dos and Donts - Toast Alerts -->
<div class="c-header-sm c-m-top-sm c-m-bottom-sm">Do's and Dont's</div>
<!-- Start Toast Alerts Placement - Dos and Donts Row -->
  <div class="c-header-xs">Toast alert placement</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/alerts/toast-alert/toast-alert-multiple-do'%}
    </div>
    <div class="c-col">
   {% include guide-img.html img='elements/alerts/toast-alert/toast-alert-multiple-dont'%}
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do make sure the toast alert displays in the top right corner</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't move toast alert placement to any position other than the default placement (top right corner)</span>
        </div>
      </div>
      </div>
    </div>
<!-- End Toast Alerts Placement - Dos and Donts Row -->

<!-- Start Toast Alert Stacking order - Dos and Donts Row -->
  <div class="c-header-xs">Stacking Order</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/alerts/toast-alert/toast-alert-order-do'%}
    </div>
    <div class="c-col">
      {% include guide-img.html img='elements/alerts/toast-alert/toast-alert-order-dont'%}
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do stack alerts in order of newest at the top, irrespective of priority</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do make sure that toast fade from the bottom up, oldest to newest</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't stack the newest toast under the toast already present</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't change the fade order other than from the default (bottom up, oldest to newest)</span>
        </div>
      </div>
      </div>
    </div>
<!-- End Toast Alert Stacking Order - Dos and Donts Row -->
<!-- END Toast Alert Row -->

<hr>

 <!-- Start Icon Alert Row -->
<div class="c-header-md c-m-top-sm c-m-bottom-sm">Icon alert</div>
<div class="c-text-danger c-text-italic c-text-md">
Please note: Icon alerts are primarily used in form validations but can be used as a standalone alert. The following info relate only to the Icon alert as a standalone replacement for the Box alert. For more info on Icon alerts used in form validations refer to...
</div>

The icon alert can be used as a standalone alert under special conditions. The icon alert should be used only if space or conditions don't allow for a box alert.

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/alerts/icon-alert/icon-alert-1@2x.png" width="25%;">

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/alerts/icon-alert/icon-alert-2@2x.png" width="25%;">

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/alerts/icon-alert/icon-alert-3@2x.png" width="25%;">

- The icon alert is persistent and cannot be dismissed.

- The icon alert is triggered by an action or specific condition and remains in position until the condition (for it's activation) is resolved.

<div class="c-header-xs">Icon Alert Color Options</div>
Icon alerts fall into three categories:

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/alerts/alert-colors/icon-alert-colors.png" width="75%;">

**What icon alerts communicate:**

- Page or component status
- Validation status

**What icon alerts must not communicate:**
- System status or maintenance
- Feedback on actions the user has performed
<!-- END Icon Alert Row -->

<hr>

 <!-- Start Modal Alert Row -->
<div class="c-header-md c-m-top-sm c-m-bottom-sm">Modal alert</div>
<div class="c-text-danger c-text-italic c-text-md">
See Modal Dialogue (to be linked...)
</div>
<!-- END Modal Alert Row -->


</div>
<!-- End Design Tab -->


<div id="code" class="docs-tabs-content" markdown="1">

## Base

Alerts provide contextual information relevent to the user.

The default alert does not imply action. The color is simple gray and doesn't include an icon or close action.

{% example html %}
<div class="c-alert">
 <strong>Oh snap there is a problem!</strong>
</div>
{% endexample %}

## Color Examples

This is an example of available colors for the **{{ page.title }}** element. 

{% example html %}
{% for color in page.colors %}
<div class="c-alert c-alert-{{ color }}">
    <a href="" class="c-a c-alert-close" data-dismiss="c-alert" aria-hidden="true">
        <i class="fa fa-times" aria-hidden="true"></i>
    </a>
    This is a {{ color | capitalize }} alert
</div>
{% endfor %}
{% endexample %}


## Additional Styles/Options

### Alert top

{% example html %}
{% for color in page.colors %}
<div class="c-alert c-alert-top c-alert-{{ color }}">
    <a href="" class="c-a c-alert-close" data-dismiss="c-alert" aria-hidden="true">
        <i class="fa fa-times" aria-hidden="true"></i>
    </a>
    This is a {{ color | capitalize }} alert
</div>
<br>
{% endfor %}
{% endexample %}

### In columns with icons

{% example html %}
<div class="c-row">
    <div class="c-col">
        <div class="c-alert c-alert-danger">
            <i class="fa fa-exclamation-circle c-m-right-sm"></i> Oops... Something went wrong!
            <a class="c-a c-alert-close"><i class="fa fa-times"></i></a>
        </div>
    </div>
    <div class="c-col">
        <div class="c-alert c-alert-success">
            <i class="fa fa-check-circle c-m-right-sm"></i> Great job! You are ready for the next step.
            <a class="c-a c-alert-close"><i class="fa fa-times"></i></a>
        </div>
    </div>
</div>
{% endexample %}

### Toast
{% example html %}
{% for color in page.colors %}
<div class="c-toast-alert c-toast-alert-{{ color }}">
    <button href="javascript:void(0)" class="c-toast-alert-close">&times;</button> Nam porttitor blandit accumsan. Ut vel
    dictum sem, a pretium dui.
</div>
{% endfor %}
{% endexample %}

</div>
<!-- End Code Tab -->


<!-- Start Angular Tab -->
<div id="angular" class="docs-tabs-content" markdown="1">

### Storybook iframe
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/josh-easter/storybook-demo/?path=/story/basic-elements--avatar&full=0&addons=1&stories=0&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs"></iframe>

</div>
<!-- End Angular Tab -->
