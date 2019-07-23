---
title: Action Panel
description: Action panels are semi-interruptive panels that provide additional functionality or display supplementary content in the context of the user's current screen.
tabs:
- Code
- Guidelines
---

<!-- Start Cupcake Code Tab -->
<div id="code" class="docs-tabs-content" markdown="1">

### Base

The default Action Panel is anchored to the left, spans the height of the screen, and not visible by default.

<div id="actionPanelDefault" class="c-action-panel"></div>

{% highlight html %}
<div class="c-action-panel"></div>
{% endhighlight %}

<br>

Visibility can be toggled with with the class `.c-action-panel-visible`

{% highlight html %}
<div class="c-action-panel c-action-panel-visible"></div>
{% endhighlight %}

<br>

<button class="c-btn c-btn-secondary" id="actionPanelDefault-trigger">Toggle Default Example</button>

<hr>

### Adding Content

There a various supported layouts for adding a content to the action panel.

**Adding the header and body section**

{% example html %}
<button class="c-btn c-btn-secondary" id="actionPanelHeader-trigger">Toggle Header Example</button>

<div class="c-action-panel">
  <header class="c-action-panel-header">
    <div class="c-action-panel-header-title">
      Simple Header
    </div>
    <div class="c-action-panel-header-menu">
      <a class="c-action-panel-close"></a>
    </div>
  </header>

  <div class="c-action-panel-body">
  </div>
</div>
{% endexample %}


<div id="actionPanelHeader" class="c-action-panel">
  <header class="c-action-panel-header">
    <div class="c-action-panel-header-title">
      Simple Header
    </div>
    <div class="c-action-panel-header-menu">
      <a class="c-action-panel-close"></a>
    </div>
  </header>
  <div class="c-action-panel-body c-p-md">
  Any content can go here
  </div>
</div>


**Complex header and tabs in body**

Additionally we can have a more complex header and add tab actions to the body.

{% example html %}
<button class="c-btn c-btn-secondary" id="actionPanelHeaderComplex-trigger">Toggle Complex Header Example</button>

<div class="c-action-panel">
  <header class="c-action-panel-header">
    <div class="c-action-panel-header-title">
      Action Panel Title
    </div>
    <div class="c-action-panel-header-subtitle">
      Action Panel Subtitle
    </div>
    <div class="c-action-panel-header-menu">
      <a class="c-action-panel-header-menu-icon" href="#">
        <i class="fa fa-expand" aria-hidden="true"></i>
      </a>
      <a class="c-action-panel-header-menu-icon" href="#">
        <i class="fa fa-cog" aria-hidden="true"></i>
      </a>
    </div>
  </header>

  <div class="c-action-panel-body">
    <ul class="c-tabs c-tabs-fullwidth c-bg-white">
      <li class="c-tab-item">
        <a class="c-tab-item-link" href="#">Tab A</a>
      </li>
      <li class="c-tab-item">
        <a class="c-tab-item-link c-tab-item-link-active" href="#">Tab B</a>
      </li>
      <li class="c-tab-item">
        <a class="c-tab-item-link" href="#">Tab C</a>
      </li>
      <li class="c-tab-item">
        <a class="c-tab-item-link c-tab-item-link-disabled" href="#">Tab D</a>
      </li>
    </ul>
  </div>

</div>
{% endexample %}

<div id="actionPanelHeaderComplex" class="c-action-panel">
  <header class="c-action-panel-header">
    <div class="c-action-panel-header-title">
      Action Panel Title
    </div>
    <div class="c-action-panel-header-subtitle">
      Action Panel Subtitle
    </div>
    <div class="c-action-panel-header-menu">
      <a class="c-action-panel-header-menu-icon" href="#">
        <i class="fa fa-expand" aria-hidden="true"></i>
      </a>
      <a class="c-action-panel-header-menu-icon" href="#">
        <i class="fa fa-cog" aria-hidden="true"></i>
      </a>
    </div>
  </header>


  <div class="c-action-panel-body">
      <ul class="c-tabs c-tabs-fullwidth c-bg-white">
          <li class="c-tab-item">
            <a class="c-tab-item-link" href="#">Tab A</a>
          </li>
          <li class="c-tab-item">
            <a class="c-tab-item-link c-tab-item-link-active" href="#">Tab B</a>
          </li>
          <li class="c-tab-item">
            <a class="c-tab-item-link" href="#">Tab C</a>
          </li>
          <li class="c-tab-item">
            <a class="c-tab-item-link c-tab-item-link-disabled" href="#">Tab D</a>
          </li>
        </ul>
  </div>

