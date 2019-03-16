---
layout: docs-fullwidth
title: Extended Colors
description: Additional supporting colors.
group: style
colors:
- pink
- grape
- violet
- indigo
- cyan
- teal
- lime
- orange
- yellow
cyan-hexs: 
- "#e3fafc"
- "#c5f6fa"
- "#99e9f2"
- "#66d9e8"
- "#3bc9db"
- "#22b8cf"
- "#15aabf"
- "#1098ad"
- "#0c8599"
- "#0b7285"
grape-hexs: 
- "#f8f0fc"
- "#f3d9fa"
- "#eebefa"
- "#e599f7"
- "#da77f2"
- "#cc5de8"
- "#be4bdb"
- "#ae3ec9"
- "#9c36b5"
- "#862e9c"
indigo-hexs: 
- "#edf2ff"
- "#dbe4ff"
- "#bac8ff"
- "#91a7ff"
- "#748ffc"
- "#5c7cfa"
- "#4c6ef5"
- "#4263eb"
- "#3b5bdb"
- "#364fc7"
lime-hexs: 
- "#f4fce3"
- "#e9fac8"
- "#d8f5a2"
- "#c0eb75"
- "#a9e34b"
- "#94d82d"
- "#82c91e"
- "#74b816"
- "#66a80f"
- "#5c940d"
orange-hexs: 
- "#fff4e6"
- "#ffe8cc"
- "#ffd8a8"
- "#ffc078"
- "#ffa94d"
- "#ff922b"
- "#fd7e14"
- "#f76707"
- "#e8590c"
- "#d9480f"
pink-hexs: 
- "#fff0f6"
- "#ffdeeb"
- "#fcc2d7"
- "#faa2c1"
- "#f783ac"
- "#f06595"
- "#e64980"
- "#d6336c"
- "#c2255c"
- "#a61e4d"
teal-hexs: 
- "#e6fcf5"
- "#c3fae8"
- "#96f2d7"
- "#63e6be"
- "#38d9a9"
- "#20c997"
- "#12b886"
- "#0ca678"
- "#099268"
- "#087f5b"
violet-hexs: 
- "#f3f0ff"
- "#e5dbff"
- "#d0bfff"
- "#b197fc"
- "#9775fa"
- "#845ef7"
- "#7950f2"
- "#7048e8"
- "#6741d9"
- "#5f3dc4"
yellow-hexs: 
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

## Extended Palette

The extended colors are colors in addition to the the primary colors provided for use with visualizations, but are not supported with style classes in Cupcake.


In order to use these colors in your visualizations, please reference the hexidecimal colors shown in any given color block.

<section class="color-list">
  {% for color in page.colors %}
  <div class="color-block">
    <div class="colors">
      {% assign idx = color | append: '-hexs' %} {% for i in (0..9) %}
      <span id="clipboardItem" style="background: {{ page[idx][i] }}" data-clipboard-text="{{ page[idx][i] }}" tooltip="Copy Hex"></span>
      {% endfor %}
    </div>
    <h3>{{ page['colors'][forloop.index0] }}</h3>
    <ul>
      {% assign idx = color | append: '-hexs' %} {% for i in (0..9) %}
      <li>{{ page[idx][i] }}</li>
      {% endfor %}
    </ul>
  </div>
  {% endfor %}
</section>