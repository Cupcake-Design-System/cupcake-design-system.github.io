---
title: Table
description: Data Tables are used to display data in a tabular format.
tabs:
- Code
- Guidelines
---


<!-- Start Cupcake Code Tab -->
<div id="code" class="docs-tabs-content" markdown="1">

#### Default
The default table is clean and simple, uses a zebra stripe pattern, and has light gray header.

{% example html %}
<table class="c-table">
  <thead>
    <tr>
      <th width="200">Table Header</th>
      <th>Table Header</th>
      <th width="150">Table Header</th>
      <th width="150">Table Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
  </tbody>
</table>
{% endexample %}


**Adding a transparent class will remove the zebra striping**
{% example html %}
<table class="c-table c-table-transparent">
  <thead>
    <tr>
      <th width="200">Table Header</th>
      <th>Table Header</th>
      <th width="150">Table Header</th>
      <th width="150">Table Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
  </tbody>
</table>
{% endexample %}

**Remove the gray from the header background with a class as well.**
{% example html %}
<table class="c-table c-table-header-transparent">
  <thead>
    <tr>
      <th width="200">Table Header</th>
      <th>Table Header</th>
      <th width="150">Table Header</th>
      <th width="150">Table Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
  </tbody>
</table>
{% endexample %}


**Add hover styling with .c-table-hover applied to the parent.**
{% example html %}
<table class="c-table c-table-hover">
  <thead>
    <tr>
      <th width="200">Table Header</th>
      <th>Table Header</th>
      <th width="150">Table Header</th>
      <th width="150">Table Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
  </tbody>
</table>
{% endexample %}


**Horizontal scrolling**
{% example html %}
<table class="c-table c-table-scroll" style="max-width: 650px;">
  <thead>
    <tr>
      <th width="200">Table Header</th>
      <th>Table Header</th>
      <th width="150">Table Header</th>
      <th width="150">Table Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
  </tbody>
</table>
{% endexample %}

<hr>
<br>

#### Table Border Options
Multiple classes can be added to support various border styles.

**Horizontal**
{% example html %}
<table class="c-table c-table-transparent c-table-border-horizontal c-table-hover">
<thead>
    <tr>
      <th width="200">Table Header</th>
      <th>Table Header</th>
      <th width="150">Table Header</th>
      <th width="150">Table Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>Content Goes Here</td>
      <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
  </tbody>
</table>
{% endexample %}



**Vertical**
{% example html %}
<table class="c-table c-table-transparent c-table-border-vertical c-table-hover">
<thead>
    <tr>
      <th width="200">Table Header</th>
      <th>Table Header</th>
      <th width="150">Table Header</th>
      <th width="150">Table Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>Content Goes Here</td>
      <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
  </tbody>
</table>
{% endexample %}




**Both Vertical & Horizontal**
{% example html %}
<table class="c-table c-table-transparent c-table-border-both c-table-hover">
<thead>
    <tr>
      <th width="200">Table Header</th>
      <th>Table Header</th>
      <th width="150">Table Header</th>
      <th width="150">Table Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
  </tbody>
</table>
{% endexample %}


**All sides bordered**
{% example html %}
<table class="c-table c-table-transparent c-table-border-full c-table-hover">
<thead>
    <tr>
      <th width="200">Table Header</th>
      <th>Table Header</th>
      <th width="150">Table Header</th>
      <th width="150">Table Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
  </tbody>
</table>
{% endexample %}


<hr>
<br>

#### Table Sizes
Depending on content, you may wish to use additional sizes to achieve the proper density.

**Small**
{% example html %}
<table class="c-table c-table-sm">
<thead>
    <tr>
      <th width="200">Table Header</th>
      <th>Table Header</th>
      <th width="150">Table Header</th>
      <th width="150">Table Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>Content Goes Here</td>
      <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
  </tbody>
</table>
{% endexample %}


**Large**
{% example html %}
<table class="c-table c-table-lg">
<thead>
    <tr>
      <th width="200">Table Header</th>
      <th>Table Header</th>
      <th width="150">Table Header</th>
      <th width="150">Table Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>Content Goes Here</td>
      <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
  </tbody>
</table>
{% endexample %}



<hr>
<br>


