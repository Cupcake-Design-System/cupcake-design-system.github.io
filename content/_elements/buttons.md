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
- xl
tabs:
- Design
- Code 
- Angular
---

<div id="design" class="docs-tabs-content" markdown="1">

# Overview

**All buttons have the following features:**

- A hover and a click state
- Can be either active or disabled
- Come in 4 different sizes (primarily for use in grids, components and mobile apps)

**Buttons display in the following variations:**

- Primary button
- Secondary button
- Action button
- Danger button
- Link-only button
- Icon button
- Icon-only button

<hr>
  
  <!-- Start General Do's and Don'ts Row -->
  <div class="c-header-md">General Do's and Dont's</div>

  <!-- Start Button Wording Row -->
  <div class="c-header-xs">Button wording</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/buttons/general/general-wording-best@2x'%} 
    </div>
    <div class="c-col">
   {% include guide-img.html img='elements/buttons/general/general-wording-better2x'%}  
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/buttons/general/general-wording-no@2x'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do keep primary buttons short and to the point</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use this approach when the context for the button is 100% clear</span>
        </div>
      </div>
    </div>
    <!-- Better -->
     <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do try limit button wording to two words (3 words max. if needed)</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use wording and terms that need no additional explanation</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Create context with the design</span>
        </div>
      </div>
    </div>
    <!-- End Better Col -->
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use ambiguous or lengthy wording in buttons</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use more than two words (3 words max. in exceptions)</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use wording that require additional explanations or context</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Button Wording Row -->

 <!-- Start Buttons + Icons Row -->
  <div class="c-header-xs">Buttons + icons</div>
  <div class="c-row">
    <div class="c-col">
      {% include guide-img.html img='elements/buttons/general/general-button-icon-do@2x'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/buttons/general/general-button-icon-dont@2x'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Use generic icons with an accepted meaning associated with it</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Use that icon linked to one button or type of action only</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use icons which are ambiguous in meaning or not universally accepted for a specific purpose</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use icons which need an explanation</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use icons which might already be associated with other buttons or actions</span>
        </div>
      </div>
      </div>
    </div>
 <!-- End Buttons + Icons Row -->
  <!-- End General Do's and Don'ts Section -->

<hr>

  <!-- Start Primary Button Row -->
  <div class="c-header-md">Primary button</div>
  Primary buttons draw attention to the primary action within a screen, component or interaction. Not all screens will require a primary button.

  <!-- Start Primary Button Do's and Don'ts Section -->
  <div class="c-header-sm c-m-top-sm c-m-bottom-sm">Do's and Dont's</div>

 <!-- Start Primary Button Usage Row -->
  <div class="c-header-xs">Primary button usage</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/buttons/primary-button/primary-button-usage-do@2x'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/buttons/primary-button/primary-button-usage-dont@2x'%}  
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use only one visible primary button per screen*</span>
        </div>
      </div>
       <div class="c-media c-p-sm">
        <span class=""></span>
        <div class="c-media-body">
          <span class="c-text-md">* Exception: Primary buttons hidden in interactions do not apply</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use more than one visible primary button per screen*</span>
        </div>
      </div>
      </div>
    </div>
 <!-- End Primary Button Usage Row -->

  <!-- Start Grouping Primary Buttons Row -->
  <div class="c-header-xs">Grouping Primary Buttons</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/buttons/primary-button/primary-button-combo-do@2x'%}
    </div>
    <div class="c-col">
  {% include guide-img.html img='elements/buttons/primary-button/primary-button-combo-dont@2x'%}  
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do combine primary buttons with secondary buttons</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do combine a primary button with a secondary button representing an opposing action</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't combine two or more primary buttons</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Grouping Primary Buttons Row -->

  <!-- Start Grouping and Button Order Row -->
  <div class="c-header-xs">Grouping and button order</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/buttons/primary-button/primary-button-order-do@2x'%}
    </div>
    <div class="c-col">
  {% include guide-img.html img='elements/buttons/primary-button/primary-button-order-dont@2x'%}  
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do place the button representing the opposing secondary action first</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't place the primary action button first</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't combine two or more primary buttons</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Grouping and Button Order Row -->
  <!-- End Primary Button Section -->

<hr>

  <!-- Start Action Button Row -->
  <div class="c-header-md">Action button</div>
