---
title: Button Group
layout: docs
description: Button groups are used to bunch together buttons with similar actions
group: elements
toc: true
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
---

{% capture design %}

### UX Guidance

##### Icon-Only Button Usage
{% include guide-img.html img='buttons/icon-only-button-usage'%} 

##### Icon-Only Button Usage in Forms
{% include guide-img.html img='buttons/icon-only-button-usage-forms'%} 


<hr>

# Style Guide/Usage

##### Button Wording
{% include guide-img.html img='buttons/button-wording-dos-donts'%} 

##### Buttons + Icons
{% include guide-img.html img='buttons/buttons-icons-dos-donts'%}


{% endcapture %}


{% capture code %}

<iframe title="storybook" width="100%" height="500px" src="https://pages.code.ipreo.com/josh-easter/storybook-demo/?path=/story/basic-elements--avatar&full=0&addons=1&stories=0&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs"></iframe>

{% endcapture %}

{% include comp-2.html %}
