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
<div class="c-row">
        {% assign items = cat.items | sort: 'weight' %}
        {% for item in items %}
<div class="c-col-12 c-col-lg-3 c-m-bottom-lg">
    <div class="c-card">
      <header class="c-card-header">
        <a class="docs-article-image" href="{{site.url}}{{site.baseurl}}{{ item.url }}" style="background-color: #7950f2">
          <span class="docs-article-overlay"></span>
          <span class="docs-article-icon">
            <span class="icon">
              <i class="fal fa-cog"></i>
            </span>
          </span>
        <strong class="docs-article-title" style="font-size: 20px;">
            {{ item.title }}
          </strong>
        </a>
      </header>
    </div>
  </div>
    {% endfor %}
  </div>      
{% endfor %}