Action buttons represent and draw attention to an action where something is created or introduced into the workflow.

  <!-- Start Action Button Do's and Don'ts Section -->
  <div class="c-header-sm c-m-top-sm c-m-bottom-sm">Do's and Dont's</div>

 <!-- Start Action Button Usage Row -->
  <div class="c-header-xs">Action button combinations</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/buttons/action-button/action-button-combo-do@2x'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/buttons/action-button/action-button-combo-do@2x'%}   
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use an action button on the same screen with a primary action button</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do try to place the positive action button in the topmost area of the page or component as it represents the start of an interaction</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't combine multiple visible primary action buttons on a screen</span>
        </div>
      </div>
      </div>
    </div>
 <!-- End Action Button Combinations Row -->

  <!-- Start Action Button Usage Row -->
  <div class="c-header-xs">Action button usage</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/buttons/action-button/action-button-usage-do@2x'%}
    </div>
    <div class="c-col">
  {% include guide-img.html img='elements/buttons/primary-button/primary-button-usage-dont@2x'%}  
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use the action button instead of a primary button.</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Use only one instance of an action button per page, whether visible or hidden</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't combine multiple action buttons on a screen, whether visible or hidden</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Action Button Usage Row -->
  <!-- End Action Button Section -->

<hr>

<!-- Start Danger Button Row -->
<div class="c-header-md">Danger button</div>
Danger buttons represent and draw attention to a destructive action where something is discarded or deleted.

*A destructive action button can share the screen with an additive action button and/or a primary action button.

  <!-- Start Danger Button Do's and Don'ts Section -->
  <div class="c-header-sm c-m-top-sm c-m-bottom-sm">Do's and Dont's</div>

 <!-- Start Danger Button Usage Row -->
  <div class="c-header-xs">Danger button combinations</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/buttons/danger-button/danger-button-combo-do@2x'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/buttons/danger-button/danger-button-combo-dont@2x'%}   
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do combine a danger button with a secondary action button so the user has the option to opt out</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use only one instance of a danger button visible on the screen at a time</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use a danger button without offering the user a way to opt out (destructive action buttons can be permanent)</span>
        </div>
      </div>
      </div>
    </div>
 <!-- End Danger Button Combinations Row -->

  <!-- Start Danger Button Usage Row -->
  <div class="c-header-xs">Danger button usage</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/buttons/danger-button/danger-button-usage-do@2x'%} 
    </div>
    <div class="c-col">
  {% include guide-img.html img='elements/buttons/danger-button/danger-button-usage-dont@2x'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do make the danger button the final decision before a destructive action is taken</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't give the user additional decisions after the danger button is clicked</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Danger Button Usage Row -->
  <!-- End Danger Button Section -->

  <hr>

<!-- Start Secondary Button Row -->
<div class="c-header-md">Secondary button</div>
Secondary buttons are the standard button for general use. Secondary buttons are often used in combination with a primary button, to represent an opposing action.

  <!-- Start Secondary Button Do's and Don'ts Section -->
  <div class="c-header-sm c-m-top-sm c-m-bottom-sm">Do's and Dont's</div>

 <!-- Start Secondary Button Usage Row -->
  <div class="c-header-xs">Secondary button usage</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/buttons/secondary-button/secondary-button-usage-do@2x'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/buttons/secondary-button/secondary-button-usage-dont@2x'%}   
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do try to keep visible secondary button usage to a minimum</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do try to hide additional secondary button usage in interactions</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do hide additional options in a dropdown button if possible</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't clutter the screen with multiple secondary button clusters</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't be lazy - analyse your workflow to find solutions</span>
        </div>
      </div>
      </div>
    </div>
 <!-- End Secondary Button Usage Row -->

  <!-- Start Secondary Button Repeitive Use in Tables Row -->
  <div class="c-header-xs">Repetitive use of secondary button use in tables</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/buttons/secondary-button/secondary-button-repeat-do@2x'%}
    </div>
    <div class="c-col">
   {% include guide-img.html img='elements/buttons/secondary-button/secondary-button-repeat-dont@2x'%}
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do reveal repetitive button options on hover</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't clutter a table with repetitive buttons esp. if each button represents the same action. </span>
        </div>
      </div>
      </div>
    </div>
  <!-- Start Secondary Button Repeitive Use in Tables Row -->
  <!-- End Secondary Button Section -->

 <!-- Start Link Only Button Row -->
<div class="c-header-md">Link-only button</div>
Link-only buttons are used under the following circumstances:

- Primary and Secondary buttons have been used but an additional button is needed to highlight a less critical action or supporting link.
- To add additional buttons to an already button heavy page
- To represent less important or supporting actions.

