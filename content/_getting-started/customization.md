---
title: Developers
description: The Cupcake Component Library provides front-end developers &engineers a collection of reusable HTML and SCSS partials to build user interfaces.
---


#### Customization

You may need to add, remove, or extend the core of Cupcake. 

You can customize your version by editing and recompiling the scss files in the /src directory.

{% callout warning %}
#### Autoprefixer: Make sure your build process uses autoprefixer to ensure vendor prefixes are automatically added to your output CSS.
{% endcallout %}


**Importing Sass**

Any customization of Cupcake should be done by importing the scss source files. In this way, you can keep Cupcake up to date without conflicts, use the establish variables to stay in line with the Design Language, and keep your application code seperated from the Cupcake core.

<br>

**1.) First, install Cupcake via NPM or other package managers.**

{% highlight sh %}
npm install @cupcake-ds/cupcake  --save
{% endhighlight %}

<br>

**2.) Create your scss file to define your variables.**

{% highlight scss %}
/* import cupcake support files */
@import "cupcake/scss/support";

/* -------begin customization-------- */

// Define variables to override default ones
$primary-color: #fc7800;
$dark-color: #000;

/* -------end customization-------- */

/* finally, import Cupcake core file to set the changes! */
@import "cupcake";

{% endhighlight %}

<br>
<br>

{% callout info %}
#### More advanced styling instructions for maps, loops, mixins, and functions coming soon
{% endcallout %}

