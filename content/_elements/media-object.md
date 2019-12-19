---
title: Media Object
description: Media objects provide an easy way to combine elements and data into a new component, typically for use in repetitive lists.
tabs:
- Code
- Angular
- Guidelines
---

<!-- Start Cupcake Code Tab -->
<div id="code" class="docs-tabs-content" markdown="1">


### Base

This simplest form of the media object. An inline flexible object with something like a checkbox on one side.

{% example html %}
<div class="c-row c-bg-gray-1">
  <div class="c-col-md-3 c-p-sm">
    <div class="c-media c-media-middle">
      <div class="c-checkbox">
        <input type="checkbox" name="radio" checked="">
        <label></label>
      </div>
      <div class="c-media-body">
        <span class="c-text-lg c-text-bold">Have a Cupcake</span>
      </div>
    </div>
  </div>

  <div class="c-col-md-3 c-p-sm">
    <div class="c-media c-media-middle">
      <span class="c-avatar c-avatar-primary" data-text="AA"></span>
      <div class="c-media-body">
        <div class="c-text-md c-text-bold">Annabelle Admin</div>
        <div class="c-text-sm c-text-muted">IR Administrator</div>
      </div>
    </div>
  </div>

  <div class="c-col-md-3 c-p-sm">
    <div class="c-media c-media-middle c-media-action-visible">
      <div class="c-media-body">
        <span class="c-text-lg c-text-bold">Item with actions</span>
      </div>
      <a class="c-media-action" href="#">
        <i class="fas fa-pencil-alt"></i>
      </a>
      <a class="c-media-action" href="#">
        <i class="fas fa-times"></i>
      </a>
    </div>
  </div>

  <div class="c-col-md-3 c-p-sm">
    <div class="c-media c-media-middle">
      <div class="c-media-body">
        <span class="c-text-lg c-text-bold">Item with button action</span>
      </div>
      <button class="c-btn c-btn-success c-btn-sm">Email</button>
    </div>
  </div>
</div>
{% endexample %}


**Or Reversed**
{% example html %}
<div class="c-row c-bg-gray-1">
  <div class="c-col-md-3 c-p-sm">
    <div class="c-media c-media-middle">
      <div class="c-media-body">
        <span class="c-text-lg c-text-bold">Have a Cupcake</span>
      </div>
      <div class="c-checkbox">
        <input type="checkbox" name="radio" checked="">
        <label></label>
      </div>
    </div>
  </div>

  <div class="c-col-md-3 c-p-sm">
    <div class="c-media c-media-middle">
      <div class="c-media-body">
        <div class="c-text-md c-text-bold">Annabelle Admin</div>
        <div class="c-text-sm c-text-muted">IR Administrator</div>
      </div>
      <span class="c-avatar c-avatar-primary" data-text="AA"></span>
    </div>
  </div>

  <div class="c-col-md-3 c-p-sm">
    <div class="c-media c-media-middle c-media-action-visible">
      <a class="c-media-action" href="#">
        <i class="fas fa-pencil-alt"></i>
      </a>
      <a class="c-media-action" href="#">
        <i class="fas fa-times"></i>
      </a>
      <div class="c-media-body">
        <span class="c-text-lg c-text-bold">Item with actions</span>
      </div>
    </div>
  </div>

  <div class="c-col-md-3 c-p-sm">
    <div class="c-media c-media-middle">
      <button class="c-btn c-btn-success c-btn-sm">Email</button>
      <div class="c-media-body">
        <span class="c-text-lg c-text-bold">Item with button action</span>
      </div>
    </div>
  </div>
</div>
{% endexample %}


<hr>
<br>

#### Actions

We can also add action links that appear on hover.

