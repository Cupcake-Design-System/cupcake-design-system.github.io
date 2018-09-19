---
layout: docs
title: This is page title
description: This description is from the top of the markdown page
group: elements
---

# H1
## H2
### H3
#### H4

##### H5

This is normal text.

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~


1. First ordered list item
2. Another item
  * Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
  1. Ordered sub-list
4. And another item.  
   
   Some text that should be aligned with the above item.

* Unordered list can use asterisks
- Or minuses
+ Or pluses


[I'm an inline-style link](https://www.google.com)

Or leave it empty and use the [link text itself]

URLs and URLs in angle brackets will automatically get turned into links. 
http://www.example.com or <http://www.example.com> and sometimes 
example.com (but not on Github, for example).


Here's our logo (hover to see the title text):

Inline-style: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style: 
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

 
Three or more...

---

Hyphens

***

Asterisks

___

Underscores


{% example html %}
<span class="c-avatar c-avatar-primary">
<i class="fa fa-cloud-download"></i>
</span>
<span class="c-avatar c-avatar-secondary" data-text="AB"></span>
{% endexample %}


{% highlight html %}
<span class="c-avatar" >
  <img src="https://unsplash.it/200?image=1011">
</span>
<span class="c-avatar c-avatar-primary">
<i class="fa fa-cloud-download"></i>
</span>
<span class="c-avatar c-avatar-secondary" data-text="AB"></span>
{% endhighlight %}


{% callout info %}
#### This is callout-info

This is supporting text to describe what the information callout is about.
{% endcallout %}

{% callout danger %}
#### This is callout-danger

This is supporting text to describe what the danger callout is about.
{% endcallout %}


{% callout warning %}
#### This is callout-warning

This is supporting text to describe what the warning callout is about.
{% endcallout %}



{% include guide-img.html img='card/card-dont'%}