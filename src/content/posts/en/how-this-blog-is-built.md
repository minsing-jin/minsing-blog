---
title: How This Blog Was Built
pubDatetime: 2026-06-04 11:00:00+09:00
description: A structure for building an Astro blog based on a template and deploying it to Cloudflare Pages.
category: Build Log
tags:
- astro
- cloudflare
- blog
language: en
translationOf: how-this-blog-is-built
translationStatus: approved
draft: false
featured: false
---

This blog was not built directly from scratch; it was started by customizing an Astro-based blog template.


## Chosen structure


- Based on an Astro template
- Write posts in Markdown/MDX
- Static deployment to Cloudflare Pages
- Newsletter form can be connected
- Ad slots can be activated after AdSense approval


Rather than keeping a server running continuously on a laptop, the code is uploaded to GitHub, and Cloudflare builds the static files and delivers them through a global CDN. So the site stays accessible even when the laptop is turned off.


## Why a static blog


In the early stages of a blog, there is no need for logins, a database, or server maintenance. Fast loading, low cost, easy backups, and good SEO are more important.


If features such as comments, memberships, or paid posts are needed later, they can be added then.
