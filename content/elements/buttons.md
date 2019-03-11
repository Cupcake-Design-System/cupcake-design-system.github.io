---
title: Buttons
layout: docs
description: Buttons are clickable items used to trigger an action. Buttons make common actions immediately visible and easy to perform with one click or tap.
group: elements
toc: true
tabs: true
sizes:
- xs
- sm
- lg
- xl
---

<div class="tab-content active" id="design" markdown="1">

# Style Guide/Usage

## Features

##### All buttons have the following features:

 * a hover and a click state
 * can be either active or disabled
 * come in 4 different sizes (primarily for use in grids, components and mobile apps)
 
## Variations

##### Buttons display in the following variations:

 * Primary button
 * Secondary button
 * Action button
 * Danger button
 * Link-only button
 * Icon button
 * Icon-only button

 Don't see what your looking for? Check out more variations <a href="https://deploy-preview-61--cupcake.netlify.com/pages/buttons.html" target="_blank">here</a> and <a href="https://cupcake.netlify.com/pages/buttons.html" target="_blank">here</a>

## General Do's and Dont's

##### Button Wording
{% include guide-img.html img='buttons/button-wording-dos-donts'%} 


##### Buttons + Icons
{% include guide-img.html img='buttons/buttons-icons-dos-donts'%} 


## Primary Buttons
Primary buttons draw attention to the primary action within a screen, component or interaction. Not all screens will require a primary button.


</div> 

<div class="tab-content" id="code" markdown="1">

{% example html %}
  <button type="button" class="c-btn c-btn-primary">Button</button>
{% endexample %}


</div>