---
title: Media Object
layout: docs
description: The famous media object prevalent in social media interfaces, but useful in any context
group: elements
toc: true
---

## Base

This simplest form of the media object. An inline flexible object with something like an icon on one side.

{% example html %}
<div class="c-media docs- c-col-3">
  <span class="fal fa-address-book"></span>
  <div class="c-media-body">
    <span class="c-text-md c-text-bold">Have a Cupcake</span>
  </div>
</div>
{% endexample %}


Or opposite sides. (Notice how the icon aligns to the end of the containing div)
{% example html %}
<div class="c-media docs- c-col-3">
  <div class="c-media-body">
    <span class="c-text-md c-text-bold">Have a Cupcake</span>
  </div>
  <span class="fal fa-address-book"></span>
</div>
{% endexample %}

### Actions
We can also add action links that appear on hover.
{% example html %}
<div class="c-media docs- c-col-3">
  <div class="c-media-body">
    <span class="c-text-md c-text-bold">Item with actions on hover</span>
  </div>
  <a class="c-media-action" href="">
    <i class="fal fa-pencil"></i>
  </a>
  <a class="c-media-action" href="">
    <i class="fal fa-times"></i>
  </a>
</div>
{% endexample %}

Or actions that are always visible.
{% example html %}
<div class="c-media c-media-middle c-media-action-visible docs- c-col-3">
  <div class="c-media-body">
    <span class="c-text-md c-text-bold">Item with actions</span>
  </div>
    <a class="c-media-action" href=""><i class="fal fa-pencil"></i></a>
    <a class="c-media-action" href=""><i class="fal fa-times"></i></a>
</div>
{% endexample %}



### More Examples

Here are a few examples of whats possible when mixing classes.
{% example html %}
<div class="c-row">
  <div class="c-col-4">
    <div class="c-media c-media-middle c-bg-gray-0 c-bd">
      <span class="fal fa-phone c-text-primary-4 c-icon-xl"></span>
      <div class="c-media-body">
        <div class="c-text-md c-text-bold">(650) 555 - 1234</div>
        <div class="c-text-sm c-text-muted c-p-top-xs">Mobile Number</div>
      </div>
    </div>
  </div>
  <div class="c-col-4">
    <div class="c-media c-media-middle c-bg-gray-0 c-bd">
      <div class="c-media-body">
        <div class="c-text-md c-text-bold">(650) 555 - 1234</div>
        <div class="c-text-sm c-text-muted c-p-top-xs">Mobile Number</div>
      </div>
      <span class="fal fa-phone c-icon-xl"></span>
    </div>
  </div>
  <div class="c-col-4">
    <div class="c-media c-media-middle c-bg-gray-0 c-bd">
      <span class="c-avatar c-avatar-primary" data-text="AA"></span>
      <div class="c-media-body">
        <div class="c-text-md c-text-bold">Annabelle Admin</div>
        <div class="c-text-sm c-text-muted c-p-top-xs">IR Administrator</div>
      </div>
      <a class="c-media-action" href="">
        <span class="fal fa-phone"></span>
      </a>
      <a class="c-media-action" href="">
        <span class="fal fa-envelope "></span>
      </a>
    </div>
  </div>
</div>

<div class="c-row c-m-top-md">
  <div class="c-col-6">
    <div class="c-media c-media-middle">
      <span class="c-avatar c-avatar-success" data-text="AB">
      </span>
      <div class="c-media-body">
        <div class="c-text-md c-text-bold">Item to delete
          <time class="c-text-xs c-text-muted c-pull-right" datetime="2017-07-14 20:00">24 min ago</time>
        </div>
        <div class="c-text-sm c-p-top-xs">You need to update the changelog in documentation before we release the current version.</div>
        <div class="c-media-block-actions">
          <nav class="c-text-sm">
            <a class="c-a" href="">Comments (2)</a>
            <a class="c-a" href="">Likes (7)</a>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <div class="c-col-6">
    <div class="c-media c-media-middle c-media-new">
      <span class="c-avatar c-avatar-success" data-text="AC">
      </span>
      <div class="c-media-body">
        <span class="c-media-body">Maryam Amiri</span>
        <time class="c-pull-right c-text-xs" datetime="2017-07-14 20:00">24 min ago</time>
        <div class="c-text-sm c-p-top-xs">You need to update the changelog in documentation before we release the current version.</div>
        <div class="c-media-block-actions">
          <nav class="c-text-sm">
            <a class="c-a" href="">Comments (2)</a>
            <a class="c-a" href="">Likes (7)</a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>
{% endexample %}

