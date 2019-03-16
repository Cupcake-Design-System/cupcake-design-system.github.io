---
title: Header
layout: docs-fullwidth
description: This default header
group: layout
---

## Default

This is the base header. The very top of the page.

{% example html %}
<header class="c-header">
  <div class="c-header-left">
    <div class="c-header-item">
      <a href="" class="c-header-item-link c-header-logo">
      <img src="{{ site.url }}{{ site.baseurl }}/assets/img/ipreo-logo.png">
        </a>
    </div>
  </div>
  <div class="c-header-center"></div>
  <div class="c-header-right">
    <div class="c-header-item">
      <a class="c-header-item-link" href="">
          <span class="fa fa-search" aria-hidden="true"></span>
        </a>
    </div>
    <div class="c-header-item">
      <a class="c-header-item-link" href="">
          <span class="fa fa-comments" aria-hidden="true"></span>
        </a>
    </div>
    <div class="c-header-item">
      <a class="c-header-item-link" href="">
          <span class="fa fa-bell" aria-hidden="true"></span>
        </a>
    </div>
    <div class="c-header-item">
      <a class="c-header-item-link" href="">
          <span class="fa fa-th" aria-hidden="true"></span>
        </a>
    </div>
    <div class="c-header-item">
      <span class="c-dropdown">
          <a class="c-header-item-link" href="">
            <span class="c-avatar c-avatar-sm c-avatar-primary" data-text="AB" data-status="success">
            </span>
      <i class="fa fa-caret-down c-m-left-sm" aria-hidden="true"></i>
      </a>
      <div class="c-dropdown-list c-dropdown-list-below c-dropdown-list-right">
        <li>
          <a href="javascript:void(0)" class="c-a">Help</a>
        </li>
        <li>
          <a href="javascript:void(0)" class="c-a">Contact Support</a>
        </li>
        <li>
          <a href="javascript:void(0)" class="c-a">Settings</a>
        </li>
        <li>
          <a href="javascript:void(0)" class="c-a">Log Out</a>
        </li>
      </div>
      </span>
    </div>
  </div>
</header>
{% endexample %}


## With Tabs
{% example html %}
<header class="c-header">
  <div class="c-header-left">
    <div class="c-header-item">
      <a href="" class="c-header-item-link c-header-logo">
              <img src="{{ site.url }}{{ site.baseurl }}/assets/img/ipreo-logo.png">
      </a>
    </div>
  </div>
  <div class="c-header-center"></div>
  <div class="c-header-right">
    <div class="c-header-item">
      <a class="c-header-item-link" href="">
        <span class="fa fa-search" aria-hidden="true"></span>
      </a>
    </div>
    <div class="c-header-item">
      <a class="c-header-item-link" href="">
        <span class="fa fa-comments" aria-hidden="true"></span>
      </a>
    </div>
    <div class="c-header-item">
      <a class="c-header-item-link" href="">
        <span class="fa fa-bell" aria-hidden="true"></span>
      </a>
    </div>
    <div class="c-header-item">
      <a class="c-header-item-link" href="">
        <span class="fa fa-th" aria-hidden="true"></span>
      </a>
    </div>
    <div class="c-header-item">
      <span class="c-dropdown">
        <a class="c-header-item-link" href="">
          <span class="c-avatar c-avatar-sm c-avatar-primary" data-text="AB" data-status="success">
          </span>
      <i class="fa fa-caret-down c-m-left-sm" aria-hidden="true"></i>
      </a>
      <div class="c-dropdown-list c-dropdown-list-below c-dropdown-list-right">
        <li>
          <a href="javascript:void(0)" class="c-a">Help</a>
        </li>
        <li>
          <a href="javascript:void(0)" class="c-a">Contact Support</a>
        </li>
        <li>
          <a href="javascript:void(0)" class="c-a">Settings</a>
        </li>
        <li>
          <a href="javascript:void(0)" class="c-a">Log Out</a>
        </li>
      </div>
      </span>
    </div>
  </div>
</header>
<ul class="c-tabs c-header-tabs">
  <li class="c-tab-item">
    <a class="c-tab-item-link c-tab-item-link-active" href="">Tab A</a>
  </li>
  <li class="c-tab-item">
    <a class="c-tab-item-link" href="">Tab B</a>
  </li>
  <li class="c-tab-item">
    <a class="c-tab-item-link" href="">Tab C</a>
  </li>
  <li class="c-tab-item">
    <a class="c-tab-item-link" href="">Tab D</a>
  </li>
</ul>
{% endexample %}


## Inverse