#### Dragging Styles
Provided styles and variants used for draggable rows or cells.

**Header Cell Draggable**
{% example html %}
<table class="c-table c-table-border-horizontal c-table-transparent c-table-hover">
  <thead>
    <tr>
      <th class="c-table-header-cell-draggable" width="200"><strong>DRAGGABLE</strong> Header Cell</th>
      <th>Table Header</th>
      <th width="150">Table Header</th>
      <th width="150">Table Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
  </tbody>
</table>
{% endexample %}


**ROW Cell Draggable**
{% example html %}
<table class="c-table c-table-border-horizontal c-table-transparent">
  <thead>
    <tr>
      <th width="200">Table Header</th>
      <th>Table Header</th>
      <th width="150">Table Header</th>
      <th width="150">Table Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="c-table-row-cell-draggable">I'm <strong>DRAGGABLE</strong></td>
      <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
      <td class="c-table-row-cell-draggable">ALSO <strong>DRAGGABLE</strong></td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td class="c-table-row-cell-draggable">I'm <strong>DRAGGABLE</strong> and the longer content example goes here.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td class="c-table-row-cell-draggable ">I'm <strong>DRAGGABLE</strong></td>
      <td>Content Goes Here</td>
    </tr>
  </tbody>
</table>
{% endexample %}


**ROW Full Draggable**
{% example html %}
<table class="c-table c-table-border-horizontal c-table-transparent c-table-hover">
  <thead>
    <tr>
      <th width="200">Table Header</th>
      <th>Table Header</th>
      <th width="150">Table Header</th>
      <th width="150">Table Header</th>
    </tr>
  </thead>
  <tbody>
    <tr class="c-table-row-draggable">
      <td>Row is <strong>DRAGGABLE</strong></td>
      <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
  </tbody>
</table>
{% endexample %}


**All ROWs Draggable**
{% example html %}
<table class="c-table c-table-border-horizontal c-table-transparent c-table-hover c-table-row-draggable">
  <thead>
    <tr>
      <th width="200">Table Header</th>
      <th>Table Header</th>
      <th width="150">Table Header</th>
      <th width="150">Table Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row is <strong>DRAGGABLE</strong></td>
      <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
        <td>Row is <strong>DRAGGABLE</strong></td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
        <td>Row is <strong>DRAGGABLE</strong></td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
  </tbody>
</table>
{% endexample %}

<hr>
<br>


#### Additional Style Treatments
Provided styles and variants.

**Row Style treatments**
{% example html %}
<table class="c-table c-table-transparent">
  <thead>
    <tr>
      <th width="200">Table Header</th>
      <th>Table Header</th>
      <th width="150">Table Header</th>
      <th width="150">Table Header</th>
    </tr>
  </thead>
  <tbody>
    <tr class="c-table-row-selected">
        <td>This table-row is selected</td>
        <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
        <td>Content Goes Here</td>
        <td>Content Goes Here</td>
      </tr>
      <tr>
          <td>This table-row is normal</td>
          <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
          <td>Content Goes Here</td>
          <td>Content Goes Here</td>
        </tr>
    <tr class="c-table-row-success">
      <td>This table-row is success</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr class="c-table-row-warning">
      <td>This table-row is warning</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr class="c-table-row-danger">
        <td>This table-row is danger</td>
        <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
        <td>Content Goes Here</td>
        <td>Content Goes Here</td>
      </tr>
  </tbody>
</table>
{% endexample %}


**Cell Style treatments**
{% example html %}
<table class="c-table c-table-transparent">
  <thead>
    <tr>
      <th>Table Header</th>
      <th>Table Header</th>
      <th>Table Header</th>
      <th>Table Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td class="c-table-cell-selected">This table-cell is selected</td>
        <td>Content Goes Here</td>
        <td>Content Goes Here</td>
        <td>Content Goes Here</td>
      </tr>
    <tr>
      <td>This table-row is success</td>
      <td class="c-table-cell-success">This table-cell is success</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
      <td class="c-table-cell-warning">This table-cell is warning</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
        <td>Content Goes Here</td>
        <td>Content Goes Here</td>
        <td>Content Goes Here</td>
        <td class="c-table-cell-danger">This table-cell is danger</td>
      </tr>
  </tbody>
