---
title: Notifications
description: The Notifications module surfaces activities related to your workflow, and can be configured via a Settings panel.
category: Pages
---

## Overview
The types of notifications depends on your requirements, but typically include the following:

- Actions performed by other users eg. comments on a shared workflow
- Actions performed by users in another system eg. updates to a shared resource
- Actions performed by the system eg. unavailability of a shared resource

**Note:** Messages that are delivered by the Alerts component (Banner, Box and Toast Alerts) should not be included as notifications. This will lead to confusion and duplication.

## Structure

Notifications should be non-invasive and non-interruptive, therefore are limited to:

- a counter and panel trigger in the header
- a panel where the notifications are read, managed and settings applied

<br>

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/patterns/notifications/notifications-structure-example@2x.png" width="520px;">

<br>

Specific controls are available on hover that allow notifications to be marked as read or removed.

<br>

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/patterns/notifications/unread-notification-example@2x.png" width="520px;">

**Example showing unread notification**

<br>

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/patterns/notifications/read-notification-example@2x.png" width="520px;">

**Example showing limited available controls on read notifications**


## Settings
Notifications can be configured via a Settings panel. Settings should be kept simple by sticking to on/off switches.

<br>

<img src="{{ site.url }}{{ site.baseurl }}/assets/img/patterns/notifications/notifications-settings-example@2x.png" width="520px;">

## Email Integration
Notifications can be configured to send the user email summaries and reminders.

**Email summaries examples:**

<a href="https://ipreo.invisionapp.com/d/main#/console/18141293/380756505/preview" target="_blank">Account Link</a>

<a href="https://ipreo.invisionapp.com/share/KXT8JYXV7JQ#/380756505_section-Cover-Summary" target="_blank">Public Link</a>

<br>

**Email reminder examples:**

<a href="https://ipreo.invisionapp.com/d/main#/console/18141293/380756899/preview" target="_blank">Account Link</a>

<a href="https://ipreo.invisionapp.com/share/KXT8JYXV7JQ#/380756899_section-Cover-Types" target="_blank">Public Link</a>

## Behaviour
An clickable prototype that demonstrates the basic interactions is available in <a href="https://ipreo.invisionapp.com/d/main#/console/18141293/376520046/preview" target="_blank">Invision</a>