</div>


**Footer**

Additionally we can add a footer with multiple alignment options.

{% example html %}

<button class="c-btn c-btn-secondary" id="actionPanelFooter-trigger">Toggle Footer Example</button>

<div class="c-action-panel">
  <header class="c-action-panel-header">
    <div class="c-action-panel-header-title">
      Action Panel Large Title
    </div>
    <div class="c-action-panel-header-subtitle">
      Action Panel Large Subtitle
    </div>
    <div class="c-action-panel-header-menu">
      <a class="c-action-panel-header-menu-icon" href="#">
        <i class="fa fa-cog" aria-hidden="true"></i>
      </a>
      <div class="c-action-panel-header-menu-icon">
        <a class="c-action-panel-close"></a>
      </div>
    </div>

  </header>

  <div class="c-action-panel-body">

  </div>

  <footer class="c-action-panel-footer">
    <div class="c-action-panel-footer-item c-action-panel-footer-item-left">
      <button class="c-btn c-btn-primary">Button</button>
    </div>
    <a class="c-action-panel-footer-item c-action-panel-footer-link c-action-panel-footer-item-center" href="#">
      Footer Link
    </a>
    <div class="c-action-panel-footer-item c-action-panel-footer-item-right">
      <button class="c-btn c-btn-primary">Button</button>
    </div>
  </footer>
</div>
{% endexample %}

<div id="actionPanelFooter" class="c-action-panel">
  <header class="c-action-panel-header">
    <div class="c-action-panel-header-title">
      Action Panel Large Title
    </div>
    <div class="c-action-panel-header-subtitle">
      Action Panel Large Subtitle
    </div>
    <div class="c-action-panel-header-menu">
      <a class="c-action-panel-header-menu-icon" href="#">
        <i class="fa fa-cog" aria-hidden="true"></i>
      </a>
      <div class="c-action-panel-header-menu-icon">
        <a class="c-action-panel-close"></a>
      </div>
    </div>

  </header>

  <div class="c-action-panel-body">

  </div>

  <footer class="c-action-panel-footer">
    <div class="c-action-panel-footer-item c-action-panel-footer-item-left">
      <button class="c-btn c-btn-primary">Button</button>
    </div>
    <a class="c-action-panel-footer-item c-action-panel-footer-link c-action-panel-footer-item-center" href="#">
      Footer Link
    </a>
    <div class="c-action-panel-footer-item c-action-panel-footer-item-right">
      <button class="c-btn c-btn-primary">Button</button>
    </div>
  </footer>
</div>

**Larger Size**

{% example html %}

<button class="c-btn c-btn-secondary" id="actionPanelLarge-trigger">Toggle Large</button>

<div class="c-action-panel c-action-panel-lg">
  <header class="c-action-panel-header">
    <div class="c-action-panel-header-title">
      Action Panel Large Title
    </div>
    <div class="c-action-panel-header-subtitle">
      Action Panel Large Subtitle
    </div>
    <div class="c-action-panel-header-menu">
      <a class="c-action-panel-header-menu-icon" href="#">
        <i class="fa fa-cog" aria-hidden="true"></i>
      </a>
      <div class="c-action-panel-header-menu-icon">
        <a class="c-action-panel-close"></a>
      </div>
    </div>

  </header>

  <div class="c-action-panel-body">

  </div>

  <footer class="c-action-panel-footer">
    <div class="c-action-panel-footer-item c-action-panel-footer-item-left">
      <button class="c-btn c-btn-primary">Button</button>
    </div>
    <a class="c-action-panel-footer-item c-action-panel-footer-link c-action-panel-footer-item-center" href="#">
      Footer Link
    </a>
    <div class="c-action-panel-footer-item c-action-panel-footer-item-right">
      <button class="c-btn c-btn-primary">Button</button>
    </div>
  </footer>
</div>
{% endexample %}


