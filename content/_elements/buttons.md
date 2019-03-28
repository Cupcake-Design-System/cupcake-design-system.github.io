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

# Overview

**All buttons have the following features:**
- A hover and a click state
- Can be either active or disabled
- Come in 4 different sizes (primarily for use in grids, components and mobile apps)

**Buttons display in the following variations:**

- Primary button
- Secondary button
- Action button
- Danger button
- Link-only button
- Icon button
- Icon-only button

### General Do's and Don'ts

##### Button wording 
<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/buttons/button-wording-dos-donts.png">

##### Button + icon
<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/buttons/buttons-icons-dos-donts.png">

<hr>

## Primary button
Primary buttons draw attention to the primary action within a screen, component or interaction. Not all screens will require a primary button.

#### States

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/buttons/primary-button-states.png" width="500px;">

#### Variations

##### Primary button + icon

Primary buttons can include icons to:

- Visually emphasise their purpose and
- Draw the eye to common and frequently used functions.

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/buttons/primary-button-icon-example@2x.png" width="250px;">

#### Do's and Dont's

##### Primary Button Usage

{% include guide-img.html img='elements/buttons/primary-button-dos-donts'%} 

##### Grouping Primary Buttons

{% include guide-img.html img='elements/buttons/grouping-primary-buttons-dos-donts'%} 

##### Grouping and Button Order

{% include guide-img.html img='elements/buttons/grouping-button-order-primary-dos-donts'%} 

<hr>

## Action button
Action buttons represent and draw attention to an action where something is created or introduced into the workflow.

#### States
<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/buttons/action-button-states.png" width="500px;">

#### Variations

##### Action button + icon

Action buttons can include icons to add additional visual emphasis.

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/buttons/action-button-icon-example@2x.png" width="250px;">

#### Do's and Dont's

##### Action button usage

{% include guide-img.html img='elements/buttons/action-button-usage'%} 

##### Action button combinations

{% include guide-img.html img='elements/buttons/action-button-combinations'%} 

<hr>

## Danger button
Danger buttons represent and draw attention to a destructive action where something is discarded or deleted.

A destructive action button can share the screen with an additive action button and/or a primary action button

#### States

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/buttons/danger-button-states.png" width="500px;">

#### Variations

##### Danger button + icon
Action buttons can include icons to add additional visual emphasis.

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/buttons/danger-button-icon-example@2x.png" width="250px;">

#### Do's and Dont's

##### Danger button usage

{% include guide-img.html img='elements/buttons/danger-button-usage'%} 

##### Danger button combinations

{% include guide-img.html img='elements/buttons/danger-button-combinations'%} 

<hr>

## Secondary button
Secondary buttons are the standard button for general use. Secondary buttons are often used in combination with a primary button, to represent an opposing action.

#### States

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/buttons/secondary-button-states.png" width="500px;">

#### Variations

##### Seconary button + icon
Secondary buttons can include icons to:

- Visually emphasise their purpose and
- Draw the eye to common and frequently used functions.

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/buttons/secondary-button-icon-example@2x.png" width="800px;">

#### Do's and Dont's

##### Secondary button usage

{% include guide-img.html img='elements/buttons/secondary-button-usage-dos-donts'%} 

##### Repetitive use of secondary buttons in tables

{% include guide-img.html img='elements/buttons/secondary-button-repetitive-usage'%} 

<hr>

## Link-only button
Link-only buttons are used under the following circumstances:

- Primary and Secondary buttons have been used but an additional button is needed to highlight a less critical action or supporting link.
- To add additional buttons to an already button heavy page
- To represent less important or supporting actions.

#### States

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/buttons/link-button-states.png" width="500px;">

#### Variations

##### Link-only button + icon
Link-only buttons can include icons to:

- Visually emphasise their purpose and
- Draw the eye to common and frequently used functions.

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/buttons/link-button-icon-example@2x.png" width="250px;">

#### Do's and Dont's

##### Link-only button usage

{% include guide-img.html img='elements/buttons/link-only-button-usage'%} 

##### Button combinations

{% include guide-img.html img='elements/buttons/link-only-button-combinations'%} 

##### Button link vs text link

{% include guide-img.html img='elements/buttons/'%} 

<hr>

### Icon button
Icon buttons are best used in combinations with other buttons, typically in toolbars or in headers.

#### States

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/buttons/icon-button-states.png" width="250px;">

#### Do's and Dont's

##### Icon button usage

{% include guide-img.html img='elements/buttons/icon-button-usage'%} 

<hr>

### Icon-only button
Icon-only buttons are best used for common or repetitive actions, typically where space is restricted in tables and forms.

#### States

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/buttons/icon-only-button-states.png" width="250px;">

#### Variations
Use colour on hover when using icon-only buttons as action or danger buttons.

##### Action Variation

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/buttons/icon-only-button-action-variation.png" width="100px;">

##### Danger Variation

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/buttons/icon-only-button-danger-variation.png" width="100px;">

#### Do's and Dont's

##### Icon-only button usage

{% include guide-img.html img='elements/buttons/icon-only-button-usage'%} 

##### Icon-only button in forms

