<template>
  <div
    id="nav-area"
    class="side-nav"
  >
    <!-- li class="open active"  -->
    <div class="side-nav-inner">
      <ul class="side-nav-menu scrollable">
        <li
          v-for="(item, idx) in menu"
          :key="idx"
          class="nav-item"
          :class="{ 
            'dropdown': item.contents.length > 0, 
            'open' : item.toggle 
          }"
        >
          <a
            href="javascript:void(0);"
            class="dropdown-toggle"
            @click="item.toggle = !item.toggle"
          >
            <span class="icon-holder">
              <i :class="`anticon anticon-${item.icon}`" />
            </span>
            
            <span>
              <span class="title">{{ item.name }}</span>
              <span class="arrow">
                <i class="arrow-icon" />
              </span>
            </span>
          </a>
          <ul
            class="dropdown-menu"
          >
            <li
              v-for="(item_mini, idx_mini) in item.contents"
              :key="idx_mini"
              :class="{ 'active' : item_mini.route === $route.name }"
            >
              <!-- <router-link :to="{ name: item_mini.route }"> -->
              <a
                href="javascript:void(0);"
                @click="redirect(item_mini.route)"
              >
                <span>{{ item_mini.name }}</span>
              </a>
              <!-- </router-link> -->
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      menu: [
        {
          icon: "dashboard",
          name: "대시보드",
          toggle: false,
          contents: [
            {
              route: "main",
              icon: "none",
              name: "대시보드",
            },
          ],
        },
        {
          icon: "appstore",
          name: "클럽딜",
          toggle: false,
          contents: [
              {
                route: "waitapprove/clubdeals",
                icon: "none",
                name: "승인 대기",
              },
              {
                route: "progressing-club-deal",
                icon: "none",
                name: "모집 중",
              },
              {
                route: "finish-club-deal",
                icon: "none",
                name: "모집 완료",
              },
              {
                route: "end-club-deal",
                icon: "none",
                name: "종료/중단",
              },
              {
                route: "club-deal-offer-club-deal",
                icon: "none",
                name: "제안받은 클럽딜",
              },
          ],
        },
        {
          icon: "build",
          name: "조각딜",
          toggle: false,
          contents: [
              {
                route: "wait-approve-piece-deal",
                icon: "none",
                name: "승인 대기",
              },
              {
                route: "progressing-piece-deal",
                icon: "none",
                name: "모집 중",
              },
              {
                route: "finish-piece-deal",
                icon: "none",
                name: "모집 완료",
              },
              {
                route: "end-piece-deal",
                icon: "none",
                name: "종료/중단",
              },
              {
                route: "piece-deal-offer-piece-deal",
                icon: "none",
                name: "제안받은 조각딜",
              },
          ],
        },
        {
          icon: "hdd",
          name: "파트너",
          toggle: false,
          contents: [
              {
                route: "wait-approve-partner",
                icon: "none",
                name: "승인 대기",
              },
              {
                route: "finish-approve-partner",
                icon: "none",
                name: "가입 완료",
              },
              {
                route: "block-list-partner",
                icon: "none",
                name: "차단 목록",
              },
          ],
        },
        {
          icon: "form",
          name: "사용자",
          toggle: false,
          contents: [
              {
                route: "wait-approve-user",
                icon: "none",
                name: "승인 대기",
              },
              {
                route: "finish-approve-user",
                icon: "none",
                name: "가입 완료",
              },
              {
                route: "block-list-partner",
                icon: "none",
                name: "차단 목록",
              },
          ],
        },
        {
          icon: "table",
          name: "커뮤니티 관리",
          toggle: false,
          contents: [
              {
                route: "all-table",
                icon: "none",
                name: "모든 게시글",
              },
              {
                route: "report-table",
                icon: "none",
                name: "신고 내역",
              },
          ],
        },
        {
          icon: "pie-chart",
          name: "공지사항",
          toggle: false,
          contents: [
              {
                route: "partner-notice",
                icon: "none",
                name: "파트너 공지",
              },
              {
                route: "user-notice",
                icon: "none",
                name: "사용자 공지",
              },
          ],
        },
        {
          icon: "file",
          name: "마이페이지",
          toggle: false,
          contents: [
            {
              route: "my-profile",
              icon: "none",
              name: "내 프로필",
            },
          ],
        },
      ],
    }
  },
  methods: {
    redirect(route){
      this.$router.push({name: route})
    },
  },
}
</script>

<style scoped src="./common.css"></style>
