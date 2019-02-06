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

# Components

<css-doodle>
  :doodle {
    @grid: 5x8 / 100% 15rem;
  }
  :after {
    content: "@index()"
  }
  background: pink;
  margin: .5rem;
</css-doodle>

## Additional Button Variations

<!-- Don't see what your looking for? Check out the more [variations](https://cupcake.netlify.com/pages/buttons.html) -->

Don't see what your looking for? Check out more variations <a href="https://deploy-preview-61--cupcake.netlify.com/pages/buttons.html" target="_blank">here</a> and <a href="https://cupcake.netlify.com/pages/buttons.html" target="_blank">here</a>

## Button Color Examples

{% example html %}
<button type="button" class="c-btn c-btn-primary">Primary</button>
<button type="button" class="c-btn c-btn-secondary">Secondary</button>
<button type="button" class="c-btn c-btn-success">Success</button>
<button type="button" class="c-btn c-btn-warning">Warning</button>
<button type="button" class="c-btn c-btn-danger">Danger</button>
{% endexample %}

## Button Size Examples

This is an example of available sizes for the **{{ page.title }}** element. 

{% example html %}
{% for size in site.data.theme-sizes %}
<button type="button" class="c-btn c-btn-primary c-btn-{{ size.value }}">{{ size.name }}</button>{% endfor %}
{% endexample %}

## Button State Examples

{% example html %}
<button type="button" class="c-btn c-btn-danger" disabled>Disabled</button>
{% endexample %}

## Buttons with Icons Examples

{% example html %}
<button type="button" class="c-btn c-btn-primary">
  <i class="fas fa-paper-plane"></i> Send
</button>
<button type="button" class="c-btn c-btn-success">
  <i class="fas fa-plus-circle"></i> Create
</button>
<button type="button" class="c-btn c-btn-secondary">
  <i class="fas fa-cut"></i> Cut
</button>
<button type="button" class="c-btn c-btn-danger">
  <i class="fas fa-trashcan"></i> Delete
</button>
{% endexample %}

## Icon Button Examples

{% example html %}
<button type="button" class="c-btn c-btn-primary c-btn-box"><i class="fas fa-chart-bar"></i></button>
<button type="button" class="c-btn c-btn-secondary c-btn-box"><i class="fas fa-chart-pie"></i></button>
{% endexample %}

## Icon-Only Button Examples

{% example html %}
<button type="button" class="c-btn c-btn-table-icon"><i class="fas fa-chart-bar"></i></button>
<button type="button" class="c-btn c-btn-table-icon"><i class="fas fa-chart-pie"></i></button>
{% endexample %}


## Link-Only Button Examples

{% example html %}
<button class="c-btn-link c-btn-link-primary">Default Link</button>
<button type="button" class="c-btn c-btn-link">
  <i class="fas fa-comment"></i>  Add Comment
</button>
{% endexample %}



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

<hr>

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
![Primary Button Do's and Don'ts](\assets\img\buttons\primary-button-dos-donts.PNG "Primary Button Dos and Donts")

##### Grouping Primary Buttons
![Grouping Primary Button Do's and Don'ts](\assets\img\buttons\grouping-primary-buttons-dos-donts.PNG "Grouping Primary Button Dos and Donts")

##### Grouping and Button Order
![Grouping Button Order Do's and Don'ts](\assets\img\buttons\grouping-button-order-primary-dos-donts.PNG "Grouping Button Order Dos and Donts")

## Action Buttons
Action buttons represent and draw attention to an action where something is created or introduced into the workflow.

### States
{% example html %}
<button type="button" class="c-btn c-btn-success">Default</button>
<button type="button" class="c-btn c-btn-success-outline">Hover</button>
<button type="button" class="c-btn c-btn-success" disabled>Disabled</button>
<button type="button" class="c-btn c-btn-success">Active</button>
{% endexample %}

### Variations
#### Action Button + Icon
Action buttons can include icons to add additional visual emphasis

<button type="button" class="c-btn c-btn-success">
  <i class="fas fa-plus-circle"></i> Create
</button>
<button type="button" class="c-btn c-btn-success">
  <i class="fas fa-plus-circle"></i> Add
</button>

### General Do's and Dont's

##### Action Button Usage
![Action Button Usage Do's and Don'ts](\assets\img\buttons\action-button-usage.PNG "Action Button Usage Do's and Don'ts")

##### Action Button Combinations
![Action Button Combinations Do's and Don'ts](\assets\img\buttons\action-button-combinations.PNG "Action Button Combinations Do's and Don'ts")

## Danger Buttons
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
![Danger Button Usage Do's and Don'ts](\assets\img\buttons\danger-button-usage.PNG "Danger Button Usage Do's and Don'ts")

##### Danger Button Combinations
![Danger Button Combinations Do's and Don'ts](\assets\img\buttons\danger-button-combinations.PNG "Danger Button Combinations Do's and Don'ts")

## Secondary Buttons
* Secondary buttons are the standard button for general use. 
* Secondary buttons are often used in combination with a primary button, to represent an opposing action.

### States
{% example html %}
<button type="button" class="c-btn c-btn-secondary">Default</button>
{% endexample %}

