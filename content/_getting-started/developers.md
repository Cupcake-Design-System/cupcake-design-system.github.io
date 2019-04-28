---
title: Developers
description: The Cupcake Component Library provides front-end developers & engineers a collection of reusable HTML and SCSS partials to build user interfaces.
---


### Getting Started

#### 1. Installation

The suggested way to use Cupcake is with a package manager.

**Using npm:**

{% highlight sh %}
npm install @cupcake-ds/cupcake  --save
{% endhighlight %}

This will pull down the latest version into your local node_modules folder and save it into your project's dependencies in package.json.


--- 


#### 2. Using the Library

To use the css at the page level - simply include default.min.css in your HTML file:

{% highlight html %}
<link rel="stylesheet" href="path/to/node_modules/@cupcake-ds/cupcake/cupcake.min.css">
{% endhighlight %}


For more advanced useage you can import the scss:
{% highlight scss %}
@import 'node_modules/@cupcake-ds/cupcake/scss';
{% endhighlight %}

--- 


#### 3. Write your HTML
Using the Cupcake CSS class names and markup

{% highlight html %}
<button class="c-btn c-btn-primary"> Button </button>
{% endhighlight %}


--- 


### Angular Support

Cupcake has also been extended with many well-designed and implemented components built on top of Angular, one of the most popular JavaScript frameworks in the industry.


You can find some of those in the resources section [here]({{ site.url }}{{ site.baseurl }}{{ site.extensions }}).

---

{% include continue.html page='elements/overview' content="Elements" %}