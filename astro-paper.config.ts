import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://jinminseong.com/",
    title: "Minsing Log",
    description:
      "개발, 창업, 배움의 여정을 공개적으로 기록하는 진민성의 블로그.",
    author: "진민성",
    profile: "https://jinminseong.com/about/",
    lang: "ko",
    timezone: "Asia/Seoul",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/minsing-jin" },
    { name: "mail", url: "mailto:developerminsing@gmail.com" },
  ],
  shareLinks: [
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    {
      name: "mail",
      // subject: "이 글 공유합니다"
      url: "mailto:?subject=%EC%9D%B4%20%EA%B8%80%20%EA%B3%B5%EC%9C%A0%ED%95%A9%EB%8B%88%EB%8B%A4&body=",
    },
  ],
});
