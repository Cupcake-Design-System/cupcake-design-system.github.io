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

{% include guide-img.html img='elements/avatars/Types-of-Avatars'%} 

There are different ways an avatar can be displayed within people  and company versions:

- First + last name or company initials - The default avatar 
- Placeholder user icon - The default avatar if the user does not provide name
- Image (with and without border) - The avatar displays an image of the user's choice if uploaded

{% include guide-img.html img='elements/avatars/Avatars-MoreTypes'%} 

For the companies that have more than 3 initials, the avatars will appear as the following:

{% include guide-img.html img='elements/avatars/Company3+Initials'%} 

<hr>

## Do's and Dont's

##### Usage
{% include guide-img.html img='elements/buttons/button-wording-dos-donts'%} 

##### Colors
{% include guide-img.html img='elements/buttons/buttons-icons-dos-donts'%}

##### Avatars in Headers
{% include guide-img.html img='elements/buttons/buttons-icons-dos-donts'%}

##### Avatar Sizes in Table Cells
{% include guide-img.html img='elements/buttons/buttons-icons-dos-donts'%}

</div>

<div id="code" class="docs-tabs-content" markdown="1">

### Base
Avatars are used to show a thumbnail representation of an individual or business in the interface.

If an image is unavailable, up to two letters can be used instead. Text is best applied with a data attribute - data-text=”{value}”.

Icons can also be used if relevent to the context.

{% example html %}
<span class="c-avatar" >
  <img src="https://unsplash.it/200?image=1027">
</span>
<span class="c-avatar c-avatar-primary">
<i class="fas fa-cloud-download"></i>
</span>
<span class="c-avatar c-avatar-secondary" data-text="AB"></span>
{% endexample %}

### Color Examples
This is an example of available colors for the Avatar element.

{% example html %}
<span class="c-avatar c-avatar-primary" data-text="AB"></span>

<span class="c-avatar c-avatar-secondary" data-text="AB"></span>

<span class="c-avatar c-avatar-success" data-text="AB"></span>

<span class="c-avatar c-avatar-warning" data-text="AB"></span>

<span class="c-avatar c-avatar-danger" data-text="AB"></span>
{% endexample %}

### Size Examples
This is an example of available sizes for the Avatar element.

{% example html %}
<span class="c-avatar c-avatar-primary c-avatar-sm" data-text="AB"></span>
<span class="c-avatar c-avatar-primary c-avatar-md" data-text="AB"></span>
<span class="c-avatar c-avatar-primary c-avatar-lg" data-text="AB"></span>
<span class="c-avatar c-avatar-primary c-avatar-xl" data-text="AB"></span>
{% endexample %}

### Status
In addition you can add a status to the avatar to alert the user. Status is applied with a data attribute - data-status=”{value}”.

{% example html %}
<span class="c-avatar" data-status="success">
  <img src="https://unsplash.it/200?image=1011">
</span>
<span class="c-avatar c-avatar-primary" data-status="success">
  <i class="fas fa-cloud-download"></i>
</span>
<span class="c-avatar c-avatar-secondary" data-text="CD" data-status="primary"></span>
<span class="c-avatar c-avatar-success" data-text="EF" data-status="danger"></span>
<span class="c-avatar c-avatar-danger" data-text="GH" data-status="warning"></span>
<span class="c-avatar c-avatar-warning" data-text="HI" data-status="success"></span>
{% endexample %}


</div>

<div id="angular" class="docs-tabs-content" markdown="1">

### Storybook iframe
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/josh-easter/storybook-demo/?path=/story/basic-elements--avatar&full=0&addons=1&stories=0&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs"></iframe>

</div>

