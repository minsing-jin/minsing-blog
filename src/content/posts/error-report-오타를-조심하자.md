---
title: "Error report: 오타를 조심하자"
pubDatetime: 2023-02-05T13:47:21.315Z
description: "역시 스택오버플로우의 갓 행님들!!"
category: "Programming & CS"
canonicalURL: "https://velog.io/@minsing-jin/Error-report-오타를-조심하자"
velogSeries: ["web_study"]
---

# Situation
I tried to get image cover at notion to show notion cover photo in my portfolio site.
I get cover url at query data list and show notion data base cover in my portfolio_site.

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

    
    
    
    
    
But images are corrupted in my site like this. 
![](/images/velog/ba32e0822d5d268c.png)



## Trial1
So I attempt to modify next.config.js. I made images domain arrary.
![](/images/velog/785ca36863655d39.png)


But nothing is solved.





## Trial2
And I tried console.log to check if image source links are get in const imageSrc.
[enter image description here](https://i.stack.imgur.com/jRs9F.png)

It is good to receive image source links.

What is wrong with my code? Is that I something to miss out?






# Solved
![](/images/velog/9be0d38953d7b692.png)


-> 단순 scr을 src로 바꿔야하는 오타 문제였다.... 이미지가 안불러와지는건 태그의 src의 오타로 링크가 안불러와진것! ㅠㅠ



Plus Error solution)
https://nextjs.org/docs/messages/next-image-unconfigured-host

- It must be modify "https://s3.us-west-2.amazonaws.com" to "s3.us-west-2.amazonaws.com" in next.config.js!!
