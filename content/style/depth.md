---
layout: docs-fullwidth
title: Depth
description: Create groupings and associations between content as well as hierarchy and focus through depth.
group: style
sizes:
- 0
- xs
- sm
- lg
- xl
---

<div class="c-row c-row-wrap c-p-md c-p-top-lg c-bg-gray-1">
  {% for size in page.sizes %}
  <div class="c-col-12 c-col-sm-4 c-m-bottom-lg">
    <div class="c-p-md c-bg-white c-depth-{{ size }}">
      .c-depth-{{ size }}
    </div>
  </div>
  {% endfor %}
</div>