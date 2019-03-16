---
title: Overview
description: Quickly get a project started with any of our examples ranging from using parts of the framework to custom components and layouts.
weight: 1
---

{% if page.group == "elements" %}
  {% assign items = site.elements | group_by: 'category' %}
{% elsif page.group == "patterns" %}
  {% assign items = site.patterns | group_by: 'category' %}
{% elsif page.group == "getting-started" %}
  {% assign items = site.getting-started | group_by: 'category' %}
{% endif %}


{% for cat in items %}
<h2>{{ cat.name | capitalize }}</h2>
<ul>
  {% assign items = cat.items | sort: 'weight' %}
  {% for item in items %}
  <li>
    <a href="{{ item.url }}">
      {{ item.title }}
    </a>
  </li>
  {% endfor %}
</ul>
{% endfor %}
