---
title: Tooltips and Popovers
layout: docs
description: Tooltips are floating labels that briefly explain the function of a user interface element.
group: elements
toc: true
---

## Base

Base popovers have no color but multiple direction options.

<div class="c-row">
<div class="c-col">
                <span class="c-header-sm c-m-right-md">Directions:</span>
<span data-tooltip="Tooltip Text" class="c-btn c-btn-secondary c-m-horizontal-md">
    <i class="fal fa-hand-point-up" aria-hidden="true"></i> Default
</span>

<span data-tooltip="Tooltip Text" data-tooltip-conf="bottom" class="c-btn c-btn-secondary c-m-horizontal-md">
    <i class="fal fa-hand-point-down" aria-hidden="true"></i> Down
</span>

<span data-tooltip="Tooltip Text" data-tooltip-conf="right" class="c-btn c-btn-secondary c-m-horizontal-md">
    <i class="fal fa-hand-point-right" aria-hidden="true"></i> Right
</span>

<span data-tooltip="Tooltip Text" data-tooltip-conf="shadow left" class="c-btn c-btn-secondary c-m-horizontal-md">
    <i class="fal fa-hand-point-left" aria-hidden="true"></i> Left
</span>
</div>
</div>

<hr class="c-hr">

<div class="c-row">
<div class="c-col">
    <span class="c-header-sm c-m-right-md">Colors:</span>
    <span data-tooltip="Tooltip Text" class="c-btn c-btn-secondary c-m-horizontal-md">
        Default
    </span>
    <span data-tooltip="Tooltip Text" data-tooltip-conf="invert shadow" class="c-btn c-btn-secondary c-m-horizontal-md">
        Invert
    </span>
    <span data-tooltip="Tooltip Text" data-tooltip-conf="primary" class="c-btn c-btn-secondary c-m-horizontal-md">
        Primary
    </span>
    <span data-tooltip="Tooltip Text" data-tooltip-conf="success" class="c-btn c-btn-secondary c-m-horizontal-md">
        Success
    </span>
    <span data-tooltip="Tooltip Text" data-tooltip-conf="warning" class="c-btn c-btn-secondary c-m-horizontal-md">
        Warning
    </span>
    <span data-tooltip="Tooltip Text" data-tooltip-conf="danger" class="c-btn c-btn-secondary c-m-horizontal-md">
        Danger
    </span>
</div>
</div>

<hr class="c-hr">

<div class="c-row">
    <div class="c-col">
        <span class="c-header-sm c-m-right-md">Options:</span>

<span data-tooltip="A pure CSS Tooltip. Super easy to use, No JavaScript required." data-tooltip-conf="primary multiline"
    class="c-btn c-btn-secondary c-m-horizontal-md">
    Multiline
</span>

<span data-tooltip="Tooltip Text" data-tooltip-conf="no-fade" class="c-btn c-btn-secondary c-m-horizontal-md">
    No Fade
</span>

<span data-tooltip="Tooltip Text" data-tooltip-conf="shadow" class="c-btn c-btn-secondary c-m-horizontal-md">
    Shadow
</span>

<span data-tooltip="Tooltip Text" data-tooltip-conf="no-arrow" class="c-btn c-btn-secondary c-m-horizontal-md">
    No Arrow
</span>

<span data-tooltip="Tooltip Text" data-tooltip-conf="square" class="c-btn c-btn-secondary c-m-horizontal-md">
    Square
</span>
</div>

</div>


*Top*
<div class="c-popover c-popover-top">
    <div class="c-popover-arrow"></div>
    <div class="c-popover-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus.
    </div>
</div> 
<br>
<br>
<br>
<br>

*Right*
<div class="c-popover c-popover-right">
    <div class="c-popover-arrow"></div>
    <div class="c-popover-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus.
    </div>
</div>
<br>
<br>
<br>
<br>

*Bottom*
<div class="c-popover c-popover-bottom">
    <div class="c-popover-arrow"></div>
    <div class="c-popover-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus.
    </div>
</div>
<br>
<br>
<br>
<br>

*Left*
<div class="c-popover c-popover-left">
    <div class="c-popover-arrow"></div>
    <div class="c-popover-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus.
    </div>
</div>
<br>
<br>
<br>
<br>

{% highlight html %}
<div class="c-popover c-popover-{DIRECTION}">
    <div class="c-popover-arrow"></div>
    <div class="c-popover-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus.
    </div>
</div>    
{% endhighlight %}

## Color Examples

This is an example of colors for the component. It uses for-loop over the colors array in the head of the markdown file. You can easily add or remove colors there to show whats supported.

*Primary*
<div class="c-popover c-popover-top c-popover-primary">
    <div class="c-popover-arrow"></div>
    <div class="c-popover-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus.
    </div>
</div> 
<br>
<br>
<br>
<br>

*Success*
<div class="c-popover c-popover-right c-popover-success">
    <div class="c-popover-arrow"></div>
    <div class="c-popover-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus.
    </div>
</div>
<br>
<br>
<br>
<br>

*Warning*
<div class="c-popover c-popover-bottom c-popover-warning">
    <div class="c-popover-arrow"></div>
    <div class="c-popover-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus.
    </div>
</div>
<br>
<br>
<br>
<br>

*Danger*
<div class="c-popover c-popover-left c-popover-danger">
    <div class="c-popover-arrow"></div>
    <div class="c-popover-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus.
    </div>
</div>
<br>
<br>
<br>
<br>

{% highlight html %}
<div class="c-popover c-popover-{DIRECTION} c-popover-{COLOR}">
    <div class="c-popover-arrow"></div>
    <div class="c-popover-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus.
    </div>
</div>    
{% endhighlight %}


