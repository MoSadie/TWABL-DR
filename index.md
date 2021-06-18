---
title: "TWABL;DR"
description: "TWAB Long; Didn't Read"
layout: titled_page
---



## All TL;DRs in chronological order

<table><tr><th>Date</th><th>TL;DR</th><th>Bungie.net post</th></tr>

{% for post in site.posts %}
    <tr><td>{{ post.date | date: "%B %e %Y" }} </td><td> <a href="{{ post.url }}">TL;DR</a> </td><td> <a href="{{ post.bungie_url }}">Full TWAB</a> </td></tr>
{% endfor %}

</table>

## Why?

I write these for my clan every week and post them in our Discord, figured others would want a TL;DR as well.

| Date | TL;DR | Bungie.net post |
| ---- | ----- | --------------- |
| 12 | 34 | 56 |