{% example html %}
<div class="c-row c-bg-gray-1">
  <div class="c-col-md-3 c-p-sm">
    <div class="c-media c-media-middle">
      <div class="c-media-body">
        <span class="c-text-lg c-text-bold">Checkbox on hover</span>
      </div>
      <div class="c-media-action">
        <div class="c-checkbox">
          <input type="checkbox" name="radio">
          <label></label>
        </div>
      </div>
    </div>
  </div>

  <div class="c-col-md-3 c-p-sm">
    <div class="c-media c-media-middle">
      <span class="c-avatar c-avatar-primary" data-text="AA"></span>
      <div class="c-media-body">
        <div class="c-text-md c-text-bold">Annabelle Admin</div>
        <div class="c-text-sm c-text-muted">IR Administrator</div>
      </div>
      <a class="c-media-action" href="#">
        <span class="fas fa-phone"></span>
      </a>
      <a class="c-media-action" href="#">
        <span class="fas fa-envelope"></span>
      </a>
    </div>
  </div>

  <div class="c-col-md-3 c-p-sm">
    <div class="c-media c-media-middle">
      <div class="c-avatar c-avatar-square c-avatar-orange">
        <i class="fab fa-amazon"></i>
      </div>
      <div class="c-media-body">
        <div class="c-text-lg c-text-bold">Button on hover</div>
      </div>
      <div class="c-media-action" href="#">
        <button class="c-btn c-btn-secondary c-btn-sm">Email</button>
      </div>
    </div>
  </div>

  <div class="c-col-md-3 c-p-sm">
    <div class="c-media c-media-middle">
      <div class="c-media-body">
        <span class="c-text-lg c-text-bold">Actions on hover</span>
      </div>
      <a class="c-media-action" href="#">
        <i class="fas fa-pencil-alt"></i>
      </a>
      <a class="c-media-action" href="#">
        <i class="fas fa-times"></i>
      </a>
    </div>
  </div>
</div>
{% endexample %}


As vertical heights grow - additional classes allow for better alignment.

{% example html %}
<div class="c-row c-bg-gray-1">
  <div class="c-col-md-4 c-p-sm">
    <div class="c-media">
      <span class="c-avatar c-avatar-lg c-avatar-success" data-text="AC">
      </span>
      <div class="c-media-body">
        <div class="c-text-md c-text-bold">Item to delete
          <time class="c-text-xs c-text-muted c-pull-right" datetime="2017-07-14 20:00">24 min ago</time>
        </div>
        <div class="c-text-sm">You need to update the changelog in documentation before we release the current version.
        </div>
        <div class="c-media-block-actions">
          <a class="c-a c-p-right-sm" href="#">Comments (2)</a>
          <a class="c-a" href="#">Likes (7)</a>
        </div>
      </div>
    </div>
  </div>

  <div class="c-col-md-4 c-p-sm">
    <div class="c-media c-media-middle">
      <span class="c-avatar c-avatar-lg c-avatar-success" data-text="AC">
      </span>
      <div class="c-media-body">
        <div class="c-text-md c-text-bold">Item to delete
          <time class="c-text-xs c-text-muted c-pull-right" datetime="2017-07-14 20:00">24 min ago</time>
        </div>
        <div class="c-text-sm">You need to update the changelog in documentation before we release the current version.
        </div>
        <div class="c-media-block-actions">
          <nav class="c-text-sm">
            <a class="c-a" href="#">Comments (2)</a>
            <a class="c-a" href="#">Likes (7)</a>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <div class="c-col-md-4 c-p-sm">
    <div class="c-media c-media-bottom">
      <span class="c-avatar c-avatar-lg c-avatar-success" data-text="AC">
      </span>
      <div class="c-media-body">
        <div class="c-text-md c-text-bold">Item to delete
          <time class="c-text-xs c-text-muted c-pull-right" datetime="2017-07-14 20:00">24 min ago</time>
        </div>
        <div class="c-text-sm">You need to update the changelog in documentation before we release the current version.
        </div>
        <div class="c-media-block-actions">
          <nav class="c-text-sm">
            <a class="c-a" href="#">Comments (2)</a>
            <a class="c-a" href="#">Likes (7)</a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>
{% endexample %}

<hr>
<br>

#### More Examples

Here are a few examples of whats possible when mixing classes.

