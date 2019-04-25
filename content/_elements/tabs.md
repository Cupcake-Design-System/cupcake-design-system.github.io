---
title: Tabs
description: Tabs keep related content in a single container
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


