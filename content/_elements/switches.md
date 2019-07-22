---
title: Switches
description: Switches are a type of selection control, offering a quick way to toggle between two states. Changing a state is immediate and continuous.
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
- Code
- Angular 
- Guidelines
---


<!-- Start Cupcake Code Tab -->
<div id="code" class="docs-tabs-content" markdown="1">

### Switch
The default switch is available in default and Large size.

{% example html %}
<label class="c-switch">
  <input type="checkbox">
  <span class="c-switch-handle"></span>
</label>
{% endexample %}


{% example html %}
<label class="c-switch c-switch-lg">
  <input type="checkbox">
  <span class="c-switch-handle"></span>
</label>
{% endexample %}

<hr>
<br>


**Adding label text.**
{% example html %}
<label class="c-switch">
  <input type="checkbox">
  <span class="c-switch-handle"></span>
  <label class="c-switch-label">Default with label</label>
</label>
{% endexample %}


{% example html %}
<label class="c-switch c-switch-lg">
  <input type="checkbox">
  <span class="c-switch-handle"></span>
  <label class="c-switch-label">Default with label</label>
</label>
{% endexample %}

<hr>
<br>


**Adding disabled to the input.**
{% example html %}
<label class="c-switch">
  <input type="checkbox" disabled>
  <span class="c-switch-handle"></span>
</label>
{% endexample %}

{% example html %}
<label class="c-switch c-switch-lg">
  <input type="checkbox" disabled>
  <span class="c-switch-handle"></span>
</label>
{% endexample %}


<hr>
<br>


**Adding disabled to the input and label - where label text stays normal.**
{% example html %}
<label class="c-switch">
  <input type="checkbox" disabled>
  <span class="c-switch-handle"></span>
  <label class="c-switch-label">Default with switch disabled</label>
</label>
{% endexample %}

{% example html %}
<label class="c-switch c-switch-lg">
  <input type="checkbox" disabled>
  <span class="c-switch-handle"></span>
  <label class="c-switch-label">Large with switch disabled</label>
</label>
{% endexample %}

<hr>
<br>


**Adding disabled to the input and label - where label is disabled as well.**
{% example html %}
<label class="c-switch c-switch-disabled">
  <input type="checkbox" disabled>
  <span class="c-switch-handle"></span>
  <label class="c-switch-label">Default with switch disabled</label>
</label>
{% endexample %}


{% example html %}
<label class="c-switch c-switch-lg c-switch-disabled">
  <input type="checkbox" disabled>
  <span class="c-switch-handle"></span>
  <label class="c-switch-label">Large with switch disabled</label>
</label>
{% endexample %}


<hr>
<br>


**Adding disabled to the input when checked.**
{% example html %}
<label class="c-switch">
  <input type="checkbox" checked disabled>
  <span class="c-switch-handle"></span>
  <label class="c-switch-label">Default with switch selected and disabled</label>
</label>
{% endexample %}


{% example html %}
<label class="c-switch c-switch-lg">
  <input type="checkbox" checked disabled>
  <span class="c-switch-handle"></span>
  <label class="c-switch-label">Large with switch selected and disabled</label>
</label>
{% endexample %}



<hr>
<br>


**Adding disabled to the input and label when checked.**
{% example html %}
<label class="c-switch c-switch-disabled">
  <input type="checkbox" checked disabled>
  <span class="c-switch-handle"></span>
  <label class="c-switch-label">Default with switch and label disabled</label>
</label>
{% endexample %}


{% example html %}
<label class="c-switch c-switch-lg c-switch-disabled">
  <input type="checkbox" checked disabled>
  <span class="c-switch-handle"></span>
  <label class="c-switch-label">Large with switch and label disabled</label>
</label>
{% endexample %}


### Additional
Although not encouraged for general useage - additional colors are available.

{% example html %}
{% for color in page.colors %}
<label class="c-switch c-switch-{{ color }}">
  <input type="checkbox" checked>
  <span class="c-switch-handle"></span>
  <label class="c-switch-label"></label>