{% include guide-img.html img='elements/buttons/icon-only-button-usage-forms'%} 



</div>
<!-- End Design Section -->


<!-- Start Cupcake Code Section -->
<div id="code" class="docs-tabs-content" markdown="1">

## Base
Buttons make common actions immediately visible and easy to perform with one click or tap. They can be used for any type of action, including navigation.

{% example html %}
<button type="button" class="c-btn c-btn-primary">Button</button>
{% endexample %}

## Color Examples
This is an example of available colors for the Buttons element.

{% example html %}
<button type="button" class="c-btn c-btn-primary">Primary</button>
<button type="button" class="c-btn c-btn-secondary">Secondary</button>
<button type="button" class="c-btn c-btn-success">Success</button>
<button type="button" class="c-btn c-btn-warning">Warning</button>
<button type="button" class="c-btn c-btn-danger">Danger</button>
{% endexample %}

## Size Examples
This is an example of available sizes for the Buttons element.

{% example html %}
<button type="button" class="c-btn c-btn-primary c-btn-xs">X-Small</button>
<button type="button" class="c-btn c-btn-primary c-btn-sm">Small</button>
<button type="button" class="c-btn c-btn-primary c-btn-lg">Large</button>
<button type="button" class="c-btn c-btn-primary c-btn-xl">X-Large</button>
{% endexample %}

## Disabled State
Make buttons look inactive by adding the disabled boolean attribute to any <button> element.

{% example html %}
<button type="button" class="c-btn c-btn-primary" disabled>Primary</button>
<button type="button" class="c-btn c-btn-secondary" disabled>Secondary</button>
<button type="button" class="c-btn c-btn-success" disabled>Success</button>
<button type="button" class="c-btn c-btn-warning" disabled>Warning</button>
<button type="button" class="c-btn c-btn-danger" disabled>Danger</button>
{% endexample %}

## Additional Styles and Options
These modifiers can be mixed/matched as needed

### Outlines

{% example html %}
<button type="button" class="c-btn c-btn-primary-outline">Primary</button>
<button type="button" class="c-btn c-btn-secondary-outline">Secondary</button>
<button type="button" class="c-btn c-btn-success-outline">Success</button>
<button type="button" class="c-btn c-btn-warning-outline">Warning</button>
<button type="button" class="c-btn c-btn-danger-outline">Danger</button>
{% endexample %}

### Pills and Colors

{% example html %}
<button type="button" class="c-btn c-btn-primary c-btn-pill">Primary</button>
<button type="button" class="c-btn c-btn-secondary c-btn-pill">Secondary</button>
<button type="button" class="c-btn c-btn-success c-btn-pill">Success</button>
<button type="button" class="c-btn c-btn-warning c-btn-pill">Warning</button>
<button type="button" class="c-btn c-btn-danger c-btn-pill">Danger</button>
{% endexample %}

### Block Button

{% example html %}
<button type="button" class="c-btn c-btn-primary c-btn-lg c-btn-block">Block level button</button>
{% endexample %}

<hr>

## Button Group

### Base
Button group displays multiple related actions in a row to help with horizontal arrangement and the spacing of calls to action.

{% example html %}
<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-primary">Default</button>
  <button type="button" class="c-btn c-btn-primary">Group</button>
  <button type="button" class="c-btn c-btn-primary">Buttons</button>
</div>
{% endexample %}

### Color Examples
This is an example of available colors for the Button Group element.

{% example html %}
<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-primary">Primary</button>
  <button type="button" class="c-btn c-btn-primary">Group</button>
  <button type="button" class="c-btn c-btn-primary">Buttons</button>
</div>

<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-secondary">Secondary</button>
  <button type="button" class="c-btn c-btn-secondary">Group</button>
  <button type="button" class="c-btn c-btn-secondary">Buttons</button>
</div>

<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-success">Success</button>
  <button type="button" class="c-btn c-btn-success">Group</button>
  <button type="button" class="c-btn c-btn-success">Buttons</button>
</div>

<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-warning">Warning</button>
  <button type="button" class="c-btn c-btn-warning">Group</button>
  <button type="button" class="c-btn c-btn-warning">Buttons</button>
</div>

<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-danger">Danger</button>
  <button type="button" class="c-btn c-btn-danger">Group</button>
  <button type="button" class="c-btn c-btn-danger">Buttons</button>
</div>
{% endexample %}

### Size Examples
This is an example of available sizes for the Button Group element.

{% example html %}
<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-primary c-btn-xs">X-Small</button>
  <button type="button" class="c-btn c-btn-primary c-btn-xs">Group</button>
  <button type="button" class="c-btn c-btn-primary c-btn-xs">Buttons</button>
</div>
<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-primary c-btn-sm">Small</button>
  <button type="button" class="c-btn c-btn-primary c-btn-sm">Group</button>
  <button type="button" class="c-btn c-btn-primary c-btn-sm">Buttons</button>
</div>
<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-primary c-btn-lg">Large</button>
  <button type="button" class="c-btn c-btn-primary c-btn-lg">Group</button>
  <button type="button" class="c-btn c-btn-primary c-btn-lg">Buttons</button>
