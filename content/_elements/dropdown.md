---
title: Dropdown
description: Dropdown description here...
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
- Code
- Angular
- Guidelines
---

<!-- Start Cupcake Code Tab -->
<div id="code" class="docs-tabs-content" markdown="1">

## Base

{% example html %}
<span class="c-dropdown">
<button class="c-btn c-btn-primary">
    Dropdown <i class="fa fa-angle-down" aria-hidden="true"></i>
</button>
<ul class="c-dropdown-list">
    <li><a href="" class="c-a">Option 1</a></li>
    <li><a href="" class="c-a">Option 2</a></li>
    <li class="c-dropdown-divider">
    <a href="" class="c-a">Option 3</a>
    </li>
</ul>
</span>
<span class="c-dropdown">
<span class="c-btn-link">
    Button Link Dropdown<i class="fa fa-angle-down" aria-hidden="true"></i>
</span>
<ul class="c-dropdown-list c-dropdown-list-below">
    <li><a href="" class="c-a">Option 1</a></li>
    <li><a href="" class="c-a">Option 2</a></li>
    <li class="c-dropdown-divider">
    <a href="" class="c-a">Option 3</a>
    </li>
</ul>
</span>
{% endexample %}

## Color Examples

{% example html %}
<span class="c-dropdown">
<button class="c-btn c-btn-primary">
    Dropdown Primary <i class="fa fa-angle-down" aria-hidden="true"></i>
</button>
<ul class="c-dropdown-list c-dropdown-list-below">
    <li><a href="" class="c-a">Option 1</a></li>
    <li><a href="" class="c-a">Option 2</a></li>
    <li class="c-dropdown-divider">
    <a href="" class="c-a">Option 3</a>
    </li>
</ul>
</span>

<span class="c-dropdown">
<button class="c-btn c-btn-secondary">
    Dropdown Secondary <i class="fa fa-angle-down" aria-hidden="true"></i>
</button>
<ul class="c-dropdown-list c-dropdown-list-below">
    <li><a href="" class="c-a">Option 1</a></li>
    <li><a href="" class="c-a">Option 2</a></li>
    <li class="c-dropdown-divider">
    <a href="" class="c-a">Option 3</a>
    </li>
</ul>
</span>

<span class="c-dropdown">
<button class="c-btn c-btn-success">
    Dropdown Success <i class="fa fa-angle-down" aria-hidden="true"></i>
</button>
<ul class="c-dropdown-list c-dropdown-list-below">
    <li><a href="" class="c-a">Option 1</a></li>
    <li><a href="" class="c-a">Option 2</a></li>
    <li class="c-dropdown-divider">
    <a href="" class="c-a">Option 3</a>
    </li>
</ul>
</span>

<span class="c-dropdown">
<button class="c-btn c-btn-warning">
    Dropdown Warning <i class="fa fa-angle-down" aria-hidden="true"></i>
</button>
<ul class="c-dropdown-list c-dropdown-list-below">
    <li><a href="" class="c-a">Option 1</a></li>
    <li><a href="" class="c-a">Option 2</a></li>
    <li class="c-dropdown-divider">
    <a href="" class="c-a">Option 3</a>
    </li>
</ul>
</span>

<span class="c-dropdown">
<button class="c-btn c-btn-danger">
    Dropdown Danger <i class="fa fa-angle-down" aria-hidden="true"></i>
</button>
<ul class="c-dropdown-list c-dropdown-list-below">
    <li><a href="" class="c-a">Option 1</a></li>
    <li><a href="" class="c-a">Option 2</a></li>
    <li class="c-dropdown-divider">
    <a href="" class="c-a">Option 3</a>
    </li>
</ul>
</span>
{% endexample %}

## Size Examples

{% example html %}
<span class="c-dropdown">
<button class="c-btn c-btn-primary c-btn-xs">
    Dropdown Xs <i class="fa fa-angle-down" aria-hidden="true"></i>
</button>
<ul class="c-dropdown-list c-dropdown-list-below">
    <li><a href="" class="c-a">Option 1</a></li>
    <li><a href="" class="c-a">Option 2</a></li>
    <li class="c-dropdown-divider">
    <a href="" class="c-a">Option 3</a>
    </li>
</ul>
</span>

<span class="c-dropdown">
<button class="c-btn c-btn-primary c-btn-sm">
    Dropdown Sm <i class="fa fa-angle-down" aria-hidden="true"></i>
</button>
<ul class="c-dropdown-list c-dropdown-list-below">
    <li><a href="" class="c-a">Option 1</a></li>
    <li><a href="" class="c-a">Option 2</a></li>
    <li class="c-dropdown-divider">
    <a href="" class="c-a">Option 3</a>
    </li>
