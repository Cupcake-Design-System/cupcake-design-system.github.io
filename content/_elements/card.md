---
title: Card
description: Cards provide a flexible and extensible content container with multiple options and variants.
tabs:
- Code
- Angular
- Guidelines
---

<!-- Start Cupcake Code Tab -->
<div id="code" class="docs-tabs-content" markdown="1">

### Intro
Cards are used to group similar concepts and tasks together to make the software easier for users to scan, read, and get things done.

Cards can include headers, footers, a wide variety of content and card-specific styles.

Cards can also have specialist functionality when used in a specific context.

<br>

#### Base
The base card provides a simple container with padding, borders, background, text values

{% example html %}
<div class="c-card">
  <div class="c-card-content">
    <div class="c-card-content-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis luctus dui, ac suscipit eros. Praesent fringilla,
      enim quis placerat dignissim, turpis metus vehicula lectus, faucibus tie turpis metus et urna. Quisque dignissim nulla
      id scelerisque maximus. Praesent consectetur rhoncus mi, eget sollicitudin leo placerat in. Sed semper commodo dui,
      et iaculis est facil isis nec.</div>
  </div>
</div>
{% endexample %}

<hr>
<br>


#### With Hover
Adding a hover class provides the styles for hover interactions.

{% example html %}
<div class="c-card c-card-hover">
  <div class="c-card-content">
    <div class="c-card-content-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis luctus dui, ac suscipit eros. Praesent fringilla,
      enim quis placerat dignissim, turpis metus vehicula lectus, faucibus tie turpis metus et urna. Quisque dignissim nulla
      id scelerisque maximus. Praesent consectetur rhoncus mi, eget sollicitudin leo placerat in. Sed semper commodo dui,
      et iaculis est facil isis nec.</div>
  </div>
</div>
{% endexample %}

<hr>
<br>

#### With Header

Cards can include headers, footers, a wide variety of content and card-specific styles.

{% example html %}
<div class="c-row">

  <div class="c-col-md-4">
    <div class="c-card">
      <header class="c-card-header">
        <div class="c-card-header-title">
          Card Title
        </div>
      </header>
      <div class="c-card-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis luctus dui,
        ac suscipit eros. Praesent fringilla,
        enim quis placerat dignissim, turpis metus vehicula lectus, faucibus tie turpis metus et urna. Quisque
        dignissim nulla
        id scelerisque maximus. Praesent consectetur rhoncus mi, eget sollicitudin leo placerat in. Sed semper commodo
        dui,
        et iaculis est facil isis nec.
      </div>
    </div>
  </div>

  <div class="c-col-md-4">
    <div class="c-card">
      <header class="c-card-header">
        <div class="c-card-header-title">
          Card Title
        </div>
        <div class="c-card-header-menu">
          <a class="c-btn c-btn-secondary c-btn-sm c-btn-box">
            <i class="fa fa-expand"></i>
          </a>
          <a class="c-btn c-btn-secondary c-btn-sm c-btn-box">
            <i class="fa fa-cog"></i>
          </a>
        </div>
      </header>
      <div class="c-card-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis luctus dui,
        ac suscipit eros. Praesent fringilla,
        enim quis placerat dignissim, turpis metus vehicula lectus, faucibus tie turpis metus et urna. Quisque
        dignissim nulla
        id scelerisque maximus. Praesent consectetur rhoncus mi, eget sollicitudin leo placerat in. Sed semper commodo
        dui,
        et iaculis est facil isis nec.
      </div>
    </div>
  </div>

  <div class="c-col-md-4">
    <div class="c-card">
      <header class="c-card-header">
        <div class="c-card-header-title">
          Card Title
        </div>
        <div class="c-card-header-menu">
          <button class="c-btn c-btn-sm c-btn-primary">Button</button>
        </div>
      </header>
      <div class="c-card-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis luctus dui,
        ac suscipit eros. Praesent fringilla,
        enim quis placerat dignissim, turpis metus vehicula lectus, faucibus tie turpis metus et urna. Quisque
        dignissim nulla
        id scelerisque maximus. Praesent consectetur rhoncus mi, eget sollicitudin leo placerat in. Sed semper commodo
        dui,
        et iaculis est facil isis nec.
      </div>
    </div>
  </div>

</div>
{% endexample %}

**You can also add a subtitle and the right menu items will stay aligned.**

