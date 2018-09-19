---
layout: docs-fullwidth
title: Overview
description: The Cupcake Design System includes the resources to create user interfaces consistent with UX principles, design language, and best practices.
group: getting-started
---

# Goals
Rather than focusing on pixels, developers can focus on application logic, while designers can focus on user experience, interactions, and flows.

These elements, components, and patterns provide a unified language and consistent look and feel when designing apps and products within the Ipreo ecosystem.

For developers we’ve also created a powerful set of atomic/helpers classes that can be chained together to create just about any layout without writing a single line of new CSS. Further, these atomic classes can be used as modifiers of pre-existing components.

--- 

## How to best use Cupcake?
In order to use Cupcake, let’s consider the design you’d like to implement.

### If your design uses existing components.(It Should!)
Identify if the design you’re implementing uses any existing components. Great, it does? Grab the markup from that component’s example page and paste that into your view, use the classes provided to build the ui, or install one of the existing components built with Cupcake!

### If your design uses existing components but has some special cases.
E.G. background colors, borders, etc. This is the most common use - you have a bunch of elements but need to implement them or combine them together on a page. Cupcake provides tons of atomic or helper classes to make this easy. Practically, this will likely just be adding something like an .c-m-bottom-lg class to a button, or hiding something temporarily with .c-d-none. These classes still adhere to the UX design standards - so using these classes to compose your pages - will be fast and stay in line with the ultimate vision.


### If your design uses a new pattern that doesn’t have a component yet or isn't easily created with provided classes.
We try to avoid this and stay constantly in the loop with designers and product. Sometimes things slip through the cracks. No worries, reach out to the Cupcake team and we will happily help you.


### If your design is super special and you are going to write a lot of custom CSS from scratch in its own .scss file. 
You probably shouldn’t be doing this often. With the amount of existing helper classes and pre-composed elements, you can build most of what you’re attempting to do without writing a single new line of CSS. Chances are you would be duplicating alot of existing work. Tread carefully - Every line of you write, the more you have to maintain. The exception may be laying out the page in an easier more flexible way - if this is the case - or you find yourself writing the same classes or css often - please let the Cupcake team know - we'd be happy to add it to the core!

---

<a class="c-btn-link c-pull-right" href="{{ site.url }}{{ site.baseurl }}/content/getting-started/adoption/">
 Continue to Adoption <i class="fa fa-arrow-right"></i>
</a>
