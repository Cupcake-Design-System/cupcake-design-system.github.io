---
title: Modal
layout: docs
description: Modals gather information, complete a subtask, or provide additional information without losing the context of an underlying page.
group: elements
toc: true
colors:
- primary
- success
- warning
- danger
---

## Base

Use when displaying information that does not require a user action, such as a read-only document or a supplemental video.

<div id="modal_default" class="c-modal c-modal-fade c-modal-in" style="display: none;">
    <div class="c-modal-dialog">
        <div class="c-modal-content">
            <div class="c-modal-header">
                <span class="c-modal-title">Modal header</span>
                <button type="button" class="c-modal-close">
                    <span onclick="closeDefault()" aria-hidden="true">×</span>
                </button>
            </div>
            <div class="c-modal-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus fugit perferendis voluptates cumque unde fuga reprehenderit
                illum doloribus, error, officia earum odit quasi minus odio eveniet explicabo accusantium, tempore quisquam.
            </div>
        </div>
    </div>
</div>

<div id="modal_danger" class="c-modal c-modal-danger c-modal-fade c-modal-in" style="display: none;">
<div class="c-modal-dialog">
    <div class="c-modal-content">
    <div class="c-modal-body c-text-center">
        <i class="fa fa-exclamation-circle c-modal-confirmation-icon"></i>
        <div class="c-modal-confirmation-title">Modal Title</div>
        <p class="c-modal-confirmation-text">Modal Text Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, eum.</p>
        <div class="c-modal-confirmation-buttons">
        <span class="close-modal" aria-hidden="true">
            <button onclick="closeDanger()" class=" close-modal c-btn c-btn-secondary c-m-right-sm">Cancel</button>
            <button onclick="closeDanger()" class="c-btn c-btn-danger">Delete</button>
        </span>
        </div>
    </div>
    </div>
</div>
</div>

<div id="modal_info" class="c-modal c-modal-info c-modal-fade c-modal-in">
<div class="c-modal-dialog">
    <div class="c-modal-content">
    <div class="c-modal-body c-text-center">
        <i class="fa fa-question-circle c-modal-confirmation-icon"></i>
        <div class="c-modal-confirmation-title">Modal Title</div>
        <p class="c-modal-confirmation-text">Modal Text Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, eum.</p>
        <div class="c-modal-confirmation-buttons">
        <span class="close-modal" aria-hidden="true">
            <button onclick="closeInfo()" class=" close-modal c-btn c-btn-secondary c-m-right-sm">Cancel</button>
            <button onclick="closeInfo()" class=" close c-btn c-btn-primary">Ok</button>
            </span>
        </div>
    </div>
    </div>
</div>
</div>

<!-- dark background to appear behind modals -->
<div id="dark" class="c-modal-backdrop c-modal-fade c-modal-in" style="display: none;"></div>

<button id="btn_default" class="c-btn c-btn-secondary c-btn-lg">Open Modal</button>

<button id="btn_danger" class="c-btn c-btn-danger c-btn-lg">Open Modal</button>

<button id="btn_info" class="c-btn c-btn-primary c-btn-lg">Open Modal</button>


{% highlight html %}
<div id="modal_info" class="c-modal c-modal-info c-modal-fade c-modal-in">
<div class="c-modal-dialog">
    <div class="c-modal-content">
        <div class="c-modal-header">
            <div class="c-modal-title">Modal header</div>
            <button type="button" class="c-modal-close">
                    <span onclick="closeDefault()" aria-hidden="true">×</span>
                </button>
        </div>
    <div class="c-modal-body c-text-center">
        <i class="fa fa-question-circle c-modal-confirmation-icon"></i>
        <span class="c-modal-confirmation-title">Modal Title</span>
        <p class="c-modal-confirmation-text">Modal Text Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, eum.</p>
        <div class="c-modal-confirmation-buttons">
        <span class="close-modal" aria-hidden="true">
            <button onclick="closeInfo()" class=" close-modal c-btn c-btn-secondary c-m-right-sm">Cancel</button>
            <button onclick="closeInfo()" class=" close c-btn c-btn-primary">Ok</button>
            </span>
        </div>
    </div>
    </div>
</div>
</div>
{% endhighlight %}

