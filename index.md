---
title: "TWABL;DR"
description: "TWAB Long; Didn't Read"
layout: titled_page
---

{% assign tldr_cat = site.categories | find: "category", "tldr" %}

{{ tldr_cat.first[1] | inspect }}

## Latest TL;DR: {{ tldr_cat.first[1].title }}

{{ tldr_cat.first[1].content }}


## All TL;DRs in chronological order

<table><tr><th>Date</th><th>TL;DR</th><th>Bungie.net post</th></tr>

{% for post in site.posts %}
    {% if post.category != "tldr" %}
        {% continue %}
    {% endif %}
    <tr><td> {{ post.date | date_to_string: "ordinal", "US" }} </td><td> <a href="{{ post.url | relative_url }}">TL;DR</a> </td><td> <a href="{{ post.bungie_url }}">Full TWAB</a> </td></tr>
{% endfor %}

</table>

## Other posts

<table><tr><th>Date</th><th>Post</th></tr>

{% for post in site.posts %}
    {% if post.category == "tldr" %}
        {% continue %}
    {% endif %}
    <tr><td> {{ post.date | date_to_string: "ordinal", "US" }}</td><td><a href="{{ post.url | relative_url }}">{{ post.title }}</a></td></tr>
{% endfor %}
</table>

## Why?

I write these for my clan every week and post them in our Discord, figured others would want a TL;DR as well.