---
title: Buttons 2.0
layout: docs
description: Buttons are clickable items used to trigger an action. Buttons make common actions immediately visible and easy to perform with one click or tap.
group: elements
toc: true
sizes:
- xs
- sm
- lg
- xl
---

{% capture design %}
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
![Button Wording Do's and Don'ts](\assets\img\buttons\button-wording-dos-donts.PNG "Button Wording Dos and Donts")

##### Buttons + Icons
![Buttons + Icons Do's and Don'ts](\assets\img\buttons\buttons-icons-dos-donts.PNG "Buttons + Icons Dos and Donts")

## Primary Buttons
Primary buttons draw attention to the primary action within a screen, component or interaction. Not all screens will require a primary button.

{% endcapture %}


{% capture code %}
{% example html %}
<button type="button" class="c-btn c-btn-primary">Button</button>
{% endexample %}

{% endcapture %}

{% include components.html %}