<!-- Start Link-only Button Do's and Don'ts Section -->
<div class="c-header-sm c-m-top-sm c-m-bottom-sm">Do's and Dont's</div>

 <!-- Start Link-only Button Usage Row -->
  <div class="c-header-xs">Link-only button usage</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/buttons/link-only-button/link-button-usage-do@2x'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/buttons/link-only-button/link-button-usage-dont@2x'%}    
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use link-only buttons to highlight less critical actions or supporting links, thereby reducing overall button use on a page</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't crowd a page with button heavy layouts</span>
        </div>
      </div>
      </div>
    </div>
 <!-- End Link-only Button Usage Row -->

  <!-- Start Link-only Button Combinations Row -->
  <div class="c-header-xs">Link-only button combinations</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/buttons/link-only-button/link-button-combo-do@2x'%} 
    </div>
    <div class="c-col">
   {% include guide-img.html img='elements/buttons/link-only-button/link-button-combo-dont@2x'%}
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do present a link-only button as an additional non-critical action or link in combination with critical choice buttons</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't present a link-only button as a counter action to a primary or secondary button </span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Link-only Button Combinations Row -->

  <!-- Start Button link vs text link Row -->
  <div class="c-header-xs">Button link vs text link</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/buttons/link-only-button/link-button-vs-do@2x'%} 
    </div>
    <div class="c-col">
   {% include guide-img.html img='elements/buttons/link-only-button/link-button-vs-dont@2x'%}
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use text links instead of button-only links where appropriate</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use button-only links to highlight more important actions over text links</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use button-only links where text links will be more appropriate</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Button link vs text link Row -->
  <!-- End Link Only Button Section --> 

<hr>

 <!-- Start Icon Button Row -->
<div class="c-header-md">Icon button</div>
Icon buttons are best used in combinations with other buttons, typically in toolbars or in headers.

<!-- Start Icon Button Do's and Don'ts Section -->
<div class="c-header-sm c-m-top-sm c-m-bottom-sm">Do's and Dont's</div>

 <!-- Start Icon Button Usage Row -->
  <div class="c-header-xs">Icon button usage</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/buttons/icon-button/icon-only-button-combo-do@2x'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/buttons/icon-button/icon-only-button-combo-dont@2x'%}     
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use icon buttons in combination with other buttons</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use icon buttons in locations where borderless icon buttons will not be noticed or expected</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use use borderless icon buttons when a standard icon button will be more effective</span>
        </div>
      </div>
      </div>
    </div>
 <!-- End Icon Button Usage Row -->
  <!-- End Icon Button Section --> 

<hr>

 <!-- Start Icon-only Button Row -->
<div class="c-header-md">Icon-only button</div>
Icon-only buttons are best used for common or repetitive actions, typically where space is restricted in tables and forms.

<!-- Start Icon-only Button Do's and Don'ts Section -->
<div class="c-header-sm c-m-top-sm c-m-bottom-sm">Do's and Dont's</div>

 <!-- Start Icon-only Button Usage Row -->
  <div class="c-header-xs">Icon-only button usage</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/buttons/icon-button/nameoffile'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/buttons/icon-button/nameoffile'%}     
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use icon-only buttons for common or repetitive actions in forms  </span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use icon buttons in tables</span>
        </div>
      </div>
      </div>
    </div>
 <!-- End Icon-only Button Usage Row -->

 <!-- Start Icon-only Button in Forms Row -->
  <div class="c-header-xs">Icon-only button in forms</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/buttons/icon-only-button/icon-only-button-forms-do@2x'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/buttons/icon-only-button/icon-only-button-forms-dont@2x'%}     
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use icon-only buttons to represent critical action or danger button functions in tables and forms</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't modify icon buttons to conform to behave like primary or secondary buttons</span>
        </div>
      </div>
      </div>
    </div>
 <!-- End Icon-only Button in Forms Row -->
  <!-- End Icon-only Button Section --> 


</div>
<!-- End Design Tab -->


<!-- Start Cupcake Code Section -->
<div id="code" class="docs-tabs-content" markdown="1">

## Base
Buttons make common actions immediately visible and easy to perform with one click or tap. They can be used for any type of action, including navigation.

{% example html %}
<button type="button" class="c-btn c-btn-primary">Button</button>
{% endexample %}

## Color Examples
This is an example of available colors for the Buttons element.

{% example html %}
<button type="button" class="c-btn c-btn-primary">Primary</button>
<button type="button" class="c-btn c-btn-secondary">Secondary</button>
<button type="button" class="c-btn c-btn-success">Success</button>
<button type="button" class="c-btn c-btn-warning">Warning</button>
<button type="button" class="c-btn c-btn-danger">Danger</button>
{% endexample %}

## Size Examples
This is an example of available sizes for the Buttons element.

