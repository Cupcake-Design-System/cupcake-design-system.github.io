---
title: Tooltips
description: A tooltip presents a concise piece of contextual information on an element on the screen, in response to a user action (hover, focus or click). Tooltips should always play a supplementary or enhancement role and never contain critical information.
tabs:
- Code
- Guidelines
---

<!-- Start Cupcake Code Tab -->
<div id="code" class="docs-tabs-content" markdown="1">


### Base
These popovers are CSS only. The base have no color but multiple direction options.

{% example html %}
<span data-tooltip="Tooltip Text" class="c-btn c-btn-secondary c-m-horizontal-md">
  Default
</span>
<span data-tooltip="Tooltip Text" data-tooltip-conf="bottom" class="c-btn c-btn-secondary c-m-horizontal-md">
  Down
</span>
<span data-tooltip="Tooltip Text" data-tooltip-conf="right" class="c-btn c-btn-secondary c-m-horizontal-md">
  Right
</span>
<span data-tooltip="Tooltip Text" data-tooltip-conf="shadow left" class="c-btn c-btn-secondary c-m-horizontal-md">
  Left
</span>
{% endexample %}


<hr>
<br>

#### Colors
{% example html %}
<span data-tooltip="Tooltip Text" class="c-btn c-btn-secondary c-m-horizontal-md">
  Default
</span>
<span data-tooltip="Tooltip Text" data-tooltip-conf="invert shadow" class="c-btn c-btn-secondary c-m-horizontal-md">
  Invert
</span>
<span data-tooltip="Tooltip Text" data-tooltip-conf="primary" class="c-btn c-btn-secondary c-m-horizontal-md">
  Primary
</span>
<span data-tooltip="Tooltip Text" data-tooltip-conf="success" class="c-btn c-btn-secondary c-m-horizontal-md">
  Success
</span>
<span data-tooltip="Tooltip Text" data-tooltip-conf="warning" class="c-btn c-btn-secondary c-m-horizontal-md">
  Warning
</span>
<span data-tooltip="Tooltip Text" data-tooltip-conf="danger" class="c-btn c-btn-secondary c-m-horizontal-md">
  Danger
</span>
{% endexample %}


<hr>
<br>

#### Additional Options
{% example html %}
  <span data-tooltip="A pure CSS Tooltip. Super easy to use, No JavaScript required." data-tooltip-conf="primary multiline" class="c-btn c-btn-secondary c-m-horizontal-md">
    Multiline
  </span>
  <span data-tooltip="Tooltip Text" data-tooltip-conf="no-fade" class="c-btn c-btn-secondary c-m-horizontal-md">
    No Fade
  </span>
  <span data-tooltip="Tooltip Text" data-tooltip-conf="shadow" class="c-btn c-btn-secondary c-m-horizontal-md">
    Shadow
  </span>
  <span data-tooltip="Tooltip Text" data-tooltip-conf="no-arrow" class="c-btn c-btn-secondary c-m-horizontal-md">
    No Arrow
  </span>
  <span data-tooltip="Tooltip Text" data-tooltip-conf="square" class="c-btn c-btn-secondary c-m-horizontal-md">
    Square
  </span>   
{% endexample %}


</div>
<!-- End Cupcake Code Tab -->

<!-- Start Angular Code Tab -->
<div id="angular" class="docs-tabs-content" markdown="1">

<div class="c-alert c-alert-warning">
  <i class="fa fa-exclamation-circle c-alert-icon" aria-hidden="true"></i>
    <div class="c-alert-content"><strong>
    Users must be permissioned to IHS Markit GitLab in order to view angular components.  
    <a href="https://confluence.ihsmarkit.com/pages/viewpage.action?spaceKey=DT&title=GitLab+-+Access">Gain access here</a>
      </strong>
    </div>
</div>

### Storybook iframe
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/josh-easter/storybook-demo/?path=/story/basic-elements--avatar&full=0&addons=1&stories=0&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs&nav=0"></iframe>

</div>
<!-- End Angular Code Tab -->

<!-- Start Design Tab -->
<div id="guidelines" class="docs-tabs-content" markdown="1">

## Types & Usage

<br>

<table class="c-table c-table-transparent c-table-border-both c-table-hover">
<thead>
    <tr>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Icon / Button Tooltip</td>
      <td>These Tooltips are used to provide context or details around icons and buttons</td>
    </tr>
    <tr>
      <td>Definition Tooltip</td>
      <td>Definition Tooltips provide contextual information to a word, request, action, or element</td>
    </tr>
    <tr>
      <td>Interactive Tooltip</td>
      <td>TInteractive Tooltips are tooltips which contain interactive elements such as buttons or links. These tooltips remain visible until intentionally dismissed.</td>
    </tr>
  </tbody>
</table>

<br>

## States
Tooltips should appear on hover, focus or click.

## Labels
Tooltips should be written as short and concise as possible. When you require more than a few words consider using popovers or other patterns more suitable to communicating complexity to the user.

## Best Practices
- Tooltips should always play a supplementary or enhancement role and never contain critical information.
- Use sentence case with no punctuation unless absolutely required for clarity 
- Tooltips used to display shortcut keys should use a uniform format (key + key + key)
- In instances where tooltips are used to display user inputted information, case rules do not apply. Tooltips should mirror user input exactly.
- Do try to keep tooltips above the items or elements being highlighted 
- Do keep the position of the tooltips consistent when edge or component overflow does not affect placement

<br>

## Examples

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/tooltips/tooltip-example-clarify-action-or-name.png" width="">

**Example:** Icon tooltip used to clarify the action or name of an icon button

<br>

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/tooltips/tooltip-display-keyboard-shortcuts.png" width="">

**Example:** Tooltip used to display keyboard shortcuts

<br>

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/tooltips/tooltips-user-input.png" width="">

**Example:** User inputted information should show user input exactly as the user typed it

<br>

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/tooltips/tooltips-contextual-information.png" width="">

**Example:** Definition tooltip used to provide contextual information to a word, request, action, or element

<br>

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/tooltips/tooltips-interactive.png" width="">

**Example:** Interactive tooltips span from simple buttons or hyperlinks to more complex modules   



</div>
<!-- End Design Tab -->