{% example html %}
<div class="c-row c-bg-gray-1">

  <div class="c-col-md-3 c-p-sm">
    <div class="c-media c-media-middle">
      <div class="c-media-body">
        <div class="c-text-md c-text-bold">(650) 555 - 1234</div>
        <div class="c-text-sm c-text-muted">Mobile Number</div>
      </div>
      <a class="c-media-action c-media-action-visible" href="#">
          <span class="fa fa-phone c-text-primary-4"></span>
        </a>
    </div>
  </div>

  <div class="c-col-md-3 c-p-sm">
    <div class="c-media c-media-middle">
        <div class="c-avatar c-avatar-square c-avatar-cyan">
            <i class="fab fa-dropbox"></i>
          </div>
      <div class="c-media-body">
        <div class="c-text-md c-text-bold">Dropbox Rep</div>
        <div class="c-text-sm c-text-muted">Keith McCatz</div>
      </div>
      <a class="c-media-action c-media-action-visible" href="#">
        <span class="fas fa-phone"></span>
      </a>
      <a class="c-media-action c-media-action-visible" href="#">
          <span class="fas fa-envelope"></span>
        </a>
        <a class="c-media-action c-media-action-visible" href="#">
            <i class="fas fa-comments"></i>
          </a>
    </div>
  </div>

  <div class="c-col-md-6 c-p-sm">
    <div class="c-media c-media-middle">
      <span class="c-avatar c-avatar-primary" data-text="AA"></span>
      <div class="c-media-body">
        <div class="c-text-md c-text-bold">Annabelle Admin</div>
        <div class="c-text-sm c-text-muted">IR Administrator</div>
      </div>
      <button class="c-btn c-btn-secondary c-btn-sm">Email</button>
      <button class="c-btn c-btn-secondary c-btn-sm">Chat</button>
      <button class="c-btn c-btn-danger c-btn-sm">Remove</button>
    </div>
  </div>

</div>
{% endexample %}


<hr>
<br>

#### Groups
Group multiple objects inside a list class. This becomes a powerful option for repeatable content.

{% example html %}
<div class="c-row">
  <div class="c-col-md-6 c-col-lg-6 c-p-sm">
    <div class="c-media-list c-media-list-bordered">
      <div class="c-media">
        <span class="c-avatar c-avatar-grape" data-text="AA"></span>
        <div class="c-media-body">
          <div class="c-text-md c-text-bold">Annabelle Admin</div>
          <div class="c-text-sm c-text-muted">IR Administrator</div>
        </div>
      </div>
      <div class="c-media">
        <span class="c-avatar c-avatar-dark" data-text="SL"></span>
        <div class="c-media-body">
          <div class="c-text-md c-text-bold">Siante Lisso</div>
          <div class="c-text-sm c-text-muted">Managing Director</div>
        </div>
      </div>
      <div class="c-media">
        <span class="c-avatar c-avatar-indigo" data-text="MB"></span>
        <div class="c-media-body">
          <div class="c-text-md c-text-bold">Martin Board</div>
          <div class="c-text-sm c-text-muted">Board member</div>
        </div>
      </div>
      <div class="c-media">
        <span class="c-avatar c-avatar-teal" data-text="RR"></span>
        <div class="c-media-body">
          <div class="c-text-md c-text-bold">Reggie Research</div>
          <div class="c-text-sm c-text-muted">Research Salesperson</div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endexample %}



**Divided**

{% example html %}
<div class="c-row">
  <div class="c-col-md-6 c-col-lg-6 c-p-sm">
