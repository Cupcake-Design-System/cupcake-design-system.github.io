---
title: Loaders
description: Loader animations are used to indicate a transitional state where content is in the process of loading.
tabs:
- Code
- Angular
- Guidelines
---

<!-- Start Cupcake Code Tab -->
<div id="code" class="docs-tabs-content" markdown="1">

## Application loader

{% example html %}
<div class="c-card">
  <div class="c-card-content c-m-top-lg c-m-bottom-lg c-full-page-loader-logo">
  </div>
</div>
{% endexample %}

---

## Content Loader

{% example html %}
<div class="c-full-page-loader"></div>
{% endexample %}

---

## Skeleton Loaders

{% example html %}
<div class="c-card">
    <div class="c-card-content">
      <div class="c-skeleton-loading"></div>
      <hr class="c-hr">
      <div class="c-skeleton-loading"></div>
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

### Basic Loader
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/ipreo/sprinkles/?path=/story/components-loaders--basic&nav=0"></iframe>

<br>

### IHS Markit Loader
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/ipreo/sprinkles/?path=/story/components-loaders--ihs-markit&nav=0"></iframe>

</div>
<!-- End Angular Code Tab -->

<!-- Start Design Guidelines Tab -->
<div id="guidelines" class="docs-tabs-content" markdown="1">

# Overview

### Placement & Behaviour
All loaders sit vertically and horizontally centered in a container. The animation repeats indeterminately until the relevant content is loaded, at which point it is replaced.

### Best Practices
- Do not scale the animation icon

- Always centre the icon in the container

- Use loader icons only on white or light grey backgrounds

- Do not combine the loader icon with text

### Types & Usage 

<table class="c-table c-table-transparent c-table-border-full c-table-hover">
<thead>
    <tr>
      <th width="150">Type</th>
      <th width="400">Usage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Application loader</td>
      <td>
      Used on initial application load ie. when a user signs into their account or a page is shared with an external party
      </td>
    </tr>
     <tr>
      <td>Content Loader</td>
      <td>
      Used when loading all content within the content area of a page or a container, usually when navigating within the same application
      </td>
    </tr>
    <tr>
      <td>Skeleton Loader</td>
      <td>
      Used when loading smaller repeat pieces of content, like lists or table data
      </td>
    </tr>
  </tbody>
</table>

<hr>

## Examples

**An application loader displays while an application loads**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/loaders/new-format/application-loader-example@2x.png" width="50%">

<br>

**A content loader displays while the contents of a container loads**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/loaders/new-format/content-loader-example-single@2x.png" width="50%">

<br>

**Multiple content loaders display in cards while each cards's content loads in isolation**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/loaders/new-format/content-loader-example-multiple@2x.png" width="50%">

<br>

**Use of a skeleton loader indicates that list-based information will load into this card**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/loaders/new-format/skeleton-loader-example-1@2x.png" width="50%">

<br>

**A skeleton loader is recommended for use as a loader that precludes table content**

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/loaders/new-format/skeleton-loader-example-2@2x.png" width="50%">

</div>
<!-- End Design Guidelines Tab -->