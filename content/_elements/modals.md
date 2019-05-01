---
title: Modals
description: Modals deliver content, communicate information or require interaction while allowing the user to maintain the context of a particular task.
tabs:
- Code
- Guidelines
---

<!-- Start Cupcake Code Section -->
<div id="code" class="docs-tabs-content" markdown="1">

### Base

The default modal contains a header, body, and footer section. 


{% example html %}
<button id="defaultBtn" class="c-btn c-btn-secondary c-m-xs">Modal Default Trigger</button>
<div class="c-modal-backdrop" id="newDark">
  <div class="c-modal">
    <div class="c-modal-content">
      <div class="c-modal-header">
        <h4 class="c-modal-title">Modal header</h4>
        <span id="close" class="c-modal-close"></span>
      </div>
      <div class="c-modal-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus fugit perferendis voluptates cumque unde fuga
        reprehenderit illum doloribus, error, officia earum odit quasi minus odio eveniet explicabo accusantium, tempore
        quisquam.
      </div>
      <div class="c-modal-footer">
        <button id="cancel" class="c-btn c-btn-secondary c-m-right-sm">Cancel</button>
        <button class="c-btn c-btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>
{% endexample %}


**Smaller Size**
{% example html %}
<button id="smallBtn" class="c-btn c-btn-secondary">Modal Small Trigger</button>
<div class="c-modal-backdrop" id="smallModal">
    <div class="c-modal c-modal-sm">
      <div class="c-modal-content">
        <div class="c-modal-header">
          <h4 class="c-modal-title">Modal header</h4>
          <span id="close" class="c-modal-close"></span>
        </div>
        <div class="c-modal-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus fugit perferendis voluptates cumque unde fuga
          reprehenderit illum doloribus, error, officia earum odit quasi minus odio eveniet explicabo accusantium, tempore
          quisquam.
        </div>
        <div class="c-modal-footer c-modal-footer">
            <button id="cancel" class="c-btn c-btn-secondary c-m-right-sm">Cancel</button>
            <button class="c-btn c-btn-primary">Submit</button>
          </div>
      </div>
    </div>
</div>
{% endexample %}