<div class="c-media-list c-media-list-bordered c-media-list-divided">
  <div class="c-media c-media-middle">
    <span class="c-avatar c-avatar-grape" data-text="AA"></span>
    <div class="c-media-body">
      <div class="c-text-md c-text-bold">Annabelle Admin</div>
      <div class="c-text-sm c-text-muted">IR Administrator</div>
    </div>
    <a class="c-media-action c-text-gray-6" href="#">
      <i class="fas fa-pencil-alt"></i>
    </a>
    <a class="c-media-action c-text-gray-6" href="#">
      <i class="fas fa-times"></i>
    </a>
  </div>
  <div class="c-media c-media-middle">
    <span class="c-avatar c-avatar-dark" data-text="SL"></span>
    <div class="c-media-body">
      <div class="c-text-md c-text-bold">Siante Lisso</div>
      <div class="c-text-sm c-text-muted">Managing Director</div>
    </div>
    <a class="c-media-action c-text-gray-6" href="#">
      <i class="fas fa-pencil-alt"></i>
    </a>
    <a class="c-media-action c-text-gray-6" href="#">
      <i class="fas fa-times"></i>
    </a>
  </div>
  <div class="c-media c-media-middle">
    <span class="c-avatar c-avatar-indigo" data-text="MB"></span>
    <div class="c-media-body">
      <div class="c-text-md c-text-bold">Martin Board</div>
      <div class="c-text-sm c-text-muted">Managing Director</div>
    </div>
    <a class="c-media-action c-text-gray-6" href="#">
      <i class="fas fa-pencil-alt"></i>
    </a>
    <a class="c-media-action c-text-gray-6" href="#">
      <i class="fas fa-times"></i>
    </a>
  </div>
  <div class="c-media c-media-middle">
    <span class="c-avatar c-avatar-teal" data-text="RR"></span>
    <div class="c-media-body">
      <div class="c-text-md c-text-bold">Reggie Research</div>
      <div class="c-text-sm c-text-muted">Research Salesperson</div>
    </div>
    <a class="c-media-action c-text-gray-6" href="#">
      <i class="fas fa-pencil-alt"></i>
    </a>
    <a class="c-media-action c-text-gray-6" href="#">
      <i class="fas fa-times"></i>
    </a>
  </div>
</div>
  </div>
</div>
{% endexample %}


**Striped**

{% example html %}
<div class="c-row">
  <div class="c-col-md-6 c-col-lg-6 c-p-sm">
    <div class="c-media-list c-media-list-bordered c-media-list-striped">
      <div class="c-media">
        <span class="c-avatar c-avatar-grape" data-text="AA"></span>
        <div class="c-media-body">
          <div class="c-text-md c-text-bold">Annabelle Admin</div>
          <div class="c-text-sm c-text-muted">IR Administrator</div>
        </div>
      </div>
      <div class="c-media">
        <span class="c-avatar c-avatar-dark" data-text="SL"></span>
        <div class="c-media-body">
          <div class="c-text-md c-text-bold">Siante Lisso</div>
          <div class="c-text-sm c-text-muted">Managing Director</div>
        </div>
      </div>
      <div class="c-media">
        <span class="c-avatar c-avatar-indigo" data-text="MB"></span>
        <div class="c-media-body">
          <div class="c-text-md c-text-bold">Martin Board</div>
          <div class="c-text-sm c-text-muted">Board member</div>
        </div>
      </div>
      <div class="c-media">
        <span class="c-avatar c-avatar-teal" data-text="RR"></span>
        <div class="c-media-body">
          <div class="c-text-md c-text-bold">Reggie Research</div>
          <div class="c-text-sm c-text-muted">Research Salesperson</div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endexample %}


**Bordered, Divided, and Hoverable with actions**

{% example html %}
<div class="c-row">
  <div class="c-col-md-6 c-col-lg-6 c-p-sm">
<div class="c-media-list c-media-list-bordered c-media-list-divided c-media-list-hover">
  <div class="c-media c-media-middle">
    <span class="c-avatar c-avatar-grape" data-text="AA"></span>
    <div class="c-media-body">
      <div class="c-text-md c-text-bold">Annabelle Admin</div>
      <div class="c-text-sm c-text-muted">IR Administrator</div>
    </div>
    <a class="c-media-action c-text-gray-6" href="#">
      <i class="fas fa-pencil-alt"></i>
    </a>
    <a class="c-media-action c-text-gray-6" href="#">
      <i class="fas fa-times"></i>
    </a>
  </div>
  <div class="c-media c-media-middle">
    <span class="c-avatar c-avatar-dark" data-text="SL"></span>
    <div class="c-media-body">
      <div class="c-text-md c-text-bold">Siante Lisso</div>
      <div class="c-text-sm c-text-muted">Managing Director</div>
    </div>
    <a class="c-media-action c-text-gray-6" href="#">
      <i class="fas fa-pencil-alt"></i>
    </a>
    <a class="c-media-action c-text-gray-6" href="#">
      <i class="fas fa-times"></i>
    </a>
  </div>
  <div class="c-media c-media-middle">
    <span class="c-avatar c-avatar-indigo" data-text="MB"></span>
    <div class="c-media-body">
      <div class="c-text-md c-text-bold">Martin Board</div>
      <div class="c-text-sm c-text-muted">Managing Director</div>
    </div>
    <a class="c-media-action c-text-gray-6" href="#">
      <i class="fas fa-pencil-alt"></i>
    </a>
    <a class="c-media-action c-text-gray-6" href="#">
      <i class="fas fa-times"></i>
    </a>
  </div>
  <div class="c-media c-media-middle">
    <span class="c-avatar c-avatar-teal" data-text="RR"></span>
    <div class="c-media-body">
      <div class="c-text-md c-text-bold">Reggie Research</div>
      <div class="c-text-sm c-text-muted">Research Salesperson</div>
    </div>
    <a class="c-media-action c-text-gray-6" href="#">
      <i class="fas fa-pencil-alt"></i>
    </a>
    <a class="c-media-action c-text-gray-6" href="#">
      <i class="fas fa-times"></i>
    </a>
  </div>
