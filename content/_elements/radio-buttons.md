---
title: Radio Buttons
description: Radio buttons allow users to select a single option from a list of predefined options.
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

**Radio buttons allow users to select a single option from a list of predefined options.**

**Radio buttons are recommended for use when:**

- A limited number of options are available
- There is a recommended default value
- Users need to see and compare options
- One value is required to proceed

**Radio buttons have 4 different states:**

- active
- inactive
- active (disabled)
- inactive (disabled)

<hr>

<!-- Start General Dos and Donts  -->
<div class="c-header-sm">General Do's and Dont's</div>

 <!-- Start Label length Row -->
  <div class="c-header-xs">Label length</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/radio-buttons/general/radio-general-label-do@2x'%} 
    </div>
    <div class="c-col">
      {% include guide-img.html img='elements/radio-buttons/general/radio-general-label-dont@2x'%}
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do keep radio button text short and concise</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use a sentence to describe something if it can be summed up in three or less words</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Label length Row -->

   <!-- Start Capitalizing labels Row -->
  <div class="c-header-xs">Capitalizing labels</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/radio-buttons/general/radio-general-capitalise-do@2x'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/radio-buttons/general/radio-general-capitalise-dont@2x'%}  
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use sentence style capitalization</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't start the label as lowercase</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Capitalizing Labels Row -->

<!-- Start Label Format Row -->
  <div class="c-header-xs">Label format</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/radio-buttons/general/radio-general-punctuation-do@2x'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/radio-buttons/general/radio-general-punctuation-dont@2x'%}  
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do list radio list items without any additional characters or punctuation at the end of the label</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't add in any special characters or punctuation at the end of the label</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Label Format Row -->

  <!-- Start Radio button to label placement Row -->
  <div class="c-header-xs">Radio button to label placement</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/radio-buttons/general/radio-general-placement-do@2x'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/radio-buttons/general/radio-general-placement-dont@2x'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do vertically center the label so there is an equal amount of space top and bottom in relation to the button</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't position the label so there is an unequal amount of space at the top and bottom in relation to the button</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Radio button to label placement Row -->

<!-- Start Default selected values Row -->
  <div class="c-header-xs">Default selected values</div>
  <div class="c-row">
    <div class="c-col">
     {% include guide-img.html img='elements/radio-buttons/general/radio-general-default-do@2x'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/radio-buttons/general/radio-general-default-dont@2x'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do list the default value first, unless it is part of a sequential order</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do help speed up the decision time by providing default values</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't list the default selected value in a random position on the list, unless it is part of a sequential order</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Default selected values Row -->
  <!-- End General Dos and Donts  -->

<hr>

 <!-- Start Radio Buttons in Forms Section -->
  <div class="c-header-md">Radio Buttons in Forms</div>

Radio buttons are typically used in forms as:

- Horizontal list groups
- Vertical list groups


<!-- Start Horizontal List Groups Section -->
<div class="c-header-md c-m-top-lg">Horizontal List Groups</div>
Typically used in forms where up to 3 listed options are displayed. Used where space is restricted. Labels should be short and concise.

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/radio-buttons/horizontal/radio-horizontal-list-example@2x.png" width="400px;">

<!-- Start Horizontal List Groups - Dos and Donts  -->
<div class="c-header-sm c-m-bottom-md c-m-top-lg">Do's and Dont's</div>

<!-- Start Dos and Donts - Number of Items Row -->
<div class="c-header-xs">Number of items</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/radio-buttons/horizontal/radio-horisontal-limit-do@2x'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/radio-buttons/horizontal/radio-horisontal-limit-dont@2x'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do keep horizontal list groups to 3 items or less</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't add more than 3 items in a horizontal list group; use a vertical list instead</span>
        </div>
      </div>
      </div>
    </div>
    <!-- End Dos and Donts - Number of Items Row -->

<!-- Start Dos and Donts - Label vs Radio Placement Row -->
<div class="c-header-xs">Label vs radio placement</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/radio-buttons/horizontal/radio-horisontal-placement-do@2x'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/radio-buttons/horizontal/radio-horisontal-placement-dont@2x'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do always follow the radio button with the label</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't ever place the label in front of the radio button</span>
        </div>
      </div>
      </div>
    </div>
    <!-- End Dos and Donts - Label vs Radio Placement Row -->

<!-- Start Dos and Donts - List Item Spacing Row -->
<div class="c-header-xs">List item spacing</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/radio-buttons/horizontal/radio-horisontal-spacing-do@2x'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/radio-buttons/horizontal/radio-horisontal-spacing-dont@2x'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do keep spacing at a just-right ratio</span>
        </div>
      </div>
       <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use consistent spacing between list items</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use too-tight or too-loose spacing</span>
        </div>
      </div>
        <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't allow inconsistent spacing between list items in order to conform to a specific width</span>
        </div>
      </div>
      </div>
    </div>
<!-- End Dos and Donts - List Item Spacing Row -->

<!-- Start Dos and Donts - Provide and Escape Hatch Row -->
<div class="c-header-xs">Provide an escape hatch</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/radio-buttons/horizontal/radio-horisontal-other-do@2x'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/radio-buttons/horizontal/radio-horisontal-other-dont@2x'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do open the list to user input when more than 3 items are required or if there is the risk that not all values are covered</span>
        </div>
      </div>
       <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use the label "Other" and let the user define the additional values</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do rather use a vertical list group if more values need to be listed</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't list more than 3 items in a horizontal list; use a vertical list instead</span>
        </div>
      </div>
        <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't make it impossible for the user to proceed if none of the listings apply</span>
        </div>
      </div>
      </div>
    </div>
<!-- End Dos and Donts - Provide and Escape Hatch Row -->
<!-- END Horizontal List Groups - Dos and Donts  -->
<!-- END Horizontal List Groups Section -->

<hr>

<!-- Start Vertical List Groups Section -->
<div class="c-header-md">Vertical List Groups</div>
The most common way to display a radio list group in a form.


<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/radio-buttons/vertical/radio-vertical-list-example@2x.png" width="150px;">

<!-- Start Vertical Groups - Dos and Donts  -->
<div class="c-header-sm c-m-bottom-md c-m-top-lg">Do's and Dont's</div>

<!-- Start Dos and Donts - Number of Items Row -->
<div class="c-header-xs">Number of items</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/radio-buttons/vertical/radio-vertical-limit-do@2x'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/radio-buttons/vertical/radio-vertical-limit-dont@2x'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do keep vertical radio button lists to 6 or less items</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't add more than 6 radio list items; use "Other" to let user define additional values or use a dropdown</span>
        </div>
      </div>
      </div>
    </div>
    <!-- End Dos and Donts - Number of Items Row -->

<!-- Start Dos and Donts - List Item Spacing Row -->
<div class="c-header-xs">List item spacing</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/radio-buttons/vertical/radio-vertical-spacing-do@2x'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/radio-buttons/vertical/radio-vertical-spacing-do@2x'%}  
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do keep spacing between list items at a just-right ratio</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use too-tight or too-loose spacing</span>
        </div>
      </div>
      </div>
    </div>
