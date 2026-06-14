import type { UIStrings } from "../types";

export default {
  nav: {
    home: "홈",
    posts: "글",
    categories: "카테고리",
    tags: "태그",
    about: "소개",
    archives: "아카이브",
    search: "검색",
    contact: "연락",
  },
  post: {
    publishedAt: "발행",
    updatedAt: "수정",
    sharePostIntro: "이 글 공유하기:",
    sharePostOn: "{{platform}}에 공유하기",
    sharePostViaEmail: "이메일로 공유하기",
    tagLabel: "태그",
    backToTop: "위로 가기",
    goBack: "뒤로 가기",
    editPage: "글 수정",
    previousPost: "이전 글",
    nextPost: "다음 글",
  },
  pagination: {
    prev: "이전",
    next: "다음",
    page: "페이지",
  },
  home: {
    socialLinks: "소셜 링크",
    featured: "먼저 읽을 글",
    recentPosts: "최근 글",
    allPosts: "전체 글",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "All rights reserved.",
  },
  pages: {
    tagTitle: "태그",
    tagDesc: '"{{tag}}" 태그가 달린 모든 글',

    tagsTitle: "태그",
    tagsDesc: "글에 사용된 모든 태그",

    categoryTitle: "카테고리",
    categoryDesc: '"{{category}}" 카테고리의 모든 글',
    categoriesTitle: "카테고리",
    categoriesDesc: "브랜드 관점에서 묶은 공개 글 클러스터",
    categoryEmpty: "아직 이 카테고리에 공개된 글이 없습니다.",

    postsTitle: "글",
    postsDesc: "발행한 모든 글",

    archivesTitle: "아카이브",
    archivesDesc: "날짜별 글 모음",

    searchTitle: "검색",
    searchDesc: "글 검색",
  },
  a11y: {
    skipToContent: "본문으로 건너뛰기",
    openMenu: "메뉴 열기",
    closeMenu: "메뉴 닫기",
    toggleTheme: "테마 전환",
    searchPlaceholder: "글 검색...",
    noResults: "검색 결과가 없습니다",
    goToPreviousPage: "이전 페이지로 이동",
    goToNextPage: "다음 페이지로 이동",
  },
  notFound: {
    title: "404 Not Found",
    message: "페이지를 찾을 수 없습니다",
    hint: "주소가 바뀌었거나 아직 만들지 않은 페이지일 수 있어요.",
    goHome: "홈으로 돌아가기",
    viewPosts: "전체 글 보기",
  },
} satisfies UIStrings;
