---
title: Developers
description: The Cupcake Component Library provides front-end developers & engineers a collection of reusable HTML and SCSS partials to build user interfaces.
---


#### Installation

There are multiple ways to get started with Cupcake. You can install manually, from a CDN or use package managers.

The suggested way to use Cupcake is with a package manager.


**Using npm:**

{% highlight sh %}
npm install @cupcake-ds/cupcake  --save
{% endhighlight %}

<br>

This will pull down the latest version into your local node_modules folder and save it into your project's dependencies in package.json.

--- 


#### Install manually

Download the compiled and minified CSS file:

<a href="https://github.com/Cupcake-Design-System/Cupcake/releases" class="c-btn c-btn-primary" target="_blank">Download CSS</a>

Include cupcake.css located in /dist in your application. You can also add experimental.css for using experimental features.

{% highlight html %}
<link rel="stylesheet" href="cupcake.min.css">
<link rel="stylesheet" href="experimental.min.css">
{% endhighlight %}

---

#### Install from CDN
Alternatively, you can use the unpkg CDN to load the compiled files.

To use the css at the page level - simply include default.min.css in your HTML file:

{% highlight html %}
<link rel="stylesheet" href="https://unpkg.com/@cupcake-ds/cupcake/dist/cupcake.css">
{% endhighlight %}

---


### Angular Support

Cupcake has also been extended with many well-designed and implemented components built on top of Angular, one of the most popular JavaScript frameworks in the industry.


You can find some of those in the resources section [here]({{ site.url }}{{ site.baseurl }}{{ site.extensions }}).

---

{% include continue.html page='elements/overview' content="Elements" %}