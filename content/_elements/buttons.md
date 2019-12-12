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
tabs:
- Code
- Angular
- Guidelines
---

<!-- Start Cupcake Code Section -->
<div id="code" class="docs-tabs-content" markdown="1">

### Base
Buttons make common actions immediately visible and easy to perform with one click or tap. They can be used for any type of action, including navigation.

{% example html %}
<button type="button" class="c-btn c-btn-primary">Button</button>
{% endexample %}

#### Color Examples
This is an example of available colors for the Buttons element.

{% example html %}
  {% for color in page.colors %}
<div class="c-btn c-btn-{{ color }}">Button</div>
  {% endfor %}
{% endexample %}

<hr>
<br>


#### Size Examples
This is an example of available sizes for the Buttons element.

{% example html %}
  {% for size in page.sizes %}
<div class="c-btn c-btn-primary c-btn-{{ size }}">Button</div>
  {% endfor %}
{% endexample %}


<hr>
<br>

#### Disabled State
Make buttons look inactive by adding the disabled boolean attribute to any <button> element.

{% example html %}
<button type="button" class="c-btn c-btn-primary" disabled>Primary</button>
{% endexample %}


<hr>
<br>

#### Block Button
Block buttons will span 100% width of the buttons container.

{% example html %}
<button type="button" class="c-btn c-btn-primary c-btn-lg c-btn-block">Block level button</button>
{% endexample %}

<hr>
<br>

#### Button Groups
Button group displays multiple related actions in a row to help with horizontal arrangement and the spacing of calls to action.

{% example html %}
<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-primary">Default</button>
  <button type="button" class="c-btn c-btn-primary">Group</button>
  <button type="button" class="c-btn c-btn-primary">Buttons</button>
</div>
{% endexample %}


**Color Examples**

This is an example of available colors for the Button Group element.

{% example html %}
  {% for color in page.colors %}
  <div class="c-btn-group">
    <button type="button" class="c-btn c-btn-{{ color }}">Button</button>
    <button type="button" class="c-btn c-btn-{{ color }}">Group</button>
    <button type="button" class="c-btn c-btn-{{ color }}">Colors</button>
  </div>
  {% endfor %}
{% endexample %}


**Size Examples**

This is an example of available sizes for the Button Group element.

{% example html %}
  {% for size in page.sizes %}
<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-primary c-btn-{{ size }}">Button</button>
  <button type="button" class="c-btn c-btn-primary c-btn-{{ size }}">Group</button>
  <button type="button" class="c-btn c-btn-primary c-btn-{{ size }}">Sizes</button>
</div>
  {% endfor %}
{% endexample %}


**Icons**

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


**Vertical**

{% example html %}
<div class="c-btn-group-vertical">
	<button class="c-btn c-btn-primary c-text-left">All</button>
	<button class="c-btn c-btn-primary c-text-left">Published</button>
	<button class="c-btn c-btn-primary c-text-left">Unpublished</button>
	<button class="c-btn c-btn-primary c-text-left">Drafts</button>
</div>
<div class="c-btn-group-vertical">
	<button class="c-btn c-btn-primary"><i class="fas fa-euro-sign"></i> EUR</button>
	<button class="c-btn c-btn-primary"><i class="fas fa-pound-sign"></i> GBP</button>
	<button class="c-btn c-btn-primary"><i class="fas fa-dollar-sign"></i> USD</button>
	<button class="c-btn c-btn-primary"><i class="fas fa-dollar-sign"></i> USD</button>
</div>
<div class="c-btn-group-vertical">
	<button class="c-btn c-btn-box c-btn-sm c-btn-primary"><i class="fas fa-robot"></i></button>
	<button class="c-btn c-btn-box c-btn-sm c-btn-primary"><i class="fas fa-robot"></i></button>
	<button class="c-btn c-btn-box c-btn-sm c-btn-primary"><i class="fas fa-robot"></i></button>
</div>
<div class="c-btn-group-vertical">
	<button class="c-btn c-btn-box c-btn-primary"><i class="fas fa-robot"></i></button>
	<button class="c-btn c-btn-box c-btn-primary"><i class="fas fa-robot"></i></button>
	<button class="c-btn c-btn-box c-btn-primary"><i class="fas fa-robot"></i></button>
