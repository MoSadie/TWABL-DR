---
title: "TWABL;DR"
description: "TWAB Long; Didn't Read"
layout: titled_page
---

{% assign tldr_cat = site.categories | where 'tldr' | first %}
## Most recent TL;DR: {{ tldr_cat.first.title }}

{{ tldr_cat.first.content }}


## All TL;DRs in chronological order

<table><tr><th>Date</th><th>TL;DR</th><th>Bungie.net post</th></tr>

{% for post in site.posts %}
    <tr><td>{{ post.date }} </td><td> [TL;DR]({{ post.url }}) </td><td> [Full TWAB]({{ post.bungie_url }}) </td></tr>
{% endfor %}

</table>

## Why?

I write these for my clan every week and post them in our Discord, figured others would want a TL;DR as well.

| Date | TL;DR | Bungie.net post |
| ---- | ----- | --------------- |
| 12 | 34 | 56 |