---
title: Switches
description: Switches are a quick way to to toggle between two states. Changing a state is immediate and continuous.
colors:
- primary
- success
- warning
- danger
sizes:
- xs
- sm
- lg
tabs:
- Design
- Code 
- Angular
---

<div id="design" class="docs-tabs-content" markdown="1">

# Overview

**Switches have 4 different states:**

- Active
- Inactive
- Active (disabled)
- Inactive (disabled)

**Types of switches available:**

- Standard version
- Mobile version
*The mobile version has a bigger hit area and larger text for better performance on smaller mobile screens.*

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/switches/switches-versions.png" width="">

<hr>
  
  <!-- Start Switch Hygiene Do's and Don'ts Section -->
  <div class="c-header-sm c-m-top-sm c-m-bottom-sm">Do's and Dont's</div>

  <!-- Start Switch Hygiene Badge Row -->
  <div class="c-header-xs">Basic Switch Hyigene</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/switches/switch-general/all-switches-body-do'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/switches/switch-general/all-switches-body-dont'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use the default switch component as is without any modifications</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't place icons or words inside the switch body area</span>
        </div>
      </div>
      </div>
    </div>
  <!-- END Switch Hygiene Badge Row -->

  <hr>

 **Switches are typically used in the following 3 ways:**

- As a control used in Settings pages
- As a control used with tables, data visualisations, etc.
- As a control used in tables

Current Cupcake documentation: https://pages.code.ipreo.com/Ipreo/cupcake-docs/content/elements/switches/

<hr>

 <!-- Start Controls Used in Settings Pages Row -->
  <div class="c-header-sm c-m-top-sm c-m-bottom-sm">Controls used in Settings pages</div>
  <div class="c-header-xs">Examples of use</div>

  <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/switches/switch-settings/switches-settings-example.png" width="500px;">
 <!-- END Controls Used in Settings Pages Row -->

  <!-- Start Dos and Donts - Controls used in Settings Pages Row -->
<div class="c-header-sm c-m-top-sm c-m-bottom-sm">Do's and Dont's</div>
<!-- Start Placement Relative to Labels Row -->
  <div class="c-header-xs">Placement relative to labels</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/switches/switch-settings/switches-settings-placement-do'%}
    </div>
    <div class="c-col">
   {% include guide-img.html img='elements/switches/switch-settings/switches-settings-placement-dont'%}
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do place text labels on the left and switches on the right</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't place switches to the left of labels when used on Settings pages</span>
        </div>
      </div>
      </div>
    </div>
<!-- End Placement Relative to Labels Row -->

  <!-- Start Label alignment Relative to Switches Row -->
  <div class="c-header-xs">Label alignment relative to switches</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/switches/switch-settings/switches-settings-align-do'%} 
    </div>
    <div class="c-col">
   {% include guide-img.html img='elements/switches/switch-settings/switches-settings-align-dont'%}  
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do vertically align text labels to center</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do make sure that the space above and below the label is the same</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't vertically align the text label to top or bottom</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't allow the space above or below the text label to be unbalanced</span>
        </div>
      </div>
      </div>
    </div>
  <!-- Start Label alignment Relative to Switches Row -->

  <!-- Start Settings vs Forms Row -->
  <div class="c-header-xs">Settings vs Forms</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/switches/switch-settings/switches-settings-forms-do'%} 
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/switches/switch-settings/switches-settings-forms-dont'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use switches on Settings pages where the change is immediate and continuous</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use switches on forms where the settings need to be saved or applied before it takes effect</span>
        </div>
      </div>
      </div>
    </div>
  <!-- END Settings vs Forms Row -->
  <!-- End Controls used in Settings Pages Do's and Don'ts Section -->

<hr>


  <!-- START Controls used with Tables, Data Viz, etc Section-->

<div class="c-header-sm c-m-top-sm c-m-bottom-sm">Controls used with Tables, Data Viz, etc</div>

Switches are often used as controls with tables and data visualisations to affect the information the user can view and interact with.

<div class="c-header-xs">Example of use</div>

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/switches/switch-controls/switches-controls-example.png" width="500px;">

<div class="c-header-sm c-m-top-sm c-m-bottom-sm">Do's and Dont's</div>
<!-- Start Placement as Table Control Row -->
  <div class="c-header-xs">Placement as table control</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/switches/switch-controls/switches-controls-placement-do'%}
    </div>
    <div class="c-col">
   {% include guide-img.html img='elements/switches/switch-controls/switches-controls-placement-dont'%}
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do place switches above the table in the "tool area"</span>
        </div>
      </div>
       <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do try to position switches to the left, so these don't interfere with critical buttons on the right</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't center switches above the table</span>
        </div>
      </div>
      </div>
    </div>
