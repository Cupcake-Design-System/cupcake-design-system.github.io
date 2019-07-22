---
title: Typography
description: Documentation and examples for Cupcake typography, including global settings, headings, body text, lists, and more.
category: Visual Guidelines
colors:
- gray
- primary
- success
- warning
- danger
weight:
- light
- normal
- bold
- heavy
sizes:
- xs
- sm
- md
- lg
- xl
- xxl
---

### Font Stack

Cupcake uses a font stack that adapts to the operating system it runs on, like Windows, iOS, or Android. <br>
It renders consistently across various operating systems and browsers. And users behind a firewall do not need info-sec or IT to download and install an additional font.


For example:
- Apple devices will display San Francisco
- Android devices will display Roboto
- Devices running Windows will display Segoe UI
- Machines running Linux will display the default sans-serif font for any running distribution

<br>

The following font-stack ensures all browsers can load platform-specific fonts:

{% highlight css %}
-apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Helvetica Neue, sans-serif
{% endhighlight %}

---



### Typescale

Cupcake provides a purposeful set of typographic styles.

By consistently tying typographic styles to appropriate functions in the interface, we create a clear visual pattern.

**Body**

To establish a consistent base you may wish to add the class .c-body-text to the body element on the page. This will give you a default font-size, color, line-height, and font-family for any element inheriting styles that are not already specified in an elements class.

{% example html %}
{% for size in page.sizes %}
<div class="c-text-{{ size }}">This is {{ size }} text</div>{% endfor %}
{% endexample %}

**Header**

Heading should be used for titles of top-level sections of a screen or section. May also be used as a component header.

{% example html %}
{% for size in page.sizes %}
<div class="c-header-{{ size }}">This is the {{ size }} header</div>{% endfor %}
{% endexample %}

---

### Emphasis

To communicate content hierarchy, use the core typographic scale first. Once the main hierarchy is established, if two pieces of text of the same style have different positions in the content hierarchy, additional styles may be used to emphasize OR de-emphasize one of them. 

<br>

**Muted**
Muted content isn’t unimportant or superfluous, but rather makes room for the eye to orient itself and focus on core content.

{% example html %}
<div class="c-header-lg">I'm a Header <span class="c-text-muted"> I am muted</span></div>
{% endexample %}


{% callout warning %}
**Try to avoid using muted on its own, when not contrasting with other text. There are exceptions: muted may be used for standalone content when it represents a non-actionable or otherwise unimportant state of something, i.e. when the normal content is absent.**
{% endcallout %}



<br>

**Font Weights**

Default text styles have a normal font weight. You can add emphasis in context by adding a variant font weight.


{% example html %}
{% for weight in page.weight %}
<div class="c-text-lg c-text-{{ weight }}">This is {{ weight }} text</div>
{% endfor %}
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

**Text Colors**

Additional text colors can also be used (sparingly).

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


{% callout warning %}
**Please use care when adding a text color and ensure it creates suitable contrast!**
{% endcallout %}