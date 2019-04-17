---
title: Tooltips
description: Tooltips are used to add information or context to an item or element. Typically, tooltips help users understand the meaning of icons or errors, expand on truncated text, and for displaying other short bits of contextual information. 
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

<!-- Start Design Tab -->
<div id="design" class="docs-tabs-content" markdown="1">

# Overview

**Don't use tooltips to hide/provide information that is vital to complete a task.**

Cupcake tooltips should be used in place of standard browser tooltips when the item it highlights requires emphasis or explanation.

**Tooltips are deceptively complex. Below are guidelines to help make them uniform across applications.**

- Design
- Tooltip Use
- Tooltip Writing
- Tooltips Placement

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/tooltips/nameoffile.png" width="500px;">

<hr>
  
  <!-- Start Tooltip Design Section -->
  <div class="c-header-md">Tooltip Design</div>
    Tooltips should have a consistent look and styling across the product. 

    Tooltips should either be light or dark, never contain an icon, and follow the standard conventions outlined in this document. 

  <!-- Start General Do/Dont Row -->
  <div class="c-header-xs">General Do's and Dont's</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/tooltips/file name'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/tooltips/file name'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use standard colors</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use standard fonts, sizes, and weights</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use sentence case</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do center text</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do wrap text when necessary </span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use non-standard colors</span>
        </div>
      </div>
       <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use non-standard fonts, sizes, and weights</span>
        </div>
      </div>
       <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use icons in tooltips</span>
        </div>
      </div>
       <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't left align wrapped text </span>
        </div>
      </div>
      </div>
    </div>
  <!-- End General Do's and Dont's Row -->
  <!-- END Tooltip Design Section -->

  <hr>

  <!-- Start Tooltip Use Section -->
  <div class="c-header-md">Tooltip Use</div>
  Tooltips should provided additional context or information. 

  **The following tooltip usages are highly discouraged to users**
  - Hiding vital information
  - Using redundant tooltips
  - Using tooltips to distinguish the functions of two similar elements 

  **Note:** 
  For detailed rules around error & validation tooltips please see the Errors & Validations documentation

  **Hiding Vital Information**
  Don't use tooltips to hide information or to present a "cleaner" design. 

When in doubt ask yourself, "Is this information necessary for a user to complete a task?" If the answer is yes, don't use a tooltip. 

  <!-- Start Hiding Vital Information Row -->
  <div class="c-header-xs">Hiding vital information</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/file name'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/file name'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do surface vital information</span>
        </div>
      </div>
       <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Consider a different approach or pattern when necessary</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use tooltips to hide information vital to task completion</span>
        </div>
      </div>
       <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use tooltips as a crutch to display information </span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Hiding Vital Information Row -->

   <!-- Start Using Redundant Tooltips Row -->
  <div class="c-header-xs">Using redundant tooltips</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/file name'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/file name'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use tooltips to provide clarity and help users understand elements</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use tooltips to display redundant information</span>
        </div>
      </div>
      </div>
    </div>
   <!-- END Using Redundant Tooltips Row -->

<!-- Start Duplicate Elements Row -->
  <div class="c-header-xs">Duplicate elements</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/file name'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/file name'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use the native patterns related to elements in order to distinguish their function(s)</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use tooltips to distinguish functions between duplicate elements</span>
        </div>
      </div>
      </div>
    </div>
   <!-- END Duplicate Elements Row -->
  <!-- END Tooltip Use Section -->

<hr>

  <!-- Start Tooltip Writing Section -->
  <div class="c-header-md">Tooltip Writing</div>
  Tooltips should be written as short and concise as possible. When you require more than a few words—or other non-text objects such as "status badges"—consider using "popovers" or other patterns and approaches to communicate complexity to the user.

  <!-- Start Tooltip Writing General Row -->
  <div class="c-header-xs">Tooltip writing general</div>
  Tooltips should use sentence case with no punctuation unless absolutely required for clarity.
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/file name'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/file name'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do keep descriptions short and concise</span>
        </div>
      </div>
       <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use sentence case with no punctuation</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use all caps or capitalize each word</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use punctuation unless required for clarity.</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Tooltip Writing General Row -->

  <!-- Start Keyboard Shortcuts Row -->
  <div class="c-header-xs">Keyboard Shortcuts</div>
 Often tooltips will be used to display contextual information as well as reinforce shortcut keys. Shortcuts should be formatted in a very specific and uniform manner.

 <div class="c-text-danger"> Add table with shortcut keys here...</div>
 
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/file name'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/file name'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do explain the action the shortcut will perform</span>
        </div>
      </div>
       <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do abbreviate modifier keys and capitalize the letter key</span>
        </div>
      </div>
        <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use parentheses to contain the shortcut</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't forget to explain the action the shortcut will perform</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't spell out modifier keys and lower case the letter key</span>
        </div>
      </div>
       <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use punctuation other than the plus sign to show key sequence</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Keyboard Shortcuts Row -->

  <!-- Start Exceptions Row -->
  <div class="c-header-sm c-text-danger">EXCEPTIONS</div>
  <div class="c-header-xs">User input</div>
  In instances where tooltips are used to display **user inputted information** case rules do not apply. Tooltips should mirror user input exactly.
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/file name'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/file name'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do keep descriptions short and concise</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't overwrite or format the user's input to be in-line with other tooltip rules</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Exceptions General Row -->
  <!-- END Tooltip Writing Section -->