<!-- END Placement as Table Control Row -->

  <!-- Start Placement of Label Relative to Switch Row -->
  <div class="c-header-xs">Placement of label relative to swtich</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/switches/switch-controls/switches-controls-label-do'%} 
    </div>
    <div class="c-col">
   {% include guide-img.html img='elements/switches/switch-controls/switches-controls-label-dont'%}  
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do place the label to the right of the switch</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't place the label on the left</span>
        </div>
      </div>
      </div>
    </div>
  <!-- END Placement of Label Relative to Switch Row -->

  <!-- Start Vertical Alignment of Text Relative to Swtich Row -->
  <div class="c-header-xs">Vertical alignment of text relative to switch</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/switches/switch-controls/switches-controls-label-align-do'%}
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/switches/switch-controls/switches-controls-label-align-dont'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do vertically align text labels to center</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do make sure that the space above and below the label is the same</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't vertically align the text label to top or bottom</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't allow the space above or below the text label to be unbalanced</span>
        </div>
      </div>
      </div>
    </div>
<!-- ENDVertical Alignment of Text Relative to Swtich Row -->

 <!-- Start Label Language Row -->
  <div class="c-header-xs">Vertical alignment of text relative to switch</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/switches/switch-controls/switches-controls-label-language-do'%}
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/switches/switch-controls/switches-controls-label-language-dont'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do emphasise the positive or enabled action in the label</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do set the positive or enabled action activated by default, so the effect will be (at least initially) visible</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't emphasise the negative or disabled action in the label</span>
        </div>
      </div>
      </div>
    </div>
 <!-- END Label Language Row -->

 <!-- Start Label Length Row -->
  <div class="c-header-xs">Label length</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/switches/switch-controls/switches-controls-label-length-do'%}
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/switches/switch-controls/switches-controls-label-length-dont'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do keep labels as short and clear as possible</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use more than 2-3 words for labels</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't try and explain context in the label, it should be clear from the design what the context is</span>
        </div>
      </div>
      </div>
    </div>
 <!-- END Label Length Row -->

 <!-- Start Table Control vs Form Control Row -->
  <div class="c-header-xs">Table controls vs Form controls</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/switches/switch-controls/switches-controls-forms-do'%}
    </div>
    <div class="c-col">
    {% include guide-img.html img='elements/switches/switch-controls/switches-controls-forms-dont'%} 
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use switches as table controls to affect immediate and continuous changes</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use switches on forms where the settings need to be saved or applied before it takes effect</span>
        </div>
      </div>
      </div>
    </div>
 <!-- END Table Control vs Form Control Row -->
<!-- End Controls used with Tables, Data Viz, etc Section-->

<hr>

  <!-- Start Controls Used Inside a Table Row -->
 <div class="c-header-sm c-m-top-sm c-m-bottom-sm">Controls used inside a table pages</div>
  <div class="c-header-xs">Example of use</div>

  <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/switches/switch-tables/switches-table-example.png" width="500px;">

  <!-- Start Controls Used Inside a Table Do's and Don'ts Section -->
  <div class="c-header-sm c-m-top-sm c-m-bottom-sm">Do's and Dont's</div>

 <!-- Start Alignment Inside a Table Cell Row -->
  <div class="c-header-xs">Alignment inside a table cell</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/switches/switch-tables/switches-tables-align-do'%} 
    </div>
    <div class="c-col">
     {% include guide-img.html img='elements/switches/switch-tables/switches-settings-align-dont'%}
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do align a switch left, center or right inside a narrow table column</span>
        </div>
      </div>
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do left align a switch if the column is much wider than the switch</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't center or left align a switch inside a very wide table column</span>
        </div>
      </div>
      </div>
    </div>
 <!-- Start Alignment Inside a Table Cell Row -->

  <!-- Start Tables vs Forms Row -->
  <div class="c-header-xs">Tables vs Forms</div>
  <div class="c-row">
    <div class="c-col">
    {% include guide-img.html img='elements/switches/switch-tables/switches-tables-forms-do'%} 
    </div>
    <div class="c-col">
   {% include guide-img.html img='elements/switches/switch-tables/switches-tables-forms-dont'%}  
    </div>
  </div>
  <div class="c-row c-m-top-md c-m-bottom-xl">
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-check c-text-success"></span>
        <div class="c-media-body">
          <span class="c-text-md">Do use switches in tables to affect immediate and continuous changes</span>
        </div>
      </div>
    </div>
    <div class="c-col">
      <div class="c-media c-p-sm">
        <span class="fas fa-times c-text-danger"></span>
        <div class="c-media-body">
          <span class="c-text-md">Don't use switches on tables where the settings need to be saved or applied before it takes effect</span>
        </div>
      </div>
      </div>
    </div>
  <!-- Start Tables vs Forms Row -->
  <!-- End Controls used inside a table Do's and Don'ts Section -->