</div>
<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-primary c-btn-xl">X-Large</button>
  <button type="button" class="c-btn c-btn-primary c-btn-xl">Group</button>
  <button type="button" class="c-btn c-btn-primary c-btn-xl">Buttons</button>
</div>
{% endexample %}

### Additional Styles and Options

### Icons

{% example html %}
<div class="c-btn-group">
	<button type="button" class="c-btn c-btn-primary"><i class="fas fa-chart-bar"></i></button>
	<button type="button" class="c-btn c-btn-primary"><i class="fas fa-chart-pie"></i></button>
	<button type="button" class="c-btn c-btn-primary"><i class="fas fa-chart-line"></i></button>
</div>
<div class="c-btn-group">
	<button type="button" class="c-btn c-btn-primary c-btn-box"><i class="fas fa-chart-bar"></i></button>
	<button type="button" class="c-btn c-btn-primary c-btn-box"><i class="fas fa-chart-pie"></i></button>
	<button type="button" class="c-btn c-btn-primary c-btn-box"><i class="fas fa-chart-line"></i></button>
</div>
{% endexample %}

### Vertical

{% example html %}
<div class="c-btn-group-vertical">
	<button class="c-btn c-btn-primary c-text-left">All</button>
	<button class="c-btn c-btn-primary c-text-left">Published</button>
	<button class="c-btn c-btn-primary c-text-left">Unpublished</button>
	<button class="c-btn c-btn-primary c-text-left">Drafts</button>
</div>
<div class="c-btn-group-vertical">
	<button class="c-btn c-btn-primary-outline c-text-left">All</button>
	<button class="c-btn c-btn-primary-outline c-text-left">Published</button>
	<button class="c-btn c-btn-primary-outline c-text-left">Unpublished</button>
	<button class="c-btn c-btn-primary-outline c-text-left">Drafts</button>
</div>
<div class="c-btn-group-vertical">
	<button class="c-btn c-btn-primary"><i class="fas fa-euro-sign"></i> EUR</button>
	<button class="c-btn c-btn-primary"><i class="fas fa-pound-sign"></i> GBP</button>
	<button class="c-btn c-btn-primary"><i class="fas fa-dollar-sign"></i> USD</button>
	<button class="c-btn c-btn-primary"><i class="fas fa-dollar-sign"></i> USD</button>
</div>
<div class="c-btn-group-vertical">
	<button class="c-btn c-btn-box c-btn-sm c-btn-primary"> <i class="fa fa-exclamation-circle"></i></button>
	<button class="c-btn c-btn-box c-btn-sm c-btn-primary"> <i class="fa fa-exclamation-circle"></i></button>
	<button class="c-btn c-btn-box c-btn-sm c-btn-primary"><i class="fa fa-exclamation-circle"></i></button>
</div>
{% endexample %}

### Pills

{% example html %}
<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-pill c-btn-primary">Primary</button>
  <button type="button" class="c-btn c-btn-pill c-btn-primary">Group</button>
  <button type="button" class="c-btn c-btn-pill c-btn-primary">Buttons</button>
</div>

<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-pill c-btn-secondary">Secondary</button>
  <button type="button" class="c-btn c-btn-pill c-btn-secondary">Group</button>
  <button type="button" class="c-btn c-btn-pill c-btn-secondary">Buttons</button>
</div>

<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-pill c-btn-success">Success</button>
  <button type="button" class="c-btn c-btn-pill c-btn-success">Group</button>
  <button type="button" class="c-btn c-btn-pill c-btn-success">Buttons</button>
</div>

<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-pill c-btn-warning">Warning</button>
  <button type="button" class="c-btn c-btn-pill c-btn-warning">Group</button>
  <button type="button" class="c-btn c-btn-pill c-btn-warning">Buttons</button>
</div>

<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-pill c-btn-danger">Danger</button>
  <button type="button" class="c-btn c-btn-pill c-btn-danger">Group</button>
  <button type="button" class="c-btn c-btn-pill c-btn-danger">Buttons</button>
</div>
{% endexample %}

### Outline

{% example html %}
<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-primary-outline">Primary</button>
  <button type="button" class="c-btn c-btn-primary-outline">Group</button>
  <button type="button" class="c-btn c-btn-primary-outline">Buttons</button>
</div>

<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-secondary-outline">Secondary</button>
  <button type="button" class="c-btn c-btn-secondary-outline">Group</button>
  <button type="button" class="c-btn c-btn-secondary-outline">Buttons</button>
</div>

<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-success-outline">Success</button>
  <button type="button" class="c-btn c-btn-success-outline">Group</button>
  <button type="button" class="c-btn c-btn-success-outline">Buttons</button>
</div>

<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-warning-outline">Warning</button>
  <button type="button" class="c-btn c-btn-warning-outline">Group</button>
  <button type="button" class="c-btn c-btn-warning-outline">Buttons</button>
</div>

<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-danger-outline">Danger</button>
  <button type="button" class="c-btn c-btn-danger-outline">Group</button>
  <button type="button" class="c-btn c-btn-danger-outline">Buttons</button>
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


