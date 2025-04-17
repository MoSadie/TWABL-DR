---
title: "TWABL;DR"
description: "TWAB Long; Didn't Read"
layout: titled_page
---

{% assign tldr_cat = site.categories | find: "category", "tldr" %}
{% assign latest_tldr = tldr_cat.first[1].first %}

## Latest TL;DR: {{ latest_tldr.title }}

{{ latest_tldr.content }}


## All TL;DRs in chronological order

<table><tr><th>Date</th><th>TL;DR</th><th>Bungie.net post</th></tr>

{% for post in site.posts %}
    {% if post.category != "tldr" %}
        {% continue %}
    {% endif %}
    <tr><td> {{ post.date | date_to_string: "ordinal", "US" }} </td><td> <a href="{{ post.url | relative_url }}">TL;DR</a> </td><td> <a href="{{ post.bungie_url }}">{{ post.title }}</a> </td></tr>
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

## What?

These are summaries of blog posts from the video game developer Bungie. This site mainly focuses on the weekly `This Week at Bungie`/`This Week in Destiny` series, but other blog posts are summarized when desired. There summaries are targeted towards Destiny 2 players who are familiar with the game. I will do my best to put spoiler tags on any major reveals that happen in a given week, but I would always recommend being caught up on any weekly story quests before reading a TL;DR or TWAB/TWID.

## Why?

I write these for my clan every week and post them in our Discord, figured others would want a TL;DR as well. This is also a chance for me to learn more about GitHub Pages and Jekyll.