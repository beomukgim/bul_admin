<template>
  <div
    id="header-area"
    class="header"
  >
    <div class="logo">
      <a href="index.html">
        <img
          :src="require('@/assets/imgs/logo.png')"
          alt="Logo"
        >
        <span class="badge badge-pill badge-blue font-size-12">
          <span class="font-weight-semibold m-l-5">Admin</span>
        </span>
        <img
          class="logo-fold"
          :src="require('@/assets/imgs/logo-fold.png')"
          alt="Logo"
        >
      </a>
    </div>
    <div class="nav-wrap">
      <ul class="nav-left">
        <li class="desktop-toggle">
          <a
            href="javascript:void(0);"
            @click="setFolded()"
          >
            <i class="anticon" />
          </a>
        </li>
        <li class="mobile-toggle">
          <a
            href="javascript:void(0);"
            @click="setExpanded()"
          >
            <i class="anticon" />
          </a>
        </li>
      </ul>
      <ul class="nav-right">
        <!-- alarm -->
        <li class="dropdown dropdown-animated scale-left">
          <a
            href="javascript:void(0);"
            @click="setAlarmDropDown()"
          >
            <i class="anticon anticon-bell notification-badge" />
          </a>
          <!-- dropdown -->
          <div
            class="dropdown-menu pop-notification"
            :class="{'show':alarmDropDown}"
          >
            <div class="p-v-15 p-h-25 border-bottom d-flex justify-content-between align-items-center">
              <p class="text-dark font-weight-semibold m-b-0">
                <i class="anticon anticon-bell" />
                <span class="m-l-10">Notification</span>
              </p>
              <a
                class="btn-sm btn-default btn"
                href="javascript:void(0);"
              >
                <small>View All</small>
              </a>
            </div>
            <div class="relative">
              <div
                class="overflow-y-auto relative scrollable"
                style="max-height: 300px"
              >
                <a
                  href="javascript:void(0);"
                  class="dropdown-item d-block p-15 border-bottom"
                >
                  <div class="d-flex">
                    <div class="avatar avatar-blue avatar-icon">
                      <i class="anticon anticon-mail" />
                    </div>
                    <div class="m-l-15">
                      <p class="m-b-0 text-dark">You received a new message</p>
                      <p class="m-b-0"><small>8 min ago</small></p>
                    </div>
                  </div>
                </a>
                <a
                  href="javascript:void(0);"
                  class="dropdown-item d-block p-15 border-bottom"
                >
                  <div class="d-flex">
                    <div class="avatar avatar-cyan avatar-icon">
                      <i class="anticon anticon-user-add" />
                    </div>
                    <div class="m-l-15">
                      <p class="m-b-0 text-dark">New user registered</p>
                      <p class="m-b-0"><small>7 hours ago</small></p>
                    </div>
                  </div>
                </a>
                <a
                  href="javascript:void(0);"
                  class="dropdown-item d-block p-15 border-bottom"
                >
                  <div class="d-flex">
                    <div class="avatar avatar-red avatar-icon">
                      <i class="anticon anticon-user-add" />
                    </div>
                    <div class="m-l-15">
                      <p class="m-b-0 text-dark">System Alert</p>
                      <p class="m-b-0"><small>8 hours ago</small></p>
                    </div>
                  </div>
                </a>
                <a
                  href="javascript:void(0);"
                  class="dropdown-item d-block p-15 "
                >
                  <div class="d-flex">
                    <div class="avatar avatar-gold avatar-icon">
                      <i class="anticon anticon-user-add" />
                    </div>
                    <div class="m-l-15">
                      <p class="m-b-0 text-dark">You have a new update</p>
                      <p class="m-b-0"><small>2 days ago</small></p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </li>
        <!-- profile -->
        <li class="dropdown dropdown-animated scale-left">
          <div
            class="pointer"
            @click="setProfileDropDown()"
          >
            <div class="avatar avatar-image  m-h-10 m-r-15">
              <img
                src="assets/images/avatars/thumb-3.jpg"
                alt=""
              >
            </div>
          </div>
          <!-- dropdown -->
          <div
            class="p-b-15 p-t-20 dropdown-menu pop-profile"
            :class="{'show':profileDropDown}"
          >
            <div class="p-h-20 p-b-15 m-b-10 border-bottom">
              <div class="d-flex m-r-50">
                <div class="avatar avatar-lg avatar-image">
                  <img
                    src="assets/images/avatars/thumb-3.jpg"
                    alt=""
                  >
                </div>
                <div class="m-l-10">
                  <p class="m-b-0 text-dark font-weight-semibold">
                    Marshall Nichols
                  </p>
                  <p class="m-b-0 opacity-07">
                    UI/UX Desinger
                  </p>
                </div>
              </div>
            </div>
            <a
              href="javascript:void(0);"
              class="dropdown-item d-block p-h-15 p-v-10"
            >
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <i class="anticon opacity-04 font-size-16 anticon-user" />
                  <span class="m-l-10">Edit Profile</span>
                </div>
                <i class="anticon font-size-10 anticon-right" />
              </div>
            </a>
            <a
              href="javascript:void(0);"
              class="dropdown-item d-block p-h-15 p-v-10"
            >
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <i class="anticon opacity-04 font-size-16 anticon-lock" />
                  <span class="m-l-10">Account Setting</span>
                </div>
                <i class="anticon font-size-10 anticon-right" />
              </div>
            </a>
            <a
              href="javascript:void(0);"
              class="dropdown-item d-block p-h-15 p-v-10"
            >
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <i class="anticon opacity-04 font-size-16 anticon-project" />
                  <span class="m-l-10">Projects</span>
                </div>
                <i class="anticon font-size-10 anticon-right" />
              </div>
            </a>
            <a
              href="javascript:void(0);"
              class="dropdown-item d-block p-h-15 p-v-10"
            >
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <i class="anticon opacity-04 font-size-16 anticon-logout" />
                  <span class="m-l-10">Logout</span>
                </div>
                <i class="anticon font-size-10 anticon-right" />
              </div>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data(){
    return {
      alarmDropDown: false,
      profileDropDown: false,
    }
  },
  computed: {
    ...mapGetters('header', ['isFolded']),
    ...mapGetters('header',['isExpand']),
  },
  methods: {
    ...mapActions('header', ['setFolded']),
    ...mapActions('header', ['setExpanded']),
    setAlarmDropDown(){
      this.alarmDropDown = !this.alarmDropDown
      this.profileDropDown = false
    },
    setProfileDropDown(){
      this.alarmDropDown = false
      this.profileDropDown = !this.profileDropDown
    },
  },
}
</script>

<style scoped src="./common.css"></style>
