---
title: "TWABL;DR"
description: "TWAB Long; Didn't Read"
layout: titled_page
---

{% assign last_tldr = site.posts | find: "category", "tldr" %}

## Most recent TL;DR: {{ last_tldr.title }}

{{ last_tldr.content }}


## All TL;DRs in chronological order

| Date | TL;DR | Bungie.net post |
| ---- | ----- | --------------- |
{% for post in site.posts %}
    {% if post.category == "tldr" %}
        | {{ post.date }} | [TL;DR]({{ post.url }}) | [Full TWAB]({{ post.bungie_url }}) |
    {% endif %}
{% endfor %}

## Why?

I write these for my clan every week and post them in our Discord, figured others would want a TL;DR as well.