{% example html %}
<button type="button" class="c-btn c-btn-primary c-btn-xs">X-Small</button>
<button type="button" class="c-btn c-btn-primary c-btn-sm">Small</button>
<button type="button" class="c-btn c-btn-primary c-btn-lg">Large</button>
<button type="button" class="c-btn c-btn-primary c-btn-xl">X-Large</button>
{% endexample %}

## Disabled State
Make buttons look inactive by adding the disabled boolean attribute to any <button> element.

{% example html %}
<button type="button" class="c-btn c-btn-primary" disabled>Primary</button>
<button type="button" class="c-btn c-btn-secondary" disabled>Secondary</button>
<button type="button" class="c-btn c-btn-success" disabled>Success</button>
<button type="button" class="c-btn c-btn-warning" disabled>Warning</button>
<button type="button" class="c-btn c-btn-danger" disabled>Danger</button>
{% endexample %}

## Additional Styles and Options
These modifiers can be mixed/matched as needed

### Outlines

{% example html %}
<button type="button" class="c-btn c-btn-primary-outline">Primary</button>
<button type="button" class="c-btn c-btn-secondary-outline">Secondary</button>
<button type="button" class="c-btn c-btn-success-outline">Success</button>
<button type="button" class="c-btn c-btn-warning-outline">Warning</button>
<button type="button" class="c-btn c-btn-danger-outline">Danger</button>
{% endexample %}

### Pills and Colors

{% example html %}
<button type="button" class="c-btn c-btn-primary c-btn-pill">Primary</button>
<button type="button" class="c-btn c-btn-secondary c-btn-pill">Secondary</button>
<button type="button" class="c-btn c-btn-success c-btn-pill">Success</button>
<button type="button" class="c-btn c-btn-warning c-btn-pill">Warning</button>
<button type="button" class="c-btn c-btn-danger c-btn-pill">Danger</button>
{% endexample %}

### Block Button

{% example html %}
<button type="button" class="c-btn c-btn-primary c-btn-lg c-btn-block">Block level button</button>
{% endexample %}

<hr>

## Button Group

### Base
Button group displays multiple related actions in a row to help with horizontal arrangement and the spacing of calls to action.

{% example html %}
<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-primary">Default</button>
  <button type="button" class="c-btn c-btn-primary">Group</button>
  <button type="button" class="c-btn c-btn-primary">Buttons</button>
</div>
{% endexample %}

### Color Examples
This is an example of available colors for the Button Group element.

{% example html %}
<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-primary">Primary</button>
  <button type="button" class="c-btn c-btn-primary">Group</button>
  <button type="button" class="c-btn c-btn-primary">Buttons</button>
</div>

<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-secondary">Secondary</button>
  <button type="button" class="c-btn c-btn-secondary">Group</button>
  <button type="button" class="c-btn c-btn-secondary">Buttons</button>
</div>

<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-success">Success</button>
  <button type="button" class="c-btn c-btn-success">Group</button>
  <button type="button" class="c-btn c-btn-success">Buttons</button>
</div>

<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-warning">Warning</button>
  <button type="button" class="c-btn c-btn-warning">Group</button>
  <button type="button" class="c-btn c-btn-warning">Buttons</button>
</div>

<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-danger">Danger</button>
  <button type="button" class="c-btn c-btn-danger">Group</button>
  <button type="button" class="c-btn c-btn-danger">Buttons</button>
</div>
{% endexample %}

### Size Examples
This is an example of available sizes for the Button Group element.

{% example html %}
<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-primary c-btn-xs">X-Small</button>
  <button type="button" class="c-btn c-btn-primary c-btn-xs">Group</button>
  <button type="button" class="c-btn c-btn-primary c-btn-xs">Buttons</button>
</div>
<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-primary c-btn-sm">Small</button>
  <button type="button" class="c-btn c-btn-primary c-btn-sm">Group</button>
  <button type="button" class="c-btn c-btn-primary c-btn-sm">Buttons</button>
</div>
<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-primary c-btn-lg">Large</button>
  <button type="button" class="c-btn c-btn-primary c-btn-lg">Group</button>
  <button type="button" class="c-btn c-btn-primary c-btn-lg">Buttons</button>
</div>
<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-primary c-btn-xl">X-Large</button>
  <button type="button" class="c-btn c-btn-primary c-btn-xl">Group</button>
  <button type="button" class="c-btn c-btn-primary c-btn-xl">Buttons</button>
</div>
{% endexample %}

### Additional Styles and Options

### Icons

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

### Vertical