<hr>

  <!-- Start Tooltip Placement Section -->
  <div class="c-header-md">Tooltip Placement</div>
  Tooltip placement will change depending on the application, component container, browser edge position, and the element(s) being highlighted.

  **Above the element is the preferred placement for a tooltip** but the edge of the container, and the proximity of other elements should factor into the decision to use other placements.

  Top, bottom, left, and right placements are all acceptable depending on the context. Try to remain consistent in tooltip placement and **designer discretion is advised.**

  <!-- Start Overflow Tooltip Placement Row -->
  <div class="c-header-xs">Overflow Tooltip Placement</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/file name'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/file name'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do change the position of the tooltip relative to the browser edge or component container in order to precent overflow</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't wrap text inside the tooltip in order to prevent overflow</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Overflow Tooltip Placement Row -->

  <!-- Start Consistent Tooltip Placement Row -->
  <div class="c-header-xs">Consistent Tooltip Placement</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/file name'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/file name'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do try to keep tooltips above the items or elements being highlighted </span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do keep the position of the tooltips consistent when edge or component overflow does not pose a challenge </span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't be inconsistent and arbitrary with tooltip placement</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Consistent Tooltip Placement Row -->

  <!-- Start Tooltip Carets Row -->
  <div class="c-header-xs">Tooltip Carets</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/file name'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/checkboxes/file name'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do align the caret of the tooltip with the center of the element being emphasized</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Off center tooltips can lead to confusion about what element the tooltip is referencing </span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Tooltip Carets Row -->

  External Reference for advanced tooltip placement behavior : Popper.js.org - Library

  <!-- END Tooltip Placement Section -->


</div>
<!-- End Design Tab -->

<!-- Start Cupcake Code Tab -->
<div id="code" class="docs-tabs-content" markdown="1">

## Checkbox
Checkboxes are most commonly used to give merchants a way to make a range of selections (zero, one, or multiple).

{% example html %}
<label class="c-checkbox">
    <input type="checkbox" name="radio" checked>
    <i class="c-bg-primary"></i>
    Basic Checkbox
</label>
{% endexample %}

## Color Examples

{% example html %}
<label class="c-checkbox c-m-right-sm">
    <input type="checkbox" name="radio" checked>
    <i class="c-bg-primary"></i>
    Primary
</label>

<label class="c-checkbox c-m-right-sm">
    <input type="checkbox" name="radio" checked>
    <i class="c-bg-success"></i>
    Success
</label>

<label class="c-checkbox c-m-right-sm">
    <input type="checkbox" name="radio" checked>
    <i class="c-bg-warning"></i>
    Warning
</label>

<label class="c-checkbox c-m-right-sm">
    <input type="checkbox" name="radio" checked>
    <i class="c-bg-danger"></i>
    Danger
</label>
{% endexample %}

## Size Examples

{% example html %}
<label class="c-checkbox-sm c-m-right-sm">
    <input type="checkbox" name="radio" checked>
    <i class="c-bg-primary"></i>
</label>

<label class="c-checkbox-lg c-m-right-sm">
    <input type="checkbox" name="radio" checked>
    <i class="c-bg-primary"></i>
</label>

<label class="c-checkbox-xl c-m-right-sm">
    <input type="checkbox" name="radio" checked>
    <i class="c-bg-primary"></i>
</label>
{% endexample %}

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

<!-- Start Angular Code Tab -->
<div id="angular" class="docs-tabs-content" markdown="1">

### Storybook iframe
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/josh-easter/storybook-demo/?path=/story/basic-elements--avatar&full=0&addons=1&stories=0&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs&nav=0"></iframe>

</div>
<!-- End Angular Code Tab -->


