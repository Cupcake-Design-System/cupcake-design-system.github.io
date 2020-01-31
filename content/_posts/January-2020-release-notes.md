---
layout: post
title: "January 2020"
introduction: "January 2020 release notes and changelog!"
color: "#007778"
name: "January 2020 Release"
icon: "rocket"
---

## Release [2.0.0](https://github.com/Cupcake-Design-System/Cupcake)

### Cupcake CSS updates

### Sprinkles Updates

### Documentation Updates
- Design Guidelines images have been updated to increase visual clarity






### Changelog

{% callout info %}
**This changelog ONLY covers changes and removals. For additions please view the rest of the docs.**
{% endcallout %}

<br>

#### Alerts

**Style Changes:**
  - Increased contrast, updated spacing.
  - No longer uses font-awesome for close icon - .c-alert-close provides the X 

**Code Changes:**
  - No longer uses font-awesome for close icon - .c-alert-close provides the X - will need to be removed from existing code implementations

---

#### Alert Toast

**Style Changes:**
  - Increased contrast, updated spacing.
  - No longer uses font-awesome for close icon - .c-alert-close provides the X 

**Code Changes:**
  - Removed pseudo class for icon class - now requires .c-alert-icon to add icon  
  - No longer uses font-awesome for close icon - .c-alert-close provides the X - will need to be removed from existing code implementations

---

#### Avatar

**Style Changes:**
- Size changes.
- Additional color options.
- Additional/better support for status or icon useage. 

**Code Changes:**
- Markup is unchanged.

---

#### Badges

**Style Changes:**
- Size changes.
- Additional color options.
- Additional/better support for icon useage. 
- Default badges are rounded now.
- .c-badge-square is the modifier to remove radius.

**Deprecated:**
- .c-badge-rounded 
- .c-badge-outline 
- .c-badge-{colorName}-outline 
- .c-badge-xl   

**Code Changes:**
- .c-badge-rounded > default is now rounded
- .c-square can now replicate default from 1.x
- .c-badge-xl > NO REPLACEMENT
- .c-badge-outline > NO REPLACEMENT
- .c-badge-{colorName}-outline > NO REPLACEMENT
 
*Outline badges are available in cupcake-shim.css*

---

#### Buttons

**Style Changes:**
- Size changes.
- Color contrast and accessibility

**Deprecated:**
- .c-btn-pill 
- .c-btn-xl 
- .c-btn-warning 
- .c-btn-{color}-outline
   
**Code Changes:**
- .c-btn-xl > NO REPLACEMENT
- .c-btn-warning > NO REPLACEMENT
- .c-btn-pill > NO REPLACEMENT but can be enabled at theme level
- .c-btn-{color}-outline

**Note:** `.c-btn-{color}-outline`

*Outline buttons are still available but teams should plan to move away from this!*

---

#### Cards

**Style Changes:**
- Size changes.
- Header sizes.
- Header layout options.
- Footer sizes.
- Footer layout options.

**Deprecated:**
- .c-card-content-title
- .c-card-content-subtitle
- .c-card-deck
- .c-card-{color}

**Code Changes:**
- .c-card-content-title > can use standard text helpers
- .c-card-content-subtitle > can use standard text helpers
- .c-card-deck > can use normal grid or card group
- .c-card-{color} > NO REPLACEMENT
 
*Card deck and card colors are available in cupcake-shim.css*

---

#### Checkboxes and Radios

**Style Changes:**
- Size changes.
- Remove sizes options.
- Remove color options.

**Deprecated:**
- .c-checkbox-{size}
- .c-checkbox-{color}
- .c-radio-{size}
- .c-radio-{color}

**Code Changes:**
- BREAKING SYNTAX

New syntax must follow div > input > label order

{% highlight html %}
<div class="c-checkbox">
 <input type="checkbox">
 <label>Label Unchecked</label>
</div>
{% endhighlight %} 

*Radio/Check sizes and colors are still available but teams should plan to move away from this!*

