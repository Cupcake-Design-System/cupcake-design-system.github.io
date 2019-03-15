---
title: Buttons 3.0
description: Buttons are clickable items used to trigger an action. Buttons make common actions immediately visible and easy to perform with one click or tap.
sizes:
- xs
- sm
- lg
- xl
---

## Getting Started 
All buttons require the class `c-btn`. 

Additionally, modifier classes such as `c-btn-primary` - can then be chained together to create the intended style.

On this page you will find code useage examples as well as guidance on executing the best User Experience.

<hr>

## Primary Buttons
Primary buttons draw attention to the primary action within a screen, component or interaction. Not all screens will require a primary button.


{% example html %}
<button type="button" class="c-btn c-btn-primary">Default</button>
{% endexample %}

### Variations
Primary buttons can include icons to:
  <ol>
    <li>Visually emphasise their purpose and</li>
    <li>Draw the eye to common and frequently used functions</li>
  </ol>

{% example html %}
<button type="button" class="c-btn c-btn-primary">
  <i class="fas fa-save"></i> Save
</button>
<button type="button" class="c-btn c-btn-primary">
  <i class="fas fa-paper-plane"></i> Send
</button>
{% endexample %}


### UX Guidance
##### Primary Button Usage
{% include guide-img.html img='buttons/primary-button-dos-donts'%}

##### Grouping Primary Buttons
{% include guide-img.html img='buttons/grouping-primary-buttons-dos-donts'%}

##### Grouping and Button Order
{% include guide-img.html img='buttons/grouping-button-order-primary-dos-donts'%}

<hr>


## Action Buttons
Action buttons represent and draw attention to an action where something is created or introduced into the workflow.

{% example html %}
<button type="button" class="c-btn c-btn-success">Default</button>
{% endexample %}

### Variations
Action buttons can include icons to add additional visual emphasis

{% example html %}
<button type="button" class="c-btn c-btn-success">
  <i class="fas fa-plus-circle"></i> Create
</button>
<button type="button" class="c-btn c-btn-success">
  <i class="fas fa-plus-circle"></i> Add
</button>
{% endexample %}

### UX Guidance

##### Action Button Usage
{% include guide-img.html img='buttons/action-button-usage'%}

##### Action Button Combinations
{% include guide-img.html img='buttons/action-button-combinations'%}


<hr>

## Danger Buttons
* Danger buttons represent and draw attention to a destructive action where something is discarded or deleted.
* A destructive action button can share the screen with an additive action button and/or a primary action button.

{% example html %}
<button type="button" class="c-btn c-btn-danger">Default</button>
{% endexample %}

### Variations

Danger buttons can include icons to add additional visual emphasis

{% example html %}
<button type="button" class="c-btn c-btn-danger">
  <i class="fas fa-trash-alt"></i>  Discard
</button>
<button type="button" class="c-btn c-btn-danger">
  <i class="fas fa-trash-alt"></i>  Delete
</button>
{% endexample %}

### UX Guidance

#### Danger Button Usage
{% include guide-img.html img='buttons/danger-button-usage'%}

#### Danger Button Combinations
{% include guide-img.html img='buttons/danger-button-combinations'%}

<hr>

## Secondary Buttons
* Secondary buttons are the standard button for general use. 
* Secondary buttons are often used in combination with a primary button, to represent an opposing action.

{% example html %}
<button type="button" class="c-btn c-btn-secondary">Default</button>
{% endexample %}

### Variations

Secondary buttons can include icons to:
  <ol>
    <li>Visually emphasise their purpose and</li>
    <li>Draw the eye to common and frequently used functions</li>
  </ol>

{% example html %}
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
{% endexample %}

### UX Guidance

#### Secondary Button Usage
{% include guide-img.html img='buttons/secondary-button-usage-dos-donts'%}

#### Repetitive use of secondary buttons in tables
{% include guide-img.html img='buttons/secondary-button-repetitive-usage'%}

<hr>

## Link-Only Buttons
Link-only buttons are used under the following circumstances:
* Primary and Secondary buttons have been used but an additional button is needed to highlight a less critical action or supporting link.
* To add additional buttons to an already button heavy page
* To represent less important or supporting actions

{% example html %}
<button type="button" class="c-btn c-btn-link">Default</button>
{% endexample %}

### Variations
Link-only buttons can include icons to:
  <ol>
    <li>Visually emphasise their purpose and</li>
    <li>Draw the eye to common and frequently used functions</li>
  </ol>

{% example html %}
<button type="button" class="c-btn c-btn-link">
  <i class="fas fa-comment"></i>  Add Comment
</button>
<button type="button" class="c-btn c-btn-link">
  <i class="fas fa-arrow-left"></i>  Back
</button>
{% endexample %}

### UX Guidance

#### Link-Only Button Usage
{% include guide-img.html img='buttons/link-only-button-usage'%}

#### Link-Only Button Combinations
{% include guide-img.html img='buttons/link-only-button-combinations'%} 

#### Button Link vs. Text Link
{% include guide-img.html img='buttons/button-link-vs-text-link'%} 

<hr>

## Icon Buttons
Icon buttons are best used in combinations with other buttons, typically in toolbars or in headers.

{% example html %}
<button type="button" class="c-btn c-btn-primary c-btn-box"><i class="fas fa-chart-bar"></i></button>
<button type="button" class="c-btn c-btn-secondary c-btn-box"><i class="fas fa-chart-pie"></i></button>
{% endexample %}

### UX Guidance

##### Icon Button Usage
{% include guide-img.html img='buttons/icon-button-usage'%} 

<hr>

## Icon-Only Buttons
Icon-only buttons are best used for common or repetitive actions, typically where space is restricted in tables and forms.

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

### UX Guidance

##### Icon-Only Button Usage
{% include guide-img.html img='buttons/icon-only-button-usage'%} 

##### Icon-Only Button Usage in Forms
{% include guide-img.html img='buttons/icon-only-button-usage-forms'%} 


<hr>

# Style Guide/Usage

##### Button Wording
{% include guide-img.html img='buttons/button-wording-dos-donts'%} 

##### Buttons + Icons
{% include guide-img.html img='buttons/buttons-icons-dos-donts'%}



<hr>

 Don't see what your looking for? Check out more variations <a href="https://deploy-preview-61--cupcake.netlify.com/pages/buttons.html" target="_blank">here</a> and <a href="https://cupcake.netlify.com/pages/buttons.html" target="_blank">here</a>

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