{% example html %}
<div class="c-row">
    <div class="c-col-md-4">
      <div class="c-card">
        <header class="c-card-header">
          <div class="c-card-header-title">
            Card Title
          </div>
          <div class="c-card-header-subtitle">
            Card Subtitle
          </div>
        </header>
        <div class="c-card-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis luctus dui,
          ac suscipit eros. Praesent fringilla,
          enim quis placerat dignissim, turpis metus vehicula lectus, faucibus tie turpis metus et urna. Quisque
          dignissim nulla
          id scelerisque maximus. Praesent consectetur rhoncus mi, eget sollicitudin leo placerat in. Sed semper commodo
          dui,
          et iaculis est facil isis nec.
        </div>
      </div>
    </div>
    <div class="c-col-md-4">
      <div class="c-card">
        <header class="c-card-header">
          <div class="c-card-header-title">
            Card Title
          </div>
          <div class="c-card-header-subtitle">
            Card Subtitle
          </div>
          <div class="c-card-header-menu">
            <a class="c-btn c-btn-secondary c-btn-sm c-btn-box" href="#">
              <i class="fa fa-expand" aria-hidden="true"></i>
            </a>
            <a class="c-btn c-btn-secondary c-btn-sm c-btn-box" href="#">
              <i class="fa fa-cog" aria-hidden="true"></i>
            </a>
          </div>
        </header>
        <div class="c-card-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis luctus dui,
          ac suscipit eros. Praesent fringilla,
          enim quis placerat dignissim, turpis metus vehicula lectus, faucibus tie turpis metus et urna. Quisque
          dignissim nulla
          id scelerisque maximus. Praesent consectetur rhoncus mi, eget sollicitudin leo placerat in. Sed semper commodo
          dui,
          et iaculis est facil isis nec.
        </div>
      </div>
    </div>
    <div class="c-col-md-4">
      <div class="c-card">
        <header class="c-card-header">
          <div class="c-card-header-title">
            Card Title
          </div>
          <div class="c-card-header-subtitle">
            Card Subtitle
          </div>
          <div class="c-card-header-menu">
            <button class="c-btn c-btn-primary">Button</button>
          </div>
        </header>
        <div class="c-card-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis luctus dui,
          ac suscipit eros. Praesent fringilla,
          enim quis placerat dignissim, turpis metus vehicula lectus, faucibus tie turpis metus et urna. Quisque
          dignissim nulla
          id scelerisque maximus. Praesent consectetur rhoncus mi, eget sollicitudin leo placerat in. Sed semper commodo
          dui,
          et iaculis est facil isis nec.
        </div>
      </div>
    </div>
</div>
{% endexample %}


<hr>
<br>

#### Header and Footer

{% example html %}
<div class="c-card">
<header class="c-card-header">
  <div class="c-card-header-title">
    Card Title
  </div>
  <div class="c-card-header-subtitle">
    Card Subtitle
  </div>
  <div class="c-card-header-menu">
    <a class="c-btn c-btn-secondary c-btn-sm c-btn-box" href="#">
      <i class="fa fa-expand" aria-hidden="true"></i>
    </a>
    <a class="c-btn c-btn-secondary c-btn-sm c-btn-box" href="#">
      <i class="fa fa-cog" aria-hidden="true"></i>
    </a>
  </div>
</header>
  <div class="c-card-content">
    <div class="c-card-content-title">Lorem ipsum dolor sit amet consecteur.</div>
    <div class="c-card-content-subtitle">Lorem ipsum dolor sit amet consectetur.</div>
    <div class="c-card-content-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis luctus dui, ac
      suscipit eros. Praesent fringilla,
      enim quis placerat dignissim, turpis metus vehicula lectus, faucibus tie turpis metus et urna. Quisque dignissim
      nulla
      id scelerisque maximus. Praesent consectetur rhoncus mi, eget sollicitudin leo placerat in. Sed semper commodo
      dui,
      et iaculis est facil isis nec.</div>
  </div>
  <div class="c-card-footer">
    <div class="c-card-footer-item c-card-footer-item-left">
      <button class="c-btn c-btn-sm c-btn-primary">Button</button>
    </div>
    <a class="c-card-footer-item c-card-footer-item-center" href="#">
      Card Footer Link
    </a>
    <div class="c-card-footer-item c-card-footer-item-right">
      <button class="c-btn c-btn-sm c-btn-primary">Button</button>
    </div>
  </div>