**Larger Size**
{% example html %}
<button id="largeBtn" class="c-btn c-btn-secondary c-m-xs">Modal Large Trigger</button>
<div class="c-modal-backdrop" id="largeModal">
  <div class="c-modal c-modal-lg">
    <div class="c-modal-content">
      <div class="c-modal-header">
        <h4 class="c-modal-title">Modal header</h4>
        <span id="close" class="c-modal-close"></span>
      </div>
      <div class="c-modal-body">
        <div class="c-text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fusce et elementum risus. Etiam rutrum nibh nulla, condimentum aliquam
          ligula suscipit et. Nunc quis ornare ipsum. Integer a odio sed tortor
          imperdiet scelerisque. Integer non est consequat justo fringilla malesuada
          at quis nulla. Aenean id ornare ligula, quis mattis ante. Ut faucibus mi
          nisl, vel lobortis arcu mollis vel. Aenean dapibus lacus sit amet ligula
          pellentesque euismod. Cras sed purus sollicitudin, varius metus vel,
          maximus tortor. Praesent eget dolor vel odio vulputate sagittis eget vel
          quam. Fusce hendrerit neque lacus, et ultricies massa maximus aliquam.
          Curabitur vel augue a eros posuere vulputate ac a enim.</div>
        <br>
        <div class="c-text-md">Cras pellentesque lectus et purus cursus pellentesque.
          Ut pulvinar bibendum felis, eget consectetur ex auctor quis. Nunc volutpat
          leo et mauris mattis pharetra. Fusce ac dolor et odio faucibus dignissim.
          Curabitur ac vestibulum ante, lobortis tincidunt nulla. In purus metus,
          rhoncus in sapien id, dignissim commodo velit. Integer at molestie turpis.
          Nullam tempor luctus nibh, vel mollis ante posuere sit amet. Vivamus tempus
          egestas egestas. Phasellus purus metus, malesuada in malesuada a, bibendum
          at est. Pellentesque interdum dictum massa, sed blandit dolor hendrerit
          quis.</div>
        <br>
        <div class="c-text-md">Mauris viverra ultricies euismod. Sed porta ipsum erat,
          id cursus dolor facilisis eget. Proin at viverra ex. Quisque vitae
          consequat ante. Fusce gravida neque tellus, ut eleifend augue consectetur
          nec. Ut nec rhoncus odio, vel ornare est. Sed nec leo orci. Curabitur
          euismod euismod odio sed gravida. Integer mattis ex non finibus vestibulum.
          Suspendisse placerat, arcu eu euismod convallis, enim ex imperdiet dui,
          pellentesque tempus ante lectus in lorem. Vivamus volutpat gravida
          tincidunt. Curabitur eu tristique dolor. Sed scelerisque hendrerit magna,
          at rutrum nibh rhoncus quis. Vivamus laoreet quis mi ac sagittis.</div>
        <br>
        <div class="c-text-md">Morbi quis leo faucibus, interdum dolor non, lacinia
          justo. In consequat purus et nunc scelerisque luctus. Ut feugiat ante vel
          tristique fermentum. Duis posuere, magna ut consequat sollicitudin, lectus
          felis finibus nibh, quis accumsan leo risus sit amet enim. Curabitur
          pharetra lobortis lectus. Aenean id vestibulum elit. Maecenas finibus dolor
          vitae nunc suscipit molestie id ut nibh. Ut ultrices ligula massa, eu
          pulvinar est ornare et. Fusce consectetur tellus ut ipsum molestie
          tincidunt. Fusce porta lacinia felis, quis pellentesque eros sagittis vel.
          Curabitur eget leo pellentesque, ornare ex sit amet, blandit sem. Vivamus
          sodales diam vitae turpis euismod, eget varius eros sollicitudin. In hac
          habitasse platea dictumst. Donec id hendrerit libero, a sollicitudin magna.
          Nulla mattis eros sit amet lacus aliquet, vel interdum felis iaculis.</div>
        <br>
        <div class="c-text-md">Nunc ut diam ut diam ultrices venenatis in at risus.
          Quisque nisl nibh, interdum eu purus eget, faucibus faucibus magna. Sed
          posuere, tellus vitae bibendum pretium, elit turpis ullamcorper leo, sit
          amet mollis eros est at urna. Aenean placerat sapien sed libero lobortis
          sagittis. Donec sed lobortis nunc. Pellentesque ligula metus, tempor et
          egestas non, ullamcorper ac lectus. Curabitur eget aliquet arcu. Vivamus
          blandit, libero eget pulvinar sagittis, augue leo luctus neque, commodo
          molestie nibh lacus dictum lacus. Vestibulum malesuada nec eros nec
          maximus. Mauris sollicitudin lacinia fermentum. Nunc feugiat felis odio,
          nec ornare sapien accumsan at. Fusce a nunc ullamcorper, accumsan justo
          nec, posuere magna. Nulla iaculis rhoncus ante eget elementum. Mauris
          tincidunt id purus vel posuere.</div>
      </div>
      <div class="c-modal-footer">
        <button id="cancel" class="c-btn c-btn-secondary c-m-right-sm">Cancel</button>
        <button class="c-btn c-btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>
{% endexample %}


**Fullscreen**
{% example html %}
<button id="fullscreenBtn" class="c-btn c-btn-secondary c-m-xs">Modal Fullscreen Trigger</button>
<div class="c-modal-backdrop" id="fullscreenModal">
  <div class="c-modal c-modal-fullscreen">
    <div class="c-modal-content">
      <div class="c-modal-header">
        <h4 class="c-modal-title">Modal header</h4>
        <span id="close" class="c-modal-close"></span>
      </div>
      <div class="c-modal-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus fugit perferendis voluptates cumque unde fuga
        reprehenderit illum doloribus, error, officia earum odit quasi minus odio eveniet explicabo accusantium, tempore
        quisquam.
      </div>
      <div class="c-modal-footer">
        <button id="cancel" class="c-btn c-btn-secondary c-m-right-sm">Cancel</button>
        <button class="c-btn c-btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>
{% endexample %}


**Additional styling for displaying centered content**
{% example html %}
<button id="centerBtn" class="c-btn c-btn-secondary c-m-xs">Modal Dialog Trigger</button>
<div class="c-modal-backdrop" id="centerModal">
  <div class="c-modal c-modal-dialog">
    <div class="c-modal-content">
      <div class="c-modal-body">
      <div class="c-modal-title"><i class="fas fa-exclamation-circle c-m-right-xs"></i> Modal Title</div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus fugit perferendis voluptates cumque unde fuga
        officia earum odit quasi minus odio eveniet explicabo accusantium.
      </div>
      <div class="c-modal-footer c-modal-footer-center">
        <button id="cancel" class="c-btn c-btn-secondary c-m-right-sm">Go Back</button>
        <button class="c-btn c-btn-primary">Continue</button>
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

