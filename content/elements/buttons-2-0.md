---
title: Buttons 2.0
layout: docs
description: Buttons are clickable items used to trigger an action.
group: elements
toc: true
sizes:
- xs
- sm
- lg
- xl
---

# Components

## Default Button

Buttons make common actions immediately visible and easy to perform with one click or tap. They can be used for any type of action, including navigation.

{% example html %}
<button type="button" class="c-btn c-btn-primary">Button</button>
{% endexample %}

## Color Examples

This is an example of available colors for the **{{ page.title }}** element. 

{% example html %}
{% for color in site.data.theme-colors %}
<button type="button" class="c-btn c-btn-{{ color }}">{{ color | capitalize }}</button>{% endfor %}
{% endexample %}


## Size Examples

This is an example of available sizes for the **{{ page.title }}** element. 

{% example html %}
{% for size in site.data.theme-sizes %}
<button type="button" class="c-btn c-btn-primary c-btn-{{ size.value }}">{{ size.name }}</button>{% endfor %}
{% endexample %}


## Disabled state

Make buttons look inactive by adding the `disabled` boolean attribute to any `<button>` element.

{% example html %}
{% for color in site.data.theme-colors %}
<button type="button" class="c-btn c-btn-{{ color }}" disabled>{{ color | capitalize }}</button>{% endfor %}
{% endexample %}


## Additional Variations

Don't see what your looking for? Check out the more [variations](https://cupcake.netlify.com/pages/buttons.html)


<!-- ### Outlines
{% example html %}
{% for color in site.data.theme-colors %}
<button type="button" class="c-btn c-btn-{{ color }}-outline">{{ color | capitalize }}</button>{% endfor %}
{% endexample %} -->

<!-- ### Pills and Colors
{% example html %}
{% for color in site.data.theme-colors %}
<button type="button" class="c-btn c-btn-{{ color }} c-btn-pill">{{ color | capitalize }}</button>{% endfor %}
{% endexample %} -->


<!-- ### Block Button
{% example html %}
<button type="button" class="c-btn c-btn-primary c-btn-lg c-btn-block">Block level button</button>
{% endexample %} -->

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

## General Do's and Dont's

##### Button Wording
![Button Wording Do's and Don'ts](\assets\img\button-wording-dos-donts.PNG "Button Wording Dos and Donts")

##### Buttons + Icons
![Buttons + Icons Do's and Don'ts](\assets\img\buttons-icons-dos-donts.PNG "Buttons + Icons Dos and Donts")

## Primary Button
Primary buttons draw attention to the primary action within a screen, component or interaction. Not all screens will require a primary button.

### States

{% example html %}
<button type="button" class="c-btn c-btn-primary">Default</button>
<button type="button" class="c-btn c-btn-primary-outline">Hover</button>
<button type="button" class="c-btn c-btn-primary" disabled>Disabled</button>
<button type="button" class="c-btn c-btn-primary" active>Active</button>
{% endexample %}

### Variations
#### Primary Button + Icon
Primary buttons can include icons to:
  <ol>
    <li>Visually emphasise their purpose and</li>
    <li>Draw the eye to common and frequently used functions</li>
  </ol>

<button type="button" class="c-btn c-btn-primary">
  <i class="fas fa-save"></i> Save
</button>
<button type="button" class="c-btn c-btn-primary">
  <i class="fas fa-paper-plane"></i> Send
</button>


### General Do's and Dont's
##### Primary Button Usage
![Primary Button Do's and Don'ts](\assets\img\primary-button-dos-donts.PNG "Primary Button Dos and Donts")

##### Grouping Primary Buttons
![Grouping Primary Button Do's and Don'ts](\assets\img\grouping-primary-buttons-dos-donts.PNG "Grouping Primary Button Dos and Donts")

##### Grouping and Button Order
![Grouping Button Order Do's and Don'ts](\assets\img\grouping-button-order-primary-dos-donts.PNG "Grouping Button Order Dos and Donts")

## Action Button
Action buttons represent and draw attention to an action where something is created or introduced into the workflow.

### States
{% example html %}
<button type="button" class="c-btn c-btn-success">Default</button>
<button type="button" class="c-btn c-btn-success-outline">Hover</button>
<button type="button" class="c-btn c-btn-success" disabled>Disabled</button>
<button type="button" class="c-btn c-btn-success">Active</button>
{% endexample %}