</label>
{% endfor %}
{% for color in page.colors %}
<label class="c-switch c-switch-lg c-switch-{{ color }}">
  <input type="checkbox" checked>
  <span class="c-switch-handle"></span>
  <label class="c-switch-label"></label>
</label>
{% endfor %}
{% endexample %}

You can also add text to the large switch size. Again, use carefully - anything other than ON/OFF text is outside of the intended usage.

{% example html %}
{% for color in page.colors %}
<label class="c-switch c-switch-lg c-switch-{{ color }}">
  <input type="checkbox" checked>
  <span class="c-switch-handle"></span>
  <label class="c-switch-label" data-on="On" data-off="Off"></label>
</label>
{% endfor %}
{% endexample %}


</div>
<!-- End Cupcake Code Tab -->

<!-- Start Angular Tab -->
<div id="angular" class="docs-tabs-content" markdown="1">

### Switches
<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/ipreo/sprinkles/?path=/story/components--switch&nav=0"></iframe>

</div>
<!-- End Angular Tab -->

<!-- Start Design Guidelines Tab -->
<div id="guidelines" class="docs-tabs-content" markdown="1">

# Overview

**Switches have 4 different states:**

- Active
- Inactive
- Active (disabled)
- Inactive (disabled)

**Types of switches available:**

- Standard version
- Mobile version *The mobile version has a bigger hit area and larger text for better performance on smaller mobile screens.*

<br>

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/switches/new format/switch-types.png" width="400">

**Usage**

- As a selection control in Settings pages
- As a selection control combined with tables, data visualisations, etc.
- As a selection control in tables

**Combined with labels**

Switches should be combined with accompanying text or a label.

**Label best practices:**

- Keep label text short and concise
- Always place the label on the right
- Use sentence style capitalisation for label text
- Don't add additional characters or punctuation at the end of each label
- Labels should be vertically centred relative to the switch (see example)

**Best Practices**

- Always use switches in combination with accompanying text or a label
- Avoid using switches in forms where the settings need to be saved or applied before taking effect

<hr>

## Examples

**A selection control in Settings pages**

 <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/switches/new format/switches-settings-example.png" width="">

 **A selection control combined with tables, data visualisations, etc.**

 <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/switches/new format/switches-controls-example.png" width="">

 **A selection control in tables**

  <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/switches/new format/switches-table-example.png" width="">

 <hr>
  
  <!-- Start Switch Hygiene Do's and Don'ts Section -->
### Do's and Don'ts

  <!-- Start Switch Hygiene Badge Row -->
##### Basic Switch Hyigene

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

<hr>

 <!-- Start Controls Used in Settings Pages Row -->
### Controls used in Settings pages

<br>
#### Examples of use

  <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/switches/switch-settings/switches-settings-example.png" width="500px;">

  <br>
 <!-- END Controls Used in Settings Pages Row -->

  <!-- Start Dos and Donts - Controls used in Settings Pages Row -->
#### Do's and Dont's
<!-- Start Placement Relative to Labels Row -->
##### Placement relative to labels

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
##### Label alignment relative to switches

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
##### Settings vs Forms

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
### Controls used with Tables, Data Viz, etc
Switches are often used as controls with tables and data visualisations to affect the information the user can view and interact with.

<br>

#### Example of use

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/switches/switch-controls/switches-controls-example.png" width="500px;">

<br>

#### Do's and Don'ts
<!-- Start Placement as Table Control Row -->
##### Placement as table control

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
##### Placement of label relative to swtich

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
##### Vertical alignment of text relative to switch

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
##### Vertical alignment of text relative to switch

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
##### Label length

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
##### Table controls vs Form controls

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
### Controls used inside a table pages

<br>

#### Examples of use

  <img src="{{ site.url }}{{ site.baseurl }}/assets/img/elements/switches/switch-tables/switches-table-example.png" width="500px;">

  <br>

  <!-- Start Controls Used Inside a Table Do's and Don'ts Section -->
#### Do's and Dont's

 <!-- Start Alignment Inside a Table Cell Row -->
##### Alignment inside a table cell

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
##### Tables vs Forms

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
