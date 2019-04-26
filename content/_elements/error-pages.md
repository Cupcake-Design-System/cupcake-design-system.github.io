---
title: Error Pages
description: Error pages identify what kind of error the user has encountered, include basic information about that particular error, and provide a solution/way out for the user.
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

{% example html %}

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

# Overview

**Structure**
Error pages are made up of the following:

- Icon
- Reason/Explanation
- Error Code
- Contact Link/Button

**Types of Error Pages**

- **Error 401** - Authentication required to view page
- **Error 403** - Not authorized to view page
- **Error 404** - Page not found
- **Error 500** - Internal server error
- **Error 503** - Service unavailable

<hr>
  
<!-- Start Error 401 Section -->
<div class="c-header-md">Error 401</div>
Error 401 requires the user to  sign in in order to view the page.

This error appears outside of an application because the user has not signed in yet.

  <!-- Start Examples of Use Row -->
  <div class="c-header-sm">Examples of Use</div>

  <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/error-pages/nameoffile.png" width="500px;">
  <!-- End Examples of Use Row -->
  <!-- END Error 401 Section -->

  <hr>

<!-- Start Error 403 Section -->
<div class="c-header-md">Error 403</div>
Error 403 informs the user that they are not authorized to view the page that they are trying to access.

This error appears inside of an application when the user is signed in.

  <!-- Start Examples of Use Row -->
  <div class="c-header-sm">Examples of Use</div>

  <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/error-pages/nameoffile.png" width="500px;">
  <!-- End Examples of Use Row -->
  <!-- END Error 403 Section -->

  <hr>

  <!-- Start Error 404 Section -->
<div class="c-header-md">Error 404</div>
Error 404 informs the user that the page they are trying to access cannot be found.

This error appears inside of an application when the user is signed in.

  <!-- Start Examples of Use Row -->
  <div class="c-header-sm">Examples of Use</div>

  <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/error-pages/nameoffile.png" width="500px;">
  <!-- End Examples of Use Row -->
  <!-- END Error 404 Section -->

<hr>

<!-- Start Error 500 Section -->
<div class="c-header-md">Error 500</div>
Error 500 informs the user that they have run into a general error that doesn't have much description around it.

This error appears inside of an application when the user is signed in.

  <!-- Start Examples of Use Row -->
  <div class="c-header-sm">Examples of Use</div>

  <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/error-pages/nameoffile.png" width="500px;">
<!-- End Examples of Use Row -->
<!-- END Error 500 Section -->

<hr>

<!-- Start Error 503 Section -->
<div class="c-header-md">Error 503</div>
Error 503 informs the user that the server can not handle the request.

This error appears inside of an application when the user is signed in.

  <!-- Start Examples of Use Row -->
  <div class="c-header-sm">Examples of Use</div>

  <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/error-pages/nameoffile.png" width="500px;">

  <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/error-pages/nameoffile.png" width="500px;">
<!-- End Examples of Use Row -->
<!-- END Error 503 Section -->


</div>
<!-- End Design Tab -->



