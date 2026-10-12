---
title: What I Learned While Deploying a Blog with Cloudflare Pages
pubDatetime: 2026-06-04 13:00:00+09:00
description: A summary of the deployment structure I worked out while hosting a blog on Cloudflare Pages instead of a laptop server.
category: Build Log
tags:
- cloudflare
- deploy
- astro
language: en
translationOf: cloudflare-pages-deploy-log
translationStatus: approved
draft: false
featured: false
---

At first, I thought I could just run the blog on my laptop. But if the laptop is turned off,
the site goes down too. A public blog should be hosted on a deployment service rather than a
personal device.


This time, I used Cloudflare Pages.


## Deployment structure


The code is on GitHub, and the build output is uploaded to Cloudflare Pages. Visitors receive
the site from Cloudflare's CDN, not from my laptop.


The advantages of this structure are simple.


- Almost no server operation is required
- It's fast because it's a static blog
- You can start for free
- It's easy to add a custom domain later


## What actually mattered


I used the AstroPaper template, and Node version 22 or higher was required. If the local Node
version is too low, the build may fail. In the deployment environment, you must specify
`NODE_VERSION=22.12.0`.


The smaller the blog, the stronger a simple static deployment is compared to a complex server.
