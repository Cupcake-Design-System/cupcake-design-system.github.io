---
title: Tooltips
description: Tooltips are used to add information or context to an item or element. Typically, tooltips help users understand the meaning of icons or errors, expand on truncated text, and for displaying other short bits of contextual information.
tabs:
- Code
- Guidelines
---

<!-- Start Cupcake Code Tab -->
<div id="code" class="docs-tabs-content" markdown="1">


### Base
These popovers are CSS only. The base have no color but multiple direction options.

{% example html %}
<span data-tooltip="Tooltip Text" class="c-btn c-btn-secondary c-m-horizontal-md">
  Default
</span>
<span data-tooltip="Tooltip Text" data-tooltip-conf="bottom" class="c-btn c-btn-secondary c-m-horizontal-md">
  Down
</span>
<span data-tooltip="Tooltip Text" data-tooltip-conf="right" class="c-btn c-btn-secondary c-m-horizontal-md">
  Right
</span>
<span data-tooltip="Tooltip Text" data-tooltip-conf="shadow left" class="c-btn c-btn-secondary c-m-horizontal-md">
  Left
</span>
{% endexample %}


<hr>
<br>

#### Colors
{% example html %}
<span data-tooltip="Tooltip Text" class="c-btn c-btn-secondary c-m-horizontal-md">
  Default
</span>
<span data-tooltip="Tooltip Text" data-tooltip-conf="invert shadow" class="c-btn c-btn-secondary c-m-horizontal-md">
  Invert
</span>
<span data-tooltip="Tooltip Text" data-tooltip-conf="primary" class="c-btn c-btn-secondary c-m-horizontal-md">
  Primary
</span>
<span data-tooltip="Tooltip Text" data-tooltip-conf="success" class="c-btn c-btn-secondary c-m-horizontal-md">
  Success
</span>
<span data-tooltip="Tooltip Text" data-tooltip-conf="warning" class="c-btn c-btn-secondary c-m-horizontal-md">
  Warning
</span>
<span data-tooltip="Tooltip Text" data-tooltip-conf="danger" class="c-btn c-btn-secondary c-m-horizontal-md">
  Danger
</span>
{% endexample %}


<hr>
<br>

#### Additional Options
{% example html %}
  <span data-tooltip="A pure CSS Tooltip. Super easy to use, No JavaScript required." data-tooltip-conf="primary multiline" class="c-btn c-btn-secondary c-m-horizontal-md">
    Multiline
  </span>
  <span data-tooltip="Tooltip Text" data-tooltip-conf="no-fade" class="c-btn c-btn-secondary c-m-horizontal-md">
    No Fade
  </span>
  <span data-tooltip="Tooltip Text" data-tooltip-conf="shadow" class="c-btn c-btn-secondary c-m-horizontal-md">
    Shadow
  </span>
  <span data-tooltip="Tooltip Text" data-tooltip-conf="no-arrow" class="c-btn c-btn-secondary c-m-horizontal-md">
    No Arrow
  </span>
  <span data-tooltip="Tooltip Text" data-tooltip-conf="square" class="c-btn c-btn-secondary c-m-horizontal-md">
    Square
  </span>   
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

**Don't use tooltips to hide/provide information that is vital to complete a task.**

Cupcake tooltips should be used in place of standard browser tooltips when the item it highlights requires emphasis or explanation.

**Tooltips are deceptively complex. Below are guidelines to help make them uniform across applications.**

- Design
- Tooltip Use
- Tooltip Writing
- Tooltips Placement

### Examples of use

<br>

**Icon tooltip used to clarify the action or name of an icon button**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/tooltips/tooltip-example-clarify-action-or-name.png" width="50%;">

<br>

**Tooltip used to display keyboard shortcuts**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/tooltips/tooltip-display-keyboard-shortcuts.png" width="50%;">

<br>

**User inputted information should show user input exactly as the user typed it**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/tooltips/tooltips-user-input.png" width="50%;">

<br>

**Definition tooltip used to provide contextual information to a word, request, action, or element**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/tooltips/tooltips-contextual-information.png" width="50%;">

<br>

**Interactive tooltips span from simple buttons or hyperlinks to more complex modules**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/tooltips/tooltips-interactive.png" width="50%;">

<hr>
  
  <!-- Start Tooltip Design Section -->
### Tooltip Design
  - Tooltips should have a consistent look and styling across the product. 
  - Tooltips should either be light or dark, never contain an icon, and follow the standard conventions outlined in this document. 

  <!-- Start General Do/Dont Row -->
#### General Do's and Dont's

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
### Tooltip use

  Tooltips should provide additional context or information. 

  **The following tooltip usages are highly discouraged to users**
  - Hiding vital information
  - Using redundant tooltips
  - Using tooltips to distinguish the functions of two similar elements 

  **Note:** 
  For detailed rules around error & validation tooltips please see the Errors & Validations documentation

<br>

  <!-- Start Hiding Vital Information Row -->
### Hiding vital information

  - Don't use tooltips to hide information or to present a "cleaner" design. 
  - When in doubt ask yourself, "Is this information necessary for a user to complete a task?" If the answer is yes, don't use a tooltip. 

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
##### Using redundant tooltips
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
##### Duplicate elements
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
### Tooltip Writing
  - Tooltips should be written as short and concise as possible. 
  - When you require more than a few words—or other non-text objects such as "status badges"—consider using "popovers" or other patterns and approaches to communicate complexity to the user.

  <!-- Start Tooltip Writing General Row -->
##### Tooltip writing general
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
##### Keyboard Shortcuts
 - Often tooltips will be used to display contextual information as well as reinforce shortcut keys. 
 - Shortcuts should be formatted in a very specific and uniform manner.

 **(key + key + key)**

| **Command**   | **Command Abbreviation** |   
| Control       | ctrl                     |
| Shift         | shift                    |
| Alt           | alt                      | 
| Windows       | win                      |
| Command (mac) | cmd                      | 

<br>

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
### EXCEPTIONS

<hr>

##### User Input
- In instances where tooltips are used to display **user inputted information** case rules do not apply. 
- Tooltips should mirror user input exactly.

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
### Tooltip Placement
  - Tooltip placement will change depending on the application, component container, browser edge position, and the element(s) being highlighted.

  - **Above the element is the preferred placement for a tooltip** but the edge of the container, and the proximity of other elements should factor into the decision to use other placements.

  - Top, bottom, left, and right placements are all acceptable depending on the context. Try to remain consistent in tooltip placement and **designer discretion is advised.**

  [External Reference for advanced tooltip placement behavior - Popper JS ](https://popper.js.org/index.html)

  <br>

  <!-- Start Overflow Tooltip Placement Row -->
##### Overflow Tooltip Placement

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
##### Consistent Tooltip Placement
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
##### Tooltip Carets

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



  <!-- END Tooltip Placement Section -->


</div>
<!-- End Design Tab -->