<!-- End Dos and Donts - List Item Spacing Row -->

<!-- Start Dos and Donts - Provide and Escape Hatch Row -->
<div class="c-header-xs">Provide an escape hatch</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/radio-buttons/vertical/radio-vertical-other-do@2x'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/radio-buttons/vertical/radio-vertical-other-dont@2x'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do open the list to user input when more than 6 items are required or if there is the risk that not all values are covered</span>
        </div>
      </div>
       <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use the label "Other" and let the user define the additional values</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do rather use a dropdown menu if more values need to be listed</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't list more than 6 items in a horizontal list; use a dropdown menu instead</span>
        </div>
      </div>
        <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't make it impossible for the user to proceed if none of the listings apply</span>
        </div>
      </div>
      </div>
    </div>
<!-- End Dos and Donts - Provide and Escape Hatch Row -->
<!-- END Vertical List Groups - Dos and Donts  -->
<!-- END Vertical List Groups Section -->

 <!-- END Radio Buttons in Forms Section -->




</div>
<!-- End Design Section -->

<!-- Start Cupcake Code Tab -->
<div id="code" class="docs-tabs-content" markdown="1">
## Radio Buttons
Use radio buttons to present each item in a list of options where users must make a single selection.

{% example html %}
<label class="c-radio">
    <input type="radio" name="radio" checked>
    <i class="c-bg-primary"></i> 
    Yes
</label>
<label class="c-radio">
    <input type="radio" name="radio">
    <i class="c-bg-primary"></i> 
    No
</label>
{% endexample %}

## Color Examples

{% example html %}
<label class="c-radio c-m-right-sm">
    <input type="radio" name="radio" checked>
    <i class="c-bg-primary"></i>
    Primary
</label>

<label class="c-radio c-m-right-sm">
    <input type="radio" name="radio" checked>
    <i class="c-bg-success"></i>
    Success
</label>

<label class="c-radio c-m-right-sm">
    <input type="radio" name="radio" checked>
    <i class="c-bg-warning"></i>
    Warning
</label>

<label class="c-radio c-m-right-sm">
    <input type="radio" name="radio" checked>
    <i class="c-bg-danger"></i>
    Danger
</label>
{% endexample %}

## Size Examples

{% example html %}
<label class="c-radio-sm">
    <input type="radio" name="radio" checked>
    <i class="c-bg-primary"></i>
</label>

<label class="c-radio-lg">
    <input type="radio" name="radio" checked>
    <i class="c-bg-primary"></i>
</label>

<label class="c-radio-xl">
    <input type="radio" name="radio" checked>
    <i class="c-bg-primary"></i>
</label>
{% endexample %}

</div>
<!-- End Cupcake Code Tab -->

<div id="angular" class="docs-tabs-content" markdown="1">

### Radio Button
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/ipreo/sprinkles/?path=/story/components--radio-button&nav=0"></iframe>

</div>