</div>
  </div>
</div>
{% endexample %}



**With Header and Footer**

{% example html %}
<div class="c-media-list c-media-list-bordered c-media-list-divided c-media-list-hover c-media-action-visible" style="max-width: 500px;">
      <header class="c-media-list-header">
        <div class="c-media">
          <div class="c-text-md c-text-bold">Media Header</div>
        </div>
      </header>
        <div class="c-media c-media-middle">
          <span class="c-avatar c-avatar-grape" data-text="AA"></span>
          <div class="c-media-body">
            <div class="c-text-md c-text-bold">Annabelle Admin</div>
            <div class="c-text-sm c-text-muted">IR Administrator</div>
          </div>
          <a class="c-media-action c-text-gray-6" href="#">
            <i class="fas fa-pencil-alt"></i>
          </a>
          <a class="c-media-action c-text-gray-6" href="#">
            <i class="fas fa-times"></i>
          </a>
        </div>
        <div class="c-media c-media-middle">
          <span class="c-avatar c-avatar-dark" data-text="SL"></span>
          <div class="c-media-body">
            <div class="c-text-md c-text-bold">Siante Lisso</div>
            <div class="c-text-sm c-text-muted">Managing Director</div>
          </div>
          <a class="c-media-action c-text-gray-6" href="#">
            <i class="fas fa-pencil-alt"></i>
          </a>
          <a class="c-media-action c-text-gray-6" href="#">
            <i class="fas fa-times"></i>
          </a>
        </div>
        <div class="c-media c-media-middle">
          <span class="c-avatar c-avatar-indigo" data-text="MB"></span>
          <div class="c-media-body">
            <div class="c-text-md c-text-bold">Martin Board</div>
            <div class="c-text-sm c-text-muted">Managing Director</div>
          </div>
          <a class="c-media-action c-text-gray-6" href="#">
            <i class="fas fa-pencil-alt"></i>
          </a>
          <a class="c-media-action c-text-gray-6" href="#">
            <i class="fas fa-times"></i>
          </a>
        </div>
        <div class="c-media c-media-middle">
          <span class="c-avatar c-avatar-teal" data-text="RR"></span>
          <div class="c-media-body">
            <div class="c-text-md c-text-bold">Reggie Research</div>
            <div class="c-text-sm c-text-muted">Research Salesperson</div>
          </div>
          <a class="c-media-action c-text-gray-6" href="#">
            <i class="fas fa-pencil-alt"></i>
          </a>
          <a class="c-media-action c-text-gray-6" href="#">
            <i class="fas fa-times"></i>
          </a>
        </div>
      <footer class="c-media-list-footer">
        <div class="c-media">
          <div class="c-text-md c-text-bold">Media footer</div>
        </div>
      </footer>
    </div>
{% endexample %}


**More Examples**