</div>
{% endexample %}


<hr>
<br>

#### Card Group
Cards can be grouped together.

{% example html %}
<div class="c-card-group">
  <div class="c-card">
    <div class="c-card-content">
      <div class="c-card-content-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis luctus dui, ac suscipit eros. Praesent fringilla,
        enim quis placerat dignissim, turpis metus vehicula lectus, faucibus tie turpis metus et urna. Quisque dignissim
        nulla id scelerisque maximus. Praesent consectetur rhoncus mi, eget sollicitudin leo placerat in. Sed semper commodo
        dui, et iaculis est facil isis nec.</div>
    </div>
  </div>

  <div class="c-card">
    <div class="c-card-content">
      <div class="c-card-content-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis luctus dui, ac suscipit eros. Praesent fringilla,
        enim quis placerat dignissim, turpis metus vehicula lectus, faucibus tie turpis metus et urna. Quisque dignissim
        nulla id scelerisque maximus. Praesent consectetur rhoncus mi, eget sollicitudin leo placerat in. Sed semper commodo
        dui, et iaculis est facil isis nec.</div>
    </div>
  </div>

  <div class="c-card">
    <div class="c-card-content">
      <div class="c-card-content-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis luctus dui, ac suscipit eros. Praesent fringilla,
        enim quis placerat dignissim, turpis metus vehicula lectus, faucibus tie turpis metus et urna. Quisque dignissim
        nulla id scelerisque maximus. Praesent consectetur rhoncus mi, eget sollicitudin leo placerat in. Sed semper commodo
        dui, et iaculis est facil isis nec.
      </div>
    </div>
  </div>
</div>
{% endexample %}


**Remove gutters from the card group with a collapsed class.**

{% example html %}
<div class="c-card-group-collapsed">
  <div class="c-card">
    <div class="c-card-content">
      <div class="c-card-content-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis luctus dui, ac suscipit eros. Praesent fringilla,
        enim quis placerat dignissim, turpis metus vehicula lectus, faucibus tie turpis metus et urna. Quisque dignissim
        nulla id scelerisque maximus. Praesent consectetur rhoncus mi, eget sollicitudin leo placerat in. Sed semper commodo
        dui, et iaculis est facil isis nec.</div>
    </div>
  </div>

  <div class="c-card">
    <div class="c-card-content">
      <div class="c-card-content-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis luctus dui, ac suscipit eros. Praesent fringilla,
        enim quis placerat dignissim, turpis metus vehicula lectus, faucibus tie turpis metus et urna. Quisque dignissim
        nulla id scelerisque maximus. Praesent consectetur rhoncus mi, eget sollicitudin leo placerat in. Sed semper commodo
        dui, et iaculis est facil isis nec.</div>
    </div>
  </div>
  
  <div class="c-card">
    <div class="c-card-content">
      <div class="c-card-content-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis luctus dui, ac suscipit eros. Praesent fringilla,
        enim quis placerat dignissim, turpis metus vehicula lectus, faucibus tie turpis metus et urna. Quisque dignissim
        nulla id scelerisque maximus. Praesent consectetur rhoncus mi, eget sollicitudin leo placerat in. Sed semper commodo
        dui, et iaculis est facil isis nec.
      </div>
    </div>
  </div>
</div>
{% endexample %}

</div>
<!-- End Cupcake Code Tab -->

<!-- Start Angular Code Section -->
<div id="angular" class="docs-tabs-content" markdown="1">

#### Card
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/ipreo/sprinkles/?path=/story/components--cards&nav=0"></iframe>

</div>
<!-- End Angular Code Section -->

<!-- Start Design Guidelines Tab -->
<div id="guidelines" class="docs-tabs-content" markdown="1">

#Overview

#### Structure

{% include guide-img.html img='elements/card/card-structure'%}

Dashboard cards generally conform to the following criteria:

- the cards are stacked in a card deck
- the cards display in fixed width and height
- the card heading is a modified link
- the card is drag-and-drop enabled
- the card has a settings icon and overlay


#### Titles
{% include guide-img.html img='elements/card/card-dont'%}

#### Size
{% include guide-img.html img='elements/card/card-size'%}


#### Content
{% include guide-img.html img='elements/card/card-content'%}

</div>
<!-- End Design Guidelines Tab -->

