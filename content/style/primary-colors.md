---
layout: docs-fullwidth
title: Primary Colors
description: Convey meaning through color with a handful of color utility classes. Includes support for styling backgrounds, text, and borders.
group: style
colors:
- gray
- primary
- success
- warning
- danger
primary-hexs:
- "#e8f7ff"
- "#ccedff"
- "#a3daff"
- "#72c3fc"
- "#4dadf7"
- "#329af0"
- "#228ae6"
- "#1c7cd6"
- "#1b6ec2"
- "#1862ab"
gray-hexs:
- "#f8f9fa"
- "#f1f3f5"
- "#e9ecef"
- "#dee2e6"
- "#ced4da"
- "#adb5bd"
- "#868e96"
- "#495057"
- "#343a40"
- "#212529"
success-hexs:
- "#ebfbee"
- "#d3f9d8"
- "#b2f2bb"
- "#8ce99a"
- "#69db7c"
- "#51cf66"
- "#40c057"
- "#37b24d"
- "#2f9e44"
- "#2b8a3e"
danger-hexs:
- "#fff5f5"
- "#ffe3e3"
- "#ffc9c9"
- "#ffa8a8"
- "#ff8787"
- "#ff6b6b"
- "#fa5252"
- "#f03e3e"
- "#e03131"
- "#c92a2a"
warning-hexs:
- "#fff9db"
- "#fff3bf"
- "#ffec99"
- "#ffe066"
- "#ffd43b"
- "#fcc419"
- "#fab005"
- "#f59f00"
- "#f08c00"
- "#e67700"
---

## Primary Colors

The primary colors are the colors used throughout Cupcake's elements and components that help give visual context, emphasize meaning and to aesthetically style the user interface.

We have included styling classes for you that support varying hues and brightness of the base colors shown below on the far left. These styling classes style the fill color of elements ("-bg-"), fonts or font-based icons ("-text-") and borders ("-bd-").

- .c-bg-{color-name}-{color-shade}
- .c-text-{color-name}-{color-shade}
- .c-bd-{color-name}-{color-shade}

<section class="color-list">
  {% for color in page.colors %}
  <div class="color-block">
    <div class="colors">
      {% assign idx = color | append: '-hexs' %} {% for i in (0..9) %}
      <span id="clipboardItem" class="c-bg-{{ color }}-{{ i }}" data-clipboard-text="c-bg-{{ color }}-{{ i }}" tooltip="Copy BG Class"></span>
      {% endfor %}
    </div>
    <h3>{{ page['colors'][forloop.index0] }}</h3>
    <ul>
      {% assign idx = color | append: '-hexs' %} {% for i in (0..9) %}
      <li id="clipboardItem" tooltip="Copy Hex" data-clipboard-text="{{ page[idx][i] }}">{{ page[idx][i] }}</li>
      {% endfor %}
    </ul>
  </div>
  {% endfor %}
</section>