### Variations
#### Secondary Button + Icon
Action buttons can include icons to add additional visual emphasis

<button type="button" class="c-btn c-btn-success">
  <i class="fas fa-plus-circle"></i> Create
</button>
<button type="button" class="c-btn c-btn-success">
  <i class="fas fa-plus-circle"></i> Add
</button>

### General Do's and Dont's

##### Action Button Usage
![Action Button Usage Do's and Don'ts](\assets\img\action-button-usage.PNG "Action Button Usage Do's and Don'ts")

##### Action Button Combinations
![Action Button Combinations Do's and Don'ts](\assets\img\action-button-combinations.PNG "Action Button Combinations Do's and Don'ts")

## Danger Button
* Danger buttons represent and draw attention to a destructive action where something is discarded or deleted.
* A destructive action button can share the screen with an additive action button and/or a primary action button.

### States
{% example html %}
<button type="button" class="c-btn c-btn-danger">Default</button>
<button type="button" class="c-btn c-btn-danger-outline">Hover</button>
<button type="button" class="c-btn c-btn-danger" disabled>Disabled</button>
<button type="button" class="c-btn c-btn-danger">Active</button>
{% endexample %}

### Variations
#### Danger Button + Icon
Danger buttons can include icons to add additional visual emphasis

<button type="button" class="c-btn c-btn-danger">
  <i class="fas fa-trash-alt"></i>  Discard
</button>
<button type="button" class="c-btn c-btn-danger">
  <i class="fas fa-trash-alt"></i>  Delete
</button>


### General Do's and Dont's

##### Danger Button Usage
![Danger Button Usage Do's and Don'ts](\assets\img\danger-button-usage.PNG "Danger Button Usage Do's and Don'ts")

##### Danger Button Combinations
![Danger Button Combinations Do's and Don'ts](\assets\img\danger-button-combinations.PNG "Danger Button Combinations Do's and Don'ts")





<!-- <div class="c-row">
  <div class="c-col">
    <button type="button" class="c-btn c-btn-primary">Save as...</button>
  </div>
  <div class="c-col">
    <button type="button" class="c-btn c-btn-success">
      <i class="fas fa-plus-circle"></i> Add
    </button>
  </div>
  <div class="c-col">
    <button type="button" class="c-btn c-btn-success">
      <i class="fas fa-plus-circle"></i> Add
    </button>
  </div>
</div>

<div class="c-row">
  <div class="c-col">
    <button type="button" class="c-btn c-btn-primary">Save as...</button>
  </div>
  <div class="c-col">
    <button type="button" class="c-btn c-btn-success">
      <i class="fas fa-plus-circle"></i> Add
    </button>
  </div>
  <div class="c-col">
    <button type="button" class="c-btn c-btn-success">
      <i class="fas fa-plus-circle"></i> Add
    </button>
  </div>
</div>

<div class="c-row">
  <div class="c-col">
    <button type="button" class="c-btn c-btn-primary">Save as...</button>
  </div>
  <div class="c-col">
    <button type="button" class="c-btn c-btn-success">
      <i class="fas fa-plus-circle"></i> Add
    </button>
  </div>
  <div class="c-col">
    <button type="button" class="c-btn c-btn-success">
      <i class="fas fa-plus-circle"></i> Add
    </button>
  </div>
</div>


#### Best <i class="fas fa-check c-text-success"></i>

<button type="button" class="c-btn c-btn-primary">Save as...</button>
<button type="button" class="c-btn c-btn-success">
   <i class="fas fa-plus-circle"></i> Add
</button>
<button type="button" class="c-btn c-btn-secondary">
   <i class="fas fa-file-alt"></i> Export
</button>
<button type="button" class="c-btn c-btn-secondary">Discard</button>
<button type="button" class="c-btn c-btn-secondary">Copy</button>
<button type="button" class="c-btn c-btn-secondary">Add</button>


#### OK <i class="fas fa-check c-text-success"></i>

<button type="button" class="c-btn c-btn-primary">Save as New</button>
<button type="button" class="c-btn c-btn-success">
   <i class="fas fa-plus-circle"></i> Add New
</button>
<button type="button" class="c-btn c-btn-secondary">
   <i class="fas fa-file-alt"></i> Export .doc
</button>
<button type="button" class="c-btn c-btn-secondary">Discard Changes</button>
<button type="button" class="c-btn c-btn-secondary">Copy to Clipboard</button>
<button type="button" class="c-btn c-btn-secondary">Add Documents</button>


