---
title: Badges
description: Badges are used to provide emphasis on a characteristic of an element, such as updated content and/or the number of unread messages, and generally cannot be interacted with.
colors:
- primary
- secondary
- success
- danger
sizes:
- xs
- sm
- lg
- xl
tabs:
- Design
- Code 
- Angular
---

<div id="design" class="docs-tabs-content" markdown="1">

### Overview

##### Types of badges available:

- Status Badges
- Numeric Badges

{% include guide-img.html img='elements/badges/BadgeTypes'%} 

##### Badge Colors
Cupcake Color Palette: 
https://ipreo.invisionapp.com/share/P5NNPMKHTR6#/screens/315781489_Color

##### Light Color Set
- Only use values 3-5

{% include guide-img.html img='elements/badges/LightColorSet'%} 

##### Dark Color Set
- Only use values 6-9

{% include guide-img.html img='elements/badges/DarkColorSet'%} 

#### Status Badges
Standard badges are used to indicate the status of an entity.

##### Do's and Dont's

##### Color Use

##### Light vs Dark Color Sets

##### Badge Use

##### Content

##### Scaling in Table Cells

#### Numeric Badges

Numeric badges are used to indicate a running tally/count of an entity. 

##### Light vs Dark Color Sets

##### Content

<hr>

## Do's and Dont's

</div>

<div id="code" class="docs-tabs-content" markdown="1">

### Base
Badges are typically used to inform the user of status, information, or of an action that’s been taken.

{% example html %}
<div class="c-badge">v.1.0.5</div>
<div class="c-badge c-badge-rounded">v.1.0.5</div>
{% endexample %}

### Color Examples
This is an example of available colors for the Badges element.

{% example html %}
<div class="c-badge c-badge-primary">Primary</div>

<div class="c-badge c-badge-secondary">Secondary</div>

<div class="c-badge c-badge-success">Success</div>

<div class="c-badge c-badge-warning">Warning</div>

<div class="c-badge c-badge-danger">Danger</div>
{% endexample %}

### Size Examples
This is an example of available sizes for the Badges element.

{% example html %}
<div class="c-badge c-badge-secondary c-badge-sm">Small</div>
<div class="c-badge c-badge-secondary c-badge">Default</div>
<div class="c-badge c-badge-secondary c-badge-lg">Large</div>
<div class="c-badge c-badge-secondary c-badge-xl">X-Large</div>
{% endexample %}

### Additional Styles/Options

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
<div class="c-badge c-badge-rounded c-badge-sm c-badge-primary"></div>

<div class="c-badge c-badge-rounded c-badge-sm c-badge-secondary"></div>

<div class="c-badge c-badge-rounded c-badge-sm c-badge-success"></div>

<div class="c-badge c-badge-rounded c-badge-sm c-badge-warning"></div>

<div class="c-badge c-badge-rounded c-badge-sm c-badge-danger"></div>



<div class="c-badge c-badge-rounded c-badge-primary"></div>

<div class="c-badge c-badge-rounded c-badge-secondary"></div>

<div class="c-badge c-badge-rounded c-badge-success"></div>

<div class="c-badge c-badge-rounded c-badge-warning"></div>

<div class="c-badge c-badge-rounded c-badge-danger"></div>



<div class="c-badge c-badge-rounded c-badge-lg c-badge-primary"></div>

<div class="c-badge c-badge-rounded c-badge-lg c-badge-secondary"></div>

<div class="c-badge c-badge-rounded c-badge-lg c-badge-success"></div>

<div class="c-badge c-badge-rounded c-badge-lg c-badge-warning"></div>

<div class="c-badge c-badge-rounded c-badge-lg c-badge-danger"></div>
{% endexample %}


</div>

<div id="angular" class="docs-tabs-content" markdown="1">

### Storybook iframe
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/josh-easter/storybook-demo/?path=/story/basic-elements--avatar&full=0&addons=1&stories=0&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs"></iframe>

</div>

