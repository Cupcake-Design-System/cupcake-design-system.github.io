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

## Overview

Modals generally conform to the following criteria:

- Modals appear on a layer above of the main content
- Modals require user interaction
- Modals disable the main content until the user explicitly interacts with the dialog

Currently the following modals are in use:

- Standard modals
- Modal dialogs

<hr>

### Standard Modals
Standard modals are used to deliver content or additional functionality that supports the underlying page or task.

#### Structure
Standard modals are typically made up of the following:

- Heading
- Close button 
- Content area
- A 1 button or a 2 button combination (depending on the use case)

Types of Standard Modals

- Fixed width standard modals
- Flexible width standard modals (variation)
- Full screen modals (variation)

#### Examples of Use

##### Fixed Width Modal
{% include guide-img.html img='elements/modals/FIXED WIDTH'%} 

##### Flexible Width Modal
{% include guide-img.html img='elements/modals/FLEXIBLE WIDTH'%} 

##### Full Screen Modal
{% include guide-img.html img='elements/modals/FULLSCREEN'%} 
<hr>

#### Do's and Dont's

##### Titles
{% include guide-img.html img='elements/modals/'%} 

##### Button Usage
{% include guide-img.html img='elements/modals/'%} 

##### Button Sizing
{% include guide-img.html img='elements/modals/'%} 

##### Button Placement
{% include guide-img.html img='elements/modals/'%} 

<hr>

### Fixed Width Modals
The default version of standard modals.

##### Behavior 
{% include guide-img.html img='elements/modals/'%} 

##### Do's and Dont's
{% include guide-img.html img='elements/modals/'%} 

<hr>

### Flexible Width Modals
A variation of the standard modal, the width of this modal can be adjusted to suit content too wide for the fixed width version.

##### Behavior 
{% include guide-img.html img='elements/modals/'%} 

##### Do's and Dont's
{% include guide-img.html img='elements/modals/'%} 

<hr>

### Full Screen Modals
Another variation of the standard modal, this version is used to display large tables and grids.

##### Behavior 
{% include guide-img.html img='elements/modals/'%} 

##### Do's and Dont's
{% include guide-img.html img='elements/modals/'%} 

<hr>

### Modal Dialogs
Modal Dialogs are used to communicate important information, and require a user response.

Structure
- Heading  
- Supportive copy
- An confirmation checkbox (optional) 
- A one button or two button combination (depending on the use case)

Types
- Modal dialogs requiring acknowledgement
- Modal dialogs requiring a decision

#### Do's and Dont's

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

### Modal Dialog requiring an acknowledgement
This modal dialog requires the user to acknowledge important information, but not to make any specific decisions.

##### Examples of Use
This modal could persist every time a specific event is triggered, requiring it to be acknowledged before the user can continue. 

{% include guide-img.html img='elements/modals/modal dialog 1'%} 

This version contains a checkbox that, if checked, will make it a once-off acknowledgement.

{% include guide-img.html img='elements/modals/ModalDialog2'%} 

#### Do's and Dont's

##### Button Usage
{% include guide-img.html img='elements/modals/'%} 

### Modal Dialog requiring an decision
This modal dialog requires the user to view important information, and to make a decision on wether to continue or not.

##### Examples of Use
A delete warning, featuring a danger button, let's the user understand the potential impact of their decision. 

{% include guide-img.html img='elements/modals/modal dialog decision'%} 

#### Do's and Dont's

##### Button Usage
{% include guide-img.html img='elements/modals/'%} 

</div>
<!-- End Design Section -->


<!-- Start Cupcake Code Section -->
<div id="code" class="docs-tabs-content" markdown="1">

## Base
Use when displaying information that does not require a user action, such as a read-only document or a supplemental video.

{% example html %}
<div id="modal_info" class="c-modal c-modal-info c-modal-fade c-modal-in">
<div class="c-modal-dialog">
    <div class="c-modal-content">
        <div class="c-modal-header">
            <div class="c-modal-title">Modal header</div>
            <button type="button" class="c-modal-close">
                    <span onclick="closeDefault()" aria-hidden="true">×</span>
                </button>
        </div>
    <div class="c-modal-body c-text-center">
        <i class="fa fa-question-circle c-modal-confirmation-icon"></i>
        <span class="c-modal-confirmation-title">Modal Title</span>
        <p class="c-modal-confirmation-text">Modal Text Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, eum.</p>
        <div class="c-modal-confirmation-buttons">
        <span class="close-modal" aria-hidden="true">
            <button onclick="closeInfo()" class=" close-modal c-btn c-btn-secondary c-m-right-sm">Cancel</button>
            <button onclick="closeInfo()" class=" close c-btn c-btn-primary">Ok</button>
            </span>
        </div>
    </div>
    </div>
</div>
</div>
{% endexample %}

</div>
<!-- End Cupcake Code Section -->

<!-- Start Angular Code Section -->
<div id="angular" class="docs-tabs-content" markdown="1">

### Storybook iframe
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/josh-easter/storybook-demo/?path=/story/basic-elements--avatar&full=0&addons=1&stories=0&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs"></iframe>

</div>
<!-- End Angular Code Section -->