<div id="actionPanelLarge" class="c-action-panel c-action-panel-lg">
  <header class="c-action-panel-header">
    <div class="c-action-panel-header-title">
      Action Panel Large Title
    </div>
    <div class="c-action-panel-header-subtitle">
      Action Panel Large Subtitle
    </div>
    <div class="c-action-panel-header-menu">
      <a class="c-action-panel-header-menu-icon" href="#">
        <i class="fa fa-cog" aria-hidden="true"></i>
      </a>
      <div class="c-action-panel-header-menu-icon">
        <a class="c-action-panel-close"></a>
      </div>
    </div>

  </header>

  <div class="c-action-panel-body">

  </div>

  <footer class="c-action-panel-footer">
    <div class="c-action-panel-footer-item c-action-panel-footer-item-left">
      <button class="c-btn c-btn-primary">Button</button>
    </div>
    <a class="c-action-panel-footer-item c-action-panel-footer-link c-action-panel-footer-item-center" href="#">
      Footer Link
    </a>
    <div class="c-action-panel-footer-item c-action-panel-footer-item-right">
      <button class="c-btn c-btn-primary">Button</button>
    </div>
  </footer>
</div>


**Notifications Example**

{% example html %}

<button class="c-btn c-btn-secondary" id="actionPanelNotifications-trigger">Toggle Notifications</button>

<div class="c-action-panel c-notifications">
  <header class="c-action-panel-header">
    <div class="c-action-panel-header-title">
      Notifications
    </div>
    <div class="c-action-panel-header-menu">
      <a class="c-btn c-btn-icon-secondary c-btn-icon" href="#">
        <i class="fa fa-cog" aria-hidden="true"></i>
      </a>
    </div>
  </header>

  <div class="c-action-panel-body">
    <div class="c-media-list c-media-list-hover">
      <div class="c-media c-media-middle">
        <div class="c-avatar c-avatar-lg c-avatar-cyan">
          <i class="fab fa-dropbox"></i>
        </div>
        <div class="c-media-body">
          <div class="c-text-md">Notification Content</div>
          <div class="c-text-sm c-text-bold">Name/App</div>
        </div>
      </div>
      <div class="c-media c-media-middle">
        <div class="c-avatar c-avatar-lg c-avatar-lime">
          <i class="fab fa-apple"></i>
        </div>
        <div class="c-media-body">
          <div class="c-text-md">Notification Content</div>
          <div class="c-text-sm c-text-bold">Name/App</div>
        </div>
      </div>
      <div class="c-media c-media-middle c-media-read">
        <div class="c-avatar c-avatar-lg c-avatar-orange">
          <i class="fab fa-amazon"></i>
        </div>
        <div class="c-media-body">
          <div class="c-text-md">This Notification is read</div>
          <div class="c-text-sm c-text-bold">Name/App</div>
        </div>
      </div>
      <div class="c-media c-media-middle">
        <div class="c-avatar c-avatar-lg c-avatar-grape">
          <i class="fab fa-xbox"></i>
        </div>
        <div class="c-media-body">
          <div class="c-text-md">Notification Content</div>
          <div class="c-text-sm c-text-bold">Name/App</div>
        </div>
      </div>
    </div>
  </div>

</div>
{% endexample %}

<div id="actionPanelNotifications" class="c-action-panel c-notifications">
  <header class="c-action-panel-header">
    <div class="c-action-panel-header-title">
      Notifications
    </div>
    <div class="c-action-panel-header-menu">
      <a class="c-btn c-btn-icon-secondary c-btn-icon" href="#">
        <i class="fa fa-cog" aria-hidden="true"></i>
      </a>
    </div>
  </header>

  <div class="c-action-panel-body">
    <div class="c-media-list c-media-list-hover">
      <div class="c-media c-media-middle">
        <div class="c-avatar c-avatar-lg c-avatar-cyan">
          <i class="fab fa-dropbox"></i>
        </div>
        <div class="c-media-body">
          <div class="c-text-md">Notification Content</div>
          <div class="c-text-sm c-text-bold">Name/App</div>
        </div>
      </div>
      <div class="c-media c-media-middle">
        <div class="c-avatar c-avatar-lg c-avatar-lime">
          <i class="fab fa-apple"></i>
        </div>
        <div class="c-media-body">
          <div class="c-text-md">Notification Content</div>
          <div class="c-text-sm c-text-bold">Name/App</div>
        </div>
      </div>
      <div class="c-media c-media-middle c-media-read">
        <div class="c-avatar c-avatar-lg c-avatar-orange">
          <i class="fab fa-amazon"></i>
        </div>
        <div class="c-media-body">
          <div class="c-text-md">This Notification is read</div>
          <div class="c-text-sm c-text-bold">Name/App</div>
        </div>
      </div>
      <div class="c-media c-media-middle">
        <div class="c-avatar c-avatar-lg c-avatar-grape">
          <i class="fab fa-xbox"></i>
        </div>
        <div class="c-media-body">
          <div class="c-text-md">Notification Content</div>
          <div class="c-text-sm c-text-bold">Name/App</div>
        </div>
      </div>
    </div>
  </div>

