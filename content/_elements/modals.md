---
title: Modals
description: Modals deliver content, communicate information or require interaction while allowing the user to maintain the context of a particular task. Modals should be used sparingly as they interrupt the user's workflow.
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

Modals generally conform to the following criteria:

- Modals appear on a layer above of the main content
- Modals require user interaction
- Modals disable the main content until the user explicitly interacts with the dialog

Currently the following modals are in use:

- Standard modals
- Modal dialogs

<hr>

 <!-- Start Standard Modals Section -->
  <div class="c-header-md">Standard Modals</div>
 Standard modals are used to deliver content or additional functionality that supports the underlying page or task.

  <div class="c-header-sm">Structure</div>
Standard modals are typically made up of the following:

Heading
Close button 
Content area
A 1 button or a 2 button combination (depending on the use case)

  <div class="c-header-sm">Types of Standard Modals</div>
Standard modals are typically made up of the following:

Fixed width standard modals
Flexible width standard modals (variation)
Full screen modals (variation)

<!-- Start Standard Modals -Examples of Use -->
  <div class="c-header-sm c-m-bottom-md">Examples of Use</div>

  <div class="c-header-xs">Fixed Width Modal</div>
  <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/modals/Fixed_Width.png" width="500px;">

  <div class="c-header-xs">Flexible Width Modal</div>
  <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/modals/Flexible_Width.png" width="500px;">

   <div class="c-header-xs">Full Screen Modal</div>
  <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/modals/Fullscreen.png" width="500px;">
<!-- End Standard Modals -Examples of Use -->

<!-- Start Standard Modals - General Dos and Donts  -->
<div class="c-header-sm">General Do's and Dont's</div>

 <!-- Start Titles Row -->
  <div class="c-header-xs">Titles</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/modals/Modals_Titles_Do'%} 
    </div>
    <div class="c-col">
      {% include guide-img.html img='elements/modals/Modals_Titles_Dont'%}
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do keep titles short and descriptive</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use long wordy titles or sentences</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Titles Row -->

   <!-- Start Button Usage Row -->
  <div class="c-header-xs">Button Usage</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/modals/Modals_ButtonUse_Do'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/modals/Modals_ButtonUse_Dont'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use either a single or two button combination for the modal dialogs </span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use more than two buttons</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Button Usage Row -->

<!-- Start Button Sizing Row -->
  <div class="c-header-xs">Button Sizing</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/modals/Modals_ButtonSize_Do'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/modals/Modals_ButtonSize_Dont'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do stick to default button sizing</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't force button width or height outside of what Cupcake allows for</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Button Sizing Row -->

  <!-- Start Button Placement Row -->
  <div class="c-header-xs">Button Placement</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/modals/Modals_ButtonPlace_Do'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/modals/Modals_ButtonPlace_Dont'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do make sure buttons are the last element users interact with in a modal</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't place any text or interactions underneath a button</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Button Placement Row -->
  <!-- End Standard Modals - General Dos and Donts  -->
  <!-- End Standard Modals Section -->

<hr>

 <!-- Start Fixed Width Modals Section -->
  <div class="c-header-md">Fixed Width Modals</div>
 The default version of standard modals.

<!-- Start Behavior Row -->
  <div class="c-header-xs c-m-bottom-sm">Behavior</div>
   <div class="c-row">
    <div class="c-col c-text-bold">
    Default
    </div>
    <div class="c-col c-text-bold">
    Overflow
    </div>
  </div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/modals/Modals_FXD_DefaultBehaviour'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/modals/Modals_FXD_OverflowBehaviour'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Positioned a fixed distance from the top of the browser</span>
        </div>
      </div>
        <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Width is fixed</span>
        </div>
      </div>
        <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">As content height increases modal grows in height</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Grows in height until content starts overflowing</span>
        </div>
      </div>
        <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Tool bar at the bottom then become fixed and a scroll bar appears</span>
        </div>
      </div>
        <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Distance from bottom of modal to bottom edge of browser is equal to distance from the top of the browser</span>
        </div>
      </div>
    </div>
    </div>
  <!-- End Behavior Row -->

<!-- Start Fixed Width Modals - Dos and Donts  -->
<div class="c-header-sm">Do's and Dont's</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/modals/Modals_FXD_Content_Do'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/modals/Modals_FXD_Content_Dont'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use content that fits inside the modal</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use content that works with vertical expansion</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use content that won't fit inside the modal</span>
        </div>
      </div>
      </div>
    </div>
    <!-- END Fixed Width Modals - Dos and Donts  -->
<!-- End Fixed Width Modals Section -->

<hr>

 <!-- Start Flexible Width Modals Section -->
  <div class="c-header-md">Flexible Width Modals</div>
A variation of the standard modal, the width of this modal can be adjusted to suit content too wide for the fixed width version.