</table>
{% endexample %}


<hr>
<br>


#### Complex Table

Multiple classes can be added for more complexity.

{% example html %}
<table class="c-table c-table-transparent c-table-border-horizontal c-table-hover">
  <thead>
    <tr>
      <th>
        Date Added
        <button class="c-btn c-btn-link c-btn-link-secondary c-btn-link-xs c-pull-right">
          <i class="fa fa-search"></i>
        </button>
      </th>
      <th>
        Company
        <button class="c-btn c-btn-link c-btn-link-secondary c-btn-link-xs c-pull-right">
          <i class="fa fa-search"></i>
        </button>
      </th>
      <th>
        Contact Person
        <button class="c-btn c-btn-link c-btn-link-secondary c-btn-link-xs c-pull-right">
          <i class="fa fa-search"></i>
        </button>
      </th>
      <th>
        Email Address
        <button class="c-btn c-btn-link c-btn-link-secondary c-btn-link-xs c-pull-right">
          <i class="fa fa-search"></i>
        </button>
      </th>
      <th>
        Profile
        <button class="c-btn c-btn-link c-btn-link-secondary c-btn-link-xs c-pull-right">
          <i class="fa fa-search"></i>
        </button>
      </th>
      <th>
        Contact
        <button class="c-btn c-btn-link c-btn-link-secondary c-btn-link-xs c-pull-right">
          <i class="fa fa-search"></i>
        </button>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>6/19/2017</td>
      <td class="c-bg-danger-0 c-table-row-cell-draggable">Pizza Hut <a class="c-text-danger-9 c-pull-right"><i class="fa fa-exclamation-circle"></i></a></td>
      <td>Gianni Block</td>
      <td>gianni@pizzahut.com</td>
      <td><button class="c-btn c-btn-primary c-btn-xs">Profile</button></td>
      <td><button class="c-btn c-btn-secondary c-btn-xs">Profile</button></td>
    </tr>
    <tr>
      <td>6/19/2017</td>
      <td class="c-table-cell-success c-table-row-cell-draggable">Siemens AG <a class="c-text-success-9 c-pull-right"><i class="fa fa-check-circle"></i></a></td>
      <td>Cooper Moore</td>
      <td>coopermoore@siemens.com</td>
      <td><button class="c-btn c-btn-primary c-btn-xs">Profile</button></td>
      <td><button class="c-btn c-btn-secondary c-btn-xs">Profile</button></td>
    </tr>
    <tr>
      <td>6/20/2017</td>
      <td class="c-table-cell-warning c-table-row-cell-draggable">Oracle Corporation <a class="c-text-warning-9 c-pull-right"><i class="fa fa-exclamation-triangle"></i></a></td>
      <td>Alexanne Stanton</td>
      <td>alex@oracle.com</td>
      <td><button class="c-btn c-btn-primary c-btn-xs">Profile</button></td>
      <td><button class="c-btn c-btn-secondary c-btn-xs">Profile</button></td>
    </tr>
    <tr>
      <td>6/20/2017</td>
      <td>
        Wells Fargo
        <button class="c-btn c-btn-link c-btn-link-secondary c-btn-link-xs c-pull-right"><i class="fa fa-ellipsis-h"></i></button>
      </td>
      <td>Joyce Quitzon</td>
      <td>joyce.quitzon@wellsfargo.com</td>
      <td><button class="c-btn c-btn-primary c-btn-xs">Profile</button></td>
      <td><button class="c-btn c-btn-secondary c-btn-xs">Profile</button></td>
    </tr>
  </tbody>
</table>
{% endexample %}


</div>
<!-- End Cupcake Code Tab -->

<!-- Start Angular Code Tab -->
<div id="angular" class="docs-tabs-content" markdown="1">

##### Storybook iframe
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/josh-easter/storybook-demo/?path=/story/basic-elements--avatar&full=0&addons=1&stories=0&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs&nav=0"></iframe>

</div>
<!-- End Angular Code Tab -->

<!-- Start Design Tab -->
<div id="guidelines" class="docs-tabs-content" markdown="1">

# Design Guidelines coming soon...


</div>
<!-- End Design Tab -->

