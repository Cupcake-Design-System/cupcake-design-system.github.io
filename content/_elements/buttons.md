---
title: Buttons
description: Buttons are clickable items used to trigger an action.
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

All buttons have the following features:
- A hover and a click state
- Can be either active or disabled
- Come in 4 different sizes (primarily for use in grids, components and mobile apps)

Buttons display in the following variations:

- Primary button
- Secondary button
- Action button
- Danger button
- Link-only button
- Icon button
- Icon-only button

<hr>

#### Primary button
Primary buttons draw attention to the primary action within a screen, component or interaction. Not all screens will require a primary button.

##### States

{% include guide-img.html img='elements/buttons/primary-button-states'%} 

##### Variations

##### Primary button + icon

Primary buttons can include icons to:

- Visually emphasise their purpose and
draw the eye to common and frequently used functions.

{% include guide-img.html img='elements/buttons/primary-button-icon-example'%} 

##### Do's and Dont's

##### Primary Button Usage

{% include guide-img.html img='elements/buttons/'%} 

##### Grouping Primary Buttons

{% include guide-img.html img='elements/buttons/'%} 

##### Grouping and Button Order

{% include guide-img.html img='elements/buttons/'%} 

<hr>

#### Action button
Action buttons represent and draw attention to an action where something is created or introduced into the workflow.

##### States

{% include guide-img.html img='elements/buttons/'%} 

##### Variations

##### Action button + icon

Action buttons can include icons to add additional visual emphasis.

{% include guide-img.html img='elements/buttons/'%} 

##### Do's and Dont's

##### Action button usage

{% include guide-img.html img='elements/buttons/'%} 

##### Action button combinations

{% include guide-img.html img='elements/buttons/'%} 

<hr>

#### Danger button
Danger buttons represent and draw attention to a destructive action where something is discarded or deleted.

A destructive action button can share the screen with an additive action button and/or a primary action button

##### States

{% include guide-img.html img='elements/buttons/'%} 

##### Variations

##### Danger button + icon
Action buttons can include icons to add additional visual emphasis.

{% include guide-img.html img='elements/buttons/'%} 

##### Do's and Dont's

##### Danger button usage

{% include guide-img.html img='elements/buttons/'%} 

##### Danger button combinations

{% include guide-img.html img='elements/buttons/'%} 

<hr>

#### Secondary button
Secondary buttons are the standard button for general use. Secondary buttons are often used in combination with a primary button, to represent an opposing action.

##### States

{% include guide-img.html img='elements/buttons/'%} 

##### Variations

##### Seconary button + icon
Secondary buttons can include icons to:

- Visually emphasise their purpose and
- Draw the eye to common and frequently used functions.

{% include guide-img.html img='elements/buttons/'%} 

##### Do's and Dont's

##### Secondary button usage

{% include guide-img.html img='elements/buttons/'%} 

##### Repetitive use of secondary buttons in tables

{% include guide-img.html img='elements/buttons/'%} 

<hr>

#### Link-only button
Link-only buttons are used under the following circumstances:

- Primary and Secondary buttons have been used but an additional button is needed to highlight a less critical action or supporting link.
- To add additional buttons to an already button heavy page
- To represent less important or supporting actions.

##### States

{% include guide-img.html img='elements/buttons/'%} 

##### Variations

##### Link-only button + icon
Link-only buttons can include icons to:

- Visually emphasise their purpose and
- Draw the eye to common and frequently used functions.

{% include guide-img.html img='elements/buttons/'%} 

##### Do's and Dont's

##### Link-only button usage

{% include guide-img.html img='elements/buttons/'%} 

##### Button combinations

{% include guide-img.html img='elements/buttons/'%} 

##### Button link vs text link

{% include guide-img.html img='elements/buttons/'%} 

<hr>

#### Icon button
Icon buttons are best used in combinations with other buttons, typically in toolbars or in headers.

##### States

{% include guide-img.html img='elements/buttons/'%} 

##### Variations
Use colour on hover when using icon-only buttons as action or danger buttons.


##### Do's and Dont's

##### Icon button usage

{% include guide-img.html img='elements/buttons/'%} 

<hr>

#### Icon-only button
Icon-only buttons are best used for common or repetitive actions, typically where space is restricted in tables and forms.

##### States

{% include guide-img.html img='elements/buttons/'%} 

##### Variations

##### Action Variation

{% include guide-img.html img='elements/buttons/'%} 

##### Danger Variation

{% include guide-img.html img='elements/buttons/'%}



##### Do's and Dont's

##### Icon-only button usage

{% include guide-img.html img='elements/buttons/'%} 

##### Icon-only button in forms

{% include guide-img.html img='elements/buttons/'%} 



</div>
<!-- End Design Section -->


<!-- Start Cupcake Code Section -->
<div id="code" class="docs-tabs-content" markdown="1">

### Base
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