---

#### File Upload

**Style Changes:**
  - Size changes
  - Color and layout changes.

**Code Changes:**
- Markup Unchanged

---

#### Footer

**Style Changes:**
- Size changes
- Color and layout changes.

**Code Changes:**
- Markup Unchanged

---


#### Forms

**Style Changes:**
- Size changes
- Color and layout changes.

**Deprecated:**
- .c-input-xl

**Code Changes:**
- .c-input-xl > NO REPLACEMENT

---

#### Grid

**Style Changes:**
- Gutter changes

**Code Changes:**
- Markup Unchanged

---

#### Header

**Style Changes:**
- Size changes
- Color and layout changes.

**Code Changes:**
- Markup Unchanged

---

#### Loaders

**Style Changes:**
- Size changes
- Color and layout changes.

**Code Changes:**
- Markup Unchanged

---

#### Media Objects

**Style Changes:**
- Size changes
- Color and layout changes.

**Code Changes:**
- Markup Unchanged

---

#### Modal

**Style Changes:**
- Size changes
- Color and layout changes.

**Deprecated:**
- .c-modal-fade

**Code Changes:**
- BREAKING SYNTAX complete rewrite
- Toggle the class .c-modal-visible

{% highlight html %}
<div class="c-modal-backdrop c-modal-visible">
  <div class="c-modal c-modal-sm">
    <div class="c-modal-content">
      <div class="c-modal-header">
        <h4 class="c-modal-title">Modal header</h4>
        <span id="close" class="c-modal-close"></span>
      </div>
      <div class="c-modal-body"> Modal Body
      </div>
      <div class="c-modal-footer"> Modal Footer
      </div>
    </div>
  </div>
</div>
{% endhighlight %} 

---


#### Pagination

**Style Changes:**
- Size changes
- Color and layout changes.

**Deprecated:**
- .c-pagination-sm
- .c-pagination-lg

**Code Changes:**
- .c-pagination-sm > use .c-pagination only
- .c-pagination-lg > use .c-pagination only

---

#### Progress

**Deprecated: Removed Completely**

---

#### Switches

**Style Changes:**
- Size changes.
- Remove sizes options.
- Remove color options.
- Remove extra styles options.

**Deprecated:**
- .c-switch-sm
- .c-switch-{color}
- .c-switch-square
- .c-switch-material

**Code Changes:**
- .c-switch-sm > use .c-switch
- .c-switch-{color} > remove color reference
- .c-switch-square > use .c-switch only
- .c-switch-material > use .c-switch only
- BREAKING SYNTAX

New syntax must follow label > input > span > label order

{% highlight html %}
<label class="c-switch">
  <input type="checkbox">
  <span class="c-switch-handle"></span>
  <label class="c-switch-label"></label>
</label>
{% endhighlight %} 

*Switch colors are still available but teams should plan to move away from this*

---

#### Table

**Style Changes:**
- Size and color changes.

**Code Changes:**
- Markup Unchanged

---

#### Tabs

**Style Changes:**
- Size and color changes.

**Deprecated:**
- .c-tabs-toggle

**Code Changes:**
- .c-tabs-toggle > use .c-tabs or c-tabs-bordered

---

#### Tooltips/Popovers

**Deprecated:**

Only CSS tooltips remain in the core. 

*Legacy styles are available in cupcake-shim.css*

---

#### Typography

**Style Changes:**
- Size changes.

**Deprecated:**
- .c-body-text-{size}

**Code Changes:**
- .c-body-text-{size} > use .c-text-{size}

---

#### Etc.

**Icon Sizes: .c-icon-{size}**
- Size changes.

**Space Sizes: .c-p-{size} or .c-m-{size}**
- .c-body-text-{size}

**Side Nav: original was never really released**
- Side-nav is now in core

**Notifications**
- .c-notification - deprecated use > .c-media (available in cupcake-shim.css)
- .c-notify-logs - deprecated was specifically for early angular package

---