### Nesting

Media-Objects are great for repeating content and are nestable as well.

{% example html %}
<div class="c-media">
  <span class="c-avatar c-avatar-primary" data-text="TT" data-status="success">
  </span>
  <div class="c-media-body">
    <span class="c-media-body">Tyler Trader</span>
    <div class="c-text-sm c-p-top-xs">You need to update the changelog in documentation before we release the current version.</div>
</div>
</div>   
<div class="c-media">
  <span class="c-avatar c-avatar-success" data-text="SS">
  </span>
  <div class="c-media-body">
    <span class="c-media-body">Sal Sellside</span>
    <div class="c-text-sm c-p-top-xs">You need to update the changelog in documentation before we release the current version.</div>
    <div class="c-media c-m-top-md">
      <span class="c-avatar c-avatar-primary" data-text="MA">
      </span>
      <div class="c-media-body">
        <span class="c-media-body">Maryam Amiri</span>
        <div class="c-text-sm c-p-top-xs">You need to update the changelog in documentation before we release the current version.</div>
      </div>
    </div>
  </div>
</div>
{% endexample %}

## Groups

Group multiple objects inside a list class.

{% example html %}
<div class="c-media-list">
  <div class="c-media">
    <span class="c-avatar c-avatar-primary" data-text="AA"></span>
    <div class="c-media-body">
      <div class="c-text-md c-text-bold">Annabelle Admin</div>
      <div class="c-text-sm c-text-muted c-p-top-xs">IR Administrator</div>
    </div>
  </div>

  <div class="c-media">
    <span class="c-avatar c-avatar-success" data-text="SL"></span>
    <div class="c-media-body">
      <div class="c-text-md c-text-bold">Siante Lisso</div>
      <div class="c-text-sm c-text-muted c-p-top-xs">Managing Director</div>
    </div>
  </div>

  <div class="c-media">
    <span class="c-avatar c-avatar-danger" data-text="MB"></span>
    <div class="c-media-body">
      <div class="c-text-md c-text-bold">Martin Board</div>
      <div class="c-text-sm c-text-muted c-p-top-xs">Managing Director &amp; Board member</div>
    </div>
  </div>

  <div class="c-media">
    <span class="c-avatar c-avatar-warning" data-text="RR"></span>
    <div class="c-media-body">
      <div class="c-text-md c-text-bold">Reggie Research</div>
      <div class="c-text-sm c-text-muted c-p-top-xs">Research Salesperson</div>
    </div>
  </div>
</div>
{% endexample %}

### Bordered

{% example html %}
<div class="c-media-list c-media-list-bordered">
  <div class="c-media">
    <span class="c-avatar c-avatar-primary" data-text="AA"></span>
    <div class="c-media-body">
      <div class="c-text-md c-text-bold">Annabelle Admin</div>
      <div class="c-text-sm c-text-muted c-p-top-xs">IR Administrator</div>
    </div>
  </div>

  <div class="c-media">
    <span class="c-avatar c-avatar-success" data-text="SL"></span>
    <div class="c-media-body">
      <div class="c-text-md c-text-bold">Siante Lisso</div>
      <div class="c-text-sm c-text-muted c-p-top-xs">Managing Director</div>
    </div>
  </div>

  <div class="c-media">
    <span class="c-avatar c-avatar-danger" data-text="MB"></span>
    <div class="c-media-body">
      <div class="c-text-md c-text-bold">Martin Board</div>
      <div class="c-text-sm c-text-muted c-p-top-xs">Managing Director &amp; Board member</div>
    </div>
  </div>

  <div class="c-media">
    <span class="c-avatar c-avatar-warning" data-text="RR"></span>
    <div class="c-media-body">
      <div class="c-text-md c-text-bold">Reggie Research</div>
      <div class="c-text-sm c-text-muted c-p-top-xs">Research Salesperson</div>
    </div>
  </div>
