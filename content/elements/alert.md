---
title: Alert
layout: docs
description: Alerts are used to communicate errors, warnings, confirmation messages and critical information that can affect the user experience.
group: elements
toc: true
colors:
- primary
- success
- warning
- danger
---

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

## UX Guidance

### Structure

Alerts provide contextual information relevent to the user.

The alerts are activated for the following reasons:
- System alert - the system needs to communicate to the user a system related issue or status
- Engagement alert - the user is nudged or guided to enter or update data in the system
- Access alert - the user tries to access an item that was deleted or they don't have access to
- Feedback alerts - the system's response to the user interacting with it

---

### Banner alert 
Banner alerts use the Alert top styling

Banner alerts are used to communicate critical status information that is being communicated by the system.

Banner alerts slide in from the top of the browser and remain there until the condition (for their activation) clears or they are dismissed.

Banner alerts can be persistent or dismissible, depending of the nature of the message.

Persistent banner alerts can be hidden. When a banner is hidden it will not show for the duration of a user session, but will reappear when the user logs in again, provided the condition (for their activation) is still valid.

{% include guide-img.html img='alert/alert-top'%}

**What banner alerts must communicate:**
- Offline status
- Upcoming system maintenance or upgrade
- Browser related issues

**What banner alerts must not communicate:**
- Feedback on actions the user has performed
- Alerts relating to specific pages or components

---

### Page status alert
Page status alerts communicate the status of a particular page. Page alerts use the default alert styling.

This alert can be either persistent (if condition it represents is still valid) or dismissible.

Page status alerts appear in an embedded position between the page header and the page content. Since this alert inserts itself into the page it pushes the content down the page and only removes itself once dismissed (if dismissable).

{% include guide-img.html img='alert/alert-status'%}

**What Page status alerts must communicate:**
- Page update status
- Maintenance or recent changes to a page
- Information or functionality that is not available

**What Page status alerts must not communicate:**
- Issues related to system status or maintenance
- Feedback on actions the user has performed

---

### Toast alert 
Toast alerts serve as a feedback & confirmation mechanism after the user performs an action. 

Toast alerts slide in from the top right corner of the browser, overlaying the content. It's position is fixed ie. is not affected by scrolling.

The toast alert can then either be dismissed or will disappear when its time duration has ended.

{% include guide-img.html img='alert/alert-toast'%}

**What toast alerts must communicate:**
- Errors - when a user completes an action but system-related issues prevent that action from being executed
- Informational - when a user completes an action, but there is some additional info to be aware of
- Success - when a user completes an action
- Warning - when a user cannot complete an action due to external factors that cannot immediately be resolved

**What toast alerts must not communicate:**
- Issues related to system status or maintenance
- Alerts relating to specific pages or components