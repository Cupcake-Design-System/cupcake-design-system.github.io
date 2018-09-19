---
title: Dropdown
layout: docs
description: This description is from the top of the markdown page
group: elements
toc: true
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
---

## Base

This is the introduction to the component. A simple single example.

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

This is an example of available colors for the **{{ page.title }}** element. 


{% example html %}
{% for color in site.data.theme-colors %}
<span class="c-dropdown">
<button class="c-btn c-btn-{{ color }}">
    Dropdown {{ color | capitalize }} <i class="fa fa-angle-down" aria-hidden="true"></i>
</button>
<ul class="c-dropdown-list c-dropdown-list-below">
    <li><a href="" class="c-a">Option 1</a></li>
    <li><a href="" class="c-a">Option 2</a></li>
    <li class="c-dropdown-divider">
    <a href="" class="c-a">Option 3</a>
    </li>
</ul>
</span>
{% endfor %}
{% endexample %}


## Size Examples

This is an example of available size's for the **{{ page.title }}** element. (Note: this only changes the button size - not the list.) 


{% example html %}
{% for size in page.sizes %}
<span class="c-dropdown">
<button class="c-btn c-btn-primary c-btn-{{ size }}">
    Dropdown {{ size | capitalize }} <i class="fa fa-angle-down" aria-hidden="true"></i>
</button>
<ul class="c-dropdown-list c-dropdown-list-below">
    <li><a href="" class="c-a">Option 1</a></li>
    <li><a href="" class="c-a">Option 2</a></li>
    <li class="c-dropdown-divider">
    <a href="" class="c-a">Option 3</a>
    </li>
</ul>
</span>
{% endfor %}
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