{% example html %}
<div class="c-row c-bg-gray-1">
  <div class="c-col-md-6 c-col-lg-4 c-p-sm">
    <div class="c-media-list c-media-list-divided c-media-list-bordered">
      <div class="c-media c-media-middle">
        <span class="c-avatar c-avatar-primary" data-text="DS">
          <img src="https://unsplash.it/200?image=815">
        </span>
        <div class="c-media-body">
          <div class="c-text-lg c-text-bold">Delfina Sanford</div>
        </div>
        <a class="c-media-action" href="#">
          <i class="fas fa-pencil-alt"></i>
        </a>
        <a class="c-media-action" href="#">
          <i class="fas fa-times"></i>
        </a>
      </div>
      <div class="c-media c-media-middle">
        <span class="c-avatar c-avatar-primary" data-text="DS">
          <img src="https://unsplash.it/200?image=1005">
        </span>
        <div class="c-media-body">
          <div class="c-text-lg c-text-bold">Luigi Graham</div>
        </div>
        <div class="c-media-action" href="#">
          <button class="c-btn c-btn-success c-btn-sm">Email</button>
        </div>
      </div>
      <div class="c-media c-media-middle">
        <span class="c-avatar c-avatar-primary" data-text="DS">
          <img src="https://unsplash.it/200?image=403">
        </span>
        <div class="c-media-body">
          <div class="c-text-lg c-text-bold">Clinton Usman</div>
        </div>
        <a class="c-media-action" href="#">
          <i class="fas fa-pencil-alt"></i>
        </a>
        <a class="c-media-action" href="#">
          <i class="fas fa-times"></i>
        </a>
      </div>
      <div class="c-media c-media-middle">
        <span class="c-avatar c-avatar-primary" data-text="DS">
          <img src="https://unsplash.it/200?image=1027">
        </span>
        <div class="c-media-body">
          <div class="c-text-lg c-text-bold">Natalia Satterfield</div>
        </div>
        <a class="c-media-action" href="#">
          <i class="fas fa-pencil-alt"></i>
        </a>
        <a class="c-media-action" href="#">
          <i class="fas fa-times"></i>
        </a>
      </div>
    </div>
  </div>

  <div class="c-col-md-6 c-col-lg-4 c-p-sm">
    <div class="c-media-list c-media-list-bordered c-media-list-divided">
      <div class="c-media c-media-middle">
        <div class="c-avatar c-avatar-lg c-avatar-square c-avatar-cyan">
          <i class="fab fa-dropbox"></i>
        </div>
        <div class="c-media-body">
          <div class="c-text-md c-text-bold">Justin Fisher</div>
          <div class="c-text-sm c-text-primary">justinfisher@company.com</div>
        </div>
        <a class="c-media-action c-media-action-visible" href="#">
          <i class="fas fa-ellipsis-h"></i>
        </a>
      </div>
      <div class="c-media c-media-middle">
        <div class="c-avatar c-avatar-lg c-avatar-square c-avatar-lime">
          <i class="fab fa-apple"></i>
        </div>
        <div class="c-media-body">
          <div class="c-text-md c-text-bold">Elvera Muller</div>
          <div class="c-text-sm c-text-primary">elveramuller@company.com</div>
        </div>
        <a class="c-media-action c-media-action-visible c-text-sm" href="#">
          <i class="fas fa-ellipsis-h"></i>
        </a>
      </div>
      <div class="c-media c-media-middle">
        <div class="c-avatar c-avatar-lg c-avatar-square c-avatar-orange">
          <i class="fab fa-amazon"></i>
        </div>
        <div class="c-media-body">
          <div class="c-text-md c-text-bold">Genoveva Leannon</div>
          <div class="c-text-sm c-text-primary">genovevaleannon@company.com</div>
        </div>
        <a class="c-media-action c-media-action-visible c-text-sm" href="#">
          <i class="fas fa-ellipsis-h"></i>
        </a>
      </div>
      <div class="c-media c-media-middle">
        <div class="c-avatar c-avatar-lg c-avatar-square c-avatar-grape">
          <i class="fab fa-xbox"></i>
        </div>
        <div class="c-media-body">
          <div class="c-text-md c-text-bold">Karine Simonis</div>
          <div class="c-text-sm c-text-primary">karinesimonis@company.com</div>
        </div>
        <a class="c-media-action c-media-action-visible c-text-sm" href="#">
          <i class="fas fa-ellipsis-h"></i>
        </a>
      </div>
    </div>

  </div>

  <div class="c-col-md-6 c-col-lg-4 c-p-sm">
    <div class="c-media-list c-media-list-bordered c-media-list-divided">
      <div class="c-media c-media-middle">
        <i class="fas fa-folder c-text-primary-3"></i>
        <div class="c-media-body">
          <div class="c-text-sm">2019 Accounting</div>
        </div>
        <a class="c-media-action c-media-action-visible c-text-sm" href="#">
          <i class="fas fa-ellipsis-h"></i>
        </a>
      </div>
      <div class="c-media c-media-middle">
        <i class="fas fa-folder c-text-primary-3"></i>
        <div class="c-media-body">
          <div class="c-text-sm">2019 Human Resources</div>
        </div>
        <a class="c-media-action c-media-action-visible c-text-sm" href="#">
          <i class="fas fa-ellipsis-h"></i>
        </a>
      </div>
      <div class="c-media c-media-middle">
        <i class="fas fa-file-alt c-text-gray-6"></i>
        <div class="c-media-body">
          <div class="c-text-sm">2019 Q4 Board Meeting Notes.docx</div>
        </div>
        <a class="c-media-action c-media-action-visible c-text-sm" href="#">
          <i class="fas fa-ellipsis-h"></i>
        </a>
      </div>
      <div class="c-media c-media-middle">
        <i class="fas fa-file-alt c-text-gray-6"></i>
        <div class="c-media-body">
          <div class="c-text-sm">2019_Q3_Board_Meeting_Agenda.pdf</div>
        </div>
        <a class="c-media-action c-media-action-visible c-text-sm" href="#">
          <i class="fas fa-ellipsis-h"></i>
        </a>
      </div>
    </div>

  </div>

