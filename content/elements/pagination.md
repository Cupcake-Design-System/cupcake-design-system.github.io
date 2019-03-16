---
title: Pagination
layout: docs
description: Pagination affords navigation between pages of content, and it highlights which page is currently in view.
group: elements
toc: true
sizes:
- sm
- xl
---

## Base

Use pagination to allow navigation between pages that represent an ordered collection of items.

{% example html %}
<ul class="c-pagination">
  <li><a href="" class="c-pagination-previous c-pagination-link"> </a></li>
  <li><a href="" class="c-pagination-link">1</a></li>
  <li><a href="" class="c-pagination-link c-pagination-current">2</a></li>
  <li><a href="" class="c-pagination-link">3</a></li>
  <li><a href="" class="c-pagination-link">4</a></li>
  <li><a href="" class="c-pagination-link c-pagination-ellipsis"></a></li>
  <li><a href="" class="c-pagination-link">12</a></li>
  <li><a href="" class="c-pagination-link">13</a></li>
  <li><a href="" class="c-pagination-link c-pagination-next"></a></li>
</ul>
{% endexample %}


## Size Examples

This is an example of available size's for the **{{ page.title }}** element.

{% example html %}
{% for size in page.sizes %}
<ul class="c-pagination c-pagination-{{ size }}">
  <li><a href="" class="c-pagination-previous c-pagination-link"> </a></li>
  <li><a href="" class="c-pagination-link">1</a></li>
  <li><a href="" class="c-pagination-link c-pagination-current">2</a></li>
  <li><a href="" class="c-pagination-link">3</a></li>
  <li><a href="" class="c-pagination-link">4</a></li>
  <li><a href="" class="c-pagination-link c-pagination-ellipsis"></a></li>
  <li><a href="" class="c-pagination-link">12</a></li>
  <li><a href="" class="c-pagination-link">13</a></li>
  <li><a href="" class="c-pagination-link c-pagination-next"></a></li>
</ul>
{% endfor %}
{% endexample %}
