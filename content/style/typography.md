---
layout: docs
title: Typography
description: Documentation and examples for Cupcake typography, including global settings, headings, body text, lists, and more.
group: style
toc: true
colors:
- gray
- primary
- success
- warning
- danger
sizes:
- xs
- sm
- md
- lg
- xl
- xxl
---

## Typeface: Arial

Arial, is arguably the best universal multi-purpose font. Arial is 98% web safe - meaning almost every platform has it installed out of the box. This is the default font. This should be used unless otherwise directed by a UX Designer.

It renders consistently across various operating systems and browsers. And users behind a firewall do not need info-sec or IT to download and install an additional font.

#### Default sans-serif font stacks

```font-family:  Arial, Helvetica, sans-serif;```

---

## Typeface: Source Sans

Source® Sans Pro, Adobe's first open source typeface family, was designed by Paul D. Hunt. It is a sans serif typeface intended to work well in user interfaces.

This is the default for the BD Flavor.

#### BD Flavor sans-serif font stacks

```font-family:  'Source Sans Pro', Arial, Helvetica, sans-serif;```


## Typescale

Too many type sizes and styles at once can wreck any layout. Cupcake provides a constrained, purposeful set of typographic styles. These styles map as much as possible to functional roles so you know when each can be used.

The basic set of styles are based on a typographic scale of 10, 12, 14, 18, 20, and 34.

By consistently tying typographic styles to appropriate functions in the interface, we create a clear visual pattern.


### Body

{% example html %}
{% for size in page.sizes %}
<div class="c-text-{{ size }}">This is {{ size }} text</div>{% endfor %}
{% endexample %}

### Header

Heading should be used for titles of top-level sections of a screen or section.

{% example html %}
{% for size in page.sizes %}
<div class="c-header-{{ size }}">This is the {{ size }} header</div>{% endfor %}
{% endexample %}


## Emphasis

To communicate content hierarchy, use the core typographic scale first. Once the main hierarchy is established, if two pieces of text of the same style have different positions in the content hierarchy, additional styles may be used to emphasize or de-emphasize one of them. 


### Muted
Muted content isn’t unimportant or superfluous, but rather makes room for the eye to orient itself and focus on core content.

{% example html %}
<div class="c-header-lg">I'm a Header <span class="c-text-muted"> I am muted</span></div>
{% endexample %}

In general, avoid using muted on its own, when not contrasting with other text from the same part of the type scale. There are exceptions: muted may be used for standalone content when it represents a non-actionable or otherwise unimportant state of something, i.e. when the normal content is absent.


### Bold

Default text styles have a normal font weight. You can add emphasis in context by adding a bold style.

{% example html %}
<div class="c-text-lg">This is normal text<span class="c-text-bold"> This text is bold.</span></div>
{% endexample %}


### Additional Styles

Additional text helpers also available.

{% example html %}
<div class="c-text-lg c-a">This is a link</div>
<div class="c-text-lg c-text-capitalize">this is capitalized</div>
<div class="c-text-lg c-text-italic">This is italic</div>
<div class="c-header-xs">This header is bold <span class="c-text-light">yet this has.c-text-light applied</span>
</div>
{% endexample %}

### Text Styles

Additional text colors can also be used (sparingly). **Please use care when adding a text color and ensure it creates suitable contrast.**

<section>
  {% for color in page.colors %}
  <div class="c-d-inline-block">
    <span class="c-d-block c-m-md">
      {% assign idx = color | append: '-hexs' %} {% for i in (0..9) %}
      <span class="c-d-block c-text-{{ color }}-{{ i }}">.c-text-{{ color }}-{{ i }}</span>
      {% endfor %}
    </span>
  </div>
  {% endfor %}
</section>
