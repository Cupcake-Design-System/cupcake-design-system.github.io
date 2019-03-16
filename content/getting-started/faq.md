---
layout: docs-fullwidth
title: FAQ
description: The most common questions we recieve.
group: getting-started
---

## What is the Cupcake Design System?
Cupcake is the design system for Ipreo applications. It is a series of individual styles, components, and guidelines used for creating unified UI.

Cupcake elements provide front-end developers & engineers a collection of reusable HTML and SCSS partials to build user interfaces. 

Cupcake’s designs stem from continuous exploration and research. These designs are built into our HTML/CSS components, which can be used any web UI, regardless of the underlying JavaScript framework. 

## Why not bootstrap/foundation/material?
The most popular question we used to answer.

Most importantly Ipreo has **very** wide range of products - that vary in tech debt. 
In our initial research of current Ipreo products, we discovered **many** different front-end libraries and version some as old as bootstrap 2. 

Upgrading or changing **any** of that would be an **all or nothing** scenario and any new pieces would surely cause **conflicts**.

Here is a great list compiled by thought-leaders in the industry...

- Those are rapid prototyping tools, not design systems
- Their styles, elements, and components do not consider your users or your unique context.
- Not detailed or specific enough so you spend as much time customizing or over-riding base out of the box styles.
- Power over quality is taken from developers and designers.
- You are beholden to their timeline and community. (For instance bootstrap 4 just came out of beta after **3 years** of updates and breaking changes)
- Third Party Support - (if your component needs a specific version of bootstrap or material - Cupcake styles will not conflict with those needs)

Since most frameworks have gone modular - we could - at any point add a single element or component from any framework if it met the needs of our user. 
We would simply add it underneath a cupcake class - ie. `.c-thing`.

This is **extremely powerful** as we now control the html class contract - at anytime we could change all of the styling inside a class like `.c-thing` **without having to do a full front-end rewrite of all html and angular components**

Many teams are still using older versions of bootstrap alongside cupcake - this allows you to add new Cupcake elements without upgrading everything on the page.

## Will Cupcake work with {insert third-party} component?
Absolutely. Cupcake will not apply styles to the specific component - but it is scoped not to conflict with any component. *Some specific agreed upon third parties will have specific cupcake packages available for adding consistent styles.* If you need help with styling a third party component - please reach out - we **love** to help!

## Which browsers are supported?
Cupcake components is supported in the following browsers:
- <i class="fab fa-internet-explorer c-text-muted" aria-hidden="true"></i> Partial IE10 Support
- <i class="fab fa-internet-explorer" aria-hidden="true"></i> IE11
- <i class="fab fa-edge" aria-hidden="true"></i> IE Edge latest
- <i class="fab fa-firefox" aria-hidden="true"></i> Firefox latest
- <i class="fab fa-chrome" aria-hidden="true"></i> Chrome latest
- <i class="fab fa-safari" aria-hidden="true"></i> Safari latest

## What language are the components written in?
The Cupcake Design System is a written SCSS, and HTML and ships deliverables in compiled CSS and HTML. We are purposely framework agnostic so we can happily integrate the shared styles in **any** framework!
There are also additional libraries - such as the angular components for Cupcake.

## I see a bug, how do I report it?
Please open an issue in the appropriate GitHub repo. We will address the bug as soon as we can. If you have a fix for the bug please feel free to submit a PR for it.

## Why hasn't my bug been fixed yet?
If you have a pressing bug or change it is best to make PR for the issue yourself. We work in sprints and will try to address your bug as soon as possible, usually by the following sprint. Issues that are out of scope will be tagged as such until it becomes a higher priority.

## Where do I go if I've read everything and still have an issue/question?
If you still have questions or can't find the answer you are looking for feel free to reach out in one of the following ways:

General inquiries
- Email: [teamcupcake@ipreo.com](teamcupcake@ipreo.com) 
- For design questions: [#UX slack](https://ipreo.slack.com/messages/C521XQF4J)
- For development questions: [#cupcake slack](https://ipreo.slack.com/messages/G37P0EKR9/)

---

<a class="c-btn-link c-pull-right" href="{{ site.url }}{{ site.baseurl }}/content/getting-started/contribute/">
 Continue to Contribute <i class="fa fa-arrow-right"></i>
</a>