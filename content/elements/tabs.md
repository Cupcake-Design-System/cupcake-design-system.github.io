---
title: Tabs
layout: docs
description: Tabs keep related content in a single container
group: elements
toc: true
---

## Base

Use tabs to alternate among related views within the same context.

{% example html %}
<ul class="c-tabs">
  <li class="c-tab-item">
    <a class="c-tab-item-link" href="">Rock</a>
  </li>
  <li class="c-tab-item">
    <a class="c-tab-item-link c-tab-item-link-active" href="">Paper</a>
  </li>
  <li class="c-tab-item">
    <a class="c-tab-item-link" href="">Scissors</a>
  </li>
  <li class="c-tab-item">
    <a class="c-tab-item-link" href="">Spock</a>
  </li>
</ul>
{% endexample %}


## Size Examples

This is an example of available sizes for the **{{ page.title }}** element.

### Small
{% example html %}
<ul class="c-tabs c-tabs-sm">
  <li class="c-tab-item">
    <a class="c-tab-item-link" href="">Rock</a>
  </li>
  <li class="c-tab-item">
    <a class="c-tab-item-link c-tab-item-link-active" href="">Paper</a>
  </li>
  <li class="c-tab-item">
    <a class="c-tab-item-link" href="">Scissors</a>
  </li>
  <li class="c-tab-item">
    <a class="c-tab-item-link" href="">Spock</a>
  </li>
</ul>
{% endexample %}

### Large
{% example html %}
<ul class="c-tabs c-tabs-lg">
  <li class="c-tab-item">
    <a class="c-tab-item-link" href="">Rock</a>
  </li>
  <li class="c-tab-item">
    <a class="c-tab-item-link c-tab-item-link-active" href="">Paper</a>
  </li>
  <li class="c-tab-item">
    <a class="c-tab-item-link" href="">Scissors</a>
  </li>
  <li class="c-tab-item">
    <a class="c-tab-item-link" href="">Spock</a>
  </li>
</ul>
{% endexample %}


## Additional Styles/Options

### Fullwidth
{% example html %}
<ul class="c-tabs c-tabs-fullwidth">
  <li class="c-tab-item">
    <a class="c-tab-item-link" href>
      <i class="fas fa-hand-rock" aria-hidden="true"></i> Rock
    </a>
  </li>
  <li class="c-tab-item">
    <a class="c-tab-item-link c-tab-item-link-active" href>
      <i class="fas fa-hand-paper" aria-hidden="true"></i> Paper
    </a>
  </li>
  <li class="c-tab-item">
    <a class="c-tab-item-link" href>
      <i class="fas fa-hand-scissors" aria-hidden="true"></i> Scissors
    </a>
  </li>
  <li class="c-tab-item">
    <a class="c-tab-item-link" href>
      <i class="fas fa-hand-spock" aria-hidden="true"></i> Spock
    </a>
  </li>
</ul>
{% endexample %}

### Toggle
{% example html %}
<ul class="c-tabs c-tabs-right">
  <li class="c-tab-item">
    <a class="c-tab-item-link" href>
      <i class="fas fa-hand-rock" aria-hidden="true"></i> Rock
    </a>
  </li>
  <li class="c-tab-item">
    <a class="c-tab-item-link c-tab-item-link-active" href>
      <i class="fas fa-hand-paper" aria-hidden="true"></i> Paper
    </a>
  </li>
  <li class="c-tab-item">
    <a class="c-tab-item-link" href>
      <i class="fas fa-hand-scissors" aria-hidden="true"></i> Scissors
    </a>
  </li>
  <li class="c-tab-item">
    <a class="c-tab-item-link" href>
      <i class="fas fa-hand-spock" aria-hidden="true"></i> Spock
    </a>
  </li>
</ul>
{% endexample %}

### Bordered
{% example html %}
<ul class="c-tabs c-tabs-bordered">
  <li class="c-tab-item">
    <a class="c-tab-item-link" href>
      <i class="fas fa-hand-rock" aria-hidden="true"></i> Rock
    </a>
  </li>
  <li class="c-tab-item">
    <a class="c-tab-item-link c-tab-item-link-active" href>
      <i class="fas fa-hand-paper" aria-hidden="true"></i> Paper
    </a>
  </li>
  <li class="c-tab-item">
    <a class="c-tab-item-link" href>
      <i class="fas fa-hand-scissors" aria-hidden="true"></i> Scissors
    </a>
  </li>
  <li class="c-tab-item">
    <a class="c-tab-item-link" href>
      <i class="fas fa-hand-spock" aria-hidden="true"></i> Spock
    </a>
  </li>
</ul>
{% endexample %}


## Alignment
### Center
{% example html %}
<ul class="c-tabs c-tabs-center">
  <li class="c-tab-item">
    <a class="c-tab-item-link" href>
      <i class="fas fa-hand-rock" aria-hidden="true"></i> Rock
    </a>
  </li>
  <li class="c-tab-item">
    <a class="c-tab-item-link c-tab-item-link-active" href>
      <i class="fas fa-hand-paper" aria-hidden="true"></i> Paper
    </a>
  </li>
  <li class="c-tab-item">
    <a class="c-tab-item-link" href>
      <i class="fas fa-hand-scissors" aria-hidden="true"></i> Scissors
    </a>
  </li>
  <li class="c-tab-item">
    <a class="c-tab-item-link" href>
      <i class="fas fa-hand-spock" aria-hidden="true"></i> Spock
    </a>
  </li>
</ul>
{% endexample %}

### Right
{% example html %}
<ul class="c-tabs c-tabs-right">
  <li class="c-tab-item">
    <a class="c-tab-item-link" href>
      <i class="fas fa-hand-rock" aria-hidden="true"></i> Rock
    </a>
  </li>
  <li class="c-tab-item">
    <a class="c-tab-item-link c-tab-item-link-active" href>
      <i class="fas fa-hand-paper" aria-hidden="true"></i> Paper
    </a>
  </li>
  <li class="c-tab-item">
    <a class="c-tab-item-link" href>
      <i class="fas fa-hand-scissors" aria-hidden="true"></i> Scissors
    </a>
  </li>
  <li class="c-tab-item">
    <a class="c-tab-item-link" href>
      <i class="fas fa-hand-spock" aria-hidden="true"></i> Spock
    </a>
  </li>
</ul>
{% endexample %}