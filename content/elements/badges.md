---
title: Badges
layout: docs
description: Badges are labels which hold small amounts of information.
group: elements
toc: true
---

## Base

Badges are typically used to inform the user of status, information, or of an action that’s been taken. 

{% example html %}
<div class="c-badge">v.1.0.5</div>
<div class="c-badge c-badge-rounded">v.1.0.5</div>
{% endexample %}

## Color Examples

This is an example of available colors for the **{{ page.title }}** element. 

{% example html %}
{% for color in site.data.theme-colors %}
<div class="c-badge c-badge-{{ color }}">{{ color | capitalize }}</div>
{% endfor %}
{% endexample %}


## Size Examples

This is an example of available sizes for the **{{ page.title }}** element. 

{% example html %}
<div class="c-badge c-badge-secondary c-badge-sm">Small</div>
<div class="c-badge c-badge-secondary c-badge">Default</div>
<div class="c-badge c-badge-secondary c-badge-lg">Large</div>
<div class="c-badge c-badge-secondary c-badge-xl">X-Large</div>
{% endexample %}



## Additional Styles/Options

### Add Icons

{% example html %}
<div class="c-badge c-badge-secondary c-badge-sm">Information <i class="fal fa-anchor"></i></div>
<div class="c-badge c-badge-secondary c-badge">Information <i class="fal fa-anchor"></i></div>
<div class="c-badge c-badge-secondary c-badge-lg">Information <i class="fal fa-anchor"></i></div>
<div class="c-badge c-badge-secondary c-badge-xl">Information <i class="fal fa-anchor"></i></div>
{% endexample %}

### Multiple Modifiers

{% example html %}
<div class="c-badge c-badge-rounded c-badge-primary"><i class="fa fa-info-circle" aria-hidden="true"></i> Rounded Icon</div>
<div class="c-badge c-badge-rounded c-badge-success-outline"><i class="fa fa-info-circle" aria-hidden="true"></i> Rounded Outline</div>
<div class="c-badge c-badge-danger-outline">Outline</div>
<div class="c-badge c-badge-warning-outline"><i class="fa fa-info-circle" aria-hidden="true"></i> Outline Icon</div>
<div class="c-badge c-badge-rounded c-badge-primary-outline c-badge-xl"><i class="fa fa-info-circle" aria-hidden="true"></i> Rounded XL</div>
{% endexample %}


### Inline Status

{% example html %}
<div class="c-body-text-xl"> 
  Information 
  <span class="c-badge c-badge-rounded c-badge-primary c-badge-top">8</span>
</div>
{% endexample %}

### Empty Status Badges

{% example html %}
{% for color in site.data.theme-colors %}
<div class="c-badge c-badge-rounded c-badge-sm c-badge-{{ color }}"></div>
{% endfor %}

{% for color in site.data.theme-colors %}
<div class="c-badge c-badge-rounded c-badge-{{ color }}"></div>
{% endfor %}

{% for color in site.data.theme-colors %}
<div class="c-badge c-badge-rounded c-badge-lg c-badge-{{ color }}"></div>
{% endfor %}
{% endexample %}