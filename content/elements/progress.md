---
title: Progress
layout: docs
description: The progress bar component is used to visually represent the completion of a task or operation.
group: elements
toc: true
---

## Base

This shows how much of the task has been completed and how much is still left.

{% example html %}
<div class="c-progress c-progress-primary">
    <div class="c-progress-meter" style="width: 10%"></div>
</div>
{% endexample %}

## Color Examples

This is an example of available colors for the **{{ page.title }}** element.

{% example html %}
<div class="c-progress c-progress-primary">
    <div class="c-progress-meter" style="width: 10%"></div>
</div>
<div class="c-progress c-progress-success">
    <div class="c-progress-meter" style="width: 80%"></div>
</div>
{% endexample %}


## Size Examples

This is an example of available size's for the **{{ page.title }}** element.

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



## Additional Styles/Options

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