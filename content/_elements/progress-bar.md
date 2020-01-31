---
title: Progress Bar
description: The progress bar component is used to visually represent the completion of a task or operation.
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
- Code
- Angular
- Guidelines
---

<!-- Start Cupcake Code Tab -->
<div id="code" class="docs-tabs-content" markdown="1">

## Base
This shows how much of the task has been completed and how much is still left.

{% example html %}
<div class="c-progress c-progress-primary">
    <div class="c-progress-meter" style="width: 10%"></div>
</div>
{% endexample %}

## Color Examples

{% example html %}
<div class="c-progress c-progress-primary">
    <div class="c-progress-meter" style="width: 10%"></div>
</div>
<div class="c-progress c-progress-success">
    <div class="c-progress-meter" style="width: 80%"></div>
</div>
{% endexample %}

## Size Examples

{% example html %}
<div class="c-progress c-progress-sm c-progress-primary">
    <div class="c-progress-meter" style="width: 20%"></div>
</div>
<div class="c-progress c-progress-primary">
    <div class="c-progress-meter" style="width: 60%"></div>
</div>
<div class="c-progress c-progress-lg c-progress-primary">
    <div class="c-progress-meter" style="width: 80%"></div>
</div>
{% endexample %}

## Additional Styles

### With Text

{% example html %}
<div class="c-progress c-progress-primary">
	<span class="c-progress-meter" style="width: 25%">
    <p class="c-progress-meter-text">25%</p>
  </span>
</div>
<div class="c-progress c-progress-lg c-progress-primary">
	<span class="c-progress-meter" style="width: 55%">
    <p class="c-progress-meter-text">55%</p>
  </span>
</div>
{% endexample %}

### Animated

{% example html %}
<div class="c-progress c-progress-primary">
	<div class="c-progress-meter-animated" style="width: 10%"></div>
</div>
<div class="c-progress c-progress-success">
	<div class="c-progress-meter-animated" style="width: 50%"></div>
</div>
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

<iframe title="storybook" width="100%" height="500px" src="http://cupcake-sprinkles.surge.sh/"></iframe>

</div>
<!-- End Angular Code Tab -->

<!-- Start Design Tab -->
<div id="guidelines" class="docs-tabs-content" markdown="1">

# Design Guidelines coming soon...


</div>
<!-- End Design Tab -->




