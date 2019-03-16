---
title: Card
layout: docs
description: Cards provide a flexible and extensible content container with multiple options and variants.
group: elements
toc: true
colors:
- primary
- success
- warning
- danger
---

## Intro
Cards are used to group similar concepts and tasks together to make the software easier for users to scan, read, and get things done.

Cards can include headers, footers, a wide variety of content and card-specific styles.

Cards can also have specialist functionality when used in a specific context.

## Base
The base card provides a simple container with padding, borders, background, text values

{% example html %}
<div class="c-card">
  <div class="c-card-content">
    <div class="c-card-content-title">Lorem ipsum dolor sit amet consecteur.</div>
    <div class="c-card-content-subtitle">Lorem ipsum dolor sit amet consectetur.</div>
    <div class="c-card-content-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis luctus dui, ac suscipit eros. Praesent fringilla,
      enim quis placerat dignissim, turpis metus vehicula lectus, faucibus tie turpis metus et urna. Quisque dignissim nulla
      id scelerisque maximus. Praesent consectetur rhoncus mi, eget sollicitudin leo placerat in. Sed semper commodo dui,
      et iaculis est facil isis nec.</div>
  </div>
</div>
{% endexample %}

### With Header

Cards can include headers, footers, a wide variety of content and card-specific styles.

{% example html %}
<div class="c-card">
  <header class="c-card-header">
    <div class="c-card-header-title">
      Component
    </div>
    <div class="c-card-header-menu">
    	<div class="c-card-header-menu-item">
    		<a class="c-btn c-btn-box c-btn-secondary" href=""><i class="fas fa-cog" aria-hidden="true"></i></a>
    	</div>
    	<div class="c-card-header-menu-item">
    		<a class="c-btn c-btn-box c-btn-secondary" href=""><i class="fas fa-cog" aria-hidden="true"></i></a>
    	</div>
    </div>
  </header>
  <div class="c-card-content">
    <div class="c-card-content-title">Lorem ipsum dolor sit amet consecteur.</div>
    <div class="c-card-content-subtitle">Lorem ipsum dolor sit amet consectetur.</div>
    <div class="c-card-content-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis luctus dui, ac suscipit eros. Praesent fringilla,
      enim quis placerat dignissim, turpis metus vehicula lectus, faucibus tie turpis metus et urna. Quisque dignissim nulla
      id scelerisque maximus. Praesent consectetur rhoncus mi, eget sollicitudin leo placerat in. Sed semper commodo dui,
      et iaculis est facil isis nec.</div>
  </div>
</div>
{% endexample %}


### Header and Footer


{% example html %}
<div class="c-card">
  <header class="c-card-header">
    <div class="c-card-header-title">
      Component
    </div>
    <div class="c-card-header-menu">
      <a class="c-btn c-btn-box c-btn-secondary" href=""><i class="fas fa-cog" aria-hidden="true"></i></a>
    </div>
  </header>
  <div class="c-card-content">
    <div class="c-card-content-title">Lorem ipsum dolor sit amet consecteur.</div>
    <div class="c-card-content-subtitle">Lorem ipsum dolor sit amet consectetur.</div>
    <div class="c-card-content-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis luctus dui, ac suscipit eros. Praesent fringilla,
      enim quis placerat dignissim, turpis metus vehicula lectus, faucibus tie turpis metus et urna. Quisque dignissim nulla
      id scelerisque maximus. Praesent consectetur rhoncus mi, eget sollicitudin leo placerat in. Sed semper commodo dui,
      et iaculis est facil isis nec.</div>
  </div>
  <div class="c-card-footer">Footer if needed</div>
</div>
{% endexample %}



### Colors

This is an example of available colors for the **{{ page.title }}** element. 

{% example html %}
{% for color in page.colors %}
<div class="c-card c-card-{{ color }}">
  <header class="c-card-header">
    <div class="c-card-header-title">
      Component
    </div>
    <div class="c-card-header-menu">
      <a class="c-btn c-btn-box c-btn-secondary" href=""><i class="fas fa-cog" aria-hidden="true"></i></a>
    </div>
  </header>
  <div class="c-card-content">
    <div class="c-card-content-title">Lorem ipsum dolor sit amet consecteur.</div>
    <div class="c-card-content-subtitle">Lorem ipsum dolor sit amet consectetur.</div>
    <div class="c-card-content-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis luctus dui, ac suscipit eros. Praesent fringilla,
      enim quis placerat dignissim, turpis metus vehicula lectus, faucibus tie turpis metus et urna. Quisque dignissim nulla
      id scelerisque maximus. Praesent consectetur rhoncus mi, eget sollicitudin leo placerat in. Sed semper commodo dui,
      et iaculis est facil isis nec.</div>
  </div>
  <div class="c-card-footer">Footer if needed</div>
</div>
{% endfor %}
{% endexample %}



## UX Guidance

### Structure

{% include guide-img.html img='card/card-structure'%}

Dashboard cards generally conform to the following criteria:

- the cards are stacked in a card deck
- the cards display in fixed width and height
- the card heading is a modified link
- the card is drag-and-drop enabled
- the card has a settings icon and overlay


### Titles
{% include guide-img.html img='card/card-dont'%}

### Size
{% include guide-img.html img='card/card-size'%}


### Content
{% include guide-img.html img='card/card-content'%}