{% example html %}
<div class="c-btn-group-vertical">
	<button class="c-btn c-btn-primary c-text-left">All</button>
	<button class="c-btn c-btn-primary c-text-left">Published</button>
	<button class="c-btn c-btn-primary c-text-left">Unpublished</button>
	<button class="c-btn c-btn-primary c-text-left">Drafts</button>
</div>
<div class="c-btn-group-vertical">
	<button class="c-btn c-btn-primary-outline c-text-left">All</button>
	<button class="c-btn c-btn-primary-outline c-text-left">Published</button>
	<button class="c-btn c-btn-primary-outline c-text-left">Unpublished</button>
	<button class="c-btn c-btn-primary-outline c-text-left">Drafts</button>
</div>
<div class="c-btn-group-vertical">
	<button class="c-btn c-btn-primary"><i class="fas fa-euro-sign"></i> EUR</button>
	<button class="c-btn c-btn-primary"><i class="fas fa-pound-sign"></i> GBP</button>
	<button class="c-btn c-btn-primary"><i class="fas fa-dollar-sign"></i> USD</button>
	<button class="c-btn c-btn-primary"><i class="fas fa-dollar-sign"></i> USD</button>
</div>
<div class="c-btn-group-vertical">
	<button class="c-btn c-btn-box c-btn-sm c-btn-primary"> <i class="fa fa-exclamation-circle"></i></button>
	<button class="c-btn c-btn-box c-btn-sm c-btn-primary"> <i class="fa fa-exclamation-circle"></i></button>
	<button class="c-btn c-btn-box c-btn-sm c-btn-primary"><i class="fa fa-exclamation-circle"></i></button>
</div>
{% endexample %}

### Pills

{% example html %}
<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-pill c-btn-primary">Primary</button>
  <button type="button" class="c-btn c-btn-pill c-btn-primary">Group</button>
  <button type="button" class="c-btn c-btn-pill c-btn-primary">Buttons</button>
</div>

<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-pill c-btn-secondary">Secondary</button>
  <button type="button" class="c-btn c-btn-pill c-btn-secondary">Group</button>
  <button type="button" class="c-btn c-btn-pill c-btn-secondary">Buttons</button>
</div>

<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-pill c-btn-success">Success</button>
  <button type="button" class="c-btn c-btn-pill c-btn-success">Group</button>
  <button type="button" class="c-btn c-btn-pill c-btn-success">Buttons</button>
</div>

<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-pill c-btn-warning">Warning</button>
  <button type="button" class="c-btn c-btn-pill c-btn-warning">Group</button>
  <button type="button" class="c-btn c-btn-pill c-btn-warning">Buttons</button>
</div>

<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-pill c-btn-danger">Danger</button>
  <button type="button" class="c-btn c-btn-pill c-btn-danger">Group</button>
  <button type="button" class="c-btn c-btn-pill c-btn-danger">Buttons</button>
</div>
{% endexample %}

### Outline

{% example html %}
<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-primary-outline">Primary</button>
  <button type="button" class="c-btn c-btn-primary-outline">Group</button>
  <button type="button" class="c-btn c-btn-primary-outline">Buttons</button>
</div>

<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-secondary-outline">Secondary</button>
  <button type="button" class="c-btn c-btn-secondary-outline">Group</button>
  <button type="button" class="c-btn c-btn-secondary-outline">Buttons</button>
</div>

<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-success-outline">Success</button>
  <button type="button" class="c-btn c-btn-success-outline">Group</button>
  <button type="button" class="c-btn c-btn-success-outline">Buttons</button>
</div>

<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-warning-outline">Warning</button>
  <button type="button" class="c-btn c-btn-warning-outline">Group</button>
  <button type="button" class="c-btn c-btn-warning-outline">Buttons</button>
</div>

<div class="c-btn-group">
  <button type="button" class="c-btn c-btn-danger-outline">Danger</button>
  <button type="button" class="c-btn c-btn-danger-outline">Group</button>
  <button type="button" class="c-btn c-btn-danger-outline">Buttons</button>
</div>
{% endexample %}




</div>
<!-- End Cupcake Code Section -->

<!-- Start Angular Code Section -->
<div id="angular" class="docs-tabs-content" markdown="1">

### Standard Button
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/ipreo/sprinkles/?path=/story/components-buttons--standard"></iframe>

### Submit Button
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/ipreo/sprinkles/?path=/story/components-buttons--submit"></iframe>

### Button Link
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/ipreo/sprinkles/?path=/story/components-buttons--link"></iframe>


### Icon Button
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/ipreo/sprinkles/?path=/story/components-buttons--icon"></iframe>

</div>
<!-- End Angular Code Section -->