</div>
{% endexample %}


### Striped

{% example html %}
<div class="c-media-list c-media-list-striped">
  <div class="c-media c-media-middle c-media-action-visible">
    <div class="c-media-body">
      <div class="c-text-md c-text-bold">Annabelle Admin</div>
      <div class="c-text-sm c-text-muted c-p-top-xs">IR Administrator</div>
    </div>
    <a class="c-media-action c-text-success" href="">
      <span class="fal fa-phone"></span>
    </a>
    <a class="c-media-action c-text-primary" href="">
      <span class="fal fa-envelope"></span>
    </a>
  </div>

  <div class="c-media c-media-middle c-media-action-visible">
    <div class="c-media-body">
      <div class="c-text-md c-text-bold">Siante Lisso</div>
      <div class="c-text-sm c-text-muted c-p-top-xs">Managing Director</div>
    </div>
    <a class="c-media-action c-text-success" href="">
      <span class="fal fa-phone"></span>
    </a>
    <a class="c-media-action c-text-primary" href="">
      <span class="fal fa-envelope"></span>
    </a>
  </div>

  <div class="c-media c-media-middle c-media-action-visible">
    <div class="c-media-body">
      <div class="c-text-md c-text-bold">Martin Board</div>
      <div class="c-text-sm c-text-muted c-p-top-xs">Managing Director</div>
    </div>
    <a class="c-media-action c-text-success" href="">
      <span class="fal fa-phone"></span>
    </a>
    <a class="c-media-action c-text-primary" href="">
      <span class="fal fa-envelope"></span>
    </a>
  </div>

  <div class="c-media c-media-middle c-media-action-visible">
    <div class="c-media-body">
      <div class="c-text-md c-text-bold">Reggie Research</div>
      <div class="c-text-sm c-text-muted c-p-top-xs">Research Salesperson</div>
    </div>
    <a class="c-media-action c-text-success" href="">
      <span class="fal fa-phone"></span>
    </a>
    <a class="c-media-action c-text-primary" href="">
      <span class="fal fa-envelope"></span>
    </a>
  </div>
</div>
{% endexample %}


### Hoverable

{% example html %}
<div class="c-media-list c-media-list-divided c-media-list-hover c-card">
  <div class="c-media-list-body">
    <div class="c-media c-media-middle">
      <span class="c-avatar c-avatar-primary" data-text="AA"></span>
      <div class="c-media-body">
        <div class="c-text-md c-text-bold">Annabelle Admin</div>
        <div class="c-text-sm c-text-muted c-p-top-xs">IR Administrator</div>
      </div>
      <a class="c-media-action c-text-success" href="">
        <i class="fal fa-pencil"></i>
      </a>
      <a class="c-media-action c-text-danger" href="">
        <i class="fal fa-times"></i>
      </a>
    </div>
    <div class="c-media c-media-middle">
      <span class="c-avatar c-avatar-success" data-text="SL"></span>
      <div class="c-media-body">
        <div class="c-text-md c-text-bold">Siante Lisso</div>
        <div class="c-text-sm c-text-muted c-p-top-xs">Managing Director</div>
      </div>
      <a class="c-media-action c-text-success" href="">
        <i class="fal fa-pencil"></i>
      </a>
      <a class="c-media-action c-text-danger" href="">
        <i class="fal fa-times"></i>
      </a>
    </div>
    <div class="c-media c-media-middle">
      <span class="c-avatar c-avatar-danger" data-text="MB"></span>
      <div class="c-media-body">
        <div class="c-text-md c-text-bold">Martin Board</div>
        <div class="c-text-sm c-text-muted c-p-top-xs">Managing Director</div>
      </div>
      <a class="c-media-action c-text-success" href="">
        <i class="fal fa-pencil"></i>
      </a>
      <a class="c-media-action c-text-danger" href="">
        <i class="fal fa-times"></i>
      </a>
    </div>
    <div class="c-media c-media-middle">
      <span class="c-avatar c-avatar-warning" data-text="RR"></span>
      <div class="c-media-body">
        <div class="c-text-md c-text-bold">Reggie Research</div>
        <div class="c-text-sm c-text-muted c-p-top-xs">Research Salesperson</div>
      </div>
      <a class="c-media-action c-text-success" href="">
        <i class="fal fa-pencil"></i>
      </a>
      <a class="c-media-action c-text-danger" href="">
        <i class="fal fa-times"></i>
      </a>
    </div>
  </div>