</div>
{% endexample %}

</div>
<!-- End Cupcake Code Section -->

<!-- Start Angular Code Section -->
<div id="angular" class="docs-tabs-content" markdown="1">

<div class="c-alert c-alert-warning">
  <i class="fa fa-exclamation-circle c-alert-icon" aria-hidden="true"></i>
    <div class="c-alert-content"><strong>
    Users must be permissioned to IHS Markit GitLab in order to view angular components.  
    <a href="https://confluence.ihsmarkit.com/pages/viewpage.action?spaceKey=DT&title=GitLab+-+Access">Gain access here</a>
      </strong>
    </div>
</div>

##### Standard Button
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/ipreo/sprinkles/?path=/story/components-buttons--standard&nav=0"></iframe>

<br>

##### Submit Button
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/ipreo/sprinkles/?path=/story/components-buttons--submit&nav=0"></iframe>

<br>

##### Button Link
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/ipreo/sprinkles/?path=/story/components-buttons--link&nav=0"></iframe>

<br>


##### Icon Button
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/ipreo/sprinkles/?path=/story/components-buttons--icon&nav=0"></iframe>

</div>
<!-- End Angular Code Section -->


<!-- Start Design Guidelines Tab -->
<div id="guidelines" class="docs-tabs-content" markdown="1">

# Overview

### Types & Usage

<br>

<table class="c-table c-table-transparent c-table-border-full">
<thead>
    <tr>
      <th width="150">Type</th>
      <th width="400">Decription</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Primary Button</td>
      <td>
      Primary buttons draw attention to the primary action within a screen, component or interaction. Not all screens will require a primary button.
      </td>
    </tr>
     <tr>
      <td>Action Button</td>
      <td>
      Action buttons represent and draw attention to an action where an entity is created or introduced into the workflow.
      </td>
    </tr>
    <tr>
      <td>Danger Button</td>
      <td>
      Danger buttons represent and draw attention to a destructive action where something is discarded or deleted.
      </td>
    </tr>
     <tr>
      <td>Secondary Button</td>
      <td>
      Secondary buttons are the standard button for general use. Secondary buttons are often used in combination with a primary button, to represent an opposing action.
      </td>
    </tr>
     <tr>
        <td>Link Button</td>
        <td>
        Link buttons are used in combination with Primary and Secondary buttons to highlight less critical actions or supporting links.
        </td>
    </tr>
      <tr>
        <td>Icon Button</td>
        <td>
        Icon-only buttons are used for frequently used actions, typically where space is restricted.
        </td>
    </tr>
     <tr>
        <td>Button Group</td>
        <td>
        Button groups are used to group frequently used, related actions.
        </td>
    </tr>
  </tbody>
</table>


### States
**All buttons have 4 potential states:**

- hover

- active

- inactive

- disabled


### Labels
Limit wording on button labels to two to three words max. Try and use wording and terms that need no additional explanation.


### Combined with icons
All buttons can be combined with icons to add additional visual emphasis and to identify common repetitive actions.


### Combined with tooltips
Icon buttons should always be combined with a Tooltip to make it clear what action the button will perform.


### Best Practices
- Use one Primary, Action or Danger button on a page or screen area

- Keep buttons to a minimum on a page or screen area

- Use clear button labels limited to less than three words

- Try and create context with the design, so buttons text can be simple and to the point

- Use icons that are clear in meaning and combine with tooltips where needed

<hr>

## Examples

**A primary button used in combination with a secondary button**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/buttons/new format/primary-button-combo-example@2x.png" width="50%">

<br>

**An action button used in combination with a primary/secondary button combination**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/buttons/new format/action-button-combo-example@2x.png" width="50%">

<br>

**A danger button used to signal a destructive action (presented in a modal)**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/buttons/new format/danger-button-combo-example@2x.png" width="50%">

<br>

**How secondary buttons could compliment a primary button**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/buttons/new format/secondary-button-example@2x.png" width="50%">

<br>

**Link buttons used in combination with secondary buttons**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/buttons/new format/link-button-example@2x.png" width="50%">

<br>

**Icon buttons used with a table**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/buttons/new format/icon-only-button-example@2x.png" width="50%">

</div>
<!-- End Design Tab -->