#### NO <i class="fas fa-times c-text-danger"></i>

<button type="button" class="c-btn c-btn-primary">Save as New View</button>
<button type="button" class="c-btn c-btn-success">
   <i class="fas fa-plus-circle"></i> Add New Deal
</button>
<button type="button" class="c-btn c-btn-secondary">
   <i class="fas fa-file-alt"></i> Export Word Document
</button>
<button type="button" class="c-btn c-btn-secondary">Discard all Changes</button>
<button type="button" class="c-btn c-btn-secondary">Copy Orders to Clipboard</button>
<button type="button" class="c-btn c-btn-secondary">Click to Add Documents</button>



<table class="c-table c-table-transparent c-table-border-horizontal c-table-hover">
  <thead>
    <tr>
      <th>
        BEST
          <i class="fa fa-check c-text-success c-pull-right"></i>
      </th>
      <th>
        OK
          <i class="fa fa-check c-text-success c-pull-right"></i>
      </th>
      <th>
        NO
          <i class="fa fa-times c-text-danger c-pull-right"></i>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Do keep primary buttons short and to the point</td>
      <td>Do try limit button wording to two words (3 words max. if needed)</td>
      <td>Don't use ambiguous or lengthy wording in buttons</td>
    </tr>
    <tr>
      <td>Do use this approach when the context for the button is 100% clear</td>
      <td>Do use wording and terms that need no additional explanation</td>
      <td>Don't use more than two words (3 words max. in exceptions)</td>
    </tr>
    <tr>
      <td></td>
      <td>Create context with the design</td>
      <td>Don't use wording that require additional explanations or context</td>
    </tr>
  </tbody>
</table> -->