</div>
{% endexample %}


### With Header and Footer

{% example html %}
<div class="c-card">
  <div class="c-media-list c-media-list-divided c-media-list-hover c-media-action-visible">
    <header class="c-media-list-header">
      <div class="c-media">
        <div class="c-text-md c-text-bold">Media Header w/ actions</div>
      </div>
    </header>
    <div class="c-media-list-body">
      <div class="c-media c-media-middle">
        <span class="c-avatar c-avatar-primary" data-text="AA"></span>
        <div class="c-media-body">
          <div class="c-text-md c-text-bold">Annabelle Admin</div>
          <div class="c-text-sm c-text-muted c-p-top-xs">IR Administrator</div>
        </div>
        <a class="c-media-action c-text-success" href="">
          <i class="fal fa-pencil"></i>
        </a>
        <a class="c-media-action c-text-danger" href="">
          <i class="fal fa-times"></i>
        </a>
      </div>
      <div class="c-media c-media-middle">
        <span class="c-avatar c-avatar-success" data-text="SL"></span>
        <div class="c-media-body">
          <div class="c-text-md c-text-bold">Siante Lisso</div>
          <div class="c-text-sm c-text-muted c-p-top-xs">Managing Director</div>
        </div>
        <a class="c-media-action c-text-success" href="">
          <i class="fal fa-pencil"></i>
        </a>
        <a class="c-media-action c-text-danger" href="">
          <i class="fal fa-times"></i>
        </a>
      </div>
      <div class="c-media c-media-middle">
        <span class="c-avatar c-avatar-danger" data-text="MB"></span>
        <div class="c-media-body">
          <div class="c-text-md c-text-bold">Martin Board</div>
          <div class="c-text-sm c-text-muted c-p-top-xs">Managing Director</div>
        </div>
        <a class="c-media-action c-text-success" href="">
          <i class="fal fa-pencil"></i>
        </a>
        <a class="c-media-action c-text-danger" href="">
          <i class="fal fa-times"></i>
        </a>
      </div>
      <div class="c-media c-media-middle">
        <span class="c-avatar c-avatar-warning" data-text="RR"></span>
        <div class="c-media-body">
          <div class="c-text-md c-text-bold">Reggie Research</div>
          <div class="c-text-sm c-text-muted c-p-top-xs">Research Salesperson</div>
        </div>
        <a class="c-media-action c-text-success" href="">
          <i class="fal fa-pencil"></i>
        </a>
        <a class="c-media-action c-text-danger" href="">
          <i class="fal fa-times"></i>
        </a>
      </div>
    </div>
    <footer class="c-media-list-footer">
      <div class="c-media">
        <div class="c-text-md c-text-bold">Media footer</div>
      </div>
    </footer>
  </div>
</div>
{% endexample %}