<!-- Start Behavior Row -->
  <div class="c-header-xs c-m-bottom-sm">Behavior</div>
   <div class="c-row">
    <div class="c-col c-text-bold">
    Default
    </div>
    <div class="c-col c-text-bold">
    Overflow
    </div>
  </div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/modals/Modals_FW_DefaultBehaviour'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/modals/Modals_FW_OverflowBehaviour'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">In this variation, the default width is overridden as needed to suit content</span>
        </div>
      </div>
        <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Positioned a fixed distance from the top of the browser</span>
        </div>
      </div>
        <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">As content height increases, modal grows in height</span>
        </div>
      </div>
    </div>
    <!-- Start Overflow Behavior-->
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Width can grow until distance between the modal edge and the browser edge is equal to the distance from the top of the browser</span>
        </div>
      </div>
        <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Grows in height until content starts overflowing</span>
        </div>
      </div>
        <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Tool bar at the bottom then become fixed and a scroll bar appears</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Distance from bottom of modal to bottom edge of browser is equal to distance from the top of the browser</span>
        </div>
      </div>
    </div>
    </div>
  <!-- End Behavior Row -->

<!-- Start Flexible Width Modals - Dos and Donts  -->
<div class="c-header-sm">Do's and Dont's</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/modals/Modals_FW_Content_Do'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/modals/Modals_FW_Content_Dont'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use content that fits inside the modal</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use content that works with vertical expansion</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use content that won't fit inside the modal</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use content that would require a horizontal scroll bar</span>
        </div>
      </div>
      </div>
    </div>
    <!-- END Flexible Width Modals - Dos and Donts  -->
<!-- End Flexible Width Modals Section -->

<hr>

 <!-- Start Full Screen Modals Section -->
  <div class="c-header-md">Full Screen Modals</div>
Another variation of the standard modal, this version is used to display large tables and grids.

<!-- Start Behavior Row -->
  <div class="c-header-xs c-m-bottom-sm">Behavior</div>
   <div class="c-row">
    <div class="c-col c-text-bold">
    Default
    </div>
    <div class="c-col c-text-bold">
    Overflow
    </div>
  </div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/modals/Modals_FULL_DefaultBehaviour'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/modals/Modals_FULL_OverflowBehaviour'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">In this variation the modal edges are a set and equal distance away from the edge of the browser on all sides</span>
        </div>
      </div>
        <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">The modal occupies the maximum screen area independent of content</span>
        </div>
      </div>
    </div>
    <!-- Start Overflow Behavior-->
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">When the width or height of content overflows, the tool bar at the bottom become fixed and a horizontal  and/or vertical scroll bar appears</span>
        </div>
      </div>
    </div>
    </div>
  <!-- End Behavior Row -->

<!-- Start Full Screen Modals - Dos and Donts  -->
<div class="c-header-sm">Do's and Dont's</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/modals/Modals_FW_Content_Do'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/modals/Modals_FW_Content_Dont'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use content that fits inside the modal</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use content that works with vertical expansion</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use content that won't fit inside the modal</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use content that would require a horizontal scroll bar</span>
        </div>
      </div>
      </div>
    </div>
    <!-- END Full Screen Modals - Dos and Donts  -->
<!-- End Full Screen Modals Section -->

<hr>

 <!-- Start Modal Dialogs Section -->
  <div class="c-header-md">Modal Dialogs</div>
Modal Dialogs are used to communicate important information, and require a user response.

Structure
Heading  
Supportive copy
An confirmation checkbox (optional) 
A one button or two button combination (depending on the use case)
Types
Modal dialogs requiring acknowledgement
Modal dialogs requiring a decision

<!-- Start Modal Dialogs -General Dos and Don'ts -->
<div class="c-header-sm c-m-bottom-sm">General Do's and Dont's</div>

<!-- Start Icon Usage Row -->
<div class="c-header-xs">Icon Usage (optional)</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/modals/ModalDialogs_Icon_Do'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/modals/ModalDialogs_Icon_Dont'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use the following icons for Modal Dialogs</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use floating icons, custom icons, or icons that don't add clarity to the messaging</span>
        </div>
      </div>
      </div>
    </div>
<!-- End Icon Usage Row -->

<!-- Start Icon Placement Row -->
<div class="c-header-xs">Icon Placement</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/modals/ModalDialogs_IconPlacement_Do'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/modals/ModalDialogs_IconPlacement_Dont'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do keep the icon to the left of and aligned with the title</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do change the default placement of the icon in the modal dialogs</span>
        </div>
      </div>
      </div>
    </div>
<!-- End Icon Placement Row -->

<!-- Start Headings Row -->
<div class="c-header-xs">Headings</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/modals/ModalDialogs_Headings_Do'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/modals/ModalDialogs_Headings_Dont'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do keep headings short and descriptive</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use long wordy titles or sentences that might wrap</span>
        </div>
      </div>
      </div>
    </div>
<!-- End Headings Row -->

<!-- Start Supportive Copy Row -->
<div class="c-header-xs">Supportive Copy</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/modals/ModalDialogs_Copy_Do'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/modals/ModalDialogs_Copy_Dont'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do keep text short and descriptive</span>
        </div>
      </div>
       <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do keep longer descriptions under 2 lines</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't have more than two lines of text</span>
        </div>
      </div>
      </div>
    </div>
<!-- End Supportive Copy Row -->