</div>
{% endexample %}


{% example html %}
<div class="c-row c-bg-gray-1">
  <div class="c-col-md-5 c-col-lg-5 c-p-sm">
    <div class="c-media-list c-media-list-bordered c-media-list-divided">
      <div class="c-media">
        <div class="c-media-body">
          <div class="c-text-md c-text-bold">The Market Is 'Coming Back To Reality'.</div>
          <div class="c-text-sm">CNBC's Sara Eisen and Carl Quintanilla discuss Tuesday morning's market rally and the
            Fed with Brian Belski, chief investment strategist at BMO Capital Markets, and David Lebovitz, global
            market...</div>
        </div>
        <span class="c-avatar c-avatar-lg c-avatar-square" data-text="DS">
          <img src="https://unsplash.it/200?image=403">
        </span>
      </div>
      <div class="c-media">
        <div class="c-media-body">
          <div class="c-text-md c-text-bold">4 Stocks With Strength to Enhance Your Portfolio.</div>
          <div class="c-text-sm">“In the stock game, winning means reaching a higher price.” However, striking the right
            chord each time needs a fair amount of luck.</div>
        </div>
        <span class="c-avatar c-avatar-lg c-avatar-square" data-text="DS">
          <img src="https://unsplash.it/200?image=903">
        </span>
      </div>
      <div class="c-media">
        <div class="c-media-body">
          <div class="c-text-md c-text-bold">Judge Allows Lessor To Seek Seizure Of Avianca Planes.
          </div>
          <div class="c-text-sm">SAO PAULO, March 18 (Reuters) - A Brazilian appeals judge on Monday lifted an order
            that allowed struggling carrier Avianca Brasil to operate 10 of its planes despite missed leasing payments.
          </div>
        </div>
        <span class="c-avatar c-avatar-lg c-avatar-square" data-text="DS">
          <img src="https://unsplash.it/200?image=203">
        </span>
      </div>
      <div class="c-media">
        <div class="c-media-body">
          <div class="c-text-md c-text-bold">FedEx, Federal Reserve, AMD - 5 Things You Must Know.</div>
          <div class="c-text-sm">U.S. stock futures were down slightly on Wednesday, as investors awaited a key decision
            on interest rates and bond sales from the Federal Reserve and reacted to reports of potential tension in
            U.S...</div>
        </div>
        <span class="c-avatar c-avatar-lg c-avatar-square" data-text="DS">
          <img src="https://unsplash.it/200?image=703">
        </span>
      </div>
    </div>
  </div>

  <div class="c-col-md-4 c-col-lg-4 c-p-sm">
    <div class="c-media-list c-media-list-bordered c-media-list-divided c-media-list-hover">
      <div class="c-media c-media-middle">
        <i class="fas fa-folder c-text-primary-3"></i>
        <div class="c-media-body">
          <div class="c-text-sm">2019 Accounting</div>
        </div>
        <a href="#"><i class="fas fa-caret-right"></i></a>
      </div>
      <div class="c-media c-media-middle">
        <i class="fas fa-folder c-text-primary-3"></i>
        <div class="c-media-body">
          <div class="c-text-sm">2019 Human Resources</div>
        </div>
        <a href="#"><i class="fas fa-caret-down"></i></a>
      </div>
      <div class="c-media-body">
        <div class="c-text-sm"> U.S. stock futures were down slightly on Wednesday, as investors awaited a key decision
          on
          interest rates and bond sales from the Federal Reserve and reacted to reports of potential tension in U.S..
        </div>
      </div>
      <div class="c-media c-media-middle">
        <i class="fas fa-file-alt c-text-gray-6"></i>
        <div class="c-media-body">
          <div class="c-text-sm">2019 Q4 Board Meeting Notes.docx</div>
        </div>
        <a href="#"><i class="fas fa-caret-right"></i></a>
      </div>
      <div class="c-media c-media-middle">
        <i class="fas fa-file-alt c-text-gray-6"></i>
        <div class="c-media-body">
          <div class="c-text-sm">2019_Q3_Board_Meeting_Agenda.pdf</div>
        </div>
        <a href="#"><i class="fas fa-caret-right"></i></a>
      </div>
    </div>

  </div>

  <div class="c-col-md-3 c-col-lg-3 c-p-sm">
      <div class="c-media c-media-vertical c-p-md">
        <i class="fas fa-file-archive c-text-gray-6 c-m-sm" style="font-size: 35px;"></i>
        <p class="c-text-md c-p-vertical-xs">Here is your zip!</p>
        <em class="c-text-sm c-text-muted c-p-bottom-sm">2 mb</em>
        <a class="c-btn c-btn-primary c-btn-block" href="#">Download</a>
      </div>
    </div>

