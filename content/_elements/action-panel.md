---
title: Action Panel
description: An Action Panel is used to display content that complements the primary content.
---

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
<br>