</div>
<!-- End Design Tab -->

<div id="code" class="docs-tabs-content" markdown="1">

## Base

Default switches support on/off text or blank depending on the design.

{% example html %}
<label class="c-switch c-switch-primary">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label"></span>
    <span class="c-switch-handle"></span>
</label>
<label class="c-switch c-switch-primary">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label" data-on="On" data-off="Off"></span>
    <span class="c-switch-handle"></span>
</label>
{% endexample %}

## Color Examples

This is an example of available colors for the **{{ page.title }}** element.


{% example html %}
{% for color in page.colors %}
<label class="c-switch c-switch-{{ color }}">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label" data-on="On" data-off="Off"></span>
    <span class="c-switch-handle"></span>
</label>
{% endfor %}
{% endexample %}


## Size Examples

This is an example of available size's for the **{{ page.title }}** element.


{% example html %}
<label class="c-switch c-switch-primary c-switch-xs">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label"></span>
    <span class="c-switch-handle"></span>
</label>
<label class="c-switch c-switch-primary c-switch-sm">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label"></span>
    <span class="c-switch-handle"></span>
</label>
<label class="c-switch c-switch-primary">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label"></span>
    <span class="c-switch-handle"></span>
</label>
<label class="c-switch c-switch-primary c-switch-lg">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label"></span>
    <span class="c-switch-handle"></span>
</label>
{% endexample %}


## Disabled state

Make switches inactive.

{% example html %}
<label class="c-switch c-switch-disabled c-switch-sm">
    <input type="checkbox" class="c-switch-input">
    <span class="c-switch-label" data-on="On" data-off="Off"></span>
    <span class="c-switch-handle"></span>
</label>
<label class="c-switch c-switch-disabled">
    <input type="checkbox" class="c-switch-input">
    <span class="c-switch-label" data-on="On" data-off="Off"></span>
    <span class="c-switch-handle"></span>
</label>
<label class="c-switch c-switch-disabled c-switch-lg">
    <input type="checkbox" class="c-switch-input">
    <span class="c-switch-label" data-on="On" data-off="Off"></span>
    <span class="c-switch-handle"></span>
</label>
{% endexample %}


## Additional Styles/Options


### Material
{% example html %}
<label class="c-switch-material c-switch-primary c-switch-xs">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label"></span>
    <span class="c-switch-handle"></span>
</label>
<label class="c-switch-material c-switch-primary c-switch-sm">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label"></span>
    <span class="c-switch-handle"></span>
</label>
<label class="c-switch-material c-switch-primary">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label"></span>
    <span class="c-switch-handle"></span>
</label>
<label class="c-switch-material c-switch-primary c-switch-lg">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label"></span>
    <span class="c-switch-handle"></span>
</label>
{% endexample %}

### Square
{% example html %}
<label class="c-switch-square c-switch-primary">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label" data-on="On" data-off="Off"></span>
    <span class="c-switch-handle"></span>
</label>
<label class="c-switch-square c-switch-success">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label" data-on="On" data-off="Off"></span>
    <span class="c-switch-handle"></span>
</label>
<label class="c-switch-square c-switch-warning">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label" data-on="On" data-off="Off"></span>
    <span class="c-switch-handle"></span>
</label>
<label class="c-switch-square c-switch-danger">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label" data-on="On" data-off="Off"></span>
    <span class="c-switch-handle"></span>
</label>
<label class="c-switch-square c-switch-disabled">
    <input type="checkbox" class="c-switch-input">
    <span class="c-switch-label" data-on="On" data-off="Off"></span>
    <span class="c-switch-handle"></span>
</label>
{% endexample %}

<hr>

## Switch States

{% example html %}
<label class="c-switch c-switch-primary">
    <input type="checkbox" class="c-switch-input" checked>
    <span class="c-switch-label"></span>
    <span class="c-switch-handle"></span>
</label>
<label class="c-switch c-switch-primary">
    <input type="checkbox" class="c-switch-input">
    <span class="c-switch-label"></span>
    <span class="c-switch-handle"></span>
</label>
<label class="c-switch c-switch-disabled">
    <input type="checkbox" class="c-switch-input">
    <span class="c-switch-label"></span>
    <span class="c-switch-handle"></span>
</label>
{% endexample %}


</div>

<div id="angular" class="docs-tabs-content" markdown="1">

### Switches
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/ipreo/sprinkles/?path=/story/components--switch&nav=0"></iframe>

</div>