</ul>
</span>

<span class="c-dropdown">
<button class="c-btn c-btn-primary c-btn-lg">
    Dropdown Lg <i class="fa fa-angle-down" aria-hidden="true"></i>
</button>
<ul class="c-dropdown-list c-dropdown-list-below">
    <li><a href="" class="c-a">Option 1</a></li>
    <li><a href="" class="c-a">Option 2</a></li>
    <li class="c-dropdown-divider">
    <a href="" class="c-a">Option 3</a>
    </li>
</ul>
</span>

<span class="c-dropdown">
<button class="c-btn c-btn-primary c-btn-xl">
    Dropdown Xl <i class="fa fa-angle-down" aria-hidden="true"></i>
</button>
<ul class="c-dropdown-list c-dropdown-list-below">
    <li><a href="" class="c-a">Option 1</a></li>
    <li><a href="" class="c-a">Option 2</a></li>
    <li class="c-dropdown-divider">
    <a href="" class="c-a">Option 3</a>
    </li>
</ul>
</span>
{% endexample %}

## Grid

{% example html %}
<div class="c-dropdown">
    <button class="c-btn c-btn-secondary">
       Default
        <i class="fa fa-angle-down" aria-hidden="true"></i>
    </button>
    <div class="c-dropdown-grid" style="display: none; width: 275px;">
        <a class="c-dropdown-item" href="">
            <span class="c-p-xs fa-2x fas fa-camera"></span>
            Camera
        </a>
        <a class="c-dropdown-item" href="">
            <span class="c-p-xs fa-2x fas fa-image"></span>
            Gallery
        </a>
        <a class="c-dropdown-item" href="">
            <span class="c-p-xs fa-2x fas fa-file"></span>
            Files
        </a>
        <a class="c-dropdown-item" href="">
            <span class="c-p-xs fa-2x fas fa-play"></span>
            Video
        </a>
        <a class="c-dropdown-item" href="">
            <span class="c-p-xs fa-2x fas fa-newspaper"></span>
            News
        </a>
        <a class="c-dropdown-item" href="">
            <span class="c-p-xs fa-2x fas fa-book"></span>
            Contacts
        </a>
        <a class="c-dropdown-item" href="">
            <span class="c-p-xs fa-2x fas fa-download"></span>
            Download
        </a>
        <a class="c-dropdown-item" href="">
            <span class="c-p-xs fa-2x fas fa-cog"></span>
            Settings
        </a>
    </div>
</div>

<div class="c-dropdown">
    <button class="c-btn c-btn-secondary">
        Grid 2 Columns
        <i class="fa fa-angle-down" aria-hidden="true"></i>
    </button>
    <div class="c-dropdown-grid c-dropdown-grid-col-2" style="display: none;">
        <a class="c-dropdown-item" href="">
            <span class="c-p-xs fa-2x fas fa-camera"></span>
            Camera
        </a>
        <a class="c-dropdown-item" href="">
            <span class="c-p-xs fa-2x fas fa-image"></span>
            Gallery
        </a>
        <a class="c-dropdown-item" href="">
            <span class="c-p-xs fa-2x fas fa-file"></span>
            Files
        </a>
        <a class="c-dropdown-item" href="">
            <span class="c-p-xs fa-2x fas fa-play"></span>
            Video
        </a>
        <a class="c-dropdown-item" href="">
            <span class="c-p-xs fa-2x fas fa-newspaper"></span>
            News
        </a>
        <a class="c-dropdown-item" href="">
            <span class="c-p-xs fa-2x fas fa-book"></span>
            Contacts
        </a>
        <a class="c-dropdown-item" href="">
            <span class="c-p-xs fa-2x fas fa-download"></span>
            Download
        </a>
        <a class="c-dropdown-item" href="">
            <span class="c-p-xs fa-2x fas fa-cog"></span>
            Settings
        </a>
    </div>
</div>