<!-- <div class="c-row">
  <div class="c-col">
      <div class="c-card">
         <header class="c-card-header">
           <div class="c-card-header-title">
             DO 
           </div>
           <div class="c-card-header-menu">
             <i class="fas fa-check-circle c-text-success" aria-hidden="true"></i>
           </div>
         </header>
         <div class="c-card-content">
           <div class="c-card-content-body">
              <div class="c-row">
                <div class="c-col">
                   <button type="button" class="c-btn c-btn-primary">Save as...</button>
                </div>
              </div>
               <div class="c-row">
                <div class="c-col">
                  <button type="button" class="c-btn c-btn-success">
                  <i class="fas fa-plus-circle"></i> Add
                 </button>
                </div>
              </div>
               <div class="c-row">
                <div class="c-col">
                  <button type="button" class="c-btn c-btn-secondary">
                    <i class="fas fa-file-alt"></i> Export
                </button>
                </div>
              </div>
              <div class="c-row">
                <div class="c-col">
                   <button type="button" class="c-btn c-btn-secondary">Discard</button>
                </div>
              </div>
               <div class="c-row">
                <div class="c-col">
                    <button type="button" class="c-btn c-btn-secondary">Copy</button>
                </div>
              </div>
              <div class="c-row">
                <div class="c-col">
                   <button type="button" class="c-btn c-btn-secondary">Add</button>
                </div>
              </div>
           </div>
         </div>
         <div class="c-card-footer">
            <ul>
              <li class="c-text-bold">Do keep primary buttons short and to the point</li>
              <li class="c-text-bold">Do use this approach when the context for the button is 100% clear</li>
            </ul>
         </div>
     </div>
  </div>
    <div class="c-col">
      <div class="c-card">
         <header class="c-card-header">
           <div class="c-card-header-title">
             OK
           </div>
           <div class="c-card-header-menu">
             <i class="fas fa-check-circle c-text-success" aria-hidden="true"></i>
           </div>
         </header>
         <div class="c-card-content">
           <div class="c-card-content-body">
              <div class="c-row">
                <div class="c-col">
                   <button type="button" class="c-btn c-btn-primary">Save as New</button>
                </div>
              </div>
               <div class="c-row">
                <div class="c-col">
                  <button type="button" class="c-btn c-btn-success">
                  <i class="fas fa-plus-circle"></i> Add New 
                 </button>
                </div>
              </div>
               <div class="c-row">
                <div class="c-col">
                  <button type="button" class="c-btn c-btn-secondary">
                    <i class="fas fa-file-alt"></i> Export .doc
                </button>
                </div>
              </div>
              <div class="c-row">
                <div class="c-col">
                   <button type="button" class="c-btn c-btn-secondary">Discard Changes</button>
                </div>
              </div>
               <div class="c-row">
                <div class="c-col">
                    <button type="button" class="c-btn c-btn-secondary">Copy to Clipboard</button>
                </div>
              </div>
              <div class="c-row">
                <div class="c-col">
                   <button type="button" class="c-btn c-btn-secondary">Add Documents</button>
                </div>
              </div>
           </div>
         </div>
         <div class="c-card-footer">
            <ul>
              <li class="c-text-bold">Do try limit button wording to two words (3 words max. if needed)</li>
              <li class="c-text-bold">Do use wording and terms that need no additional explanation</li>
              <li class="c-text-bold">Create context with the design</li>
            </ul>
         </div>
     </div>
  </div>
  <div class="c-col">
      <div class="c-card">
         <header class="c-card-header">
           <div class="c-card-header-title">
             DON'T
           </div>
           <div class="c-card-header-menu">
             <i class="fas fa-times-circle c-text-danger" aria-hidden="true"></i>
           </div>
         </header>
         <div class="c-card-content">
           <div class="c-card-content-body">
              <div class="c-row">
                <div class="c-col">
                   <button type="button" class="c-btn c-btn-primary">Save as...</button>
                </div>
              </div>
               <div class="c-row">
                <div class="c-col">
                  <button type="button" class="c-btn c-btn-success">
                  <i class="fas fa-plus-circle"></i> Add New Deal
                 </button>
                </div>
              </div>
              <div class="c-row">
                <div class="c-col">
                  <button type="button" class="c-btn c-btn-secondary">
                    <i class="fas fa-file-alt"></i> Export Word Document
                </button>
                </div>
              </div>
              <div class="c-row">
                <div class="c-col">
                   <button type="button" class="c-btn c-btn-secondary">Discard all Changes</button>
                </div>
              </div>
               <div class="c-row">
                <div class="c-col">
                    <button type="button" class="c-btn c-btn-secondary">Copy Orders to Clipboard</button>
                </div>
              </div>
              <div class="c-row">
                <div class="c-col">
                   <button type="button" class="c-btn c-btn-secondary">Click to Add Documents</button>
                </div>
              </div>
           </div>
         </div>
         <div class="c-card-footer">
            <ul>
              <li class="c-text-bold">Don't use ambiguous or lengthy wording in buttons</li>
              <li class="c-text-bold">Don't use more than two words (3 words max. in exceptions)</li>
              <li class="c-text-bold">Don't use wording that require additional explanations or context</li>
            </ul>
         </div>
     </div>
  </div>
</div> -->




<!-- | BEST                                                  | OK                                          | NO                                                             |
|-------------------------------------------------------|---------------------------------------------|----------------------------------------------------------------|
| Text is the best way to get some of the items in here | Text and rule goes here                     | dont do this when you have a button thingy                     |
| asjtaljiojowijhwofijowmlkcm asdjeioja;klg;fga;ljdfa;s | sjiaeotjaweioefjkmsklcm asdfa;hsiohafiofjaj | daioejiofjklsm;skcnaskldcns;lfserioeawjhf[ ahsdfpishefionvndio | -->




# Developers

Multiple classes can be added for more complexity.

{% example html %}
<table class="c-table c-table-transparent c-table-border-horizontal c-table-hover">
  <thead>
    <tr>
      <th>
        Class
        <button class="c-btn c-btn-default c-btn-sm c-btn-table-icon c-pull-right">
          <i class="fa fa-search"></i>
        </button>
      </th>
      <th>
        Property
        <button class="c-btn c-btn-default c-btn-sm c-btn-table-icon c-pull-right">
          <i class="fa fa-search"></i>
        </button>
      </th>
      <th>
        SCSS
        <button class="c-btn c-btn-default c-btn-sm c-btn-table-icon c-pull-right">
          <i class="fa fa-search"></i>
        </button>
      </th>
      <th>
        HEX
        <button class="c-btn c-btn-default c-btn-sm c-btn-table-icon c-pull-right">
          <i class="fa fa-search"></i>
        </button>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>.c-btn .c-btn-primary</td>
      <td>background-color</td>
      <td>SCSS here</td>
      <td>#0000</td>
    </tr>
  </tbody>
</table>
{% endexample %}


# Layouts/Examples

Coming soon...