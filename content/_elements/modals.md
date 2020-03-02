---
title: Modals
description: Modals deliver content, communicate information or require interaction while allowing the user to maintain the context of a particular task. Modals should be used sparingly as they interrupt the user's workflow.
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
<iframe title="storybook" width="100%" height="500px" src=""></iframe>

</div>
<!-- End Angular Code Section -->

<!-- Start Design Guidelines Section  -->
<div id="guidelines" class="docs-tabs-content" markdown="1">

## Overview <a name="back-to-top"></a>

**There are two types of modals:**
- [Primary Modal](#primary-modal) 
- [Modal Dialog](#modal-dialog) 

<hr>

## Primary Modals <a name="primary-modal"></a> 

### Types of primary modals 

- [Fixed Width Modal](#fixed-width-modal) <a name="fixed-width-modal"></a> 
- [Flexible Width Modal](#flexible-width-modal) <a name="flexible-width-modal"></a>
- [Full Screen Modal](#full-screen-modal) <a name="full-screen-modal"></a>


## Usage
Primary modals are used to deliver content or additional functionality that supports the underlying page or task

## General best practices
- Always keep titles short and descriptive
- Always use either a single or two button combination for the modal dialogs 
- Always stick to default button sizing
- Always make sure buttons are the last element users interact with in a modal

<hr>

## Fixed Width Modal <a name="fixed-width-modal"></a>

#### Behavior

- Positioned a fixed distance from the top of the browser
- Width is fixed
- As content height increases modal grows in height
- Grows in height until content starts overflowing
- Tool bar at the bottom then become fixed and a scroll bar appears
- Distance from bottom of modal to bottom edge of browser is equal to distance from the top of the browser

#### Best Practices
- Use content that fits inside the modal
- Use content that works with vertical expansion


<hr>

## Flexible Width Modal <a name="flexible-width-modal"></a>

#### Behavior

- In this variation, the default width is overridden as needed to suit content
- Positioned a fixed distance from the top of the browser
- As content height increases, modal grows in height
- Width can grow until distance between the modal edge and the browser edge is equal to the distance from the top of the browser
- Grows in height until content starts overflowing
- Tool bar at the bottom then become fixed and a scroll bar appears
- Distance from bottom of modal to bottom edge of browser is equal to distance from the top of the browser


#### Best practices

- Use content that fits inside the modal
- Use content that works with vertical expansion 

<hr>


## Full Screen Modal <a name="full-screen-modal"></a>

#### Behavior
- In this variation the modal edges are a set and equal distance away from the edge of the browser on all sides
- The modal occupies the maximum screen area independent of content
- When the width or height of content overflows, the tool bar at the bottom become fixed and a horizontal and/or vertical scroll bar appears


#### Best practices
- Use tables and grids in the full screen modals

<hr>

## Examples

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/modals/Fixed_Width.png" width="50%">

<br>

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/modals/Flexible_Width.png" width="50%">

<br>

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/modals/FULLSCREEN.png" width="50%">

<hr>

## Modal Dialog <a name="modal-dialog"></a> 

### Types of Modal Dialogs
- [Modal dialogs requiring acknowledgement](#modal-dialog-requiring-acknowledgement) 
- [Modal dialogs requiring a decision](#modal-dialog-requiring-a-decision)


### Usage
Modal Dialogs are used to communicate important information, and require a user response.

### General best practices
- Always keep the icon to the left of and aligned with the title
- Always keep headings short and descriptive
- Always keep text short and descriptive
- Always stick to default button sizing
- Always make sure buttons are the last element users interact with in a modal
- Always stick to the default positioning of the modal dialogs

<hr>

## Modal Dialog Requiring Acknowledgement <a name="modal-dialog-requiring-acknowledgement"></a> 

### Best Practices
Use a single button for acknowledgement

### Examples

This modal could persist every time a specific event is triggered, requiring it to be acknowledged before the user can continue. 

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/modals/MDA_Example1.png" width="50%">

<br>

This version contains a checkbox that, if checked, will make it a once-off acknowledgement.

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/modals/MDA_Example2.png" width="50%">

<hr>

## Modal Dialog Requiring a Decision <a name="modal-dialog-requiring-a-decision"></a> 

### Best Practices
Use a two buttons

### Examples

A delete warning, featuring a danger button, let's the user understand the potential impact of their decision.

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/modals/MDD_Example.png" width="50%">


[Back to Top](#back-to-top)

</div>
<!-- End Design Section -->





