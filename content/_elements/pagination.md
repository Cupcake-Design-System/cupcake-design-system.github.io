---
title: Pagination
description: Pagination affords navigation between pages of content, and it highlights which page is currently in view.
tabs:
- Code
- Guidelines
---

<!-- Start Cupcake Code Tab -->
<div id="code" class="docs-tabs-content" markdown="1">

### Base

Use pagination to allow navigation between pages that represent an ordered collection of items.

{% example html %}
<ul class="c-pagination">
	<li>
		<a href="#" class="c-pagination-previous c-pagination-link"> Previous</a>
	</li>
	<li>
		<a href="#" class="c-pagination-link">1</a>
	</li>
	<li>
		<a href="#" class="c-pagination-link c-pagination-current">2</a>
	</li>
	<li>
		<a href="#" class="c-pagination-link">3</a>
	</li>
	<li><a href="#" class="c-pagination-link">4</a>
	</li>
	<li>
		<a href="#" class="c-pagination-link">...</a>
	</li>
	<li>
		<a href="#" class="c-pagination-link">12</a>
	</li>
	<li>
		<a href="#" class="c-pagination-link">13</a>
	</li>
	<li>
		<a href="#" class="c-pagination-link c-pagination-next">Next </a>
	</li>
</ul>
{% endexample %}


</div>
<!-- End Cupcake Code Tab -->

<!-- Start Angular Code Tab -->
<div id="angular" class="docs-tabs-content" markdown="1">

### Storybook iframe
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/josh-easter/storybook-demo/?path=/story/basic-elements--avatar&full=0&addons=1&stories=0&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs&nav=0"></iframe>

</div>
<!-- End Angular Code Tab -->

<!-- Start Design Tab -->
<div id="guidelines" class="docs-tabs-content" markdown="1">

## Types & Usage

**Stepper Pagination**

Stepper pagination offers finite control and is recommended when the number of pages is low.

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/" width="">

<br>

**Manual Pagination**

Manual pagination provides users with a way to jump to any page in the range. This is particularly helpful when a large number of pages exist.  

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/" width="">

<br>

**Items Per Page Filter**

Pagination becomes a powerful tool for sorting and navigating data when combined with a basic "items per page filter." 

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/" width="">

<br>

**Truncation**

When the number of pages in either direction exceeds 5, use ellipses to truncate results. 

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/" width="">
Double ellipses is used when 5 page numbers can be displayed between the first and last page. 


<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/" width="">
Single ellipses is used when the beginning or end page is included in the "5" rule. 

<hr>


## Best Practices
- Always clearly identify which page the user is on. 

- Provide users with various ways to navigate. Previous & Next arrows allow for incremental navigation, while manual entry and hyperlinks provide larger step options. 

- Where possible include the items per page filter. Giving the user control over this variable makes navigating data faster and more productive. 

- Whatever type of pagination you chose to use (stepper or manual), remain consistent across the entire application.

<hr>

## Examples

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/" width="">
Example: Selected Page Indicator

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/" width="">
Example: Use of ellipses to display hidden page results. 

</div>
<!-- End Design Tab -->




