---
title: How to Merge
pubDatetime: 2023-06-10 14:39:36.295000+00:00
description: Fuuusion~~
category: Programming & CS
tags: []
language: en
translationOf: merge하는법
translationStatus: approved
draft: false
velogSeries:
- 깃허브
---

# What is merge?
It is the process of merging the contents of a newly created branch into the main branch. By making changes in the newly created branch, the main branch
![](/images/velog/045bbddfd5749c15.png)


[Refer to the merge details](https://abled.tistory.com/15)


## How to merge the GitHub master branch into the main branch
[Method](https://velog.io/@lecharl/master-main-%EA%B0%95%EC%A0%9C-%EB%B3%91%ED%95%A9)


- Main commands
 1. Switch branches (when switching by force, checkout **-f** main)
```
# git checkout main
```

 2. Merge branches (move to the target branch using checkout, then specify the branch to merge—the example below shows merging the test branch into the main branch)
```
# git merge test
```


-----------------


## In case of a conflict during merge
### Cause
- Merge conflicts occur when the same line in a file is changed or when one person edits a file while another user deletes the same file.
- A conflict occurs if the file names are the same during the merge process.
- If the files are different, they are always merged automatically.
- Even if the files are the same, they are merged automatically if the modified parts are different. (One of the really important reasons to use version control)
[Solution](https://goddaehee.tistory.com/275)


#### 1. Edit manually
#### 2. Cancel the merge operation


---------------------------------------
## Tip)
-> After merging, the changes are reflected only locally, so you need to push the contents of the main branch separately for them to be reflected on GitHub.


-> Whenever possible, merge on GitHub!


----------------------------------------------------
## How to test
[Try testing it using the method in this link](https://velog.io/@katej927/Git-test-%EA%B3%BC%EC%A0%95-%EC%A0%95%EB%A6%AC )




![](/images/velog/1993a8597647e022.png)
>
Image URL: http://luckcrow.egloos.com/2631202
