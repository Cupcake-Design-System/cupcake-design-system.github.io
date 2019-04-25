---
title: Table
description: Data Tables are used to display data in a tabular format.
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

## Default
The default table is clean and simple.

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

## Complex Table

Multiple classes can be added for more complexity.

{% example html %}
<table class="c-table c-table-transparent c-table-border-horizontal c-table-hover">
  <thead>
    <tr>
      <th>
        Date Added
        <button class="c-btn c-btn-default c-btn-sm c-btn-table-icon c-pull-right">
          <i class="fa fa-search"></i>
        </button>
      </th>
      <th>
        Company
        <button class="c-btn c-btn-default c-btn-sm c-btn-table-icon c-pull-right">
          <i class="fa fa-search"></i>
        </button>
      </th>
      <th>
        Contact Person
        <button class="c-btn c-btn-default c-btn-sm c-btn-table-icon c-pull-right">
          <i class="fa fa-search"></i>
        </button>
      </th>
      <th>
        Email Address
        <button class="c-btn c-btn-default c-btn-sm c-btn-table-icon c-pull-right">
          <i class="fa fa-search"></i>
        </button>
      </th>
      <th>
        Profile
        <button class="c-btn c-btn-default c-btn-sm c-btn-table-icon c-pull-right">
          <i class="fa fa-search"></i>
        </button>
      </th>
      <th>
        Contact
        <button class="c-btn c-btn-default c-btn-sm c-btn-table-icon c-pull-right">
          <i class="fa fa-search"></i>
        </button>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>6/19/2017</td>
      <td>Pizza Hut</td>
      <td>Gianni Block</td>
      <td>gianni@pizzahut.com</td>
      <td>
        <button class="c-btn c-btn-primary c-btn-sm">Profile</button>
      </td>
      <td>
        <button class="c-btn c-btn-default c-btn-sm">Profile</button>
      </td>
    </tr>
    <tr>
      <td>6/19/2017</td>
      <td>Siemens AG</td>
      <td>Cooper Moore</td>
      <td>coopermoore@siemens.com</td>
      <td>
        <button class="c-btn c-btn-primary c-btn-sm">Profile</button>
      </td>
      <td>
        <button class="c-btn c-btn-default c-btn-sm">Profile</button>
      </td>
    </tr>
    <tr>
      <td>6/20/2017</td>
      <td>Oracle Corporation</td>
      <td>Alexanne Stanton</td>
      <td>alex@oracle.com</td>
      <td>
        <button class="c-btn c-btn-primary c-btn-sm">Profile</button>
      </td>
      <td>
        <button class="c-btn c-btn-default c-btn-sm">Profile</button>
      </td>
    </tr>
    <tr>
      <td>6/20/2017</td>
      <td>
        Wells Fargo
        <button class="c-btn c-btn-default c-btn-sm c-btn-table-icon c-pull-right">
          <i class="fa fa-ellipsis-h"></i>
        </button>
      </td>
      <td>Joyce Quitzon</td>
      <td>joyce.quitzon@wellsfargo.com</td>
      <td>
        <button class="c-btn c-btn-primary c-btn-sm">Profile</button>
      </td>
      <td>
        <button class="c-btn c-btn-default c-btn-sm">Profile</button>
      </td>
    </tr>
    <tr>
      <td>6/21/2017</td>
      <td>Johnson &amp; Johnson</td>
      <td>Jaquan Roflson</td>
      <td>jroflson@jandj.com</td>
      <td>
        <button class="c-btn c-btn-primary c-btn-sm">Profile</button>
      </td>
      <td>
        <button class="c-btn c-btn-default c-btn-sm">Profile</button>
      </td>
    </tr>
    <tr>
      <td>6/22/2017</td>
      <td>United Parcel Service</td>
      <td>Myrtle Stiedmann</td>
      <td>myrtle@ups.com</td>
      <td>
        <button class="c-btn c-btn-primary c-btn-sm">Profile</button>
      </td>
      <td>
        <button class="c-btn c-btn-default c-btn-sm">Profile</button>
      </td>
    </tr>
    <tr>
      <td>6/23/2017</td>
      <td>Chase</td>
      <td>Nia Gutkowski</td>
      <td>nia@chase.com</td>
      <td>
        <button class="c-btn c-btn-primary c-btn-sm">Profile</button>
      </td>
      <td>
        <button class="c-btn c-btn-default c-btn-sm">Profile</button>
      </td>
    </tr>
    <tr>
      <td>6/25/2017</td>
      <td>American Express</td>
      <td>Adrianna Roberts</td>
      <td>adrianna@american.com</td>
      <td>
        <button class="c-btn c-btn-primary c-btn-sm">Profile</button>
      </td>
      <td>
        <button class="c-btn c-btn-default c-btn-sm">Profile</button>
      </td>
    </tr>
    <tr>
      <td>6/26/2017</td>
      <td>Caterpillar Inc.</td>
      <td>Milan Collier</td>
      <td>milan@caterpillar.com</td>
      <td>
        <button class="c-btn c-btn-primary c-btn-sm">Profile</button>
      </td>
      <td>
        <button class="c-btn c-btn-default c-btn-sm">Profile</button>
      </td>
    </tr>
    <tr>
      <td>6/27/2017</td>
      <td>Nike, Inc.</td>
      <td>Otha Kemmer</td>
      <td>otha@nike.com</td>
      <td>
        <button class="c-btn c-btn-primary c-btn-sm">Profile</button>
      </td>
      <td>
        <button class="c-btn c-btn-default c-btn-sm">Profile</button>
      </td>
    </tr>
    <tr>
      <td>6/28/2017</td>
      <td>Toyota Motor Corporation</td>
      <td>Aniyah Murray</td>
      <td>aniyah@toyota.com</td>
      <td>
        <button class="c-btn c-btn-primary c-btn-sm">Profile</button>
      </td>
      <td>
        <button class="c-btn c-btn-default c-btn-sm">Profile</button>
      </td>
    </tr>
    <tr>
      <td>6/29/2017</td>
      <td>Yahoo!</td>
      <td>Arianne Merkel</td>
      <td>arianne@yahoo.com</td>
      <td>
        <button class="c-btn c-btn-primary c-btn-sm">Profile</button>
      </td>
      <td>
        <button class="c-btn c-btn-default c-btn-sm">Profile</button>
      </td>
    </tr>
  </tbody>
</table>
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

# Design Guidelines coming soon...


</div>
<!-- End Design Tab -->