</div>

**With Backdrop**

<button class="c-btn c-btn-secondary" id="qv-backdrop-dark-trigger">Toggle Default Dark Backdrop</button>

<div id="qv-backdrop-dark" class="c-action-panel">
  <header class="c-action-panel-header">
    <div class="c-action-panel-header-title">
      Action Panel Header
    </div>
    <div class="c-action-panel-header-menu">
      <a class="c-action-panel-close"></a>
    </div>
  </header>

  <div class="c-action-panel-body">

  </div>

  <footer class="c-action-panel-footer">
    <button class="c-btn c-btn-primary c-m-right-sm">Submit</button>
    <button class="c-btn c-btn-secondary">Cancel</button>
  </footer>
</div>

<div class="c-action-panel-backdrop" id="backdrop-dark" style="display: none; z-index: 1601;"></div>

<hr>

### Internal
The same action panel can be used within the UI and not offscreen. This **requires** the parent class `.c-wrapper` to enclose all of your content and `.c-action-panel-push` to control the panel.

<br>

You can also use `c-action-panel-left` in this scenario.

<br>

Play with a demo example <a class="c-text-underline" href="{{site.url}}{{site.baseurl}}/content/resources/examples/layout-demos">here</a>. 



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

### Usage
Action panels can be implemented where users need to access additional functionality or information without interrupting their current workflow.

### Structure
**An action panel is composed of a:**

- open control

- panel (container)

- close button (close control)

- Behaviour

- Action panels slide in from the left or right edge of the browser when triggered via an open control, and closed via a close button.

**The action panel can exist on two planes:**

- A layer above the screen content ie. sliding over and obscuring a part of the content. This is the default option.

- The same layer as the screen content ie. it will push the content to the side to make space on the screen

<br>

<table class="c-table c-table-transparent c-table-border-full">
<thead>
    <tr>
      <th width="125">Type</th>
      <th width="150">Plane</th>
      <th width="">Focus</th>
      <th width="">Defining Behavior</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Default</td>
      <td>Above screen</td>
      <td>Supplementary</td>
      <td>Open using trigger and close using close button. Can interact with content on screen.</td>
    </tr>
    <tr>
      <td>Elastic</td>
      <td>Same as screen</td>
      <td>Supplementary</td>
      <td>Open using trigger and close using close button. Can interact with content on screen.</td>
    </tr>
    <tr>
      <td>Overlay</td>
      <td>Above screen</td>
      <td>Primary</td>
      <td>Open using trigger and close using close button or clicking on the screen overlay. Cannot interact with content on screen.</td>
    </tr>
  </tbody>
</table>

<br>

**Default Action Panel**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/action-panel/default-action-panel@2x.png" width="75%;">

<br>

**Elastic Action Panel**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/action-panel/elastic-action-panel@2x.png" width="75%;">

<br>

**Overlay Action Panel**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/action-panel/overlay-action-panel@2x.png" width="75%;">


### Structure
All action panels will have a header, close button and content area. Additional options are:

- Additional controls in the header

- Tabs

- Footer with controls

### States
The action panel has two states:
- open

- closed

### Combined with...
Action panels can be combined with various controls and components depending on the use case and requirements.

### Best practices
- An action panel should not overlap controls or information required in the workflow that it supports

- The controls and information in an action panel should be immediately relevant and supportive of the visible screen and active workflow of the user

- The action panel should ideally take up as little screen real estate as is possible to get the job done

- Action panels are by default supplementary and contents should be designed with this in mind. In the case of the overlay action panel it is the primary focus.

<hr>

## Examples

**The overlay action panel is used to access contact details**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/action-panel/contacts-panel-example@2x.png" width="75%;">

<br>

**The default action panel is used as a Notifications panel**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/action-panel/notifications-panel-example@2x.png" width="75%;">

<br>

**The elastic action panel is used as a Deal Summary panel on the Sales Platform**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/action-panel/deal-summary-example@2x.png" width="75%;">







</div>
<!-- End Design Tab -->