</div>
{% endexample %}



</div>
<!-- End Cupcake Code Tab -->

<!-- Start Angular Code Tab -->
<div id="angular" class="docs-tabs-content" markdown="1">

<div class="c-alert c-alert-warning">
  <i class="fa fa-exclamation-circle c-alert-icon" aria-hidden="true"></i>
    <div class="c-alert-content"><strong>
    Users must be permissioned to IHS Markit GitLab in order to view angular components.  
    <a href="https://confluence.ihsmarkit.com/pages/viewpage.action?spaceKey=DT&title=GitLab+-+Access">Gain access here</a>
      </strong>
    </div>
</div>

##### Storybook iframe
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/josh-easter/storybook-demo/?path=/story/basic-elements--avatar&full=0&addons=1&stories=0&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs&nav=0"></iframe>

</div>
<!-- End Angular Code Tab -->

<!-- Start Design Tab -->
<div id="guidelines" class="docs-tabs-content" markdown="1">

## Usage

Media objects can be stacked, nested, and aligned in various ways. This flexibility allows for various use cases across both desktop and mobile applications. 

**Common use cases include but are not limited to:**

- Avatar + Comments
- Social Media Posts
- RSS Feeds
- Message & Contact Lists
- Content + Tags
- Content + Pills
- Content + Icons
- Content + Controls
- Content + Buttons

<hr>

## Anatomy

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/" width="520px">

At their most basic level a media object must contain at least 1 object and some other form of content next to it. The exact layout can vary to support the specific use case and type of content being used. 


<hr>

## Variations

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/" width="520px">
Example: Stacked Media Objects

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/" width="520px">
Example: Nested Media Objects

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/" width="520px">
Example: Tiled Media Objects

<hr>

## Examples

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/" width="520px">
Example: Title + Content Preview + Image

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/" width="520px">
Example: Avatar + Contact Name

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/" width="520px">
Example: Icons + Description + Menu

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/" width="520px">
Example: Icon + Title + Subtitle + Numeric Badge




</div>
<!-- End Design Tab -->




