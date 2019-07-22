---
title: Alerts
description: Alerts are used to communicate errors, warnings, confirmation messages and critical information that can affect the user experience.
colors:
- primary
- success
- warning
- danger
tabs: 
- Code
- Guidelines
---

<div id="code" class="docs-tabs-content" markdown="1">

### Base

Alerts provide contextual information relevent to the user.

The default alert does not imply action. The color is simple gray and doesn't include an icon or close action.

{% example html %}
<div class="c-alert">
 <strong>Oh snap there is a problem!</strong>
</div>
{% endexample %}


<hr>
<br>

### Color Examples

This is an example of available colors for the **{{ page.title }}** element. 

{% example html %}
{% for color in page.colors %}
<div class="c-alert c-alert-{{ color }}">
  <i class="fa fa-exclamation-circle c-alert-icon" aria-hidden="true"></i>
    <div class="c-alert-content"><strong>
    This is a {{ color | capitalize }} alert
      </strong>
    </div>
    <a href="#" class="c-alert-close" aria-hidden="true"></a>
</div>
{% endfor %}
{% endexample %}


<hr>
<br>


### Alert top
Designed to sit flush vertically and horizontally within a container. In most cases at the very top of the page.

{% example html %}
{% for color in page.colors %}
<div class="c-alert c-alert-top c-alert-{{ color }}">
  <i class="fa fa-exclamation-circle c-alert-icon" aria-hidden="true"></i>
    <div class="c-alert-content">
      <div class="c-alert-title">{{ color | capitalize }} Alert Title</div>
        Lipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
  <a href="#" class="c-alert-close" aria-hidden="true"></a>
</div>
<br>
{% endfor %}
{% endexample %}


<hr>
<br>


### In columns with icons

{% example html %}
<div class="c-row">
    <div class="c-col">
    <div class="c-alert c-alert-danger">
      <i class="fa fa-exclamation-circle c-alert-icon" aria-hidden="true"></i>
        <div class="c-alert-content"><strong>
        This is a {{ color | capitalize }} alert
          </strong>
        </div>
        <a href="#" class="c-alert-close" aria-hidden="true"></a>
    </div>
    </div>
    <div class="c-col">
    <div class="c-alert c-alert-success">
      <i class="fa fa-exclamation-circle c-alert-icon" aria-hidden="true"></i>
        <div class="c-alert-content"><strong>
        This is a {{ color | capitalize }} alert
          </strong>
        </div>
        <a href="#" class="c-alert-close" aria-hidden="true"></a>
    </div>
    </div>
</div>
{% endexample %}


<hr>
<br>

### Toast
{% example html %}
{% for color in page.colors %}
<div class="c-toast-alert c-toast-alert-{{ color }}">
  <i class="c-toast-alert-icon fa fa-check-circle"></i>
  Nam porttitor blandit accumsan.
  Ut vel dictum sem, a pretium dui.
  <a href="#" class="c-toast-alert-close"></a>
</div>
{% endfor %}
{% endexample %}

</div>
<!-- End Code Tab -->

<!-- Start Angular Tab -->
<div id="angular" class="docs-tabs-content" markdown="1">

### Storybook iframe
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/josh-easter/storybook-demo/?path=/story/basic-elements--avatar&full=0&addons=1&stories=0&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs&nav=0"></iframe>

</div>
<!-- End Angular Tab -->


<!-- Start Design Guidelines Tab -->
<div id="guidelines" class="docs-tabs-content" markdown="1">

# Overview

**Types of alerts available:**

- Banner alert
- Box alert
- Toast alert

<hr>

<!-- Start Banner Alert Section -->
## Banner Alerts

### Placement & Behaviour
- Banner alerts slide in from the top of the browser, pushing down the content in the browser and remains there until the issue is resolved or it is dismissed.

- Banner alerts can be persistent or dismissible, depending on how serious the issue is that it is communicating.

- <b>Note</b>: Persistent banner alerts can also be hidden by clicking on the hide button. When a banner is hidden it will not show for the duration of a user session, but will reappear when the user logs in again, provided the condition (for it's activation) is still valid.

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/alerts/banner-alert-new-format/banner-alert-example@2x.png" width="100%;">


### Variations

Banner Alerts should be used sparingly to communicate informational, warning or danger messages.


### Best Practices
- Only show one Banner Alert at a time
- Only use Banner Alerts to communicate system information and warnings
- Allow users to hide or dismiss Banner Alerts that communicate non-critical system information
- Keep copy on all alerts short and to the point
- If available, do include links for the user to either rectify the situation or find out more information

<hr>

## Examples

**An dismissible informational Banner alert with a link to more information**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/alerts/banner-alert-new-format/info-banner-alert-example@2x.png" width="100%;">

<br>

**A persistent danger Banner alert**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/alerts/banner-alert-new-format/danger-banner-alert-example@2x.png" width="100%;">
<!-- End Banner Alert Section -->

<hr>

<!-- Start Box Alert Section -->
## Box Alerts

### Placement & Behaviour
- Box alerts fade in at the top of the page or component it relates to, pushing down the content and remains there until the issue is resolved or it is dismissed.

- Box alerts can be persistent or dismissible, depending on how serious the issue is that it is communicating.

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/alerts/box-alerts-new-format/box-alert-example-1@2x.png" width="100%;">

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/alerts/box-alerts-new-format/box-alert-example-2@2x.png" width="100%;">


### Variations

Box Alerts should be used to communicate informational, warning or danger messages.

### Best Practices
- Try to show only one Box alert at a time. Two at the most in extreme cases
- If two Box alerts are shown at the same time, the latest one will appear at the top
Box alerts must sit in the container of the page or component it relates to
- Allow users to hide or dismiss Box alerts that communicate non-critical system information
- Keep copy on all alerts short and to the point
- If available, do include links for the user to either rectify the situation or find out more information

<hr>

## Examples

**A persistent danger Box alert**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/alerts/box-alerts-new-format/danger-box-alert-example@2x.png" width="100%;">

<br>

**An dismissible informational Box alert with a link to more information**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/alerts/box-alerts-new-format/info-banner-alert-example@2x.png" width="100%;">
<!-- End Box Alert Section -->

<hr>

<!-- Start Toast Alerts Section -->
## Toast Alerts

### Placement & Behaviour
- Toast alerts slide in from the top right corner of the browser, overlaying the content.  It's position is fixed ie. is not affected by scrolling.

- Banner alerts auto-clear after a period of time but can also be dismissed by the user.

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/alerts/toast-alert-new-format/toast-alert-example@2x.png" width="100%;">

### Variations

Toast Alerts should be used to communicate informational, warning, danger or success messages in response to user actions.

### Best Practices
- Always animate Toast alerts in from the top right corner
- Toast alerts should appear in order of the latest at the top 
- Toast alerts must appear immediately in response to a user action
- Keep copy on all alerts short and to the point
- If available, do include links for the user to either rectify the situation or find out more information

<hr>

## Examples

**An informational Toast alert**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/alerts/toast-alert-new-format/info-toast-alert-example@2x.png" width="100%;">

<br>

**A success Toast alert**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/alerts/toast-alert-new-format/success-toast-alert-example@2x.png" width="100%;">

<br>

**A danger Toast alert**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/alerts/toast-alert-new-format/danger-toast-alert-example@2x.png" width="100%;">

<!-- End Toast Alerts Section -->



</div>
<!-- End Design Tab -->