<!-- Start Button Sizing Row -->
<div class="c-header-xs">Button Sizing</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/modals/ModalDialogs_ButtonSize_Do'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/modals/ModalDialogs_ButtonSize_Dont'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md"> Do stick to default button sizing</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't force button width or height outside of what Cupcake allows for</span>
        </div>
      </div>
      </div>
    </div>
<!-- End Button Sizing Row -->

<!-- Start Button Placement Row -->
<div class="c-header-xs">Button Placement</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/modals/ModalDialogs_ButtonPlace_Do'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/modals/ModalDialogs_ButtonPlace_Dont'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do make sure buttons are the last element users interact with in a modal</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't place any text or interactions underneath a button</span>
        </div>
      </div>
      </div>
    </div>
<!-- End Button Placement Row -->

<!-- Start Positioning Row -->
<div class="c-header-xs">Positioning</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/modals/ModalDialogs_Position_Do'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/modals/ModalDialogs_Position_Dont'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do stick to the default positioning of the modal dialogs </span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't adjust the margins or padding around the modal dialogs in any way</span>
        </div>
      </div>
      </div>
    </div>
<!-- End Positioning Row -->
<!-- End Modal Dialog General Dos and Donts -->

<!-- Start Modal Dialog Requiring and Acknowledgement Section-->
  <div class="c-header-sm c-m-bottom-md">Modal Dialog requiring an acknowledgement</div>

  <div class="c-header-xs">Examples of Use</div>
  
   This modal dialog requires the user to acknowledge important information, but not to make any specific decisions.

  <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/modals/MDA_Example1.png" width="500px;">

  This modal could persist every time a specific event is triggered, requiring it to be acknowledged before the user can continue. 

   <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/modals/MDA_Example2.png" width="500px;">

   This version contains a checkbox that, if checked, will make it a once-off acknowledgement.
<!-- END Modal Dialog Requiring and Acknowledgement Section-->

<div class="c-header-sm c-m-bottom-md">Dos and Dont's</div>


<!-- Start Modal Dialog Requiring Acknowledgement - Button Usage Row -->
<div class="c-header-xs">Button Usage</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/modals/ModalDialogs_MDA_Button_Do'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/modals/ModalDialogs_MDA_Button_Dont'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use a single button for acknowledgement </span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use two buttons or more for acknowledgement</span>
        </div>
      </div>
      </div>
    </div>
<!-- End Modal Dialog Requiring Acknowledgement - Button Usage Row -->

<!-- Start Modal Dialog Requiring Decision Section-->
  <div class="c-header-sm c-m-bottom-md">Modal Dialog requiring an decision</div>

  <div class="c-header-xs">Examples of Use</div>
  
    This modal dialog requires the user to view important information, and to make a decision on wether to continue or not.

  <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/modals/MDD_Example.png" width="500px;">

  A delete warning, featuring a danger button, let's the user understand the potential impact of their decision.

<!-- END Modal Dialog Requiring Decision Section-->

<div class="c-header-sm c-m-bottom-md">Dos and Dont's</div>


<!-- Start Modal Dialog Requiring Decision - Button Usage Row -->
<div class="c-header-xs">Button Usage</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/modals/ModalDialogs_MDD_Button_Do'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/modals/ModalDialogs_MDD_Button_Dont'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use two buttons</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use more than two buttons</span>
        </div>
      </div>
      </div>
    </div>
<!-- End Modal Dialog Requiring Decision - Button Usage Row -->






<!-- End Modal Dialogs Section -->



</div>
<!-- End Design Section -->


<!-- Start Cupcake Code Section -->
<div id="code" class="docs-tabs-content" markdown="1">

## Base
Use when displaying information that does not require a user action, such as a read-only document or a supplemental video.

{% example html %}
<div id="modal_info" class="c-modal c-modal-info c-modal-fade c-modal-in">
<div class="c-modal-dialog">
    <div class="c-modal-content">
        <div class="c-modal-header">
            <div class="c-modal-title">Modal header</div>
            <button type="button" class="c-modal-close">
                    <span onclick="closeDefault()" aria-hidden="true">×</span>
                </button>
        </div>
    <div class="c-modal-body c-text-center">
        <i class="fa fa-question-circle c-modal-confirmation-icon"></i>
        <span class="c-modal-confirmation-title">Modal Title</span>
        <p class="c-modal-confirmation-text">Modal Text Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, eum.</p>
        <div class="c-modal-confirmation-buttons">
        <span class="close-modal" aria-hidden="true">
            <button onclick="closeInfo()" class=" close-modal c-btn c-btn-secondary c-m-right-sm">Cancel</button>
            <button onclick="closeInfo()" class=" close c-btn c-btn-primary">Ok</button>
            </span>
        </div>
    </div>
    </div>
</div>
</div>
{% endexample %}

</div>
<!-- End Cupcake Code Section -->

<!-- Start Angular Code Section -->
<div id="angular" class="docs-tabs-content" markdown="1">

### Storybook iframe
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/josh-easter/storybook-demo/?path=/story/basic-elements--avatar&full=0&addons=1&stories=0&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs&nav=0"></iframe>

</div>
<!-- End Angular Code Section -->