<div class="c-dropdown">
    <button class="c-btn c-btn-secondary">
        Grid 4 Columns
        <i class="fa fa-angle-down" aria-hidden="true"></i>
    </button>
    <div class="c-dropdown-grid c-dropdown-grid-col-4" style="display: none;">
        <a class="c-dropdown-item" href="">
            <span class="c-p-xs fa-2x fas fa-camera"></span>
            Camera
        </a>
        <a class="c-dropdown-item" href="">
            <span class="c-p-xs fa-2x fas fa-image"></span>
            Gallery
        </a>
        <a class="c-dropdown-item" href="">
            <span class="c-p-xs fa-2x fas fa-file"></span>
            Files
        </a>
        <a class="c-dropdown-item" href="">
            <span class="c-p-xs fa-2x fas fa-play"></span>
            Video
        </a>
        <a class="c-dropdown-item" href="">
            <span class="c-p-xs fa-2x fas fa-newspaper"></span>
            News
        </a>
        <a class="c-dropdown-item" href="">
            <span class="c-p-xs fa-2x fas fa-book"></span>
            Contacts
        </a>
        <a class="c-dropdown-item" href="">
            <span class="c-p-xs fa-2x fas fa-download"></span>
            Download
        </a>
        <a class="c-dropdown-item" href="">
            <span class="c-p-xs fa-2x fas fa-cog"></span>
            Settings
        </a>
    </div>
</div>
{% endexample %}

## List Location

{% example html %}
<span class="c-dropdown">
<button class="c-btn c-btn-primary">
    Default (cover) <i class="fa fa-angle-down" aria-hidden="true"></i>
</button>
<ul class="c-dropdown-list">
    <li><a href="" class="c-a">Option 1</a></li>
    <li><a href="" class="c-a">Option 2</a></li>
    <li class="c-dropdown-divider">
    <a href="" class="c-a">Option 3</a>
    </li>
</ul>
</span>
<span class="c-dropdown">
<button class="c-btn c-btn-primary">
    Dropdown List Below <i class="fas fa-angle-down" aria-hidden="true"></i>
</button>
<div class="c-dropdown-list c-dropdown-list-below">
    <a class="c-dropdown-item" href="">
        <span class="c-m-right-sm fas fa-folder"></span>
        Files
    </a>
    <a class="c-dropdown-item" href="">
        <span class="c-m-right-sm fas fa-play"></span>
        Video
    </a>
    <a class="c-dropdown-item" href="">
        <span class="c-m-right-sm fas fa-newspaper"></span>
        News
    </a>
    <a class="c-dropdown-item" href="">
        <span class="c-m-right-sm fas fa-book"></span>
        Contacts
    </a>
    <div class="c-dropdown-divider"></div>
    <a class="c-dropdown-item" href="">
        <span class="c-m-right-sm fas fa-download"></span>
        Download
    </a>
    <a class="c-dropdown-item" href="">
        <span class="c-m-right-sm fas fa-cog"></span>
        Settings
    </a>
</div>
</span>

<span class="c-dropdown">
<button class="c-btn c-btn-primary">
    Dropdown List Above <i class="fa fa-angle-down" aria-hidden="true"></i>
</button>
<div class="c-dropdown-list c-dropdown-list-above">
    <a class="c-dropdown-item" href="">
        <span class="c-m-right-sm fas fa-folder"></span>
        Files
    </a>
    <a class="c-dropdown-item" href="">
        <span class="c-m-right-sm fas fa-play"></span>
        Video
    </a>
    <a class="c-dropdown-item" href="">
        <span class="c-m-right-sm fas fa-newspaper"></span>
        News
    </a>
    <a class="c-dropdown-item" href="">
        <span class="c-m-right-sm fas fa-book"></span>
        Contacts
    </a>
    <div class="c-dropdown-divider"></div>
    <a class="c-dropdown-item" href="">
        <span class="c-m-right-sm fas fa-download"></span>
        Download
    </a>
    <a class="c-dropdown-item" href="">
        <span class="c-m-right-sm fas fa-cog"></span>
        Settings
    </a>
</div>
</span>

<span class="c-dropdown">
<button class="c-btn c-btn-primary">
    Dropdown List right <i class="fa fa-angle-down" aria-hidden="true"></i>
</button>
<div class="c-dropdown-list c-dropdown-list-below c-dropdown-list-right">
    <a class="c-dropdown-item" href="">
        <span class="c-m-right-sm fas fa-folder"></span>
        Files
    </a>
    <a class="c-dropdown-item" href="">
        <span class="c-m-right-sm fas fa-play"></span>
        Video
    </a>
    <a class="c-dropdown-item" href="">
        <span class="c-m-right-sm fas fa-newspaper"></span>
        News
    </a>
    <a class="c-dropdown-item" href="">
        <span class="c-m-right-sm fas fa-book"></span>
        Contacts
    </a>
    <div class="c-dropdown-divider"></div>
    <a class="c-dropdown-item" href="">
        <span class="c-m-right-sm fas fa-download"></span>
        Download
    </a>
    <a class="c-dropdown-item" href="">
        <span class="c-m-right-sm fas fa-cog"></span>
        Settings
    </a>
</div>
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

# Design Guidelines coming soon...


</div>
<!-- End Design Tab -->