### Variations
#### Secondary Button + Icon
Secondary buttons can include icons to:
  <ol>
    <li>Visually emphasise their purpose and</li>
    <li>Draw the eye to common and frequently used functions</li>
  </ol>

<button type="button" class="c-btn c-btn-secondary">
  <i class="fas fa-cut"></i>  Cut
</button>
<button type="button" class="c-btn c-btn-secondary">
  <i class="fas fa-copy"></i>  Copy
</button>
<button type="button" class="c-btn c-btn-secondary">
  <i class="fas fa-paste"></i>  Paste
</button>
<button type="button" class="c-btn c-btn-secondary">
  <i class="fas fa-edit"></i>  Edit
</button>
<button type="button" class="c-btn c-btn-secondary">
  <i class="fas fa-download"></i>  Download
</button>
<button type="button" class="c-btn c-btn-secondary">
  <i class="fas fa-trash-alt"></i>  Delete
</button>

### General Do's and Dont's

##### Secondary Button Usage
![Secondary Button Usage Do's and Don'ts](\assets\img\buttons\secondary-button-usage-dos-donts.PNG "Secondary Button Usage Do's and Don'ts")

##### Repetitive use of secondary buttons in tables
![Secondary Button Repetitive Usage Do's and Don'ts](\assets\img\buttons\secondary-button-repetitive-usage.PNG "Secondary Button Repetitive Usage Do's and Don'ts")

## Link-Only Buttons
Link-only buttons are used under the following circumstances:
* Primary and Secondary buttons have been used but an additional button is needed to highlight a less critical action or supporting link.
* To add additional buttons to an already button heavy page
* To represent less important or supporting actions

### States
{% example html %}
<button type="button" class="c-btn c-btn-link">Default</button>
{% endexample %}

### Variations
#### Link-only button + Icon
Link-only buttons can include icons to:
  <ol>
    <li>Visually emphasise their purpose and</li>
    <li>Draw the eye to common and frequently used functions</li>
  </ol>

<button type="button" class="c-btn c-btn-link">
  <i class="fas fa-comment"></i>  Add Comment
</button>
<button type="button" class="c-btn c-btn-link">
  <i class="fas fa-arrow-left"></i>  Back
</button>

### General Do's and Dont's

##### Link-Only Button Usage
![Link-Only Button Usage Do's and Don'ts](\assets\img\buttons\link-only-button-usage.PNG "Link-Only Button Usage Do's and Don'ts")

##### Link-Only Button Combinations
![Link-Only Button Combinations](\assets\img\buttons\link-only-button-combinations.PNG "Link-Only Button Combinations")

##### Button Link vs. Text Link
![Button Link vs. Text Link](\assets\img\buttons\button-link-vs-text-link.PNG "Button Link vs. Text Link")

## Icon Buttons
Icon buttons are best used in combinations with other buttons, typically in toolbars or in headers.

### States
{% example html %}
<button type="button" class="c-btn c-btn-primary c-btn-box"><i class="fas fa-chart-bar"></i></button>
<button type="button" class="c-btn c-btn-secondary c-btn-box"><i class="fas fa-chart-pie"></i></button>
{% endexample %}

### General Do's and Dont's

##### Icon Button Usage
![Icon Button Usage Do's and Don'ts](\assets\img\buttons\icon-button-usage.PNG "Icon Button Usage Do's and Don'ts")

## Icon-Only Buttons
Icon-only buttons are best used for common or repetitive actions, typically where space is restricted in tables and forms.

### States
{% example html %}
<button type="button" class="c-btn c-btn-table-icon"><i class="fas fa-chart-bar"></i></button>
<button type="button" class="c-btn c-btn-table-icon"><i class="fas fa-chart-pie"></i></button>
{% endexample %}

### Variations
Use colour on hover when using icon-only buttons as action or danger buttons.

#### Action Variation
{% example html %}
<button type="button" class="c-btn c-btn-icon c-btn-icon-success"><i class="fas fa-plus-circle"></i></button>
<button type="button" class="c-btn c-btn-icon c-btn-icon-success"><i class="fas fa-plus-circle"></i></button>
{% endexample %}

#### Danger Variation
{% example html %}
<button type="button" class="c-btn c-btn-icon c-btn-icon-danger"><i class="fas fa-trash"></i></button>
<button type="button" class="c-btn c-btn-icon c-btn-icon-danger"><i class="fas fa-trash"></i></button>
{% endexample %}

### General Do's and Dont's

##### Icon-Only Button Usage
![Icon-Only Button Usage Do's and Don'ts](\assets\img\buttons\icon-only-button-usage.PNG "Icon-Only Button Usage Do's and Don'ts")

##### Icon-Only Button Usage in Forms
![Icon-Only Button Usage in Forms Do's and Don'ts](\assets\img\buttons\icon-only-button-usage-forms.PNG "Icon-Only Button Usage in Forms Do's and Don'ts")








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

<hr>

# Developers

<table class="c-table c-table-transparent c-table-border-horizontal c-table-hover">
  <thead>
    <tr>
      <th>
        Class
      </th>
      <th>
        Property
      </th>
      <th>
        SCSS
      </th>
      <th>
        HEX
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


<hr>

# Layouts/Examples

Coming soon...