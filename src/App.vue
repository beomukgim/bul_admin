<template>
  <div
    id="app"
    class="app"
    :class="{'is-folded': isFolded, 'is-expand': isExpanded}"
  >
    <div class="layout">
      <HeaderArea />
      <NavArea />
      <div class="page-container">
        <router-view
          :class="`${$route.name} content`"
          class="main-content"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import "@/assets/css/common.css"
// import "@/assets/css/layout.css"
// import "@/assets/css/color.css"
// import "@/assets/css/button.css"
// import "@/assets/css/text.css"
// import "@/assets/css/card.css"
// import "@/assets/css/utilities.css"
// import "@/assets/css/element-ui.css"
// import "@/assets/css/sweet-alert.css"

import HeaderArea from "@/components/common/HeaderArea"
import NavArea from "@/components/common/NavArea"
// import "@/assets/js/app.min.js"
import "@/assets/js/vendors.min.js"

import { mapGetters } from "vuex"

export default {
  components: {
    HeaderArea,
    NavArea,
  },
  data(){
    return {}
  },
  computed: {
    ...mapGetters("user", ["user", ["user"]]),
    ...mapGetters('header', ['isFolded']),
    ...mapGetters('header',['isExpanded']),
  },
  created(){},
  beforeCreate(){},
  mounted(){},
  methods: {},
}
</script>

<style>
.badge-grey {
  color: grey !important;
  background: #f1f2f3;
  border-color: transparent;
  font-weight: 500;
}
.font-grey {
  color: grey !important;
}
</style>
