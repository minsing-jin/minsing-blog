---
title: 'Error report: Be Careful of Typos'
pubDatetime: 2023-02-05 13:47:21.315000+00:00
description: As expected, the awesome folks at Stack Overflow!!
category: Programming & CS
tags: []
language: en
translationOf: error-report-오타를-조심하자
translationStatus: approved
draft: false
velogSeries:
- web_study
---

# Situation
I tried to retrieve an image cover from Notion so that I could display the Notion cover photo on my portfolio site.
I retrieved the cover URL from the query data list and displayed the Notion database cover on my portfolio_site.


![](/images/velog/396fb1e0e0caffa8.png)






```javascript
import Image from "next/image";

export default function ProjectItem({data}){
	
	const Title = data.properties.Name.title[0].plain_text
	const githublink = data.properties.Github.url
	const youtubelink = data.properties.Youtube.url
	const description = data.properties.Description.rich_text[0].plain_text
	const imgSrc = data.cover.file?.url || data.cover.external.url 
	
	console.log(imgSrc)
			
			
	return (
		<div className="flex flex-col p-6 m-3 bg-slate-700 rounded-md">
			
		<a>
			<Image 
				scr={imgSrc}
				width={100}
				height={60}
			/>	
		</a>
			
			
			<h1>{Title}</h1>
			<h3>{description}</h3>
			<a href={githublink}>깃허브 바로가기</a>
			<a href={youtubelink}>유튜브 시연영상 보러가기</a>
		</div>
	);`
	
}
```

    
    
    
    
    
But the images were corrupted on my site, as shown here.
![](/images/velog/ba32e0822d5d268c.png)




## Trial1
So I tried modifying next.config.js. I created an image domains array.
![](/images/velog/785ca36863655d39.png)



But nothing was resolved.






## Trial2
I also tried using console.log to check whether the image source links were being retrieved in the const imageSrc.
[Enter image description here](https://i.stack.imgur.com/jRs9F.png)


The image source links were being retrieved correctly.


What is wrong with my code? Is there something I'm missing?







# Solved
![](/images/velog/9be0d38953d7b692.png)



-> It was simply a typo that required changing scr to src.... The reason the image wasn't loading was that a typo in the tag's src prevented the link from loading! ㅠㅠ




Additional error solution)
https://nextjs.org/docs/messages/next-image-unconfigured-host


- In next.config.js, https://s3.us-west-2.amazonaws.com" must be changed to "s3.us-west-2.amazonaws.com"!!
