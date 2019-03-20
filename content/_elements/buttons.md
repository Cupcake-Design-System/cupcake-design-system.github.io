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
Buttons make common actions immediately visible and easy to perform with one click or tap. They can be used for any type of action, including navigation.

{% example html %}
<button type="button" class="c-btn c-btn-primary">Button</button>
{% endexample %}

### Color Examples
This is an example of available colors for the Buttons element.

{% example html %}
<button type="button" class="c-btn c-btn-primary">Primary</button>
<button type="button" class="c-btn c-btn-secondary">Secondary</button>
<button type="button" class="c-btn c-btn-success">Success</button>
<button type="button" class="c-btn c-btn-warning">Warning</button>
<button type="button" class="c-btn c-btn-danger">Danger</button>
{% endexample %}

### Size Examples
This is an example of available sizes for the Buttons element.

{% example html %}
<button type="button" class="c-btn c-btn-primary c-btn-xs">X-Small</button>
<button type="button" class="c-btn c-btn-primary c-btn-sm">Small</button>
<button type="button" class="c-btn c-btn-primary c-btn-lg">Large</button>
<button type="button" class="c-btn c-btn-primary c-btn-xl">X-Large</button>
{% endexample %}

### Disabled State
Make buttons look inactive by adding the disabled boolean attribute to any <button> element.

{% example html %}
<button type="button" class="c-btn c-btn-primary" disabled>Primary</button>
<button type="button" class="c-btn c-btn-secondary" disabled>Secondary</button>
<button type="button" class="c-btn c-btn-success" disabled>Success</button>
<button type="button" class="c-btn c-btn-warning" disabled>Warning</button>
<button type="button" class="c-btn c-btn-danger" disabled>Danger</button>
{% endexample %}

### Additional Styles and Options
This modifiers can be mixed/matched as needed

#### Outlines

{% example html %}
<button type="button" class="c-btn c-btn-primary-outline">Primary</button>
<button type="button" class="c-btn c-btn-secondary-outline">Secondary</button>
<button type="button" class="c-btn c-btn-success-outline">Success</button>
<button type="button" class="c-btn c-btn-warning-outline">Warning</button>
<button type="button" class="c-btn c-btn-danger-outline">Danger</button>
{% endexample %}

#### Pills and Colors

{% example html %}
<button type="button" class="c-btn c-btn-primary c-btn-pill">Primary</button>
<button type="button" class="c-btn c-btn-secondary c-btn-pill">Secondary</button>
<button type="button" class="c-btn c-btn-success c-btn-pill">Success</button>
<button type="button" class="c-btn c-btn-warning c-btn-pill">Warning</button>
<button type="button" class="c-btn c-btn-danger c-btn-pill">Danger</button>
{% endexample %}

#### Block Button

{% example html %}
<button type="button" class="c-btn c-btn-primary c-btn-lg c-btn-block">Block level button</button>
{% endexample %}

</div>
<!-- End Cupcake Code Section -->

<!-- Start Angular Code Section -->
<div id="angular" class="docs-tabs-content" markdown="1">

### Storybook iframe
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/josh-easter/storybook-demo/?path=/story/basic-elements--avatar&full=0&addons=1&stories=0&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs"></iframe>

</div>
<!-- End Angular Code Section -->