<!-- Start Design Guidelines Section  -->
<div id="guidelines" class="docs-tabs-content" markdown="1">

# Overview

**Modals generally conform to the following criteria:**

- Modals appear on a layer above of the main content
- Modals require user interaction
- Modals disable the main content until the user explicitly interacts with the dialog

**Currently the following modals are in use:**

- Standard modals
- Modal dialogs

<hr>

 <!-- Start Standard Modals Section -->
## Standard Modals
 Standard modals are used to deliver content or additional functionality that supports the underlying page or task.

### Structure
**Standard modals are typically made up of the following:**

- Heading
- Close button 
- Content area
- A 1 button or a 2 button combination (depending on the use case)

<br>

#### Types of Standard Modals
**Standard modals are typically made up of the following:**

- Fixed width standard modals
- Flexible width standard modals (variation)
- Full screen modals (variation)

<br>

<!-- Start Standard Modals -Examples of Use -->
#### Examples of use

<br>

##### Fixed Width Modal
  <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/modals/Fixed_Width.png" width="500px;">

<br>

##### Flexible Width Modal
  <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/modals/Flexible_Width.png" width="500px;">

<br>

##### Full Screen Modal
  <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/modals/Fullscreen.png" width="500px;">
<!-- End Standard Modals -Examples of Use -->

<br>

<!-- Start Standard Modals - General Dos and Donts  -->
#### General Do's and Dont's

 <!-- Start Titles Row -->
##### Titles

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
##### Button Usage
  
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
##### Button Sizing

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
##### Button Placement

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
### Fixed Width Modals
 The default version of standard modals.

<br>

<!-- Start Behavior Row -->
#### Behavior

   <div class="c-row c-m-top-lg">
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
#### Do's and Dont's

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
### Flexible Width Modals
A variation of the standard modal, the width of this modal can be adjusted to suit content too wide for the fixed width version.

<br>

<!-- Start Behavior Row -->
#### Behavior

   <div class="c-row c-m-top-lg">
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
#### Do's and Dont's

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
### Full Screen Modals
Another variation of the standard modal, this version is used to display large tables and grids.

<br>

<!-- Start Behavior Row -->
#### Behavior

   <div class="c-row c-m-top-lg">
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
#### Do's and Dont's

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
### Modal Dialogs

**Modal Dialogs are used to communicate important information, and require a user response.**

- Structure
- Heading  
- Supportive copy
- An confirmation checkbox (optional) 
- A one button or two button combination (depending on the use case)

**Types of Modal Dialogs:**

- Modal dialogs requiring acknowledgement
- Modal dialogs requiring a decision

<br>

<!-- Start Modal Dialogs -General Dos and Don'ts -->
#### General Do's and Dont's

<!-- Start Icon Usage Row -->
##### Icon Usage (optional)

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
##### Icon Placement

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
##### Headings

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
##### Supportive Copy

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
##### Button Sizing

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
##### Button Placement

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
##### Positioning 

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

<hr>

<!-- Start Modal Dialog Requiring and Acknowledgement Section-->
### Modal Dialog requiring an acknowledgement

<br>

#### Examples of Use
  
   This modal dialog requires the user to acknowledge important information, but not to make any specific decisions.

  <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/modals/MDA_Example1.png" width="500px;">

  <br>

  This modal could persist every time a specific event is triggered, requiring it to be acknowledged before the user can continue. This version contains a checkbox that, if checked, will make it a once-off acknowledgement.

   <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/modals/MDA_Example2.png" width="500px;">
<!-- END Modal Dialog Requiring and Acknowledgement Section-->

<br>

#### Do's and Dont's

<!-- Start Modal Dialog Requiring Acknowledgement - Button Usage Row -->
##### Button Usage

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

<hr>

<!-- Start Modal Dialog Requiring Decision Section-->
### Modal Dialog requiring a decision

<br>

#### Examples of use  

  - This modal dialog requires the user to view important information, and to make a decision on wether to continue or not.
  - A delete warning, featuring a danger button, let's the user understand the potential impact of their decision.

  <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/modals/MDD_Example.png" width="500px;">


<!-- END Modal Dialog Requiring Decision Section-->

<br>

#### Do's and Dont's

<!-- Start Modal Dialog Requiring Decision - Button Usage Row -->
##### Button Usage

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




