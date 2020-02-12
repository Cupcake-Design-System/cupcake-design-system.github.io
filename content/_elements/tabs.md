---
title: Tabs
description: Tabs are a secondary navigation element used to organise content, allowing users to quickly navigate between different views or types of information in a single container. 
sizes:
- xs
- sm
- lg
- xl
tabs:
- Code
- Guidelines
---

<!-- Start Cupcake Code Tab -->
<div id="code" class="docs-tabs-content" markdown="1">

#### Base
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


**Fullwidth to stretch the entire container**
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

<hr>
<br>

#### Additional Sizes
Using additional sizes can help tighter layouts or with another element such as cards.
<br>

**Small**
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

**Large**
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

<hr>
<br>

#### Alignment
By default tabs are left aligned. Additional classes provide center and right alignment options.

**Center**
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

**Right**
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


<hr>
<br>


#### Additional Styles/Options


**Bordered**

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

<iframe title="storybook" width="100%" height="500px" src="http://cupcake-sprinkles.surge.sh/"></iframe>

</div>
<!-- End Angular Code Tab -->

<!-- Start Design Tab -->
<div id="guidelines" class="docs-tabs-content" markdown="1">

## Types & Usage

#### Standard tabs
Use the standard tabs for a full page or full panel content change.
<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/tabs/Tabs Example 1.png" width="520px;">

#### Bordered tabs
Use the bordered tabs when a specific area or space needs to be visually defined.
<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/tabs/Tabs Example 2.png" width="520px">

#### Labels
Tab labels should clearly state the content on each tab using as few words as possible.

<hr>

## Best Practices
- Text labels are always more effective than icons. While icons may be used to provide added context they should not be used in place of text. 
- Avoid using dropdown menus in tabs. If a tab requires additional sub-items consider using a different navigational approach. 
- Overflow patterns should be used only to provide responsive flexibility when the screen size can not support all the tabs. 

<hr>

## Examples

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/tabs/Tabs Example 6.png" width="520px">



<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/tabs/Tabs Example 6.png" width="520px">

**Example:** Icons can provide content to a tab but should always be used with text a label

<br>

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/tabs/Tabs Example 3.png" width="520px">

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/tabs/Tabs Example 4.png" width="520px">




**Example:** Overflow Tab Menu








</div>
<!-- End Design Tab -->


