import Vue from "vue"
import VueRouter from "vue-router"


Vue.use(VueRouter)

const blank = {}

const routes = [
  // 대시보드
  {
    path: "/",
    name: "main",
    meta: {

    },
    component: () => import('@/views/pages-pc/main'),
  },
  // 대시보드
  {
    path: "/main",
    name: "main",
    meta: {

    },
    component: () => import('@/views/pages-pc/main'),
  },
  // 승인 대기 (클럽딜)
  {
    path: "/wait-approve-club-deal",
    name: "wait-approve-club-deal",
    meta: {

    },
    component: () => import('@/views/pages-pc/clubdeal/wait-approve'),
  },
  // 모집 중 (클럽딜)
  {
    path: "/progressing-club-deal",
    name: "progressing-club-deal",
    meta: {

    },
    component: () => import('@/views/pages-pc/main'),
  },
  // 모집완료 (클럽딜)
  {
    path: "/finish-club-deal",
    name: "finish-club-deal",
    meta: {

    },
    component: () => import('@/views/pages-pc/main'),
  },
  // 종료/중단 (클럽딜)
  {
    path: "/end-club-deal",
    name: "end-club-deal",
    meta: {

    },
    component: () => import('@/views/pages-pc/main'),
  },
  // 제안받은 클럽딜 (클럽딜)
  {
    path: "/club-deal-offer-club-deal",
    name: "club-deal-offer-club-deal",
    meta: {

    },
    component: () => import('@/views/pages-pc/main'),
  },
  // 승인 대기 (조각딜)
  {
    path: "/wait-approve-piece-deal",
    name: "wait-approve-piece-deal",
    meta: {

    },
    component: () => import('@/views/pages-pc/main'),
  },
  // 모집 중 (조각딜)
  {
    path: "/progressing-piece-deal",
    name: "progressing-piece-deal",
    meta: {

    },
    component: () => import('@/views/pages-pc/main'),
  },
  // 모집 완료 (조각딜)
  {
    path: "/finish-piece-deal",
    name: "finish-piece-deal",
    meta: {

    },
    component: () => import('@/views/pages-pc/main'),
  },
  // 종료/중단 (조각딜)
  {
    path: "/end-piece-deal",
    name: "end-piece-deal",
    meta: {

    },
    component: () => import('@/views/pages-pc/main'),
  },
  // 제안받은 조각딜 (조각딜)
  {
    path: "/club-deal-offer-piece-deal",
    name: "club-deal-offer-piece-deal",
    meta: {

    },
    component: () => import('@/views/pages-pc/main'),
  },
  // 승인대기 (파트너)
  {
    path: "/wait-approve-partner",
    name: "wait-approve-partner",
    meta: {

    },
    component: () => import('@/views/pages-pc/main'),
  },
  // 가입완료 (파트너)
  {
    path: "/finish-approve-partner",
    name: "finish-approve-partner",
    meta: {

    },
    component: () => import('@/views/pages-pc/main'),
  },
  // 차단목록 (파트너)
  {
    path: "/block-list-partner",
    name: "block-list-partner",
    meta: {

    },
    component: () => import('@/views/pages-pc/main'),
  },
  // 승인대기 (사용자)
  {
    path: "/wait-approve-user",
    name: "wait-approve-user",
    meta: {

    },
    component: () => import('@/views/pages-pc/main'),
  },
  // 가입완료 (사용자)
  {
    path: "/finish-approve-user",
    name: "finish-approve-user",
    meta: {

    },
    component: () => import('@/views/pages-pc/main'),
  },
  // 차단목록 (사용자)
  {
    path: "/block-list-partner",
    name: "block-list-partner",
    meta: {

    },
    component: () => import('@/views/pages-pc/main'),
  },
  // 모든 게시글
  {
    path: "/all-table",
    name: "all-table",
    meta: {

    },
    component: () => import('@/views/pages-pc/main'),
  },
  // 신고 내역
  {
    path: "/report-table",
    name: "report-table",
    meta: {

    },
    component: () => import('@/views/pages-pc/main'),
  },
  // 파트너 공지
  {
    path: "/partner-notice",
    name: "partner-notice",
    meta: {

    },
    component: () => import('@/views/pages-pc/main'),
  },
  // 사용자 공지
  {
    path: "/user-notice",
    name: "user-notice",
    meta: {

    },
    component: () => import('@/views/pages-pc/main'),
  },
  // 내 프로필
  {
    path: "/my-profile",
    name: "my-profile",
    meta: {

    },
    component: () => import('@/views/pages-pc/main'),
  },

]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
