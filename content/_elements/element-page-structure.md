---
title: Page Structure
description: Template for all element pages
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
Text

- list item
- list item
- list item

{% include guide-img.html img=''%} 

<hr>

### States:

- active
- inactive
- active (disabled)
- inactive (disabled)

<hr>

<!-- Start Do's and Don'ts Section -->
  <div class="c-header-md">Do's and Dont's</div>

 <!-- Start Colors Row -->
  <div class="c-header-xs">Description</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/avatars/Avatars_Colors_Do'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/avatars/Avatars_Colors_Dont'%}
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do 1 text here. It can even wrap if the description is reallllyy long</span>
        </div>
      </div>
       <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do 2 text here. It can even wrap if the description is reallllyy long</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't 1 text here. It can even wrap if the description is reallllyy long</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't 2 text here. It can even wrap if the description is reallllyy long</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Colors Row -->

 <!-- Start Colors Row -->
  <div class="c-header-xs">Description</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/avatars/Avatars_Colors_Do'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/avatars/Avatars_Colors_Dont'%}
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do 1 text here. It can even wrap if the description is reallllyy long</span>
        </div>
      </div>
       <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do 2 text here. It can even wrap if the description is reallllyy long</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't 1 text here. It can even wrap if the description is reallllyy long</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't 2 text here. It can even wrap if the description is reallllyy long</span>
        </div>
      </div>
      </div>
    </div>
  <!-- End Colors Row -->

  <!-- End Do's and Don'ts Section -->


<!-- ### Element Type 1
Text description of element here

{% include guide-img.html img='elements/radio-buttons/'%} 

#### Do's and Dont's - Element Type 1

##### Image Description

<div class="c-row">
  <div class="c-col">
  {% include guide-img.html img='elements/avatars/file name'%} 
  </div>
  <div class="c-col">
  {% include guide-img.html img='elements/avatars/file name'%} 
  </div>
</div>

<div class="c-row c-m-top-md">
  <div class="c-col">
    <div class="c-media c-p-sm">
      <span class="fas fa-check c-text-success"></span>
      <div class="c-media-body">
        <span class="c-text-md">Use a circular avatar for a personal user and a square avatar for a company user </span>
      </div>
    </div>
     <div class="c-media c-p-sm">
      <span class="fas fa-check c-text-success"></span>
      <div class="c-media-body">
        <span class="c-text-md">Do 2 </span>
      </div>
    </div>
  </div>
  <div class="c-col">
    <div class="c-media c-p-sm">
      <span class="fas fa-times c-text-danger"></span>
      <div class="c-media-body">
        <span class="c-text-md">Use a square avatar for a personal user or a circular avatar for a company user</span>
      </div>
    </div>
      <div class="c-media c-p-sm">
       <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't 2</span>
        </div>
      </div>
    </div>
  </div>
</div>

<br>

##### Image Description
{% include guide-img.html img='elements/radio-buttons/'%} 

##### Image Description
{% include guide-img.html img='elements/radio-buttons/'%} 

<hr>

### Element Type 2
Text description of element here

{% include guide-img.html img='elements/radio-buttons/'%} 

#### Do's and Dont's - Element Type 2

##### Image Description
{% include guide-img.html img='elements/radio-buttons/'%} 

##### Image Description
{% include guide-img.html img='elements/radio-buttons/'%} 

##### Image Description
{% include guide-img.html img='elements/radio-buttons/'%} 

</div> -->

<div id="code" class="docs-tabs-content" markdown="1">

## Base
Use radio buttons to present each item in a list of options where users must make a single selection.

{% example html %}

{% endexample %}

## Color Examples
This is an example of available colors for the < > element.

{% example html %}

{% endexample %}

## Size Examples
This is an example of available colors for the < > element.

{% example html %}

{% endexample %}

</div>

<div id="angular" class="docs-tabs-content" markdown="1">

### Storybook iframe
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/josh-easter/storybook-demo/?path=/story/basic-elements--avatar&full=0&addons=1&stories=0&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs"></iframe>

</div>

