---
title: Modals
description: Modals deliver content, communicate information or require interaction while allowing the user to maintain the context of a particular task. Modals should be used sparingly as they interrupt the user's workflow.
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

### Overview

Modals generally conform to the following criteria:

- Modals appear on a layer above of the main content
- Modals require user interaction
- Modals disable the main content until the user explicitly interacts with the dialog

Currently the following modals are in use:

- Standard modals
- Modal dialogs

<hr>

#### Standard Modals
Standard modals are used to deliver content or additional functionality that supports the underlying page or task.

##### Structure
Standard modals are typically made up of the following:

- Heading
- Close button 
- Content area
- A 1 button or a 2 button combination (depending on the use case)

Types of Standard Modals

- Fixed width standard modals
- Flexible width standard modals (variation)
- Full screen modals (variation)

##### Examples of Use

Fixed Width Modal
{% include guide-img.html img='elements/modals/FIXED WIDTH'%} 

Flexible Width Modal
{% include guide-img.html img='elements/modals/FLEXIBLE WIDTH'%} 

Full Screen Modal
{% include guide-img.html img='elements/modals/FULLSCREEN'%} 
<hr>

## Do's and Dont's

##### Titles
{% include guide-img.html img='elements/modals/'%} 

##### Button Usage
{% include guide-img.html img='elements/modals/'%} 

##### Button Sizing
{% include guide-img.html img='elements/modals/'%} 

##### Button Placement
{% include guide-img.html img='elements/modals/'%} 

<hr>

##### Fixed Width Modals
The default version of standard modals.

Behavior 
{% include guide-img.html img='elements/modals/'%} 

Do's and Dont's
{% include guide-img.html img='elements/modals/'%} 

<hr>

##### Flexible Width Modals
A variation of the standard modal, the width of this modal can be adjusted to suit content too wide for the fixed width version.

Behavior 
{% include guide-img.html img='elements/modals/'%} 

Do's and Dont's
{% include guide-img.html img='elements/modals/'%} 

<hr>

##### Full Screen Modals
Another variation of the standard modal, this version is used to display large tables and grids.

Behavior 
{% include guide-img.html img='elements/modals/'%} 

Do's and Dont's
{% include guide-img.html img='elements/modals/'%} 

<hr>

#### Modal Dialogs
Modal Dialogs are used to communicate important information, and require a user response.

Structure
- Heading  
- Supportive copy
- An confirmation checkbox (optional) 
- A one button or two button combination (depending on the use case)

Types
- Modal dialogs requiring acknowledgement
- Modal dialogs requiring a decision

##### Do's and Dont's

##### Icon Usage (optional)
{% include guide-img.html img='elements/modals/'%} 

##### Icon Placement
{% include guide-img.html img='elements/modals/'%} 

##### Headings
{% include guide-img.html img='elements/modals/'%} 

##### Supportive Copy
{% include guide-img.html img='elements/modals/'%} 

##### Button Sizing
{% include guide-img.html img='elements/modals/'%} 

##### Button Placement
{% include guide-img.html img='elements/modals/'%} 

##### Positioning
{% include guide-img.html img='elements/modals/'%} 

#### Modal Dialog requiring an acknowledgement
This modal dialog requires the user to acknowledge important information, but not to make any specific decisions.

##### Examples of Use
This modal could persist every time a specific event is triggered, requiring it to be acknowledged before the user can continue. 

{% include guide-img.html img='elements/modals/modal dialog 1'%} 

This version contains a checkbox that, if checked, will make it a once-off acknowledgement.

{% include guide-img.html img='elements/modals/ModalDialog2'%} 

##### Do's and Dont's

##### Button Usage
{% include guide-img.html img='elements/modals/'%} 

#### Modal Dialog requiring an decision
This modal dialog requires the user to view important information, and to make a decision on wether to continue or not.

##### Examples of Use
A delete warning, featuring a danger button, let's the user understand the potential impact of their decision. 

{% include guide-img.html img='elements/modals/modal dialog decision'%} 

##### Do's and Dont's

##### Button Usage
{% include guide-img.html img='elements/modals/'%} 










</div>

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
<i class="fas fa-cloud-download"></i>
</span>
<span class="c-avatar c-avatar-secondary" data-text="AB"></span>
{% endexample %}

### Color Examples
This is an example of available colors for the Avatar element.

{% example html %}
<span class="c-avatar c-avatar-primary" data-text="AB"></span>

<span class="c-avatar c-avatar-secondary" data-text="AB"></span>

<span class="c-avatar c-avatar-success" data-text="AB"></span>

<span class="c-avatar c-avatar-warning" data-text="AB"></span>

<span class="c-avatar c-avatar-danger" data-text="AB"></span>
{% endexample %}

### Size Examples
This is an example of available sizes for the Avatar element.

{% example html %}
<span class="c-avatar c-avatar-primary c-avatar-sm" data-text="AB"></span>
<span class="c-avatar c-avatar-primary c-avatar-md" data-text="AB"></span>
<span class="c-avatar c-avatar-primary c-avatar-lg" data-text="AB"></span>
<span class="c-avatar c-avatar-primary c-avatar-xl" data-text="AB"></span>
{% endexample %}

### Status
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

