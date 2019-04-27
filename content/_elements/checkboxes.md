---
title: Checkboxes
description: Checkboxes allow users to select none, one or multiple options from a pre-defined list of options.
tabs:
- Code
- Angular
- Guidelines
---

<!-- Start Cupcake Code Tab -->
<div id="code" class="docs-tabs-content" markdown="1">

### Checkbox
The default checkbox requires the `<label></label>` tag even if no text is provided.

{% example html %}
<div class="c-checkbox">
	<input type="checkbox" name="check">
	<label></label>
</div>
{% endexample %}

Adding label text that is not clickable.
{% example html %}
<div class="c-checkbox">
	<input type="checkbox" name="check">
	<label>Label Text</label>
</div>
{% endexample %}


To make the full label clickable - supply the input with an id and the label with a a matching for value as shown below.
{% example html %}
<div class="c-checkbox">
  <input type="checkbox" id="checkbox1" name="check">
  <label for="checkbox1">Default with Label</label>
</div>
{% endexample %}



Adding disabled to the input.

{% example html %}
<div class="c-checkbox">
  <input type="checkbox" id="checkbox2" name="check" disabled>
  <label for="checkbox2">This is still a normal label</label>
</div>
{% endexample %}


Adding disabled to the input and label.

{% example html %}
<div class="c-checkbox" disabled>
  <input type="checkbox" id="checkbox3" name="checkbox" disabled>
  <label for="checkbox3">This label is disabled</label>
</div>
{% endexample %}


Adding disabled to a checked input.

{% example html %}
<div class="c-checkbox">
  <input type="checkbox" id="checkbox4" name="checkbox" checked="checked" disabled>
  <label for="checkbox4">This is still a normal label</label>
</div>
{% endexample %}


Adding disabled to a checked input and label.
{% example html %}
<div class="c-checkbox" disabled="">
  <input type="checkbox" id="checkbox5" name="checkbox4" checked="checked" disabled="">
  <label for="checkbox5">This label is disabled</label>
</div>
{% endexample %}

</div>
<!-- End Cupcake Code Tab -->

<!-- Start Angular Code Tab -->
<div id="angular" class="docs-tabs-content" markdown="1">

### Storybook iframe
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/josh-easter/storybook-demo/?path=/story/basic-elements--avatar&full=0&addons=1&stories=0&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs&nav=0"></iframe>

</div>
<!-- End Angular Code Tab -->

<!-- Start Design Tab -->
<div id="guidelines" class="docs-tabs-content" markdown="1">

# Overview

**Checkboxes have 4 different states:**

- Active
- Inactive
- Active (disabled)
- Inactive (disabled)

**Checkboxes are typically used as:**

- Multiple selection controls in forms
- Standalone checkboxes
- Bulk action selectors in tables

<hr>
  
  <!-- Start Multiple Selection Controls in Forms Section -->
  <div class="c-header-md">Multiple selection controls in forms</div>

  <div class="c-header-sm c-m-top-md">Do's and Dont's</div>

  <!-- Start Vertical list vs. horizontal list Row -->
  <div class="c-header-xs">Vertical list vs. horizontal list</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/multiple-selection-controls/multiple-vert-vs-horiz-do@2x'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/multiple-selection-controls/multiple-vert-vs-horiz-dont@2x'%}  
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use multiple selection lists in a vertical format</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use multiple selection lists in a horizontal format</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Vertical list vs. horizontal list Row -->

   <!-- Start Label Length Row -->
  <div class="c-header-xs">Label length</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/multiple-selection-controls/multiple-label-length-do@2x'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/multiple-selection-controls/multiple-label-length-dont@2x'%}  
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do keep checkbox text short and concise</span>
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
   <!-- End Label Length Row -->

  <!-- Start Capitalizing Labels Row -->
  <div class="c-header-xs">Capitalizing Labels</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/multiple-selection-controls/multiple-label-capitalise-do@2x'%}  
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/multiple-selection-controls/multiple-label-capitalise-dont@2x'%}
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
    {% include guide-img.html img='elements/checkboxes/multiple-selection-controls/multiple-label-format-do@2x'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/multiple-selection-controls/multiple-label-format-dont@2x'%} 
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

  <!-- Start Checkbox to label placement Row -->
  <div class="c-header-xs">Checkbox to label placement</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/multiple-selection-controls/multiple-label-placement-do@2x'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/multiple-selection-controls/multiple-label-placement-dont@2x'%} 
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
   <!-- End Checkbox to label placement Row -->

  <!-- Start Number of Items Row -->
  <div class="c-header-xs">Number of items</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/multiple-selection-controls/multiple-items-do@2x'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/multiple-selection-controls/multiple-items-dont@2x'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do keep vertical list groups to 6 items or less</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't add more than 6 items in a vertical list group</span>
        </div>
      </div>
      </div>
    </div>
   <!-- End Number of Items Row -->

  <!-- Start List Item Spacing Row -->
  <div class="c-header-xs">List item spacing</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/multiple-selection-controls/multiple-spacing-do@2x'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/multiple-selection-controls/multiple-spacing-dont@2x'%} 
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
          <span class="c-text-md">Don't allow inconsistent spacing between list items in order to conform to a specific list height</span>
        </div>
      </div>
      </div>
    </div>
   <!-- End List Item Spacing Row -->
  <!-- END Multiple Selection Controls in Forms Section -->

  <hr>

  <!-- Start Standalone Checkboxes Section -->
  <div class="c-header-md">Standalone checkboxes</div>

  <div class="c-header-sm c-m-top-md">Do's and Dont's</div>

  <!-- Start Label Length Row -->
  <div class="c-header-xs">Label length</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/standalone-checkbox/standalone-length-do@2x'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/standalone-checkbox/standalone-length-dont@2x'%}  
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do limit standalone checkbox text to two short sentences and to one paragraph</span>
        </div>
      </div>
       <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do link to any supporting text or documentation</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use more than two short sentences or more than one paragraph; rather hyperlink to the supporting text or documentation</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Label Length Row -->

   <!-- Start Forms vs Settings Row -->
  <div class="c-header-xs">Forms vs Settings</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/standalone-checkbox/standalone-form-vs-settings-do@2x'%}
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/standalone-checkbox/standalone-form-vs-settings-dont@2x'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use standalone checkboxes in forms to record user compliance or agreement</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use checkboxes to apply settings; use a switch instead</span>
        </div>
      </div>
      </div>
    </div>
   <!-- End Forms vs Settings Row -->
  <!-- END Standalone Checkboxes Section -->

<hr>
  <!-- Start Bulk action selectors in a table Section -->
  <div class="c-header-md">Bulk action selectors in a table</div>
  Checkboxes are used in tables to select which rows to apply bulk actions to.

  <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/checkboxes/bulk-action-selectors/bulk-selectors-example@2x.png" width="500px;">

  <div class="c-header-sm c-m-top-xl">Do's and Dont's</div>

  <!-- Start Visual Indicators Row -->
  <div class="c-header-xs">Visual indicators</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/bulk-action-selectors/bulk-support-indicators-do@2x'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/checkboxes/bulk-action-selectors/bulk-support-indicators-dont@2x'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do support a bulk action selector with an additional visual indicator</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use a checkbox in isolation when indicating bulk actions</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Visual Indicators Row -->
  <!-- END Bulk action selectors in a table Section -->


</div>
<!-- End Design Tab -->




