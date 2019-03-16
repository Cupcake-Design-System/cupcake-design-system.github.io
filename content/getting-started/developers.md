---
layout: docs
title: Developers
description: The Cupcake Component Library provides front-end developers & engineers a collection of reusable HTML and SCSS partials to build user interfaces.
group: getting-started
toc: true
toc-flavors: false
---


# Getting Started

## 1. Installation

The suggested way to use Cupcake is with a package manager.

**Using npm:**

{% highlight sh %}
npm install @ipreo/cupcake  --save
{% endhighlight %}

This will pull down the latest version into your local node_modules folder and save it into your project's dependencies in package.json.

{% callout warning %}
#### Note: To use the npm package, you must be authenticated to use Ipreo's private repo server - artifactory 
[Read More Here](https://teamipreo.atlassian.net/wiki/spaces/DevelopmentTools/pages/42729761/How+to+get+started+with+Artifactory)
{% endcallout %}


--- 


## 2. Using the Library

To use the css at the page level - simply include default.min.css in your HTML file:

{% highlight html %}
<link rel="stylesheet" href="path/to/node_modules/@ipreo/cupcake/default.min.css">
{% endhighlight %}


For more advanced useage you can import the scss:
{% highlight scss %}
@import 'node_modules/vanilla-framework/scss/vanilla';
@include vanilla;
{% endhighlight %}

--- 


## 3. Write your HTML
Using the Cupcake CSS class names and markup

{% highlight html %}
<button class="c-btn c-btn-primary"> Button </button>
{% endhighlight %}


--- 


## Angular Support

Cupcake has also been extended with many well-designed and implemented components built on top of Angular, one of the most popular JavaScript frameworks in the industry.


You can find some of those in the resources section [here]({{ site.url }}{{ site.baseurl }}{{ site.extensions }}). Or by searching on code.ipreo.com.

---

<a class="c-btn-link c-pull-right" href="{{ site.url }}{{ site.baseurl }}/content/getting-started/designers/">
 Continue to Designers <i class="fa fa-arrow-right"></i>
</a>