Best choice for theming. After adding an inverse class you can then change the bg color to match a theme.
{% example html %}
<header class="c-header c-header-inverse">
  <div class="c-header-left">
    <div class="c-header-item">
      <a href="" class="c-header-item-link c-header-logo">
      <img src="{{ site.url }}{{ site.baseurl }}/assets/img/ipreo-logo-white.png">
      </a>
    </div>

  </div>
  <div class="c-header-center"></div>
  <div class="c-header-right">
    <div class="c-header-item">
      <a class="c-header-item-link" href="">
        <span class="fa fa-search" aria-hidden="true"></span>
      </a>
    </div>
    <div class="c-header-item">
      <a class="c-header-item-link" href="">
        <span class="fa fa-comments" aria-hidden="true"></span>
      </a>
    </div>
    <div class="c-header-item">
      <a class="c-header-item-link" href="">
        <span class="fa fa-bell" aria-hidden="true"></span>
      </a>
    </div>
    <div class="c-header-item">
      <a class="c-header-item-link" href="">
        <span class="fa fa-th" aria-hidden="true"></span>
      </a>
    </div>
    <div class="c-header-item">
      <span class="c-dropdown">
        <a class="c-header-item-link" href="">
          <span class="c-avatar c-avatar-sm c-avatar-secondary" data-text="AB" data-status="success">
          </span>
      <i class="fa fa-caret-down c-m-left-sm" aria-hidden="true"></i>
      </a>
      <div class="c-dropdown-list c-dropdown-list-below c-dropdown-list-right">
        <li>
          <a href="javascript:void(0)" class="c-a">Help</a>
        </li>
        <li>
          <a href="javascript:void(0)" class="c-a">Contact Support</a>
        </li>
        <li>
          <a href="javascript:void(0)" class="c-a">Settings</a>
        </li>
        <li>
          <a href="javascript:void(0)" class="c-a">Log Out</a>
        </li>
      </div>
      </span>
    </div>
  </div>
</header>

<br>

<header class="c-header c-header-inverse c-bg-primary">
  <div class="c-header-left">
    <div class="c-header-item">
      <a href="" class="c-header-item-link c-header-logo">
      <img src="{{ site.url }}{{ site.baseurl }}/assets/img/ipreo-logo-white.png">
      </a>
    </div>

  </div>
  <div class="c-header-center"></div>
  <div class="c-header-right">
    <div class="c-header-item">
      <a class="c-header-item-link" href="">
        <span class="fa fa-search" aria-hidden="true"></span>
      </a>
    </div>
    <div class="c-header-item">
      <a class="c-header-item-link" href="">
        <span class="fa fa-comments" aria-hidden="true"></span>
      </a>
    </div>
    <div class="c-header-item">
      <a class="c-header-item-link" href="">
        <span class="fa fa-bell" aria-hidden="true"></span>
      </a>
    </div>
    <div class="c-header-item">
      <a class="c-header-item-link" href="">
        <span class="fa fa-th" aria-hidden="true"></span>
      </a>
    </div>
    <div class="c-header-item">
      <span class="c-dropdown">
        <a class="c-header-item-link" href="">
          <span class="c-avatar c-avatar-sm c-avatar-secondary" data-text="AB" data-status="success">
          </span>
      <i class="fa fa-caret-down c-m-left-sm" aria-hidden="true"></i>
      </a>
      <div class="c-dropdown-list c-dropdown-list-below c-dropdown-list-right">
        <li>
          <a href="javascript:void(0)" class="c-a">Help</a>
        </li>
        <li>
          <a href="javascript:void(0)" class="c-a">Contact Support</a>
        </li>
        <li>
          <a href="javascript:void(0)" class="c-a">Settings</a>
        </li>
        <li>
          <a href="javascript:void(0)" class="c-a">Log Out</a>
        </li>
      </div>
      </span>
    </div>
  </div>
</header>

<br>

<header class="c-header c-header-inverse c-bg-success">
  <div class="c-header-left">
    <div class="c-header-item">
      <a href="" class="c-header-item-link c-header-logo">
      <img src="{{ site.url }}{{ site.baseurl }}/assets/img/ipreo-logo-white.png">
      </a>
    </div>

  </div>
  <div class="c-header-center"></div>
  <div class="c-header-right">
    <div class="c-header-item">
      <a class="c-header-item-link" href="">
        <span class="fa fa-search" aria-hidden="true"></span>
      </a>
    </div>
    <div class="c-header-item">
      <a class="c-header-item-link" href="">
        <span class="fa fa-comments" aria-hidden="true"></span>
      </a>
    </div>
    <div class="c-header-item">
      <a class="c-header-item-link" href="">
        <span class="fa fa-bell" aria-hidden="true"></span>
      </a>
    </div>
    <div class="c-header-item">
      <a class="c-header-item-link" href="">
        <span class="fa fa-th" aria-hidden="true"></span>
      </a>
    </div>
    <div class="c-header-item">
      <span class="c-dropdown">
        <a class="c-header-item-link" href="">
          <span class="c-avatar c-avatar-sm c-avatar-secondary" data-text="AB" data-status="success">
          </span>
      <i class="fa fa-caret-down c-m-left-sm" aria-hidden="true"></i>
      </a>
      <div class="c-dropdown-list c-dropdown-list-below c-dropdown-list-right">
        <li>
          <a href="javascript:void(0)" class="c-a">Help</a>
        </li>
        <li>
          <a href="javascript:void(0)" class="c-a">Contact Support</a>
        </li>
        <li>
          <a href="javascript:void(0)" class="c-a">Settings</a>
        </li>
        <li>
          <a href="javascript:void(0)" class="c-a">Log Out</a>
        </li>
      </div>
      </span>
    </div>
  </div>
</header>
{% endexample %}