---
title: "TWABL;DR"
description: "TWAB Long; Didn't Read"
layout: titled_page
---

## Latest post: {{ site.posts.first.title }}

{{ site.posts.first.content }}



## All TL;DRs in chronological order

<table><tr><th>Date</th><th>TL;DR</th><th>Bungie.net post</th></tr>

{% for post in site.posts | where: "category", "tldr" %}
    <tr><td> {{ post.date | date_to_string: "ordinal", "US" }} </td><td> <a href="{{ post.url | relative_url }}">TL;DR</a> </td><td> <a href="{{ post.bungie_url }}">Full TWAB</a> </td></tr>
{% endfor %}

</table>

## Other posts

<table><tr><th>Date</th><th>Post</th></tr>

{% for post in site.posts | where_exp: "item", "item.category != 'tldr'" %}
    <tr><td> {{ post.date | date_to_string: "ordinal", "US" }}</td><td><a href="{{ post.url | relative_url }}">{{ post.title }}</a></td></tr>
{% endfor %}
</table>

## Why?

I write these for my clan every week and post them in our Discord, figured others would want a TL;DR as well.